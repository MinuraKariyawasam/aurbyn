"use client"
import { useEffect, useRef } from 'react';
import { TrendingUp, Users, Lightbulb, Network } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const approachElements = [
  {
    title: "Founder-First Partnership",
    description: "We prioritize building strong, trust-based relationships with founders, offering support while respecting their autonomy.",
    icon: <Users className="w-6 h-6 text-primary" />,
    highlights: [
      "Deep technical support",
      "Regular engagement",
      "Flexible assistance"
    ]
  },
  {
    title: "Technical Expertise",
    description: "Our team brings hands-on experience in building and scaling technology companies, offering practical insights.",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    highlights: [
      "Technical validation",
      "Architecture review",
      "Scale planning"
    ]
  },
  {
    title: "Capital Strategy",
    description: "We provide right-sized capital with clear terms, ensuring founders maintain control while having resources to execute.",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    highlights: [
      "Flexible check sizes",
      "Follow-on support",
      "Co-investor network"
    ]
  },
  {
    title: "Growth Support",
    description: "Access our growing network of industry experts, technical advisors, and potential customers to accelerate growth.",
    icon: <Network className="w-6 h-6 text-primary" />,
    highlights: [
      "Customer introductions",
      "Talent acquisition",
      "Strategic partnerships"
    ]
  }
];

export default function InvestmentApproach() {
  const containerRef = useRef(null);
  const elementRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for elements
      elementRefs.current.forEach((element, index) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out"
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Investment Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building lasting partnerships with visionary founders to create category-defining companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {approachElements.map((element, index) => (
            <div
              key={element.title}
              ref={el => elementRefs.current[index] = el}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="p-3 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  {element.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {element.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {element.description}
                  </p>
                  <div className="space-y-2">
                    {element.highlights.map((highlight, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}