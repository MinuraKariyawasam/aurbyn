"use client"
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Sparkles, Rocket, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

// Pre-defined particle positions to avoid hydration mismatch
const particlePositions = [
  { left: '20%', top: '10%' },
  { left: '80%', top: '15%' },
  { left: '15%', top: '85%' },
  { left: '75%', top: '75%' },
  { left: '45%', top: '35%' },
  { left: '85%', top: '25%' },
  { left: '35%', top: '65%' },
  { left: '65%', top: '45%' },
  { left: '25%', top: '55%' },
  { left: '55%', top: '85%' },
  { left: '90%', top: '40%' },
  { left: '10%', top: '30%' },
  { left: '50%', top: '70%' },
  { left: '70%', top: '20%' },
  { left: '30%', top: '90%' },
];

export default function CTASection({ 
  title = "Ready to Build the Future Together?",
  description = "Join us in shaping the next generation of transformative technologies",
  buttonText = "Connect With Us",
  buttonLink = "/contact" 
}: CTASectionProps) {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const decorationRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const ctx = gsap.context(() => {
      // Floating animation for decoration elements
      gsap.to(".decoration-element", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(2, 4)",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 1.5,
          from: "random"
        }
      });

      // Glowing effect for particles
      gsap.to(".particle", {
        scale: "random(0.8, 1.2)",
        opacity: "random(0.4, 1)",
        duration: "random(1, 2)",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 1,
          from: "random"
        }
      });

      // Entrance animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
        }
      });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .from(".decoration-element", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.6");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E294E] via-[#1B998B] to-[#2E294E]">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 60px 60px, 40px 40px'
          }}/>
        </div>
      </div>

      {/* Floating decoration elements */}
      <div ref={decorationRef} className="absolute inset-0 overflow-hidden">
        <div className="decoration-element absolute top-1/4 left-1/4 text-white/20">
          <Globe className="w-16 h-16" />
        </div>
        <div className="decoration-element absolute top-1/3 right-1/4 text-white/20">
          <Rocket className="w-12 h-12" />
        </div>
        <div className="decoration-element absolute bottom-1/4 left-1/3 text-white/20">
          <Sparkles className="w-10 h-10" />
        </div>
      </div>

      {/* Glowing particles - Only rendered on client side */}
      {isClient && (
        <div className="absolute inset-0">
          {particlePositions.map((position, i) => (
            <div 
              key={i}
              className="particle absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={position}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-8">
            Fund I Now Open for Investment
          </div>
          
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {title}
          </h2>
          
          <p 
            ref={descRef}
            className="text-xl text-white/80 max-w-3xl mx-auto mb-12"
          >
            {description}
          </p>
          
          <div ref={buttonRef}>
            <Link 
              href={buttonLink}
              className="group inline-flex items-center gap-2 bg-[#FFD700] text-[#2E294E] px-8 py-4 rounded-lg font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="mt-12 flex justify-center gap-8 text-white/80">
            <div>
              <div className="text-3xl font-bold text-[#FFD700]">$100M</div>
              <div className="text-sm mt-1">Fund Size</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFD700]">15-20</div>
              <div className="text-sm mt-1">Target Investments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFD700]">$0.5-2M</div>
              <div className="text-sm mt-1">Investment Range</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}