import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '../app/components/home/Hero'
import InvestmentThesis from '../app/components/home/InvestmentThesis'
import InvestmentApproach from '../app/components/home/InvestmentApproach'
import FocusAreas from '../app/components/home/FocusAreas'
import SubBrands from '../app/components/home/SubBrands'
import FAQ from '../app/components/home/FAQ'
import CTASection from '../app/components/shared/CTASection'
import ClientLayout from './components/layouts/ClientLayout'

export const metadata: Metadata = {
  title: 'Aurbyn Capital - Backing the Next Wave of Tech Pioneers',
  description: 'A new venture capital firm providing strategic capital and hands-on support to early-stage founders building breakthrough technologies.'
}

export default function Home() {
  return (
    <ClientLayout>
      <main className="relative overflow-hidden">
        {/* Background gradient that spans multiple sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E] via-white to-white"/>
        
        {/* Content */}
        <div className="relative">
          <Hero />
          
          <div className="relative -mt-20">
            <InvestmentThesis />
          </div>
          
          <div className="relative -mt-16 bg-gradient-to-b from-transparent to-gray-50">
            <InvestmentApproach />
          </div>
          
          <div className="relative bg-white">
            <FocusAreas />
          </div>
          
          <div className="relative bg-gray-50">
            <SubBrands />
          </div>
          
          <div className="relative bg-white">
            <FAQ />
          </div>
          
          <div className="relative bg-gradient-to-br from-[#2E294E] via-[#1B998B] to-[#2E294E]">
            <CTASection 
              title="Ready to Build the Future?" 
              description="Connect with us to explore how we can support your vision."
              buttonText="Get in Touch"
              buttonLink="/contact"
            />
          </div>
        </div>
      </main>
    </ClientLayout>
  )
}

