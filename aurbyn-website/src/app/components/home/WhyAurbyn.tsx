"use client"
import React, { useEffect, useRef } from 'react';
import { Shield, Users, Lightbulb, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Deep Technical Expertise",
    description: "Our team combines decades of experience in technology, venture capital, and company building",
    icon: <Shield className="w-6 h-6 text-primary" />,
    metric: "20+ Years",
    tags: ["Technology", "Venture Capital", "Company Building"]
  },
  {
    title: "Global Network",
    description: "Access to an extensive network of industry leaders, technical experts, and potential customers",
    icon: <Globe className="w-6 h-6 text-primary" />,
    metric: "50+ Countries",
    tags: ["Industry Leaders", "Technical Experts", "Global Reach"]
  },
  {
    title: "Founder-First Approach",
    description: "We believe in empowering founders with the resources and support they need to succeed",
    icon: <Users className="w-6 h-6 text-primary" />,
    metric: "100+ Founders",
    tags: ["Empowerment", "Resources", "Support"]
  },
  {
    title: "Innovation Framework",
    description: "Proven methodologies and frameworks for scaling technology companies effectively",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    metric: "85% Success",
    tags: ["Scaling", "Methodology", "Success Rate"]
  }
];

export default function WhyChooseAurbyn() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Cards animation
      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
          },
          y: 30,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out"
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Aurbyn
          </h2>
          <p className="text-lg text-gray-600">
            More than capital: A comprehensive partnership for transformative growth
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              ref={el => cardRefs.current[index] = el}
              className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Metric and Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-primary/5 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <span className="text-xl font-semibold text-primary">
                  {benefit.metric}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                {benefit.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {benefit.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded group-hover:bg-primary/5 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}