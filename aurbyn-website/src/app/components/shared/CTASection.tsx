// components/shared/CTASection.tsx
import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="bg-[#2E294E] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>
        <Link 
          href={buttonLink}
          className="inline-block bg-[#1B998B] text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}