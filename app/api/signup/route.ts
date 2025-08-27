import { NextResponse } from 'next/server'
import { saveEmailSignup } from '@/lib/dynamodb'
import { sendBetaSignupEmail } from '@/lib/ses'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save email to DynamoDB - fail if this doesn't work
    const result = await saveEmailSignup(email)
    
    // Send welcome email only if this is a new signup
    // The saveEmailSignup function returns an id ending with '-existing' for duplicates
    const isNewSignup = !result.id.endsWith('-existing')
    
    if (isNewSignup) {
      // Send email asynchronously - don't wait for it to complete
      // This ensures fast response times and doesn't fail the signup if email fails
      sendBetaSignupEmail(email).catch(error => {
        console.error('Failed to send welcome email:', error)
        // You might want to add this to a retry queue or monitoring service
      })
    }
    
    return NextResponse.json(
      { 
        message: 'Successfully signed up!',
        id: result.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
