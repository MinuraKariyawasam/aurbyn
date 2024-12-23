"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Award, Users, Youtube, TrendingUp, MessageCircle, PlayCircle } from 'lucide-react';

export default function YouTubeSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [150, -50]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          style={{ y: headerY }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-2 mb-6
                     bg-[#1B998B]/10 backdrop-blur-sm border border-[#1B998B]/20 
                     rounded-full transform hover:scale-105 transition-transform duration-300"
          >
            <Youtube className="w-4 h-4 text-[#1B998B]" />
            <span className="ml-2 text-sm font-medium text-[#1B998B]">Featured Channel</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Why Our Channel </span>
            <span className="text-[#1B998B]">Stands Out</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of tech professionals who trust our content for career guidance and industry insights
          </p>
        </motion.div>
        
        <motion.div 
          style={{ y: cardsY }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Star,
              title: "Expert-Led Content",
              description: "Industry veterans sharing real experiences and practical insights",
              stats: "50+ Expert Videos"
            },
            {
              icon: Award,
              title: "Proven Results",
              description: "Our community members consistently achieve remarkable career growth",
              stats: "85% Success Rate"
            },
            {
              icon: Users,
              title: "Active Community",
              description: "Connect with peers, mentors, and industry professionals",
              stats: "6K+ Members"
            }
          ].map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl p-8 
                       bg-white border border-gray-200 hover:border-[#1B998B]/30
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
                  <feature.icon className="w-7 h-7 text-[#1B998B]" />
                </motion.div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#1B998B] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 text-sm text-[#1B998B]">
                    <TrendingUp className="w-4 h-4" />
                    <span>{feature.stats}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg bg-[#1B998B]/10 hover:bg-[#1B998B]/20 transition-colors">
                    <PlayCircle className="w-4 h-4 text-[#1B998B]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}