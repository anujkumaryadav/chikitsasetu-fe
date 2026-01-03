export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful AI Features for Your{' '}
            <span className="gradient-text">Health</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the future of healthcare with our advanced AI-powered features 
            designed to provide accurate, personalized health guidance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="glass p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-[#7F75FF] to-[#9B59B6] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Symptom Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Describe your symptoms and get instant AI-powered analysis with possible causes 
              and recommended next steps for your health concerns.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Advice</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive tailored health recommendations based on your age, medical history, 
              lifestyle, and current health status.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
            <p className="text-gray-600 leading-relaxed">
              Get instant health guidance anytime, anywhere. Our AI never sleeps, 
              ensuring you have support whenever you need it most.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glass p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy & Security</h3>
            <p className="text-gray-600 leading-relaxed">
              Your health data is completely secure with end-to-end encryption and 
              HIPAA compliance. We never store or share your personal information.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="glass p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Health Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor your health trends over time with intelligent tracking and 
              get insights into your wellness journey and progress.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="glass p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Evidence-Based</h3>
            <p className="text-gray-600 leading-relaxed">
              All recommendations are backed by the latest medical research and 
              clinical guidelines from trusted healthcare institutions worldwide.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7F75FF] to-[#9B59B6] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Ask Your Question</h4>
              <p className="text-gray-600 text-center">
                Simply type your health question or describe your symptoms in natural language.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7F75FF] to-[#9B59B6] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis</h4>
              <p className="text-gray-600 text-center">
                Our advanced AI processes your query using medical knowledge and evidence-based data.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7F75FF] to-[#9B59B6] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Get Personalized Advice</h4>
              <p className="text-gray-600 text-center">
                Receive instant, personalized health guidance and recommendations tailored to you.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-[#7F75FF] to-[#9B59B6] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[#7F75FF]/25 transition-all duration-300">
            Start Your Health Journey
          </button>
        </div>
      </div>
    </section>
  );
}