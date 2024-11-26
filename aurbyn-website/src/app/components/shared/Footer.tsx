'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowUpRight, Twitter, Linkedin, Youtube, Send } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'Ventures', href: '/ventures' },
    { name: 'Interra', href: '/interra' },
    { name: 'Approach', href: '/approach' },
  ],
  resources: [
    { name: 'Academy', href: '/academy' },
    { name: 'FAQ', href: '/faq' },
  ],
  social: [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'YouTube', href: '#', icon: Youtube },
  ],
}

const office = {
  location: "Global (Remote)",
  email: 'hello@aurbyn.com'
}

export default function Footer() {
  const [year, setYear] = useState('')
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => {
      setIsSubscribed(false)
    }, 3000)
  }

  return (
    <footer className="bg-[#2E294E] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}/>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-12 lg:px-8">
        {/* Newsletter Section - Centered */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 relative">
          <h3 className="text-lg sm:text-xl font-semibold text-[#1B998B] mb-3 sm:mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto px-2">
            Stay ahead with insights on emerging technologies, investment trends, and industry innovations.
          </p>
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto px-2">
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 sm:py-3.5 text-white placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-[#1B998B]/50 focus:border-transparent
                  transition-all duration-300 group-hover:border-white/20"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-[#1B998B] rounded-lg 
                  hover:bg-[#1B998B]/80 transition-all duration-300 group-hover:scale-95 hover:rotate-12"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {isSubscribed && (
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <p className="text-sm text-[#1B998B] animate-fade-in-up">
                  ✨ Thanks for subscribing!
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 mb-12 sm:mb-16">
          {/* Brand section */}
          <div className="text-center lg:text-left">
            <Link href="/" className="inline-block">
              <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">AURBYN</div>
            </Link>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-sm mx-auto lg:mx-0">
              Strategic capital and acceleration for visionary startups transforming industries through groundbreaking technology.
            </p>
            <div className="space-y-1 sm:space-y-2 text-sm text-gray-300">
              <p>{office.location}</p>
              <a 
                href={`mailto:${office.email}`}
                className="hover:text-[#1B998B] transition-colors duration-300 inline-block"
              >
                {office.email}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 text-center lg:text-left">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1B998B] mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#1B998B] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1B998B] mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#1B998B] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            {/* Social Links */}
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {footerLinks.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white 
                      transition-all duration-300 hover:scale-110"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            
            {/* Location Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-2 sm:space-y-0 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span>🇱🇰</span>
                <span>Founded with love in Sri Lanka</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center space-x-2">
                <span>🌎</span>
                <span>Operating Globally</span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs sm:text-sm text-gray-500">
              &copy; {year} Aurbyn Capital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
