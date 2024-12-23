'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from '../Preloader'

export default function HomeWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { delay: 1, duration: 0.5 }
        }}
      >
        {children}
      </motion.div>
    </>
  )
}