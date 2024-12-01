// components/labs/Hero.tsx
import { Search, Code, Database, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#1B998B] bg-opacity-20 text-[#1B998B] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#1B998B] mr-2"></span>
              Technical Excellence
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Deep Technical<br />
              <span className="text-[#1B998B]">Due Diligence</span><br />
              & Research
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Providing comprehensive technical validation and research insights to 
              inform investment decisions in transformative technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <Search className="w-6 h-6 text-[#1B998B] mb-2" />
                <h3 className="text-white font-medium mb-1">Deep Analysis</h3>
                <p className="text-sm text-gray-400">Thorough technical evaluation</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <Code className="w-6 h-6 text-[#1B998B] mb-2" />
                <h3 className="text-white font-medium mb-1">Code Review</h3>
                <p className="text-sm text-gray-400">Architecture validation</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <Database className="w-6 h-6 text-[#1B998B] mb-2" />
                <h3 className="text-white font-medium mb-1">Data Security</h3>
                <p className="text-sm text-gray-400">Privacy assessment</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <Shield className="w-6 h-6 text-[#1B998B] mb-2" />
                <h3 className="text-white font-medium mb-1">Risk Analysis</h3>
                <p className="text-sm text-gray-400">Threat mitigation</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-[#1B998B]"></div>
                    <span className="text-white">Technical Stack Analysis</span>
                  </div>
                  <span className="text-[#1B998B]">100%</span>
                </div>
                
                <div className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-[#1B998B]"></div>
                    <span className="text-white">Security Assessment</span>
                  </div>
                  <span className="text-[#1B998B]">92%</span>
                </div>
                
                <div className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-[#1B998B]"></div>
                    <span className="text-white">Scalability Testing</span>
                  </div>
                  <span className="text-[#1B998B]">95%</span>
                </div>
                
                <div className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-[#1B998B]"></div>
                    <span className="text-white">Code Quality Review</span>
                  </div>
                  <span className="text-[#1B998B]">98%</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-[#1B998B] text-white px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">Industry Leading Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}