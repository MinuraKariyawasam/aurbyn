'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PreloaderText = ({ words, index }: { words: string[], index: number }) => {
  return (
    <div className="relative flex flex-col items-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="text-5xl md:text-7xl font-medium tracking-tight text-white/90 font-sfpro text-center px-4"
        style={{ 
          WebkitFontSmoothing: 'antialiased',
          textShadow: '0 0 60px rgba(255,255,255,0.3)'
        }}
      >
        {words[index]}
      </motion.p>
      {index > 0 && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          className="h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6"
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      )}
    </div>
  )
}

const PremiumExitEffect = ({ isExiting }: { isExiting: boolean }) => {
  return (
    <div className="absolute inset-0 z-10">
      {/* Top slice */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#1B998B] to-[#2E294E]/80"
        initial={{ height: "0%" }}
        animate={isExiting ? { 
          height: ["0%", "50%", "50%"],
          y: ["0%", "0%", "100%"]
        } : {}}
        transition={{
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1],
          times: [0, 0.4, 1]
        }}
      />
      
      {/* Bottom slice */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B998B] to-[#2E294E]/80"
        initial={{ height: "0%" }}
        animate={isExiting ? { 
          height: ["0%", "50%", "50%"],
          y: ["0%", "0%", "-100%"]
        } : {}}
        transition={{
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1],
          times: [0, 0.4, 1]
        }}
      />

      {/* Center overlay */}
      <motion.div 
        className="absolute inset-0 bg-[#2E294E]"
        initial={{ opacity: 0 }}
        animate={isExiting ? { opacity: [0, 0, 1] } : {}}
        transition={{
          duration: 1.8,
          times: [0, 0.7, 1],
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

type Particle = {
  id: number;
  initialX: number;
  initialY: number;
}

type PreloaderProps = {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const words = [
    "welcome",
    "to a new era",
    "of venture capital",
    "aurbyn"
  ]
  const [index, setIndex] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isExiting, setIsExiting] = useState(false)
  
  useEffect(() => {
    const particleCount = 20
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        setIsExiting(true)
        setTimeout(onComplete, 1000) // Start content transition during the animation
      }, 2000)
      return
    }
    
    const timeout = setTimeout(() => {
      setIndex(index + 1)
    }, 1000)
    
    return () => clearTimeout(timeout)
  }, [index, words.length, onComplete])

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
    >
      {/* Solid background */}
      <div className="absolute inset-0 bg-[#2E294E]" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2E294E] via-[#1B998B]/20 to-[#2E294E]"
        animate={{
          background: [
            'linear-gradient(to bottom right, #2E294E, rgba(27, 153, 139, 0.2), #2E294E)',
            'linear-gradient(to bottom right, #2E294E, rgba(27, 153, 139, 0.3), #2E294E)',
            'linear-gradient(to bottom right, #2E294E, rgba(27, 153, 139, 0.2), #2E294E)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Premium exit effect */}
      <PremiumExitEffect isExiting={isExiting} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
              opacity: 0
            }}
            animate={{
              top: [null, '-20%'],
              opacity: isExiting ? 0 : [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <PreloaderText key={index} words={words} index={index} />
      </AnimatePresence>
    </motion.div>
  )
}