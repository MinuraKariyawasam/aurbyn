// app/labs/page.tsx
import { Metadata } from 'next'
import Hero from '../components/labs/Hero'
import Services from '../components/labs/Services'
import Process from '../components/labs/Process'
import CaseStudies from '../components/labs/CaseStudies'
import CTASection from '../components/shared/CTASection'

export const metadata: Metadata = {
  title: 'Aurbyn Labs | Technical Due Diligence & Research',
  description: 'Deep technical validation and research insights for transformative technology investments.',
}

export default function LabsPage() {
  return (
    <main className="bg-gradient-to-b from-[#2E294E] to-gray-900">
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <CTASection 
        title="Partner with Aurbyn Labs"
        description="Get expert technical validation and research insights for your investments"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  )
}