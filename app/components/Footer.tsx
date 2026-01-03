export default function Footer() {
  return (
    <footer className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-2xl font-normal text-gray-900"><span className="font-bold">chikitsa</span>setu</h3>
              <span className="px-2 py-1 text-xs bg-[#7F75FF] text-white rounded-full">AI</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Your personal AI health companion providing instant, accurate health advice 
              powered by advanced artificial intelligence and evidence-based medical knowledge.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
             
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#7F75FF] transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#7F75FF] transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-[#7F75FF] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-[#7F75FF] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-[#7F75FF] transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-[#7F75FF] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#7F75FF] transition-colors">
                  Try AI Chat
                </a>
              </li>
            </ul>
          </div>

          {/* AI Features */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">AI Capabilities</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#7F75FF] transition-colors">
                  Symptom Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#7F75FF] transition-colors">
                  Health Recommendations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#7F75FF] transition-colors">
                  Wellness Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#7F75FF] transition-colors">
                  Emergency Guidance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#7F75FF] transition-colors">
                  Preventive Care
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2026 chikitsasetu AI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#7F75FF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#7F75FF] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-[#7F75FF] transition-colors">
                Medical Disclaimer
              </a>
              <a href="#" className="text-gray-500 hover:text-[#7F75FF] transition-colors">
                AI Ethics
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}