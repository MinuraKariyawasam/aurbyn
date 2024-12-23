"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Award, Youtube, TrendingUp, ChartBar, Rocket } from 'lucide-react';

const impactStats = [
  {
    number: "1000+",
    label: "Students Mentored",
    description: "Helping aspiring developers succeed",
    icon: Users,
    trend: "+25% this year"
  },
  {
    number: "95%",
    label: "Placement Rate",
    description: "Successful career transitions",
    icon: Award,
    trend: "Industry leading"
  },
  {
    number: "6K+",
    label: "YouTube Subscribers",
    description: "Growing community of learners",
    icon: Youtube,
    trend: "+48% growth"
  }
];

export default function Impact() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          style={{ y: headerY }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-2 mb-6
                     bg-[#1B998B]/10 border border-[#1B998B]/20 
                     rounded-full hover:scale-105 transition-transform duration-300"
          >
            <ChartBar className="w-4 h-4 text-[#1B998B]" />
            <span className="ml-2 text-sm font-medium text-[#1B998B]">Growth Metrics</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gray-900">Our </span>
            <motion.span 
              className="text-[#1B998B]"
              whileInView={{ 
                scale: [1, 1.1, 1],
                transition: { duration: 1.2, ease: 'easeOut', delay: 0.3 }
              }}
            >Impact</motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Measuring our success through the achievements of our community
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ y: cardsY }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {impactStats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl p-8
                       border border-gray-200 hover:border-[#1B998B]/30
                       shadow-sm hover:shadow-md
                       transform hover:translate-y-[-4px] hover:scale-[1.02] 
                       transition-all duration-500"
            >
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 flex items-center justify-center rounded-xl 
                             bg-[#1B998B]/10 group-hover:bg-[#1B998B]/20
                             transition-all duration-300"
                >
                  <stat.icon className="w-7 h-7 text-[#1B998B]" />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="mt-6"
                >
                  <motion.div 
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    className="text-5xl font-bold text-[#1B998B]"
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600">
                    {stat.description}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.25 }}
                  className="mt-6 pt-4 border-t border-gray-200 
                             flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1B998B]" />
                    <span className="text-sm text-[#1B998B]">{stat.trend}</span>
                  </div>
                  <Rocket className="w-4 h-4 text-[#1B998B] opacity-0 group-hover:opacity-100 
                                 transform group-hover:translate-y-[-4px] transition-all duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}