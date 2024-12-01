import React from 'react';
import { Code, FileText, Users, Brain, Target, Trophy, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    title: "Career Mentorship",
    description: "Get personalized guidance from industry experts who have walked the path you're on",
    icon: Users,
    stats: "500+ Mentored",
    gradient: "from-[#1B998B]/20 via-[#1B998B]/10 to-transparent"
  },
  {
    title: "Technical Interview Prep",
    description: "Master coding challenges and system design through mock interviews",
    icon: Code,
    stats: "200+ Practice Sessions",
    gradient: "from-[#1B998B]/20 via-[#1B998B]/10 to-transparent"
  },
  {
    title: "Resume Building",
    description: "Create an impressive CV that highlights your skills and experiences",
    icon: FileText,
    stats: "90% Success Rate",
    gradient: "from-[#1B998B]/20 via-[#1B998B]/10 to-transparent"
  },
  {
    title: "Skill Development",
    description: "Access curated learning paths and resources to build in-demand skills",
    icon: Brain,
    stats: "20+ Learning Paths",
    gradient: "from-[#1B998B]/20 via-[#1B998B]/10 to-transparent"
  },
  {
    title: "Goal Setting",
    description: "Define clear career objectives and create actionable plans to achieve them",
    icon: Target,
    stats: "150+ Success Stories",
    gradient: "from-[#1B998B]/20 via-[#1B998B]/10 to-transparent"
  },
  {
    title: "Industry Projects",
    description: "Work on real-world projects to build a compelling portfolio",
    icon: Trophy,
    stats: "50+ Projects",
    gradient: "from-[#1B998B]/20 via-[#1B998B]/10 to-transparent"
  }
];

export default function Services() {
  return (
    <section className="relative py-32 bg-[#221f38] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E] via-[#221f38] to-[#221f38]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1B998B]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1B998B]/3 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6
                       bg-[#1B998B]/10 backdrop-blur-sm border border-[#1B998B]/20 
                       rounded-full transform hover:scale-105 transition-transform duration-300">
            <CheckCircle className="w-4 h-4 text-[#1B998B]" />
            <span className="ml-2 text-sm font-medium text-[#1B998B]">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">What We </span>
            <span className="text-[#1B998B]">Deliver</span>
          </h2>
          
          <p className="text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Comprehensive support to help you break into tech and build a rewarding career
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group relative bg-[#2E294E]/50 backdrop-blur-xl rounded-2xl p-8 
                       border border-[#1B998B]/10 hover:border-[#1B998B]/30
                       transform hover:translate-y-[-4px] hover:scale-[1.02] 
                       transition-all duration-500"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient}
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content Container */}
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                             bg-[#1B998B]/10 group-hover:bg-[#1B998B]/20
                             transform group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-[#1B998B]" />
                </div>

                {/* Text Content */}
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#1B998B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Stats & Action */}
                <div className="mt-8 flex items-center justify-between pt-4 border-t border-[#1B998B]/10">
                  <span className="text-sm text-[#1B998B]/80">
                    {service.stats}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#1B998B] opacity-0 transform translate-x-[-10px]
                                     group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}