'use client'

import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  
  // Always call hooks at the top level - never conditionally
  const { theme, toggleTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Return a placeholder during SSR to avoid hydration mismatches
  if (!mounted) {
    return (
      <button className="p-3 rounded-full glass dark:glass-dark">
        <Moon className="w-5 h-5 text-dark-primary" />
      </button>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full glass dark:glass-dark hover:scale-110 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="w-5 h-5 text-light-primary" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? -180 : 0,
          scale: theme === 'light' ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-dark-primary" />
      </motion.div>
    </motion.button>
  )
}
