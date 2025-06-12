'use client'

import { useState, useEffect } from 'react'
import EmailCapture from '@/components/EmailCapture'
import { getWaitlistCount } from '@/lib/supabase'

export default function Home() {
  const [waitlistCount, setWaitlistCount] = useState(127)

  // Load waitlist count on component mount
  useEffect(() => {
    const count = getWaitlistCount()
    setWaitlistCount(count)
  }, [])

  // Function to update count when someone joins
  const handleWaitlistUpdate = () => {
    const newCount = getWaitlistCount()
    setWaitlistCount(newCount)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-900">CalendarAI</span>
            </div>
            <div className="hidden sm:flex items-center space-x-6">
              <span className="text-sm text-gray-600">Launching Q1 2024</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">{waitlistCount} waiting</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI-Powered Calendar Assistant
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Reclaim <span className="text-blue-600">5+ Hours</span><br />
            Every Week
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop playing calendar Tetris. Our AI analyzes your schedule, suggests optimal times, 
            and automates everything through smart integrations.
          </p>
          
          <div className="mb-12">
            <EmailCapture variant="hero" onUpdate={handleWaitlistUpdate} />
          </div>
          
          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{waitlistCount}</div>
              <div className="text-sm text-gray-600">Professionals Waiting</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Q1</div>
              <div className="text-sm text-gray-600">2024 Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Hidden Cost of <span className="text-red-600">Calendar Chaos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Knowledge workers spend 23% of their day managing schedules. 
              That's <span className="font-semibold text-gray-900">9+ hours weekly</span> of pure overhead.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group hover:shadow-lg transition-all duration-300 p-8 bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl border border-red-100/50">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Meeting Overload</h3>
              <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                "I spend 2 hours daily just scheduling meetings and managing conflicts. It's exhausting."
              </blockquote>
              <cite className="text-sm text-gray-500 font-medium">— Sarah Chen, VP Marketing</cite>
            </div>
            
            <div className="group hover:shadow-lg transition-all duration-300 p-8 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-100/50">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zero Buffer Time</h3>
              <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                "Back-to-back meetings with no prep time. I'm always running behind and stressed."
              </blockquote>
              <cite className="text-sm text-gray-500 font-medium">— Marcus Rodriguez, Product Director</cite>
            </div>
            
            <div className="group hover:shadow-lg transition-all duration-300 p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100/50">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manual Workflows</h3>
              <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                "Every meeting needs follow-up: notes, tasks, reminders. The admin work never ends."
              </blockquote>
              <cite className="text-sm text-gray-500 font-medium">— Lisa Thompson, Operations Manager</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Your <span className="text-blue-600">AI Calendar Assistant</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A calendar that thinks ahead. Automatically optimizes your schedule, 
              blocks prep time, and handles the tedious work.
            </p>
          </div>
          
          {/* Mock Dashboard */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-20">
            {/* Browser Chrome */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">CalendarAI Dashboard</div>
                </div>
                <div className="text-xs text-gray-500">calendarai.com</div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Calendar Events */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="font-medium text-gray-900">Team Standup</div>
                        <div className="text-sm text-gray-600">9:00 AM - 9:30 AM</div>
                      </div>
                    </div>
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-lg font-medium">
                      +15min prep added
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-medium text-gray-900">Client Strategy Review</div>
                        <div className="text-sm text-gray-600">2:00 PM - 3:00 PM</div>
                      </div>
                    </div>
                    <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-lg font-medium">
                      Docs auto-shared
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div>
                        <div className="font-medium text-gray-900">Focus: Report Writing</div>
                        <div className="text-sm text-gray-600">4:00 PM - 5:30 PM</div>
                      </div>
                    </div>
                    <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-lg font-medium">
                      AI scheduled
                    </div>
                  </div>
                </div>

                {/* AI Insights Sidebar */}
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      AI Insights
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Move 3pm call to 11am for peak energy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Block 30min prep before client meeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Schedule team check-in Thursday</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Automations
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Meeting notes → Notion</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Follow-ups → Slack</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Tasks → Asana</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                AI analyzes your energy patterns and preferences to suggest optimal meeting times and automatically block preparation periods.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect to 5,000+ apps through Zapier. Auto-create documents, send follow-ups, and trigger workflows based on your calendar.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Understand your time patterns, identify bottlenecks, and receive personalized recommendations to optimize your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Less than your daily coffee budget, but saves hours of your life every week.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Competitor 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 relative">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Motion</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">$34<span className="text-lg text-gray-600 font-normal">/month</span></div>
                <p className="text-gray-600 text-sm mb-6">Task management focus</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center"><span className="text-gray-400 mr-2">•</span>Basic calendar AI</li>
                  <li className="flex items-center"><span className="text-gray-400 mr-2">•</span>Limited automation</li>
                  <li className="flex items-center"><span className="text-gray-400 mr-2">•</span>Task-heavy interface</li>
                </ul>
              </div>
            </div>

            {/* Our Product */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Best Value
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CalendarAI</h3>
                <div className="text-4xl font-bold text-blue-600 mb-1">$19<span className="text-lg text-gray-600 font-normal">/month</span></div>
                <p className="text-gray-700 text-sm font-medium mb-6">Full AI + automation</p>
                <ul className="text-sm text-gray-700 space-y-2 text-left">
                  <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span>Advanced scheduling AI</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span>5,000+ Zapier integrations</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span>Prep time automation</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span>Energy-based optimization</li>
                </ul>
              </div>
            </div>

            {/* Competitor 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 relative">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Calendly Pro</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">$10<span className="text-lg text-gray-600 font-normal">/month</span></div>
                <p className="text-gray-600 text-sm mb-6">Booking only</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center"><span className="text-gray-400 mr-2">•</span>Meeting scheduling</li>
                  <li className="flex items-center"><span className="text-gray-400 mr-2">•</span>No AI optimization</li>
                  <li className="flex items-center"><span className="text-gray-400 mr-2">•</span>Manual workflow</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-green-50 border border-green-200 rounded-xl">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span className="text-green-800 font-semibold">Save $180/year vs Motion • More features than both competitors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Join the waitlist and be among the first to experience calendar management that actually works with your brain, not against it.
          </p>
          
          <div className="mb-8">
            <EmailCapture variant="footer" onUpdate={handleWaitlistUpdate} />
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-blue-200">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Launching Q1 2024</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Your data stays private</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No spam, ever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">CalendarAI</span>
            </div>
            <div className="text-sm text-center">
              <p>© 2024 CalendarAI. Built for productivity enthusiasts who value their time.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
