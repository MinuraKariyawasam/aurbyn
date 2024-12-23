"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MentorNetwork = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [150, -50]);
  const footerY = useTransform(scrollYProgress, [0, 1], [200, -100]);

  const areas = [
    {
      title: "Technical Excellence",
      expertise: [
        "Cloud Architecture",
        "AI/ML Development",
        "Security & Compliance",
        "Scalable Infrastructure"
      ],
      gradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      title: "Business Strategy",
      expertise: [
        "Go-to-Market Strategy",
        "Business Model Innovation",
        "Financial Planning",
        "International Expansion"
      ],
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Growth & Operations",
      expertise: [
        "Growth Marketing",
        "Sales & BD",
        "Team Building",
        "Operational Efficiency"
      ],
      gradient: "from-emerald-500/10 to-teal-500/10"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-center" />
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
            Expert Mentor Network
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600/90 max-w-2xl mx-auto font-light"
          >
            Access industry leaders and domain experts who can guide you through specific challenges
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ y: cardsY }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {areas.map((area, index) => (
            <motion.div 
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Gradient background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`}
              />
              
              {/* Card content */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 h-full"
              >
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent">
                  {area.title}
                </h3>
                
                <ul className="space-y-4">
                  {area.expertise.map((item) => (
                    <motion.li 
                      key={item} 
                      whileHover={{ x: 10 }}
                      className="flex items-center group/item"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.5 }}
                        className="w-2 h-2 bg-[#1B998B] rounded-full mr-4 group-hover/item:scale-125 transition-transform" 
                      />
                      <span className="text-gray-600/90 group-hover/item:text-gray-900 transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          style={{ y: footerY }}
          className="mt-20 text-center"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Our mentors are successful founders, industry veterans, and domain experts 
            who are committed to helping the next generation of entrepreneurs succeed.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorNetwork;