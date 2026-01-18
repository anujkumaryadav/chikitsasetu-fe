'use client'

import Link from 'next/link';
import { useState } from 'react'
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";

export const LandingPage = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
             <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
            <span className="text-xl md:text-2xl font-semibold text-gray-900">ChikitsaSetu</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#integrations" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Integrations</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Services</a>
            <a href="#careers" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Careers</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <select className="text-gray-600 text-sm bg-transparent border-none outline-none cursor-pointer pr-6 appearance-none">
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
              </select>
              <svg className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium flex items-center space-x-2">
              <span>Try now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Trusted <br className='md:hidden'/>
            <span className="bg-green-600 bg-clip-text text-transparent">AI Healthcare</span>
            <br />Companion
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get instant medical guidance, book appointments with qualified doctors, and access personalized healthcare solutions powered by AI.
          </p>
          
          {/* Email Signup */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Join Waitlist
            </button>
          </form>
          
          <p className="text-sm text-gray-500">Join 10,000+ users already on our waitlist</p>
        </div>

        {/* Chat Demo Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-600">ChikitsaSetu AI Assistant</span>
              </div>
            </div>
            
            <div className="p-6 space-y-4 h-96 overflow-y-auto">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-gray-600 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                  I've been having persistent headaches for the past week. Should I be concerned?
                </div>
              </div>
              
              {/* AI Response */}
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md max-w-md">
                  <div className="mb-2">
                    <span className="text-blue-600 font-medium">🩺 Medical Assessment</span>
                  </div>
                  <p className="text-sm mb-2">
                    Persistent headaches lasting a week warrant attention. Here's what I recommend:
                  </p>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Monitor frequency and intensity</li>
                    <li>• Stay hydrated and maintain regular sleep</li>
                    <li>• Consider stress levels and screen time</li>
                  </ul>
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>Recommendation:</strong> Schedule a consultation with Dr. Sarah Johnson (Neurologist) - Available today at 3 PM
                    </p>
                  </div>
                </div>
              </div>
              
              {/* User Response */}
              <div className="flex justify-end">
                <div className="bg-gray-600 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                  That sounds good. Can you book the appointment?
                </div>
              </div>
              
              {/* AI Confirmation */}
              <div className="flex justify-start">
                <div className="bg-green-50 border border-green-200 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md max-w-md">
                  <div className="mb-2">
                    <span className="text-green-600 font-medium">✅ Appointment Confirmed</span>
                  </div>
                  <p className="text-sm">
                    <strong>Dr. Sarah Johnson</strong><br />
                    Today, 3:00 PM - 3:30 PM<br />
                    Video Consultation<br />
                    <span className="text-green-600">Confirmation sent to your email</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Ask about symptoms, book appointments, or get health advice..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <RiTelegram2Fill />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose ChikitsaSetu?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">Get instant medical guidance and symptom analysis powered by advanced AI technology.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Connect with qualified healthcare professionals and specialists for personalized care.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Access healthcare support anytime, anywhere with our round-the-clock service.</p>
            </div>
          </div>
        </section>

        <section className="text-center bg-gray-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Experience?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of users who trust ChikitsaSetu for their healthcare needs.</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Early Access
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-black pt-16 md:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 mb-20">
          <div className="flex justify-between gap-0 md:gap-8">
            {/* Brand Section - Left */}
            <div className="px-6 flex flex-col items-center w-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-xl md:text-2xl font-semibold">ChikitsaSetu</span>
              </div>
              <p className="text-gray-600 text-center text-sm leading-relaxed mb-8 max-w-xs">
                ChikitsaSetu is your AI-powered healthcare companion, connecting your health needs to expert medical guidance in a snap.
              </p>
              
              <div className="flex space-x-3 text-gray-400">
                <Link href="">
                    <FaXTwitter size={25} />
                </Link>
                <Link href="">
                    <FaLinkedinIn size={25} />
                </Link>
                <Link href="">
                    <FaWhatsapp size={25} />
                </Link>
                <Link href="">
                    <FaFacebook size={25}/>
                </Link>
              </div>
            </div>
            
        
           
          </div>
        </div>
        
        {/* Large Background Text */}
        <div className="text-center -mb-2 md:-mb-6 text-gray-900 font-bold text-5xl md:text-9xl opacity-20">
          ChikitsaSetu
        </div>
        
    
      </footer>
    </div>
  )
}
