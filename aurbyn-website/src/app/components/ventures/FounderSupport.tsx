"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FounderSupport = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [150, -50]);

  const resources = [
    {
      title: "Startup Toolkit",
      description: "Access to essential tools, templates, and frameworks for building your startup",
      items: [
        "Financial modeling templates",
        "Legal document templates",
        "Product development frameworks",
        "Marketing playbooks"
      ],
      gradient: "from-teal-500/5 via-[#1B998B]/5 to-emerald-500/5",
      hoverGradient: "from-teal-500/10 via-[#1B998B]/10 to-emerald-500/10"
    },
    {
      title: "Expert Network",
      description: "Connect with industry experts and experienced founders",
      items: [
        "1-on-1 mentorship",
        "Industry introductions",
        "Technical advisors",
        "Domain experts"
      ],
      gradient: "from-[#2E294E]/5 via-purple-500/5 to-indigo-500/5",
      hoverGradient: "from-[#2E294E]/10 via-purple-500/10 to-indigo-500/10"
    },
    {
      title: "Growth Resources",
      description: "Resources and support for scaling your business",
      items: [
        "Growth marketing tools",
        "Talent acquisition support",
        "Sales frameworks",
        "Partnership opportunities"
      ],
      gradient: "from-blue-500/5 via-cyan-500/5 to-[#1B998B]/5",
      hoverGradient: "from-blue-500/10 via-cyan-500/10 to-[#1B998B]/10"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          style={{ y: headerY }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent"
          >
            Comprehensive Founder Support
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600/90 max-w-2xl mx-auto font-light"
          >
            Beyond capital, we provide founders with the tools, resources, and connections
            needed to build successful companies.
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ y: cardsY }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => (
            <motion.div 
              key={resource.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card background with gradient */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${resource.gradient} group-hover:${resource.hoverGradient} transition-all duration-500`}
              />
              
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-white/50 rounded-2xl backdrop-blur-sm" />
              
              {/* Content */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-full p-8 rounded-2xl border border-gray-100 shadow-lg"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600/90 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {resource.items.map((item) => (
                    <motion.div 
                      key={item}
                      whileHover={{ x: 10 }}
                      className="flex items-start group/item"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.5 }}
                        className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#1B998B] group-hover/item:scale-125 transition-transform"
                      />
                      <span className="text-gray-600/90 group-hover/item:text-gray-900 transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSupport;