'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="glass fixed w-full top-0 z-50 border-b border-gray-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-normal text-gray-900">ChikitsaSetu</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-[#7F75FF] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-[#7F75FF] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-[#7F75FF] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How it Works
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#7F75FF] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              <button className="bg-[#7F75FF] text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#7F75FF]/25 transition-all duration-300">
                Try Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#7F75FF] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#7F75FF]"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-dark">
            <a href="#home" className="text-gray-700 hover:text-[#7F75FF] block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#7F75FF] block px-3 py-2 rounded-md text-base font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#7F75FF] block px-3 py-2 rounded-md text-base font-medium">
              How it Works
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#7F75FF] block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <button className="w-full text-left bg-gradient-to-r from-[#7F75FF] to-[#9B59B6] text-white px-3 py-2 rounded-md text-base font-medium hover:shadow-lg transition-all">
              Try Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}