"use client";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const headerRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef(null)
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
    .from(statsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
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
        {/* Enhanced background pattern */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 100px 100px'
          }}/>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
            Launching Fund I - Focused on Early-Stage Innovation
          </span>
        </div>
        
        <h1 ref={headerRef} className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          Backing the Next Wave
          <span className="block mt-2 bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent">
            of Tech Pioneers
          </span>
        </h1>

        <p ref={textRef} className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          A new venture capital firm providing strategic capital and hands-on support 
          to early-stage founders building breakthrough technologies.
        </p>

        <div ref={statsRef} className="flex justify-center gap-12 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD700]">$100M</div>
            <div className="text-sm opacity-80">Fund Size</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD700]">Pre-Seed → A</div>
            <div className="text-sm opacity-80">Investment Stage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD700]">$500K-2M</div>
            <div className="text-sm opacity-80">Check Size</div>
          </div>
        </div>

        <div ref={buttonRef} className="flex gap-6 justify-center">
          <button className="group bg-[#FFD700] text-[#2E294E] px-8 py-4 rounded-lg font-medium hover:bg-white transition-colors duration-200 shadow-lg flex items-center">
            Connect With Us
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="border-2 border-white px-8 py-4 rounded-lg font-medium backdrop-blur-sm hover:bg-white/10 transition-colors duration-200">
            Our Thesis
          </button>
        </div>
      </div>
    </section>
  )
}