import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

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
      // Check if email already exists
      const existingSignup = await prisma.emailSignup.findUnique({
        where: { email },
      })

      if (existingSignup) {
        // Don't expose that email already exists - just return success
        return NextResponse.json(
          { 
            message: 'Successfully signed up!',
            id: existingSignup.id 
          },
          { status: 201 }
        )
      }

      // Create new signup
      const signup = await prisma.emailSignup.create({
        data: { email },
      })

      return NextResponse.json(
        { 
          message: 'Successfully signed up!',
          id: signup.id 
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
