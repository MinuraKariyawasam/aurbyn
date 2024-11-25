// app/page.tsx
import { Metadata } from 'next'
import Navbar from '../app/components/shared/Navbar'
import Hero from '../app/components/home/Hero'
import InvestmentThesis from '../app/components/home/InvestmentThesis'
import FocusAreas from '../app/components/home/FocusAreas'
import CTASection from '../app/components/shared/CTASection'
import Footer from './components/shared/Footer'

export const metadata: Metadata = {
  title: 'Aurbyn - Shaping the Future of Innovation',
}

export default function Home() {
  return (
    <>
      <Hero />
      <InvestmentThesis />
      <FocusAreas />
      <CTASection 
        title="Ready to Shape the Future?" 
        description="We're looking for visionary founders building transformative solutions."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  )
}