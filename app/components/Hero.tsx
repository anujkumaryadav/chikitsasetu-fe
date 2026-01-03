export default function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-gray-100"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237F75FF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#7F75FF]/10 text-[#7F75FF] border border-[#7F75FF]/20">
               
                🚀 Revolutionary AI Healthcare is Here!
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Meet Your{' '}
              <span className="text-[#7F75FF] relative">
                AI Doctor
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#7F75FF] rounded-full"></div>
              </span>{' '}
              That Never Sleeps 🩺
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
               <strong>Skip the waiting room!</strong> Get instant, expert health advice from our AI that's trained on millions of medical cases. 
              From mysterious symptoms to wellness tips - we've got answers in seconds, not hours! ⚡
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-[#7F75FF] text-white px-5 py-2 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[#7F75FF]/25 transition-all duration-300 pulse-glow transform hover:scale-105">
                Start Chatting Now
              </button>
              <button className="glass text-gray-700 px-5 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 border border-gray-200 group">
                
                Watch 2-Min Demo
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Trust Indicators with more excitement */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
              
              <div className="flex items-center bg-blue-50 px-3 py-2 rounded-full">
                
                ⚡ Instant Answers
              </div>
              <div className="flex items-center bg-purple-50 px-3 py-2 rounded-full">
               
                🎯 99.9% Accurate
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced AI Chat Interface */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Chat Interface Mockup with typing animation */}
              <div className="glass p-6 rounded-2xl w-80 sm:w-96 float shadow-lg border border-gray-200/50">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-auto flex items-center text-gray-500 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    ChikitsaSetu AI • Online
                  </div>
                </div>
                
                <div className="space-y-4 mb-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#7F75FF] text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-md">
                      "I've been having headaches and feeling tired lately. Should I be worried? 😟"
                    </div>
                  </div>
                  
                  {/* AI Response with typing indicator */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-md">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 bg-from-[#7F75FF] rounded-full flex items-center justify-center mr-2">
                          <span className="text-white text-xs">🤖</span>
                        </div>
                        <span className="text-xs text-gray-500">AI Doctor</span>
                      </div>
                      "Based on your symptoms, this could be stress, dehydration, or sleep issues. Let me ask a few quick questions to help narrow it down! 💡"
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex justify-start">
                    <div className="bg-gray-50 px-4 py-2 rounded-2xl rounded-bl-md">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#7F75FF] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#7F75FF] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-[#7F75FF] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Input Field */}
                <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
                  <input 
                    type="text" 
                    placeholder="Ask me anything about your health..."
                    className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 outline-none"
                    disabled
                  />
                  <button className="bg-[#7F75FF] p-2 rounded-full ml-2 hover:bg-[#6B5FFF] transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="glass p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold gradient-text">50K+</div>
            <div className="text-gray-600 mt-2">🔥 Questions Solved</div>
          </div>
          <div className="glass p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold gradient-text">99.9%</div>
            <div className="text-gray-600 mt-2">🎯 Accuracy Rate</div>
          </div>
          <div className="glass p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold gradient-text">&lt;30s</div>
            <div className="text-gray-600 mt-2">⚡ Response Time</div>
          </div>
          <div className="glass p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold gradient-text">15K+</div>
            <div className="text-gray-600 mt-2">😊 Happy Users</div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">💬 What people are saying:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/80 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              "Saved me a trip to the doctor!" - Sarah M. ⭐⭐⭐⭐⭐
            </div>
            <div className="bg-white/80 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              "Better than WebMD!" - John D. ⭐⭐⭐⭐⭐
            </div>
            <div className="bg-white/80 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              "So fast and accurate!" - Maria L. ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}