"use client"
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClipboardCheck, Code, Shield, Zap, FileCheck } from 'lucide-react';

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95]);

  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "Comprehensive review of technical documentation and architecture.",
      icon: ClipboardCheck,
      gradient: "from-blue-400 via-indigo-500 to-violet-500",
      bgHover: "hover:bg-blue-50"
    },
    {
      number: "02",
      title: "Deep Technical Analysis",
      description: "Thorough examination of codebase, infrastructure, and technical practices.",
      icon: Code,
      gradient: "from-emerald-400 via-teal-500 to-green-500",
      bgHover: "hover:bg-emerald-50"
    },
    {
      number: "03",
      title: "Security Validation",
      description: "Rigorous security assessment and vulnerability testing.",
      icon: Shield,
      gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
      bgHover: "hover:bg-violet-50"
    },
    {
      number: "04",
      title: "Performance Testing",
      description: "Evaluation of system performance, scalability, and reliability.",
      icon: Zap,
      gradient: "from-amber-400 via-orange-500 to-red-500",
      bgHover: "hover:bg-amber-50"
    },
    {
      number: "05",
      title: "Recommendations",
      description: "Detailed report with findings and strategic recommendations.",
      icon: FileCheck,
      gradient: "from-cyan-400 via-sky-500 to-blue-500",
      bgHover: "hover:bg-cyan-50"
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
            Our Approach
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-gray-900"
          >
            Our Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A systematic approach to technical due diligence
          </motion.p>
        </div>

        <motion.div 
          style={{ scale }}
          className="space-y-6"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 rounded-2xl bg-white border border-gray-200 
                         shadow-sm hover:shadow-lg transition-all duration-500 
                         ${step.bgHover} relative overflow-hidden`}
            >
              <div className="relative z-10 flex items-center gap-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} 
                               flex items-center justify-center transform group-hover:scale-110 
                               transition-all duration-500`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                <div className="flex-1">
                  <div className="absolute top-4 right-8 text-8xl font-bold text-gray-900/5 
                                transition-all duration-500 group-hover:text-gray-900/10">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#1B998B] 
                               transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 group-hover:text-gray-700 
                               transition-colors duration-300 max-w-2xl">
                    {step.description}
                  </p>
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

export default Process;