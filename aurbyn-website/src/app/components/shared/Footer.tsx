// components/shared/Footer.tsx
'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#2E294E] mb-4">AURBYN</h3>
            <p className="text-gray-600 mb-4">Shaping the Future of Innovation</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/ventures" className="text-gray-600 hover:text-[#1B998B]">Ventures</Link></li>
              <li><Link href="/approach" className="text-gray-600 hover:text-[#1B998B]">Approach</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#1B998B]">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Ventures</h4>
            <ul className="space-y-2">
              <li><Link href="/interra" className="text-gray-600 hover:text-[#1B998B]">Interra</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#1B998B]">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1B998B]">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {year} Aurbyn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}