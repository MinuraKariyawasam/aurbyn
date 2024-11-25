// app/ventures/page.tsx
import { Metadata } from 'next'
import VenturesHero from '../components/ventures/Hero'
import InvestmentAreas from '../components/ventures/InvestmentAreas'
import Approach from '../components/ventures/Approach'
import CTASection from '../components/shared/CTASection'

export const metadata: Metadata = {
  title: 'Investment Focus | Aurbyn',
  description: 'Strategic investments in transformative technologies and innovative startups.',
}

export default function VenturesPage() {
  return (
    <>
      <VenturesHero />
      <InvestmentAreas />
      <Approach />
      <CTASection 
        title="Ready to Accelerate Your Career?" 
        description="Join our community of aspiring tech professionals"
        buttonText="Start Learning"
        buttonLink="https://www.admeta.lk/careerboost"
      />
    </>
  )
}