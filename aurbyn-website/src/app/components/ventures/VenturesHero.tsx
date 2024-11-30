'use client'

import { useEffect, useState } from 'react'

export default function VenturesHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] pt-24 pb-24 overflow-hidden bg-[#2E294E]">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-[#1B998B]/5 via-transparent to-transparent" />
      </div>

      {/* Improved floating dots background */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && [...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-1.5 h-1.5 rounded-full
              ${i % 3 === 0 ? 'bg-[#1B998B]/30' : 'bg-white/20'}
              animate-float-slow transform
              ${i % 2 === 0 ? 'animate-float-x' : 'animate-float-y'}
            `}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`
            }}
          />
        ))}
      </div>

      {/* Main content with improved spacing */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left column - Refined text content */}
          <div className="lg:col-span-7 mb-16 lg:mb-0 animate-fade-in">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-none">
              <span className="text-white">Empowering </span>
              <span className="text-[#1B998B]">the</span>
              <br className="hidden sm:block" />
              <span className="text-white">Next Wave </span>
              <span className="text-[#1B998B]">of</span>
              <br className="hidden sm:block" />
              <span className="text-white">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300/90 mb-16 max-w-2xl font-light leading-relaxed">
              We partner with exceptional founders building breakthrough technologies 
              that define new categories and transform industries.
            </p>

            {/* Improved stats grid */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              <div className="group bg-white/[0.07] backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/10 hover:border-[#1B998B]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl lg:text-5xl font-bold text-[#1B998B] mb-2 group-hover:scale-105 transition-transform">$50M+</div>
                <p className="text-gray-300/80 text-sm lg:text-base font-light">Assets Under Management</p>
              </div>
              
              <div className="group bg-white/[0.07] backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/10 hover:border-[#1B998B]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl lg:text-5xl font-bold text-[#1B998B] mb-2 group-hover:scale-105 transition-transform">40+</div>
                <p className="text-gray-300/80 text-sm lg:text-base font-light">Portfolio Companies</p>
              </div>
              
              <div className="group bg-white/[0.07] backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/10 hover:border-[#1B998B]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl lg:text-5xl font-bold text-[#1B998B] mb-2 group-hover:scale-105 transition-transform">85%</div>
                <p className="text-gray-300/80 text-sm lg:text-base font-light">Follow-on Rate</p>
              </div>
            </div>
          </div>

          {/* Right column - Modern abstract visualization */}
          <div className="lg:col-span-5 lg:col-start-8 relative hidden lg:block animate-fade-in-slow">
            {/* Modern abstract shapes */}
            <div className="relative h-[600px] w-full">
              {/* Large gradient circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#1B998B]/30 to-transparent rounded-full blur-3xl animate-pulse-slow" />
              
              {/* Geometric shapes */}
              <div className="absolute inset-0">
                {/* Hexagonal grid pattern */}
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="absolute">
                    <div 
                      className="w-32 h-32 border border-[#1B998B]/20 rotate-45 transform hover:scale-110 transition-transform duration-500"
                      style={{
                        left: `${(i % 3) * 120}px`,
                        top: `${Math.floor(i / 3) * 120}px`,
                      }}
                    />
                  </div>
                ))}
                
                {/* Floating circles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`circle-${i}`}
                    className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#1B998B] to-[#2E294E] animate-float-slow"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${4 + Math.random() * 4}s`
                    }}
                  />
                ))}

                {/* Center piece */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1B998B]/40 to-transparent rounded-3xl rotate-45 transform hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-4 bg-[#2E294E] rounded-2xl rotate-45" />
                    <div className="absolute inset-8 border border-[#1B998B]/30 rounded-xl rotate-45 animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Refined bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#2E294E] to-transparent" />
    </section>
  )
}

// Add these enhanced animations to your global.css or tailwind.config.js
const styles = `
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(20px); }
}

@keyframes float-x {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(20px); }
}

@keyframes float-y {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(20px); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-slow {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

@keyframes spin-slow {
  from { transform: rotate(45deg); }
  to { transform: rotate(405deg); }
}

.animate-float-slow {
  animation: float-slow 3s ease-in-out infinite;
}

.animate-float-x {
  animation: float-x 3s ease-in-out infinite;
}

.animate-float-y {
  animation: float-y 3s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-fade-in-slow {
  animation: fade-in-slow 1s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
`