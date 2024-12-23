// app/labs/page.tsx
import { Metadata } from 'next'
import Hero from '../components/labs/Hero'
import Services from '../components/labs/Services'
import Process from '../components/labs/Process'
import CaseStudies from '../components/labs/ResearchInsights'
import CTASection from '../components/shared/CTASection'
import Methodology from '../components/labs/Methodology'
import TechnologyFocus from '../components/labs/TechnologyFocus'
import ResearchInsights from '../components/labs/ResearchInsights'

export const metadata: Metadata = {
  title: 'Aurbyn Labs | Technical Due Diligence & Research',
  description: 'Deep technical validation and research insights for transformative technology investments.',
}

export default function LabsPage() {
  return (
    <main className="bg-gradient-to-b from-[#2E294E] to-gray-900">
      <Hero />
      <Services />
      <Methodology />
      <TechnologyFocus />
      <Process />
      <ResearchInsights />
      <CTASection
        title="Partner with Aurbyn Labs"
        description="Get expert technical validation and research insights for your investments"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  )
}