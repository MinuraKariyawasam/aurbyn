import React from 'react';
import { Users, Award, Youtube, TrendingUp, ChartBar, Rocket } from 'lucide-react';

const impactStats = [
  {
    number: "1000+",
    label: "Students Mentored",
    description: "Helping aspiring developers succeed",
    icon: Users,
    trend: "+25% this year"
  },
  {
    number: "95%",
    label: "Placement Rate",
    description: "Successful career transitions",
    icon: Award,
    trend: "Industry leading"
  },
  {
    number: "6K+",
    label: "YouTube Subscribers",
    description: "Growing community of learners",
    icon: Youtube,
    trend: "+48% growth"
  }
];

export default function Impact() {
  return (
    <section className="relative py-32 bg-[#221f38] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E] via-[#221f38] to-[#2E294E]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#1B998B]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#1B998B]/3 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6
                       bg-[#1B998B]/10 backdrop-blur-sm border border-[#1B998B]/20 
                       rounded-full transform hover:scale-105 transition-transform duration-300">
            <ChartBar className="w-4 h-4 text-[#1B998B]" />
            <span className="ml-2 text-sm font-medium text-[#1B998B]">Growth Metrics</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">Our </span>
            <span className="text-[#1B998B]">Impact</span>
          </h2>
          
          <p className="text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Measuring our success through the achievements of our community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={stat.label}
              className="group relative bg-[#2E294E]/50 backdrop-blur-xl rounded-2xl p-8
                       border border-[#1B998B]/10 hover:border-[#1B998B]/30
                       transform hover:translate-y-[-4px] hover:scale-[1.02] 
                       transition-all duration-500"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1B998B]/20 via-transparent to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                             bg-[#1B998B]/10 group-hover:bg-[#1B998B]/20
                             transform group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-[#1B998B]" />
                </div>

                {/* Stats */}
                <div className="mt-6">
                  <div className="text-5xl font-bold bg-clip-text text-transparent 
                               bg-gradient-to-r from-[#1B998B] to-[#1B998B]/80">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-gray-300/80">
                    {stat.description}
                  </p>
                </div>

                {/* Trend Indicator */}
                <div className="mt-6 pt-4 border-t border-[#1B998B]/10 
                             flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1B998B]" />
                    <span className="text-sm text-[#1B998B]">{stat.trend}</span>
                  </div>
                  <Rocket className="w-4 h-4 text-[#1B998B] opacity-0 group-hover:opacity-100 
                                 transform group-hover:translate-y-[-4px] transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}