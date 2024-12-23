"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Youtube, Play, Clock, Share2, Heart } from 'lucide-react';

export default function FeaturedVideo() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const videoY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const statsY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          style={{ y: headerY }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-2 mb-6
                     bg-[#1B998B]/10 border border-[#1B998B]/20 
                     rounded-full transform hover:scale-105 transition-transform duration-300"
          >
            <Play className="w-4 h-4 text-[#1B998B]" />
            <span className="ml-2 text-sm font-medium text-[#1B998B]">Latest Upload</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Featured </span>
            <span className="text-[#1B998B]">Content</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Watch our latest video on tech career development and industry insights
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            style={{ y: videoY }}
            className="relative group"
          >            
            <div className="relative bg-white p-2 rounded-2xl
                         border border-gray-200 group-hover:border-[#1B998B]/30
                         shadow-sm hover:shadow-md
                         transition-all duration-500">
              <iframe 
                className="w-full h-[600px] rounded-xl"
                src="https://www.youtube.com/embed/MqjgrzmJFw4"
                title="Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div 
            style={{ y: statsY }}
            className="mt-8 flex items-center justify-between px-4"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5 text-[#1B998B]" />
                <span>15:24</span>
              </div>
              <div className="h-4 w-px bg-gray-200" />
              <div className="flex items-center gap-2 text-gray-600">
                <Youtube className="w-5 h-5 text-[#1B998B]" />
                <span>2.5K views</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                              bg-[#1B998B]/10 hover:bg-[#1B998B]/20 
                              transition-all duration-300">
                <Heart className="w-5 h-5 text-[#1B998B]" />
                <span className="text-gray-600">245</span>
              </button>
              
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                              bg-[#1B998B]/10 hover:bg-[#1B998B]/20 
                              transition-all duration-300">
                <Share2 className="w-5 h-5 text-[#1B998B]" />
                <span className="text-gray-600">Share</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: statsY }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 p-6 rounded-xl bg-white
                     border border-gray-200 hover:border-[#1B998B]/30
                     shadow-sm hover:shadow-md
                     transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Software Engineering සරලව: Education, Salaries, WFH, Internships & Tax. | Sinhala
            </h3>
            <p className="text-gray-600">
              This video provides a comprehensive guide for aspiring and current software engineers in Sinhala. It covers key topics like primary and university education, interview preparation, work-life balance, and insights into salaries and taxes in the industry. The video also shares practical resources, including CV templates, blog posts, and podcasts, to help viewers advance their careers. With its structured chapters and culturally relevant advice, it's a valuable resource for anyone navigating a career in software engineering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}