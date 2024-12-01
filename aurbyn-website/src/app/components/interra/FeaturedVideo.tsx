import React from 'react';
import { Youtube, Play, Clock, Share2, Heart } from 'lucide-react';

export default function FeaturedVideo() {
  return (
    <section className="relative py-32 bg-[#221f38] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#221f38] via-[#221f38] to-[#2E294E]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#1B998B]/3 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#1B998B]/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6
                         bg-[#1B998B]/10 backdrop-blur-sm border border-[#1B998B]/20 
                         rounded-full transform hover:scale-105 transition-transform duration-300">
            <Play className="w-4 h-4 text-[#1B998B]" />
            <span className="ml-2 text-sm font-medium text-[#1B998B]">Latest Upload</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">Featured </span>
            <span className="text-[#1B998B]">Content</span>
          </h2>
          
          <p className="text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Watch our latest video on tech career development and industry insights
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute -left-8 -top-8 w-64 h-64 bg-[#1B998B]/10 rounded-full blur-3xl" />
          <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-[#1B998B]/10 rounded-full blur-3xl" />

          {/* Video Frame */}
          <div className="relative group">
            <div className="absolute -inset-2.5 bg-gradient-to-r from-[#1B998B]/20 to-[#1B998B]/10 
                         rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-[#2E294E]/50 p-2 rounded-2xl backdrop-blur-sm 
                         border border-[#1B998B]/10 group-hover:border-[#1B998B]/30
                         transition-all duration-500">
              <iframe 
                className="w-full h-[600px] rounded-xl"
                src="https://www.youtube.com/embed/MqjgrzmJFw4"
                title="Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-8 flex items-center justify-between px-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-[#1B998B]" />
                <span>15:24</span>
              </div>
              <div className="h-4 w-px bg-gray-700" />
              <div className="flex items-center gap-2 text-gray-300">
                <Youtube className="w-5 h-5 text-[#1B998B]" />
                <span>2.5K views</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                              bg-[#1B998B]/10 hover:bg-[#1B998B]/20 
                              transition-all duration-300">
                <Heart className="w-5 h-5 text-[#1B998B]" />
                <span className="text-gray-300">245</span>
              </button>
              
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                              bg-[#1B998B]/10 hover:bg-[#1B998B]/20 
                              transition-all duration-300">
                <Share2 className="w-5 h-5 text-[#1B998B]" />
                <span className="text-gray-300">Share</span>
              </button>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-6 p-6 rounded-xl bg-[#2E294E]/30 backdrop-blur-sm 
                       border border-[#1B998B]/10 hover:border-[#1B998B]/30
                       transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">
            Software Engineering සරලව: Education, Salaries, WFH, Internships & Tax. | Sinhala
            </h3>
            <p className="text-gray-300">
            This video provides a comprehensive guide for aspiring and current software engineers in Sinhala. It covers key topics like primary and university education, interview preparation, work-life balance, and insights into salaries and taxes in the industry. The video also shares practical resources, including CV templates, blog posts, and podcasts, to help viewers advance their careers. With its structured chapters and culturally relevant advice, it’s a valuable resource for anyone navigating a career in software engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}