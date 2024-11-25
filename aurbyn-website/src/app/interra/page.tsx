// app/interra/page.tsx
import { Metadata } from 'next'
import FeaturedVideo from '../components/interra/FeaturedVideo'
import Services from '../components/interra/Services'
import Impact from '../components/interra/Impact'
import CTASection from '../components/shared/CTASection'
import Hero from '../components/interra/Hero'

export const metadata: Metadata = {
  title: 'Interra | Tech Career Acceleration',
  description: 'Empowering tech undergraduates with mentorship, career coaching, and job preparation services.',
}

export default function InterraPage() {
  return (
    <>
        <Hero/>
      <FeaturedVideo />
      <Services />
      <Impact />
      <CTASection 
        title="Ready to Accelerate Your Career?" 
        description="Join our community of aspiring tech professionals"
        buttonText="Start Learning"
        buttonLink="https://www.admeta.lk/careerboost"
      />
    </>
  )
}