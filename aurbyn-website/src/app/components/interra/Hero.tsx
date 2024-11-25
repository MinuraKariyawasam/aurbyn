// components/interra/Hero.tsx
export default function Hero() {
    return (
      <section className="relative bg-[#2E294E] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#1B998B] bg-opacity-20 text-[#1B998B] mb-8">
                <span className="w-2 h-2 rounded-full bg-[#1B998B] mr-2"></span>
                An Aurbyn Venture
              </span>
              
              <h1 className="text-6xl font-bold text-white mb-4 leading-tight">
                Launch Your<br />
                <span className="text-[#1B998B]">Tech Career</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Expert mentorship, career coaching, and job preparation for 
                tech undergraduates.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://www.admeta.lk/careerboost" 
                  className="px-6 py-3 bg-[#1B998B] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
                >
                  Get Started
                </a>
                <a 
                  href="#featured" 
                  className="px-6 py-3 bg-white text-[#2E294E] rounded-lg font-medium hover:bg-gray-50 transition-all"
                >
                  Watch Video
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#1B998B] bg-opacity-10 rounded-lg">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Personalized Mentorship</h3>
                      <p className="text-gray-600">1-on-1 guidance from industry experts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#1B998B] bg-opacity-10 rounded-lg">
                      <span className="text-2xl">💼</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Interview Preparation</h3>
                      <p className="text-gray-600">Real-world mock interviews</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#1B998B] bg-opacity-10 rounded-lg">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Career Development</h3>
                      <p className="text-gray-600">Comprehensive skill-building</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }