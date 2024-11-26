"use client";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const headerRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.from(headerRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .from(statsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")
  }, [])

  return (
    <section className="relative min-h-screen md:min-h-[105vh] w-full flex items-center justify-center">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E294E] via-[#1B998B] to-[#2E294E]">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute w-full h-full bg-repeat"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.15) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.15) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 2px, transparent 2px)
              `,
              backgroundSize: '30px 30px, 30px 30px, 60px 60px'
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 
        py-16 md:py-0 lg:-mt-16">
        {/* Fund Label */}
        <div className="mb-6 sm:mb-10 lg:mb-12">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm text-xs sm:text-sm font-medium">
            Launching Fund I - Focused on Early-Stage Innovation
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 ref={headerRef} className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight">
          Backing the Next Wave
          <span className="block mt-1 sm:mt-2 lg:mt-3 bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent">
            of Tech Pioneers
          </span>
        </h1>

        {/* Description */}
        <p ref={textRef} className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-20 leading-relaxed opacity-90 px-2">
          A new venture capital firm providing strategic capital and hands-on support 
          to early-stage founders building breakthrough technologies.
        </p>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-16 lg:gap-10 mb-8 sm:mb-12 lg:mb-20 max-w-5xl mx-auto">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg py-3 sm:py-0 sm:bg-transparent">
            <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#FFD700] mb-2">$100M</div>
            <div className="text-xs sm:text-sm lg:text-base opacity-80">Fund Size</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg py-3 sm:py-0 sm:bg-transparent">
            <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#FFD700] mb-2">Pre-Seed → A</div>
            <div className="text-xs sm:text-sm lg:text-base opacity-80">Investment Stage</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg py-3 sm:py-0 sm:bg-transparent">
            <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#FFD700] mb-2">$500K-2M</div>
            <div className="text-xs sm:text-sm lg:text-base opacity-80">Check Size</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center px-4 sm:px-0">
          <Link 
            href="/contact"
            className="group bg-[#FFD700] text-[#2E294E] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium 
              hover:bg-white transition-all duration-200 shadow-lg 
              active:shadow-md active:transform active:translate-y-0.5
              flex items-center justify-center text-sm sm:text-base"
          >
            Connect With Us
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link 
            href="/thesis"
            className="border-2 border-white/80 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium 
              backdrop-blur-sm hover:bg-white/10 transition-all duration-200
              active:transform active:translate-y-0.5 text-sm sm:text-base"
          >
            Our Thesis
          </Link>
        </div>
      </div>
    </section>
  )
}
