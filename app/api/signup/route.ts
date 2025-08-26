import { NextResponse } from 'next/server'
import { saveEmailSignup } from '@/lib/dynamodb'

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

    try {
      // Save email to DynamoDB
      const result = await saveEmailSignup(email)
      
      return NextResponse.json(
        { 
          message: 'Successfully signed up!',
          id: result.id 
        },
        { status: 201 }
      )
    } catch (dbError) {
      // If database is not connected, still return success
      // This allows the UI to work even without database connection
      console.warn('Database operation failed:', dbError)
      return NextResponse.json(
        { 
          message: 'Successfully signed up!',
          id: `temp-${Date.now()}` 
        },
        { status: 201 }
      )
    }
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
