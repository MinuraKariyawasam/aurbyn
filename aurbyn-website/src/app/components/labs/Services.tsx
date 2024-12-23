"use client"
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Microscope, GitBranch, Lock, Scale, Cpu, Zap, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95]);

  const services = [
    {
      icon: Microscope,
      title: "Technical Due Diligence",
      description: "Comprehensive analysis of technology stacks, architectures, and technical capabilities.",
      gradient: "from-blue-400 via-indigo-500 to-violet-500",
      bgHover: "hover:bg-blue-50",
      keyPoints: [
        "Architecture & system design evaluation",
        "Technology stack assessment",
        "Development process analysis"
      ],
      outcomes: "Detailed technical insights and risk assessment report"
    },
    {
      icon: GitBranch,
      title: "Code Quality Analysis",
      description: "Deep review of source code, development practices, and technical debt assessment.",
      gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
      bgHover: "hover:bg-violet-50",
      keyPoints: [
        "Code quality metrics evaluation",
        "Technical debt quantification",
        "Best practices compliance review"
      ],
      outcomes: "Actionable code improvement recommendations"
    },
    {
      icon: Lock,
      title: "Security Assessment",
      description: "Thorough evaluation of security measures, vulnerabilities, and data protection practices.",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      bgHover: "hover:bg-emerald-50",
      keyPoints: [
        "Vulnerability assessment",
        "Security architecture review",
        "Compliance verification"
      ],
      outcomes: "Comprehensive security posture analysis"
    },
    {
      icon: Scale,
      title: "Scalability Validation",
      description: "Assessment of system performance, scalability potential, and infrastructure resilience.",
      gradient: "from-amber-400 via-orange-500 to-red-500",
      bgHover: "hover:bg-amber-50",
      keyPoints: [
        "Load testing & performance analysis",
        "Infrastructure scalability review",
        "Resource optimization assessment"
      ],
      outcomes: "Scalability roadmap with growth projections"
    },
    {
      icon: Cpu,
      title: "Technical Innovation",
      description: "Evaluation of technological differentiation and competitive advantages.",
      gradient: "from-rose-400 via-pink-500 to-purple-500",
      bgHover: "hover:bg-rose-50",
      keyPoints: [
        "Innovation potential assessment",
        "Technology trend alignment",
        "Competitive advantage analysis"
      ],
      outcomes: "Innovation strategy and differentiation insights"
    },
    {
      icon: Zap,
      title: "Performance Testing",
      description: "Rigorous testing of system performance, reliability, and optimization opportunities.",
      gradient: "from-cyan-400 via-blue-500 to-indigo-500",
      bgHover: "hover:bg-cyan-50",
      keyPoints: [
        "Performance benchmarking",
        "Reliability testing",
        "Optimization identification"
      ],
      outcomes: "Detailed performance optimization roadmap"
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
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-gray-900"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive technical evaluation services designed to provide deep insights 
            and actionable recommendations for technology investments.
          </motion.p>
        </div>

        <motion.div 
          style={{ scale }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 rounded-2xl bg-white border border-gray-200 
                         shadow-sm hover:shadow-lg transition-all duration-500 
                         ${service.bgHover} relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} 
                               flex items-center justify-center transform group-hover:scale-110 
                               transition-all duration-500`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#1B998B]
                             transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#1B998B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-[#1B998B] font-medium">Deliverable:</p>
                  <p className="text-sm text-gray-600 mt-1">{service.outcomes}</p>
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

export default Services;