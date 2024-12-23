"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code, Database, Shield, ArrowUpRight } from 'lucide-react';

export default function LabsHero() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1B998B]/30 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1B998B]/30 rounded-full filter blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-16"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <div className="w-2 h-2 bg-[#1B998B] rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Technical Excellence</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">Deep Technical</span>
                <br />
                <span className="text-[#1B998B]">Due Diligence</span>
                <br />
                <span className="text-white/80">& Research</span>
              </h1>
              
              <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                Providing comprehensive technical validation and research insights to 
                inform investment decisions in transformative technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Search, title: 'Deep Analysis', desc: 'Thorough technical evaluation' },
                { icon: Code, title: 'Code Review', desc: 'Architecture validation' },
                { icon: Database, title: 'Data Security', desc: 'Privacy assessment' },
                { icon: Shield, title: 'Risk Analysis', desc: 'Threat mitigation' }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
                           hover:bg-white/10 hover:border-[#1B998B]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <feature.icon className="w-6 h-6 text-[#1B998B]" />
                    <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#1B998B] 
                                          group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metrics Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B998B]/10 to-[#1B998B]/5 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="space-y-6">
                {[
                  { name: 'Technical Stack Analysis', value: '100%' },
                  { name: 'Security Assessment', value: '92%' },
                  { name: 'Scalability Testing', value: '95%' },
                  { name: 'Code Quality Review', value: '98%' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
                             hover:bg-white/10 hover:border-[#1B998B]/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#1B998B]" />
                        <h3 className="font-medium text-white">{metric.name}</h3>
                      </div>
                      <span className="text-[#1B998B] font-semibold">{metric.value}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#1B998B]"
                        initial={{ width: "0%" }}
                        animate={{ width: metric.value }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -top-4 -right-4 px-6 py-3 bg-[#1B998B] rounded-2xl
                           shadow-lg shadow-[#1B998B]/20"
                >
                  <span className="text-white font-medium">Industry Leading Accuracy</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}