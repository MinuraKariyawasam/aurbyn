// app/approach/page.tsx
import { Metadata } from 'next'
import Hero from '../components/approach/Hero'
import Philosophy from '../components/approach/Philosophy'
import Process from '../components/approach/Process'
import CaseStudies from '../components/approach/CaseStudies'

export const metadata: Metadata = {
  title: 'Investment Approach | Aurbyn',
  description: 'Our investment philosophy and process for transforming visionary startups.',
}

export default function ApproachPage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Process />
      <CaseStudies />
    </>
  )
}