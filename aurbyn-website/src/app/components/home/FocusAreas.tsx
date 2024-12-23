"use client";
import { useEffect, useRef, RefCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Rocket, Database, Atom, ChevronRight, TrendingUp, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// interface AreaFeature {
//   title: string;
//   description: string;
//   icon: JSX.Element;
//   gradient: string;
//   stats: {
//     growth: string;
//     market: string;
//   };
//   features: string[];
// }



const areas = [
  {
    title: "AI & Machine Learning",
    description: "Supporting founders building practical AI applications that solve real business problems and create tangible value.",
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-primary via-secondary to-accent",
    stats: {
      growth: "43%",
      market: "$15B"
    },
    features: [
      "Enterprise AI Solutions",
      "AI Infrastructure",
      "Machine Learning Tools"
    ]
  },
  {
    title: "Web3 & Blockchain",
    description: "Investing in next-generation blockchain infrastructure and applications that prioritize real-world utility and adoption.",
    icon: <Database className="w-8 h-8" />,
    gradient: "from-secondary via-accent to-primary",
    stats: {
      growth: "38%",
      market: "$12B"
    },
    features: [
      "DeFi Infrastructure",
      "Enterprise Blockchain",
      "Web3 Tools"
    ]
  },
  {
    title: "Developer Tools",
    description: "Backing innovative tools and platforms that enhance developer productivity and enable better software creation.",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-accent via-primary to-secondary",
    stats: {
      growth: "35%",
      market: "$18B"
    },
    features: [
      "Development Platforms",
      "DevOps Solutions",
      "API Infrastructure"
    ]
  },
  {
    title: "Emerging Tech",
    description: "Exploring promising technologies in quantum computing, edge computing, and other frontier tech areas.",
    icon: <Atom className="w-8 h-8" />,
    gradient: "from-primary to-secondary",
    stats: {
      growth: "41%",
      market: "$9B"
    },
    features: [
      "Quantum Technologies",
      "Edge Computing",
      "Advanced Materials"
    ]
  }
];

export default function FocusAreas() {
  const containerRef = useRef<HTMLElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setTimelineRef: RefCallback<HTMLDivElement> = (element: HTMLDivElement | null) => {
    if (element) {
      const index = parseInt(element.getAttribute('data-index') || '0');
      timelineRefs.current[index] = element;
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the connecting line
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        },
        scaleY: 0,
        transformOrigin: "top center"
      });

      // Animate title and description
      gsap.from(".section-header", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center+=100",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Animate each timeline item
      timelineRefs.current.forEach((item, index) => {
        if (!item) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            toggleActions: "play none none reverse"
          }
        });

        const icon = item.querySelector(".timeline-icon");
        const content = item.querySelector(".timeline-content");
        const features = item.querySelectorAll(".feature-item");

        if (icon && content) {
          tl.from(icon, {
            scale: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
          })
          .from(content, {
            x: window.innerWidth >= 768 ? (index % 2 === 0 ? -50 : 50) : 0,
            y: window.innerWidth < 768 ? 30 : 0,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
          }, "-=0.3")
          .from(features, {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out"
          }, "-=0.4");
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-16 md:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(46, 41, 78, 0.03) 1px, transparent 1px),
                           radial-gradient(circle at 50% 50%, rgba(27, 153, 139, 0.03) 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-header text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Investment Focus Areas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Strategically positioned in high-growth sectors where technology meets transformative potential
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, shown on md and up */}
          <div className="timeline-line hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="relative">
            {areas.map((area, index) => (
              <div
              key={area.title}
              data-index={index}
              ref={setTimelineRef}
              className={`timeline-item mb-12 md:mb-24 ${
                index % 2 === 0 
                  ? "md:flex-row" 
                  : "md:flex-row-reverse"
              } flex flex-col md:flex items-center gap-4 md:gap-8`}
            >
                {/* Timeline Icon */}
                <div className="timeline-icon md:absolute relative md:left-1/2 transform md:-translate-x-1/2 z-20 mb-4 md:mb-0">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${area.gradient} shadow-lg mx-auto`}>
                    {area.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`timeline-content w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 md:mb-6 gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-primary">{area.title}</h3>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                        <span className="text-base md:text-lg font-semibold text-secondary">{area.stats.growth}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      {area.description}
                    </p>

                    <div className="space-y-2 md:space-y-3">
                      {area.features.map((feature, idx) => (
                        <div key={idx} className="feature-item flex items-center gap-2 text-gray-700 text-sm md:text-base">
                          <ChevronRight className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 md:mt-6 md:pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                          <span className="text-gray-500 text-sm md:text-base">Market Size</span>
                        </div>
                        <span className="text-lg md:text-xl font-bold text-primary">{area.stats.market}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
