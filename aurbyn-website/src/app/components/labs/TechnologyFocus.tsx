"use client"
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrainCog, Cloud, Network, Shield } from 'lucide-react';

const TechnologyFocus = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95]);

  const technologies = [
    {
      category: "Artificial Intelligence",
      icon: BrainCog,
      areas: ["Machine Learning", "Neural Networks", "NLP", "Computer Vision"],
      gradient: "from-blue-400 via-indigo-500 to-violet-500",
      bgHover: "hover:bg-blue-50"
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      areas: ["AWS", "Azure", "GCP", "Kubernetes"],
      gradient: "from-emerald-400 via-teal-500 to-green-500",
      bgHover: "hover:bg-emerald-50"
    },
    {
      category: "Web3 & Blockchain",
      icon: Network,
      areas: ["Smart Contracts", "DeFi", "NFTs", "Layer 2"],
      gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
      bgHover: "hover:bg-violet-50"
    },
    {
      category: "Security",
      icon: Shield,
      areas: ["Zero Trust", "Encryption", "Access Control", "Threat Detection"],
      gradient: "from-amber-400 via-orange-500 to-red-500",
      bgHover: "hover:bg-amber-50"
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-white">
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 text-sm font-medium text-[#1B998B] px-4 py-2 rounded-full bg-[#1B998B]/10"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-gray-900"
          >
            Technology Focus Areas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Specialized expertise across emerging technologies
          </motion.p>
        </div>

        <motion.div 
          style={{ scale }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`group p-8 rounded-3xl bg-white border border-gray-200 
                         shadow-sm hover:shadow-xl transition-all duration-500 
                         ${tech.bgHover} relative overflow-hidden`}
            >
              <div className="relative z-10 flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.gradient} 
                               flex items-center justify-center transform group-hover:scale-110 
                               transition-all duration-500`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {tech.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {tech.areas.map(area => (
                      <span 
                        key={area}
                        className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700 
                                 shadow-sm border border-gray-100 
                                 group-hover:border-[#1B998B]/20 group-hover:bg-white 
                                 transition-all duration-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-24 -right-24 w-48 h-48 
                           bg-gradient-to-br from-gray-50 via-white to-transparent 
                           rounded-full opacity-50 group-hover:opacity-75 
                           transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechnologyFocus;