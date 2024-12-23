"use client"
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrainCog, Database, Cloud, Lock, Code, Network } from 'lucide-react';

const ResearchInsights = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95]);

  const insights = [
    {
      title: "AI Systems Architecture",
      category: "Technical Research",
      description: "Best practices and architectural patterns for building scalable AI systems.",
      tags: ["System Design", "ML Ops", "Scalability"],
      icon: BrainCog,
      gradient: "from-blue-400 via-indigo-500 to-violet-500",
      bgHover: "hover:bg-blue-50"
    },
    {
      title: "Web3 Infrastructure",
      category: "Technology Analysis",
      description: "Critical evaluation of decentralized infrastructure components and security.",
      tags: ["Blockchain", "Security", "Performance"],
      icon: Network,
      gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
      bgHover: "hover:bg-violet-50"
    },
    {
      title: "Cloud Native Patterns",
      category: "Industry Research",
      description: "Analysis of emerging patterns in modern cloud-native architectures.",
      tags: ["Cloud", "DevOps", "Microservices"],
      icon: Cloud,
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      bgHover: "hover:bg-emerald-50"
    },
    {
      title: "Database Evolution",
      category: "Technical Research",
      description: "Deep dive into modern database architectures and scaling strategies.",
      tags: ["SQL", "NoSQL", "Data Modeling"],
      icon: Database,
      gradient: "from-amber-400 via-orange-500 to-red-500",
      bgHover: "hover:bg-amber-50"
    },
    {
      title: "Security Frameworks",
      category: "Technology Analysis",
      description: "Analysis of modern security frameworks and best practices.",
      tags: ["Zero Trust", "Authentication", "Compliance"],
      icon: Lock,
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      bgHover: "hover:bg-green-50"
    },
    {
      title: "API Design Patterns",
      category: "Industry Research",
      description: "Research on effective API design patterns and architectures.",
      tags: ["REST", "GraphQL", "gRPC"],
      icon: Code,
      gradient: "from-rose-400 via-pink-500 to-purple-500",
      bgHover: "hover:bg-rose-50"
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
            Research & Analysis
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-gray-900"
          >
            Research & Insights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Deep technical analysis and industry insights
          </motion.p>
        </div>

        <motion.div 
          style={{ scale }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {insights.map((insight) => (
            <motion.div 
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`group p-8 rounded-2xl bg-white border border-gray-200 
                         shadow-sm hover:shadow-lg transition-all duration-500 
                         ${insight.bgHover} relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${insight.gradient}
                                flex items-center justify-center transform group-hover:scale-110 
                                transition-all duration-500`}>
                    <insight.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-4 py-2 text-sm font-medium rounded-full bg-gray-50 text-gray-600
                                group-hover:bg-[#1B998B]/10 group-hover:text-[#1B998B]
                                transition-colors duration-300">
                    {insight.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#1B998B]
                             transition-colors duration-300">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700">
                  {insight.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {insight.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-4 py-2 text-sm bg-gray-50 rounded-full text-gray-600
                               group-hover:bg-white group-hover:text-[#1B998B] 
                               group-hover:shadow-sm border border-transparent
                               group-hover:border-[#1B998B]/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
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

export default ResearchInsights;