import React from 'react';
import { Star, Award, Users, Youtube, TrendingUp, MessageCircle, PlayCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-[#2E294E]">
      {/* Enhanced Background with better blending */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E] via-[#2E294E] to-[#221f38]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute right-0 w-[800px] h-[800px] bg-[#1B998B]/5 blur-[120px] rounded-full transform translate-x-1/2" />
        <div className="absolute -left-40 w-[600px] h-[600px] bg-[#1B998B]/3 blur-[130px] rounded-full" />
      </div>

      {/* Rest of Hero content remains the same */}
      {/* ... */}
    </section>
  );
}

export default function YouTubeSection() {
  return (
    <section className="relative py-32 bg-[#221f38] overflow-hidden">
      {/* Improved Background Effects for better transition */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E] via-[#221f38] to-[#221f38]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        
        {/* Repositioned glowing orbs for better transition */}
        <div className="absolute -top-[400px] left-0 w-[800px] h-[800px] bg-[#1B998B]/5 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#1B998B]/3 blur-[130px] rounded-full transform translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header with better spacing */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6
                         bg-[#1B998B]/10 backdrop-blur-sm border border-[#1B998B]/20 
                         rounded-full transform hover:scale-105 transition-transform duration-300">
            <Youtube className="w-4 h-4 text-[#1B998B]" />
            <span className="ml-2 text-sm font-medium text-[#1B998B]">Featured Channel</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">Why Our Channel </span>
            <span className="text-[#1B998B]">Stands Out</span>
          </h2>
          
          <p className="text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of tech professionals who trust our content for career guidance and industry insights
          </p>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Star,
              title: "Expert-Led Content",
              description: "Industry veterans sharing real experiences and practical insights",
              stats: "50+ Expert Videos",
              gradient: "from-[#1B998B]/20 to-[#1B998B]/5"
            },
            {
              icon: Award,
              title: "Proven Results",
              description: "Our community members consistently achieve remarkable career growth",
              stats: "85% Success Rate",
              gradient: "from-[#1B998B]/15 to-[#1B998B]/5"
            },
            {
              icon: Users,
              title: "Active Community",
              description: "Connect with peers, mentors, and industry professionals",
              stats: "6K+ Members",
              gradient: "from-[#1B998B]/20 to-[#1B998B]/5"
            }
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative rounded-2xl p-8 
                       bg-[#2E294E]/50 backdrop-blur-xl
                       border border-[#1B998B]/10 hover:border-[#1B998B]/30
                       transform hover:translate-y-[-4px] hover:scale-[1.02] 
                       transition-all duration-500"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon Container */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                             bg-[#1B998B]/10 group-hover:bg-[#1B998B]/20
                             transform group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#1B998B]" />
                </div>

                {/* Content */}
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#1B998B] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300/80">
                    {feature.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-3 pt-4 text-sm text-[#1B998B]/80">
                    <TrendingUp className="w-4 h-4" />
                    <span>{feature.stats}</span>
                  </div>
                </div>

                {/* Interactive Elements */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg bg-[#1B998B]/10 hover:bg-[#1B998B]/20 transition-colors">
                    <PlayCircle className="w-4 h-4 text-[#1B998B]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}