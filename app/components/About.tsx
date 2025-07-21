'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Play, Award, Users, Clock, Eye } from 'lucide-react'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isHovered, setIsHovered] = useState(false)

  const stats = [
    { icon: Award, value: '200+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
  ]

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden bg-light-bg dark:bg-dark-bg py-20"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-light-secondary/20 dark:bg-dark-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text mb-6">
                Meet
                <span className="gradient-text dark:gradient-text-dark text-glow"> Arslan</span>
              </h2>
              <div className="w-20 h-1 cinematic-gradient dark:cinematic-gradient-dark rounded-full mb-8"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-light-text/80 dark:text-dark-text/80 leading-relaxed font-light"
            >
              I'm Arslan, a passionate video editor turning raw footage into cinematic stories. 
              I specialize in editing YouTube content, commercials, reels, and narrative pieces 
              that move audiences and create lasting impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-light-text/70 dark:text-dark-text/70 leading-relaxed"
            >
              Every project is an opportunity to craft something extraordinary — where technical 
              precision meets creative vision to deliver results that exceed expectations.
            </motion.p>

            {/* Stats */}
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
                  className="glass dark:glass-dark rounded-xl p-6 text-center min-w-[130px] box-glow dark:box-glow-dark border border-light-border dark:border-dark-border"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-light-primary dark:text-dark-primary" />
                  <div className="text-2xl font-bold gradient-text dark:gradient-text-dark">
                    {stat.value}
                  </div>
                  <div className="text-sm text-light-text/70 dark:text-dark-text/70 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              onClick={scrollToPortfolio}
              className="group flex items-center space-x-3 cinematic-gradient dark:cinematic-gradient-dark text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-2xl box-glow dark:box-glow-dark"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>See My Work</span>
            </motion.button>
          </motion.div>

          {/* Right: Interactive Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-[600px] rounded-2xl overflow-hidden cinematic-frame cursor-pointer"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                    alt="Arslan - Professional Video Editor"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Cinematic Border Frame */}
                <div className="absolute inset-0 border-4 border-light-primary/30 dark:border-dark-primary/30 rounded-2xl pointer-events-none" />
                <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-light-primary dark:border-dark-primary" />
                <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-light-primary dark:border-dark-primary" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-l-4 border-b-4 border-light-primary dark:border-dark-primary" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-light-primary dark:border-dark-primary" />

                {/* Hover Effects */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      {/* Film Grain Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 film-grain bg-black/10"
                      />

                      {/* Glitch Effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-light-primary/10 via-transparent to-light-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary/10 animate-glitch"
                      />

                      {/* Overlay Text */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          className="text-center space-y-4"
                        >
                          <h3 className="text-4xl font-bold text-white glitch-effect" data-text="Crafting Stories">
                            Crafting Stories
                          </h3>
                          <p className="text-2xl text-light-secondary dark:text-dark-secondary font-light">
                            Frame by Frame
                          </p>
                          <motion.div
                            animate={{ 
                              boxShadow: [
                                '0 0 20px rgba(127, 0, 255, 0.5)',
                                '0 0 40px rgba(0, 255, 255, 0.5)',
                                '0 0 20px rgba(127, 0, 255, 0.5)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                          >
                            <Play className="w-6 h-6 text-white ml-1" />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                {/* Scanning Line Effect */}
                <motion.div
                  animate={{
                    y: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-light-secondary/80 dark:via-dark-secondary/80 to-transparent"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass dark:glass-dark rounded-full px-6 py-3 text-sm font-semibold gradient-text dark:gradient-text-dark border border-light-border dark:border-dark-border box-glow dark:box-glow-dark"
              >
                ✨ Available for Hire
              </motion.div>

              {/* Geometric Accent */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -bottom-8 -left-8 w-20 h-20 border-2 border-light-primary/30 dark:border-dark-primary/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
