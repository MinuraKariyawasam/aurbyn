// app/page.tsx
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '../app/components/home/Hero'
import InvestmentThesis from '../app/components/home/InvestmentThesis'
import FocusAreas from '../app/components/home/FocusAreas'
import SubBrands from '../app/components/home/SubBrands'
import WhyAurbyn from '../app/components/home/WhyAurbyn'
import GlobalPresence from '../app/components/home/GlobalPresence'
import CTASection from '../app/components/shared/CTASection'

export const metadata: Metadata = {
  title: 'Aurbyn - Shaping the Future of Innovation',
  description: 'Strategic capital and acceleration for visionary startups transforming industries'
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <InvestmentThesis />
      <FocusAreas />
      <SubBrands />
      <WhyAurbyn />
      <GlobalPresence />
      <CTASection 
        title="Ready to Shape the Future Together?" 
        description="Join us in building the next generation of transformative companies."
        buttonText="Connect With Us"
        buttonLink="/contact"
      />
    </main>
  )
}