// Local storage utilities for waitlist management
// In production, replace with your preferred backend service

export interface WaitlistEntry {
  id: string
  email: string
  timestamp: number
}

export interface WaitlistData {
  emails: WaitlistEntry[]
  count: number
}

const STORAGE_KEY = 'ai-calendar-waitlist'

export function getWaitlistData(): WaitlistData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('Error loading waitlist data:', error)
  }
  
  return { emails: [], count: 127 } // Starting count
}

export function addToWaitlist(email: string): WaitlistEntry | null {
  try {
    const data = getWaitlistData()
    
    // Check if email already exists
    if (data.emails.some(entry => entry.email === email)) {
      throw new Error('Email already exists')
    }

    const newEntry: WaitlistEntry = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      timestamp: Date.now()
    }

    data.emails.push(newEntry)
    data.count += 1

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return newEntry
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return null
  }
}

export function getWaitlistCount(): number {
  const data = getWaitlistData()
  return data.count
}

export function getAllEmails(): WaitlistEntry[] {
  const data = getWaitlistData()
  return data.emails
}

export function exportWaitlistData(): string {
  const data = getWaitlistData()
  return JSON.stringify(data, null, 2)
} 