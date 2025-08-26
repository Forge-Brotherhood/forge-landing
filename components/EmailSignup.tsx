'use client'

// Email signup component with enhanced mobile styling
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface EmailSignupProps {
  placeholder?: string
  buttonText?: string
  className?: string
}

export const EmailSignup = ({ 
  placeholder = "Enter your email", 
  buttonText = "Sign Up",
  className = ""
}: EmailSignupProps) => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setEmail('')
      
      // Redirect to thank you page immediately
      router.push('/thank-you')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Failed to sign up')
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="flex-1 min-h-[4rem] h-16 sm:min-h-[3.5rem] sm:h-14 bg-zinc-900/60 border border-zinc-700/60 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition-all duration-300 text-base px-5 rounded-xl backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation [-webkit-tap-highlight-color:transparent]"
          aria-label="Email address"
          autoComplete="email"
          inputMode="email"
        />
        <Button 
          type="submit" 
          disabled={status === 'loading'}
          className="h-14 sm:h-14 px-6 sm:px-8 font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 active:from-amber-600 active:to-amber-500 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/40 transition-all duration-300 rounded-xl flex items-center justify-center gap-2 sm:gap-3 text-base whitespace-nowrap min-w-[140px] disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation [-webkit-tap-highlight-color:transparent]"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Signing up...</span>
            </>
          ) : (
            <>
              {buttonText}
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </Button>
      </form>
      
      {message && (
        <p 
          className={`mt-3 text-sm sm:text-sm px-2 py-1 rounded-lg ${
            status === 'success' 
              ? 'text-green-400 bg-green-400/10' 
              : 'text-red-400 bg-red-400/10'
          }`}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {message}
        </p>
      )}
    </div>
  )
}
