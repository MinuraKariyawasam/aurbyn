// app/ventures/page.tsx
import { Metadata } from 'next'
import { motion } from 'framer-motion'
import VenturesHero from '../components/ventures/VenturesHero'
import StartupJourney from '../components/ventures/StartupJourney'
import FounderSupport from '../components/ventures/FounderSupport'
import ValueAdd from '../components/ventures/ValueAdd'
import MentorNetwork from '../components/ventures/MentorNetwork'
import CTASection from '../components/shared/CTASection'

export const metadata: Metadata = {
  title: 'Investment Strategy & Portfolio | Aurbyn Capital',
  description: 'Discover our strategic investment approach, focus areas, and how we partner with revolutionary founders to build category-defining companies.',
}

export default function VenturesPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E]/90 via-white to-white"/>
      
      <div className="relative">
        <VenturesHero />
        <StartupJourney />
        <FounderSupport />
        <ValueAdd /> 
        <MentorNetwork /> 
        <CTASection 
          title="Ready to Build Something Revolutionary?" 
          description="Partner with us to transform your vision into reality."
          buttonText="Connect With Us"
          buttonLink="/contact"
        />
      </div>
    </main>
  )
}