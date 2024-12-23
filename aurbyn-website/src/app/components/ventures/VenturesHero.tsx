"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function VenturesHero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#2E294E] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E] via-[#2E294E]/90 to-[#2E294E]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <motion.div 
          className="absolute top-0 -left-40 w-96 h-96 bg-[#1B998B] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B998B] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Main Heading */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-white">Empowering </span>
                <span className="text-[#1B998B]">the</span>
                <br />
                <span className="text-white">Next Wave </span>
                <span className="text-[#1B998B]">of</span>
                <br />
                <span className="text-white">Innovation</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-300/90 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                We partner with exceptional founders building breakthrough technologies 
                that define new categories and transform industries.
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { value: '$50M+', label: 'Assets Under Management' },
                { value: '40+', label: 'Portfolio Companies' },
                { value: '85%', label: 'Follow-on Rate' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, translateY: -4 }}
                  className="group bg-white/[0.07] backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/10 hover:border-[#1B998B]/30"
                >
                  <div className="text-3xl lg:text-5xl font-bold text-[#1B998B] mb-2 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <p className="text-gray-300/80 text-sm lg:text-base font-light">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div 
            className="relative lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative h-full">
              {/* Abstract Shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B998B]/40 to-transparent rounded-3xl backdrop-blur-xl border border-white/10">
                {/* Floating Elements */}
                {mounted && [...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#1B998B] to-[#2E294E]"
                    initial={{ x: 0, y: 0 }}
                    animate={{
                      x: Math.random() * 40 - 20,
                      y: Math.random() * 40 - 20,
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 80 + 10}%`,
                    }}
                  />
                ))}

                {/* Center Piece */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-64 h-64 relative"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 border-2 border-[#1B998B]/30 rounded-3xl" />
                    <div className="absolute inset-8 border-2 border-[#1B998B]/20 rounded-3xl rotate-45" />
                    <div className="absolute inset-16 border-2 border-[#1B998B]/10 rounded-3xl rotate-90" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}