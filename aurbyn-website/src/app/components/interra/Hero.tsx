"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Youtube, ArrowRight, Headphones, Play, Star, Users, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Live Now</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-white/80 text-sm font-medium">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-white/80 text-sm font-medium">10K+ Community</span>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-600">
                  Level Up
                </span>
                <br />
                <span className="text-white">Your Tech</span>
                <br />
                <span className="text-white/80">Career Today</span>
              </h1>
              
              <p className="text-lg text-white/60 max-w-md leading-relaxed">
                Join our thriving community of tech professionals. Access cutting-edge resources and expert guidance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://www.youtube.com/@theinterra"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 
                         rounded-2xl font-semibold text-white shadow-lg shadow-emerald-500/20
                         hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
                <span>Subscribe Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://creators.spotify.com/pod/show/minura-kariyawasam"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl 
                         rounded-2xl font-semibold text-white border border-white/10
                         hover:bg-white/10 transition-all duration-300"
              >
                <Headphones className="w-5 h-5" />
                <span>Listen Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-6">
              {[
                { icon: '🎯', title: 'Career Growth', desc: 'Expert guidance & mentoring' },
                { icon: '🎓', title: 'Weekly Content', desc: 'Fresh tutorials & insights' },
                { icon: '💡', title: 'Live Sessions', desc: 'Interactive learning' },
                { icon: '🤝', title: 'Community', desc: 'Network with peers' }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <span className="text-2xl mb-2 block">{feature.icon}</span>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 
                                  flex items-center justify-center text-white text-xl font-bold">
                      T
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Latest Episode</h3>
                      <p className="text-white/60 text-sm">Tech Career Insights</p>
                    </div>
                  </div>
                  <motion.a
                    href="https://youtu.be/XkJNhjndLTU?si=qqFBUqZw8CYRV3TU"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 
                              rounded-xl flex items-center justify-center"
                  >
                    <Play className="w-6 h-6 text-white" fill="white" />
                  </motion.a>
                </div>

                {/* Video */}
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/50">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/XkJNhjndLTU"
                    title="Latest Episode"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: '2.1K', label: 'Views' },
                    { value: '1.2K', label: 'Likes' },
                    { value: '234', label: 'Comments' }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center"
                    >
                      <div className="text-white font-semibold mb-1">{stat.value}</div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}