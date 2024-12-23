"use client"
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ShieldAlert, LineChart, Lightbulb, CheckCircle2 } from 'lucide-react';

const Methodology = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95]);

  const steps = [
    {
      title: "Technical Discovery",
      description: "Deep dive into architecture, codebase, and infrastructure",
      icon: Search,
      gradient: "from-blue-400 via-indigo-500 to-violet-500",
      bgHover: "hover:bg-blue-50",
      keyPoints: [
        "Architecture evaluation & system design review",
        "Code quality assessment & best practices audit",
        "Infrastructure scalability analysis"
      ],
      outcomes: "Comprehensive technical understanding and architecture mapping"
    },
    {
      title: "Risk Assessment",
      description: "Identify technical debt and potential scaling challenges",
      icon: ShieldAlert,
      gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
      bgHover: "hover:bg-violet-50",
      keyPoints: [
        "Technical debt evaluation & impact analysis",
        "Scalability bottleneck identification",
        "Security vulnerability assessment"
      ],
      outcomes: "Detailed risk matrix and mitigation strategies"
    },
    {
      title: "Market Analysis",
      description: "Evaluate technology stack against industry standards",
      icon: LineChart,
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      bgHover: "hover:bg-emerald-50",
      keyPoints: [
        "Industry standard compliance review",
        "Competitive technology benchmarking",
        "Future-readiness assessment"
      ],
      outcomes: "Comprehensive market positioning insights"
    },
    {
      title: "Recommendations",
      description: "Actionable insights for technical improvement",
      icon: Lightbulb,
      gradient: "from-amber-400 via-orange-500 to-red-500",
      bgHover: "hover:bg-amber-50",
      keyPoints: [
        "Strategic improvement roadmap",
        "Priority-based action items",
        "Resource optimization suggestions"
      ],
      outcomes: "Actionable improvement strategy with clear ROI metrics"
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
            Our Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-gray-900"
          >
            Our Methodology
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            A systematic, data-driven approach to technical validation and research, designed to provide 
            actionable insights and strategic recommendations for technology investments.
          </motion.p>
        </div>

        <motion.div 
          style={{ scale }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 rounded-2xl bg-white border border-gray-200 
                         shadow-sm hover:shadow-lg transition-all duration-500 
                         ${step.bgHover} relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${step.gradient} 
                               flex items-center justify-center transform group-hover:scale-110 
                               transition-all duration-500`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#1B998B]
                             transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>

                <div className="space-y-3 mb-6">
                  {step.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#1B998B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-[#1B998B] font-medium">Outcome:</p>
                  <p className="text-sm text-gray-600 mt-1">{step.outcomes}</p>
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

export default Methodology;