"use client"
import { useEffect, useRef } from 'react';
import { Building2, FlaskConical, GraduationCap, Rocket, ArrowRight, Plus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const subBrands = [
  {
    name: "Aurbyn Ventures",
    description: "Our flagship fund focused on early-stage investments in transformative technologies, with a focus on Pre-Seed to Series A rounds.",
    icon: <Building2 className="w-8 h-8" />,
    tagline: "Investment Arm",
    stats: {
      targetDeals: "15-20",
      checkSize: "$0.5-2M"
    },
    color: "primary"
  },
  {
    name: "Aurbyn Labs",
    description: "Our technical due diligence and research team, providing deep technical insights and validation for potential investments.",
    icon: <FlaskConical className="w-8 h-8" />,
    tagline: "Technical Hub",
    stats: {
      expertise: "5+",
      sectors: "4+"
    },
    color: "secondary"
  },
  {
    name: "Aurbyn Academy",
    description: "Educational platform empowering founders and teams with knowledge and resources for sustained success through our YouTube channel.",
    icon: <GraduationCap className="w-8 h-8" />,
    tagline: "Knowledge Platform",
    stats: {
      subscribers: "1000+",
      content: "30+"
    },
    color: "accent"
  },
  {
    name: "Aurbyn Networks",
    description: "Our growing network of industry experts, technical advisors, and strategic partners supporting portfolio success.",
    icon: <Rocket className="w-8 h-8" />,
    tagline: "Strategic Network",
    stats: {
      experts: "25+",
      partners: "10+"
    },
    color: "primary"
  }
];

export default function SubBrands() {
  const containerRef = useRef(null);
  const contentRefs = useRef([]);
  const lineRefs = useRef([]);
  const centralRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Modify animations for mobile
      const isMobile = window.innerWidth < 768;

      gsap.from(centralRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        },
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      if (!isMobile) {
        // Desktop animations remain the same
        lineRefs.current.forEach((line, index) => {
          gsap.from(line, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
            },
            scaleX: 0,
            duration: 1,
            delay: 0.5 + index * 0.2,
            ease: "power3.out"
          });
        });

        contentRefs.current.forEach((content, index) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
            },
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 1,
            delay: 0.8 + index * 0.2,
            ease: "power3.out"
          });

          gsap.to(content, {
            y: "10px",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.3
          });
        });
      } else {
        // Mobile-specific animations
        contentRefs.current.forEach((content, index) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger: content,
              start: "top center+=100",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.2
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-6">
            Our Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            A comprehensive support system for transformative startups
          </p>
        </div>

        {/* Central Icon - Hidden on mobile */}
        <div className="hidden md:block relative">
          <div 
            ref={centralRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-white shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <Plus className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-600">Aurbyn Capital</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 gap-x-32 gap-y-16">
            {subBrands.map((brand, index) => (
              <div
                key={brand.name}
                className={`relative ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              >
                <div
                  ref={el => lineRefs.current[index] = el}
                  className="absolute top-1/2 h-px bg-gradient-to-r from-primary/20 to-secondary/20"
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: '0',
                    width: '120px',
                    transformOrigin: index % 2 === 0 ? 'right' : 'left'
                  }}
                ></div>

                <div
                  ref={el => contentRefs.current[index] = el}
                  className={`inline-block max-w-sm ${index % 2 === 0 ? 'pr-32' : 'pl-32'}`}
                >
                  <div className="relative">
                    <div className={`p-3 inline-block bg-${brand.color}/5 rounded-lg mb-4`}>
                      {brand.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {brand.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {brand.description}
                    </p>
                    
                    <div className="flex gap-6 text-center">
                      {Object.entries(brand.stats).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xl font-bold text-secondary mb-1">{value}</p>
                          <p className="text-sm text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Central Icon for Mobile */}
          <div className="relative w-32 h-32 mx-auto mb-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-10 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-white shadow-lg flex items-center justify-center">
              <div className="text-center">
                <Plus className="w-6 h-6 text-primary mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-600">Aurbyn Capital</span>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          {subBrands.map((brand, index) => (
            <div
              key={brand.name}
              ref={el => contentRefs.current[index] = el}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className={`p-3 inline-block bg-${brand.color}/5 rounded-lg mb-3`}>
                {brand.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-2">
                {brand.name}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {brand.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                {Object.entries(brand.stats).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-3">
                    <p className="text-lg font-bold text-secondary mb-1">{value}</p>
                    <p className="text-xs text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}