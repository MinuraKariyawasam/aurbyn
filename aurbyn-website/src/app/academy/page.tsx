// app/interra/page.tsx
import { Metadata } from 'next'
import FeaturedVideo from '../components/interra/FeaturedVideo'
import Services from '../components/interra/Services'
import Impact from '../components/interra/Impact'
import CTASection from '../components/shared/CTASectionInterra'
import Hero from '../components/interra/Hero'
import YouTubeSection from '../components/interra/YouTubeSection'
import LatestVideos from '../components/interra/LatestVideos'
import Testimonials from '../components/interra/Testimonials'

export const metadata: Metadata = {
  title: 'Aurbyn Academy | Tech Career Acceleration',
  description: 'Empowering tech undergraduates with mentorship, career coaching, and job preparation services.',
}

export default function InterraPage() {
  return (
    <>
      <Hero/>
      <YouTubeSection />
      <FeaturedVideo />
      <LatestVideos />
      <Services />
      <Impact />
      <Testimonials />
      <CTASection 
        title="Join Our Tech Success Community" 
        description="Subscribe to our channel and accelerate your tech career journey"
        buttonText="Subscribe Now"
        buttonLink="https://youtube.com/interra"
      />
    </>
  )
}