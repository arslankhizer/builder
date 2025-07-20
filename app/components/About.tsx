'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Award, Users, Clock } from 'lucide-react'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Award, value: '200+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden bg-light-bg dark:bg-dark-bg"
    >
      {/* Background Video Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-light-primary/20 via-transparent to-light-accent/20 dark:from-dark-primary/20 dark:to-dark-accent/20" />
        <div className="absolute inset-0 vhs-static bg-black/5" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-light-primary/30 dark:border-dark-primary/30 rounded-full animate-float" />
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-light-accent/20 dark:bg-dark-accent/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text"
            >
              Crafting
              <span className="text-light-primary dark:text-dark-primary text-glow"> Cinematic </span>
              Stories
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-light-text/80 dark:text-dark-text/80 leading-relaxed"
            >
              Professional video editor and motion designer specializing in YouTube content, 
              commercial videos, and cinematic storytelling. Every frame tells a story, 
              every cut creates emotion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="glass dark:glass-dark rounded-lg p-6 text-center min-w-[120px] box-glow dark:box-glow-dark"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-light-primary dark:text-dark-primary" />
                  <div className="text-2xl font-bold text-light-text dark:text-dark-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-light-text/70 dark:text-dark-text/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-3 bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>View My Work</span>
            </motion.button>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden glass dark:glass-dark">
              {/* Placeholder for video reel */}
              <div className="w-full h-full bg-gradient-to-br from-light-primary/20 via-light-accent/10 to-light-primary/20 dark:from-dark-primary/20 dark:via-dark-accent/10 dark:to-dark-primary/20 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-center space-y-4"
                >
                  <div className="w-20 h-20 mx-auto bg-light-primary/20 dark:bg-dark-primary/20 rounded-full flex items-center justify-center border-2 border-light-primary dark:border-dark-primary">
                    <Play className="w-8 h-8 text-light-primary dark:text-dark-primary ml-1" />
                  </div>
                  <p className="text-light-text/70 dark:text-dark-text/70 font-medium">
                                        Demo Video Reel
                  </p>
                </motion.div>
              </div>
              
              {/* Frame Border Effect */}
              <div className="absolute inset-0 border-4 border-light-text/10 dark:border-dark-text/10 rounded-2xl pointer-events-none" />
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-light-primary dark:border-dark-primary" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-light-primary dark:border-dark-primary" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-light-primary dark:border-dark-primary" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-light-primary dark:border-dark-primary" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass dark:glass-dark rounded-full px-4 py-2 text-sm font-semibold text-light-primary dark:text-dark-primary border border-light-primary/30 dark:border-dark-primary/30"
            >
              ✨ Available for Hire
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
