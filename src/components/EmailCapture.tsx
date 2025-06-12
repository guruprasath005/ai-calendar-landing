'use client'

import { useState, useEffect } from 'react'

interface EmailCaptureProps {
  variant?: 'hero' | 'footer'
  onUpdate?: () => void
}

export default function EmailCapture({ variant = 'hero', onUpdate }: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [waitlistCount, setWaitlistCount] = useState(127)

  // Load waitlist count from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem('ai-calendar-waitlist')
    if (stored) {
      try {
        const data = JSON.parse(stored)
        setWaitlistCount(data.count || 127)
      } catch (e) {
        console.error('Error loading waitlist data:', e)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1200))
      
      // Get existing waitlist data
      const stored = localStorage.getItem('ai-calendar-waitlist')
      let waitlistData: { emails: Array<{ email: string; timestamp: number; id: string }>; count: number } = { emails: [], count: 127 }
      
      if (stored) {
        try {
          waitlistData = JSON.parse(stored)
        } catch (e) {
          console.error('Error parsing stored data:', e)
        }
      }

      // Check if email already exists
      if (waitlistData.emails.some((entry) => entry.email === email)) {
        setError('You\'re already on our waitlist!')
        return
      }

      // Add new email
      waitlistData.emails.push({
        email,
        timestamp: Date.now(),
        id: Math.random().toString(36).substr(2, 9)
      })
      waitlistData.count = waitlistData.count + 1

      // Save to localStorage
      localStorage.setItem('ai-calendar-waitlist', JSON.stringify(waitlistData))
      
      setWaitlistCount(waitlistData.count)
      setIsSubmitted(true)
      setEmail('')
      
      // Notify parent component of update
      if (onUpdate) {
        onUpdate()
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`${variant === 'hero' ? 'max-w-md mx-auto' : 'w-full max-w-sm mx-auto'}`}>
        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100/50 shadow-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Welcome to the waitlist!
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            You'll be among the first to know when we launch. <br />
            Get ready to reclaim your time! ⏰
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={variant === 'hero' ? 'max-w-md mx-auto' : 'w-full max-w-sm mx-auto'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 shadow-sm"
            disabled={isSubmitting}
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 shadow-sm ${
            variant === 'hero' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/25' 
              : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300'
          } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              <span>Joining waitlist...</span>
            </div>
          ) : (
            'Join Waitlist'
          )}
        </button>
        
        {error && (
          <div className="flex items-center space-x-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-sm text-gray-500 font-medium">
            Join {waitlistCount.toLocaleString()} professionals already waiting
          </p>
          <p className="text-xs text-gray-400 mt-1">
            No spam • Unsubscribe anytime • Launching Q1 2024
          </p>
        </div>
      </form>
    </div>
  )
} 