import React from 'react';
import { Play, Users, Youtube, ArrowRight, PlayCircle, Globe, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-[#2E294E] flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E] via-[#2E294E] to-[#221f38]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute right-0 w-[800px] h-[800px] bg-[#1B998B]/5 blur-[120px] rounded-full transform translate-x-1/2" />
        <div className="absolute -left-40 w-[600px] h-[600px] bg-[#1B998B]/3 blur-[130px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-10">
            {/* Enhanced Stats Badge */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1B998B]/20 to-[#1B998B]/10 
                           text-[#1B998B] backdrop-blur-sm border border-[#1B998B]/20 
                           hover:border-[#1B998B]/30 transition-all duration-300 cursor-pointer group">
                <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">6K+ Subscribers</span>
              </div>
              <div className="h-6 w-px bg-[#1B998B]/20" />
              <div className="text-[#1B998B]/80 text-sm">Join the Community</div>
            </div>
            
            {/* Enhanced Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                <div className="overflow-hidden">
                  <span className="block hover:translate-x-2 transition-transform duration-300">
                    Master Your
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1B998B] to-[#1B998B]/80 
                               hover:translate-x-2 transition-transform duration-300">
                    Tech Career
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block hover:translate-x-2 transition-transform duration-300">
                    Journey
                  </span>
                </div>
              </h1>
              
              <p className="text-xl text-gray-300/90 max-w-lg leading-relaxed">
                Join our thriving YouTube community where we share insider tips, 
                career strategies, and technical insights to help you succeed in tech.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.youtube.com/@theinterra" 
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1B998B] to-[#1B998B]/90 
                         text-white rounded-xl font-semibold shadow-lg shadow-[#1B998B]/20
                         hover:shadow-xl hover:shadow-[#1B998B]/30 transition-all duration-300 
                         hover:-translate-y-0.5"
              >
                <Youtube className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Subscribe Now</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              <a 
                href="https://www.youtube.com/playlist?list=PLOQDoNwLXrmf_vk8vTInrafUO5Y0T2TXJ" 
                className="group flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold 
                         backdrop-blur-sm border border-white/10 hover:bg-white/20 
                         transition-all duration-300 hover:-translate-y-0.5"
              >
                <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Podcasts</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Added Features List */}
            <div className="flex gap-8 pt-8">
              {[
                { number: '50+', label: 'Video Tutorials' },
                { number: '24/7', label: 'Community Support' },
                { number: '85%', label: 'Success Rate' }
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Enhanced Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B998B]/20 to-transparent blur-3xl" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20
                         hover:shadow-[0_20px_50px_rgba(27,153,139,0.2)] hover:border-[#1B998B]/30
                         transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#1B998B] to-[#1B998B]/90 
                           text-white px-6 py-2 rounded-xl shadow-lg
                           hover:shadow-[#1B998B]/20 hover:scale-105 transition-all duration-300">
                <span className="font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  New Video Every Week!
                </span>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    icon: Youtube,
                    title: "Expert Content",
                    desc: "In-depth tech career guidance from industry experts"
                  },
                  {
                    icon: Users,
                    title: "Growing Community",
                    desc: "Connect and learn with fellow tech aspirants"
                  },
                  {
                    icon: Globe,
                    title: "Weekly Updates",
                    desc: "Stay updated with latest tech trends and opportunities"
                  }
                ].map((item) => (
                  <div 
                    key={item.title}
                    className="flex items-start gap-6 group hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center 
                                bg-gradient-to-br from-[#1B998B]/20 to-[#1B998B]/10 rounded-xl
                                group-hover:from-[#1B998B]/30 group-hover:to-[#1B998B]/20
                                transition-all duration-300">
                      <item.icon className="w-7 h-7 text-[#1B998B] group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#1B998B] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}