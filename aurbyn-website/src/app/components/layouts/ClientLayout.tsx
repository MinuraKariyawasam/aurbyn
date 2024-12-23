'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from '../Preloader'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [contentVisible, setContentVisible] = useState(!isLoading)
  
  useEffect(() => {
    const hasPreloaderBeenShown = sessionStorage.getItem('preloaderShown')
    
    if (!hasPreloaderBeenShown) {
      setIsLoading(true)
      setContentVisible(false)
      sessionStorage.setItem('preloaderShown', 'true')
    }
  }, [])

  const handleComplete = () => {
    // First trigger the preloader exit animation
    const exitDelay = 1200 // Match with preloader exit duration
    
    // Start fading in the content slightly before preloader finishes exiting
    setTimeout(() => {
      setContentVisible(true)
    }, exitDelay - 200)
    
    // Finally remove the preloader
    setTimeout(() => {
      setIsLoading(false)
    }, exitDelay)
  }

  return (
    <>
      <style jsx global>{`
        .font-sfpro {
          font-family: -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', Roboto, sans-serif;
        }
        
        body {
          background-color: #2E294E;
        }
      `}</style>

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={handleComplete} />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: contentVisible ? 1 : 0,
          transition: { 
            duration: 2,
            ease: [0.43, 0.13, 0.23, 0.96]
          }
        }}
      >
        {children}
      </motion.div>
    </>
  )
}