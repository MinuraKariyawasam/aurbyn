'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Ventures', href: '/ventures' },
  { name: 'Academy', href: '/interra' },
  { name: 'Labs', href: '/labs' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Improved scroll handler with throttling
  useEffect(() => {
    let lastScroll = 0
    const threshold = 20
    
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (Math.abs(currentScroll - lastScroll) > threshold) {
        setScrolled(currentScroll > 20)
        lastScroll = currentScroll
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Improved mobile menu handling
  useEffect(() => {
    if (mobileMenuOpen) {
      // When opening menu, maintain scroll position
      document.body.style.height = '100vh'
      document.body.style.overflowY = 'hidden'
    } else {
      // When closing menu, restore scroll
      document.body.style.height = ''
      document.body.style.overflowY = ''
    }

    return () => {
      document.body.style.height = ''
      document.body.style.overflowY = ''
    }
  }, [mobileMenuOpen])

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#2E294E] shadow-lg' 
          : 'bg-gradient-to-b from-[#2E294E]/80 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6">
        {/* Logo */}
        <div className="flex flex-1">
          <Link 
            href="/" 
            className="group relative px-2 lg:px-3 py-2 text-xl lg:text-2xl font-bold text-white transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="relative z-10">AURBYN</span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="rounded-lg p-3 text-white hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group relative px-3 py-2 text-sm font-semibold transition-colors duration-300 ${
                pathname === item.href
                  ? 'text-[#FFD700]'
                  : 'text-white hover:text-[#FFD700]'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="group relative bg-[#FFD700] text-[#2E294E] px-6 py-3 rounded-lg font-medium 
              hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg 
              active:shadow-sm active:transform active:translate-y-0.5
              flex items-center"
          >
            Get Started
            <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu - Fixed to viewport */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-gradient-to-br from-[#2E294E]/95 via-[#1B998B]/95 to-[#2E294E]/95 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu content */}
        <div className="fixed inset-y-0 right-0 w-full bg-[#2E294E]/98 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between p-4">
            <Link 
              href="/" 
              className="text-xl font-bold text-white transition-colors hover:text-[#FFD700]"
              onClick={() => setMobileMenuOpen(false)}
            >
              AURBYN
            </Link>
            <button
              type="button"
              className="rounded-lg p-2 text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-all duration-300 mb-2 ${
                  pathname === item.href
                    ? 'bg-white/10 text-[#FFD700]'
                    : 'text-white hover:bg-white/5'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                <ChevronRight 
                  className={`h-5 w-5 transition-transform duration-300 ${
                    pathname === item.href ? 'text-[#FFD700]' : 'text-gray-400'
                  } group-hover:translate-x-1`} 
                />
              </Link>
            ))}
          </nav>

          <div className="px-4 py-6 border-t border-white/10">
            <Link
              href="/contact"
              className="group bg-[#FFD700] text-[#2E294E] px-6 py-4 rounded-lg font-medium 
                hover:bg-white active:bg-white/90 transition-all duration-200 
                shadow-lg active:shadow-md active:transform active:translate-y-0.5
                flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
              <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}