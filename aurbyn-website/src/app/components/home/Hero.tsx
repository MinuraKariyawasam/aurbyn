// components/home/Hero.tsx
"use client";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const headerRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.from(headerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .from(buttonRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E294E] via-[#1B998B] to-[#2E294E]">
        <div className="absolute inset-0 opacity-20">
          {/* Constellation Pattern */}
          <div className="absolute w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.1) 1px, transparent 1px), 
                             radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}/>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <h1 ref={headerRef} className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          Shaping the Future 
          <span className="block mt-2 bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent">
            of Innovation
          </span>
        </h1>
        <p ref={textRef} className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          Strategic capital and acceleration for visionary startups 
          transforming industries through groundbreaking technology.
        </p>
        <div ref={buttonRef} className="flex gap-6 justify-center">
          <button className="bg-[#FFD700] text-[#2E294E] px-8 py-4 rounded-lg font-medium transform hover:scale-105 transition-transform duration-200 shadow-lg">
            Our Approach
          </button>
          <button className="border-2 border-white px-8 py-4 rounded-lg font-medium backdrop-blur-sm hover:bg-white/10 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
