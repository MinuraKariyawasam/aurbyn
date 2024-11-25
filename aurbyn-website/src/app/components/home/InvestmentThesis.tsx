"use client";
import { useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, Globe, Target, Rocket, Orbit, Constellation, Gauge } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const orbitalStages = [
  {
    title: "Launch Pad Program",
    stage: "Pre-Seed",
    description: "Initial thrust for emerging ventures, providing foundational support and resources.",
    icon: <Rocket className="w-6 h-6 text-[#1B998B]" />,
    investment: "Up to $250K"
  },
  {
    title: "Trajectory Enhancement",
    stage: "Seed",
    description: "Accelerating growth with strategic capital and operational expertise.",
    icon: <Gauge className="w-6 h-6 text-[#1B998B]" />,
    investment: "$250K - $500K"
  },
  {
    title: "Orbital Stabilization",
    stage: "Series A",
    description: "Establishing market position and scaling operations systematically.",
    icon: <Orbit className="w-6 h-6 text-[#1B998B]" />,
    investment: "$500K - $2M"
  }
];

const thesisPoints = [
  {
    title: "Future-First Technologies",
    description: "Pioneering breakthrough solutions in AI, quantum computing, and emerging technologies that fundamentally reshape industries.",
    icon: <Sparkles className="w-6 h-6 text-[#1B998B]" />
  },
  {
    title: "Sustainable Innovation",
    description: "Backing ventures that combine technological advancement with positive global impact, ensuring long-term sustainability.",
    icon: <Globe className="w-6 h-6 text-[#1B998B]" />
  },
  {
    title: "Global Scale",
    description: "Supporting visionary founders building solutions with worldwide market potential and industry-transforming capabilities.",
    icon: <Target className="w-6 h-6 text-[#1B998B]" />
  }
];

export default function InvestmentThesis() {
  const containerRef = useRef(null);
  const orbitalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".thesis-card", {
        scrollTrigger: {
          trigger: ".thesis-container",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(".orbital-stage", {
        scrollTrigger: {
          trigger: ".orbital-container",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Constellation Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #2E294E 1px, transparent 1px), 
                           radial-gradient(circle at 75% 75%, #1B998B 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="thesis-container">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#2E294E] mb-4">Investment Thesis</h2>
              <p className="text-gray-600 text-lg">Pioneering the future through strategic investments in transformative technologies</p>
            </div>
            
            <div className="space-y-6">
              {thesisPoints.map((point, index) => (
                <div key={index} className="thesis-card group">
                  <div className="flex gap-6 p-8 rounded-xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="mt-1 p-3 bg-gray-50 rounded-lg group-hover:bg-[#2E294E]/5 transition-colors duration-300">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#2E294E] group-hover:text-[#1B998B] transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="orbital-container">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#2E294E] mb-4">The Orbital Approach</h2>
              <p className="text-gray-600 text-lg">Our systematic framework for nurturing startups from inception to market leadership</p>
            </div>

            <div className="space-y-6">
              {orbitalStages.map((stage, index) => (
                <div key={index} className="orbital-stage group">
                  <div className="p-8 rounded-xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#2E294E]/5 transition-colors duration-300">
                        {stage.icon}
                      </div>
                      <span className="text-sm font-medium px-4 py-1 rounded-full bg-[#2E294E]/5 text-[#2E294E]">
                        {stage.stage}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#2E294E] group-hover:text-[#1B998B] transition-colors duration-300">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{stage.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Investment Range</span>
                      <span className="font-semibold text-[#1B998B]">{stage.investment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}