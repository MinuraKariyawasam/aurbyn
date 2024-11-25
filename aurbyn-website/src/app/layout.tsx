// app/layout.tsx
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../app/components/shared/Footer'
import Navbar from '../app/components/shared/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Aurbyn',
    default: 'Aurbyn - Shaping the Future of Innovation',
  },
  description: 'Aurbyn is an elite investment ecosystem where visionary startups transform into industry leaders through strategic funding and acceleration.',
  keywords: [
    'venture capital',
    'startup acceleration',
    'innovation ecosystem',
    'strategic investment',
    'technology ventures',
    'Series A funding',
    'startup growth'
  ],
  openGraph: {
    title: 'Aurbyn - Shaping the Future of Innovation',
    description: 'Where visionary startups become industry leaders.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Aurbyn',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurbyn',
    description: 'Shaping the Future of Innovation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}