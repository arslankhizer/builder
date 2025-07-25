'use client'

import { motion } from 'framer-motion'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Portfolio } from './components/Portfolio'
import { Reviews } from './components/Reviews'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useInView } from 'react-intersection-observer'
import { Play, ChevronDown } from 'lucide-react'

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

    return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-light-bg dark:bg-dark-bg"
    >
            {/* Elite Background */}
      <div className="absolute inset-0 opacity-60">
        <div className="w-full h-full bg-gradient-to-br from-light-primary/10 via-transparent to-light-accent/10 dark:from-dark-primary/10 dark:to-dark-accent/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-light-secondary/20 dark:bg-dark-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border-2 border-light-primary/30 dark:border-dark-primary/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-light-accent/20 dark:bg-dark-accent/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border border-light-accent/40 dark:border-dark-accent/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-light-primary/30 dark:bg-dark-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="text-center space-y-8 px-4 relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-light-text dark:text-dark-text mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <motion.span
              className="block text-light-primary dark:text-dark-primary text-glow"
              animate={{
                textShadow: [
                  '0 0 10px currentColor',
                  '0 0 20px currentColor',
                  '0 0 30px currentColor',
                  '0 0 20px currentColor',
                  '0 0 10px currentColor'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              ARSLAN
            </motion.span>
            <motion.span
              className="block text-light-accent dark:text-dark-accent"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              EDIT'Z
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-elite font-light leading-tight gradient-text dark:gradient-text-dark"
        >
          Crafting Stories Frame by Frame
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl text-light-text/60 dark:text-dark-text/60 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting cinematic experiences through expert storytelling, dynamic editing, 
          and cutting-edge motion graphics. Every frame tells a story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
        >
          <motion.button
            onClick={scrollToAbout}
            className="group flex items-center space-x-3 cinematic-gradient dark:cinematic-gradient-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl box-glow dark:box-glow-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Watch My Reel</span>
          </motion.button>

          <motion.button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center space-x-3 glass dark:glass-dark text-light-text dark:text-dark-text px-8 py-4 rounded-full font-semibold text-lg hover:text-light-primary dark:hover:text-dark-primary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Portfolio</span>
          </motion.button>
        </motion.div>


      </div>

      
    </section>
  )
}

export default function Home() {
  return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}
