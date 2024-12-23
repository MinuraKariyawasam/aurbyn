"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, FileText, Users, Brain, Target, Trophy, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    title: "Career Mentorship",
    description: "Get personalized guidance from industry experts who have walked the path you're on",
    icon: Users,
    stats: "500+ Mentored"
  },
  {
    title: "Technical Interview Prep",
    description: "Master coding challenges and system design through mock interviews",
    icon: Code,
    stats: "200+ Practice Sessions"
  },
  {
    title: "Resume Building",
    description: "Create an impressive CV that highlights your skills and experiences",
    icon: FileText,
    stats: "90% Success Rate"
  },
  {
    title: "Skill Development",
    description: "Access curated learning paths and resources to build in-demand skills",
    icon: Brain,
    stats: "20+ Learning Paths"
  },
  {
    title: "Goal Setting",
    description: "Define clear career objectives and create actionable plans to achieve them",
    icon: Target,
    stats: "150+ Success Stories"
  },
  {
    title: "Industry Projects",
    description: "Work on real-world projects to build a compelling portfolio",
    icon: Trophy,
    stats: "50+ Projects"
  }
];

export default function Services() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const cardsRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

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
                     rounded-full transform hover:scale-105 transition-transform duration-300"
          >
            <CheckCircle className="w-4 h-4 text-[#1B998B]" />
            <span className="ml-2 text-sm font-medium text-[#1B998B]">Our Services</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gray-900">What We </span>
            <motion.span 
              className="text-[#1B998B] inline-block"
              whileInView={{ 
                scale: [1, 1.1, 1],
                transition: { duration: 1.2, ease: 'easeOut', delay: 0.3 }
              }}
            >
              Deliver
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive support to help you break into tech and build a rewarding career
          </motion.p>
        </motion.div>
        
        <motion.div 
          style={{ 
            y: cardsY,
            rotateX: cardsRotate
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  <service.icon className="w-7 h-7 text-[#1B998B]" />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  className="mt-6 space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#1B998B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  className="mt-8 flex items-center justify-between pt-4 border-t border-gray-200"
                >
                  <span className="text-sm text-[#1B998B]">
                    {service.stats}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#1B998B] opacity-0 transform translate-x-[-10px]
                                     group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}