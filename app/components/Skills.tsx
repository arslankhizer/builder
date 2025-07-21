'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const skills = [
  {
    name: 'ADOBE PREMIERE PRO',
    percentage: 95,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'ADOBE AFTER EFFECT',
    percentage: 85,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'SEO',
    percentage: 90,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'POST-PRODUCTION TECHNIQUES',
    percentage: 100,
    color: 'from-orange-500 to-red-500'
  }
]

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [animatedPercentages, setAnimatedPercentages] = useState(skills.map(() => 0))

  useEffect(() => {
    if (inView) {
      skills.forEach((skill, index) => {
        const timer = setTimeout(() => {
          let current = 0
          const increment = skill.percentage / 60 // 60 frames for smooth animation
          const interval = setInterval(() => {
            current += increment
            if (current >= skill.percentage) {
              current = skill.percentage
              clearInterval(interval)
            }
            setAnimatedPercentages(prev => {
              const newPercentages = [...prev]
              newPercentages[index] = Math.round(current)
              return newPercentages
            })
          }, 16) // ~60fps
        }, index * 200) // Stagger animations

        return () => clearTimeout(timer)
      })
    }
  }, [inView])

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-to-br from-light-bg via-light-primary/5 to-light-secondary/5 dark:from-dark-bg dark:via-dark-primary/5 dark:to-dark-secondary/5 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-light-primary/30 dark:bg-dark-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-light-secondary/30 dark:bg-dark-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text mb-6">
            Professional
            <span className="gradient-text dark:gradient-text-dark text-glow"> Skills</span>
          </h2>
          <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
            Expertise in industry-leading tools and techniques for professional video production
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass dark:glass-dark rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 box-glow dark:box-glow-dark border border-light-border dark:border-dark-border"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                    {skill.name}
                  </h3>
                  <motion.span
                    className="text-2xl font-bold gradient-text dark:gradient-text-dark"
                    animate={inView ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                  >
                    {animatedPercentages[index]}%
                  </motion.span>
                </div>
                
                {/* Progress Bar Background */}
                <div className="relative h-4 bg-light-text/10 dark:bg-dark-text/10 rounded-full overflow-hidden">
                  {/* Animated Progress Bar */}
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: '0%' }}
                    animate={inView ? { width: `${skill.percentage}%` } : { width: '0%' }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.2,
                      ease: 'easeOut'
                    }}
                  />
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={inView ? {
                      x: ['0%', '400%'],
                    } : {}}
                    transition={{
                      duration: 2,
                      delay: index * 0.2 + 0.5,
                      ease: 'easeInOut'
                    }}
                  />
                </div>

                {/* Skill Level Indicator */}
                <div className="flex justify-between text-sm text-light-text/60 dark:text-dark-text/60 mt-2">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text dark:gradient-text-dark mb-2">
              5+
            </div>
            <div className="text-light-text/70 dark:text-dark-text/70">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text dark:gradient-text-dark mb-2">
              200+
            </div>
            <div className="text-light-text/70 dark:text-dark-text/70">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text dark:gradient-text-dark mb-2">
              50+
            </div>
            <div className="text-light-text/70 dark:text-dark-text/70">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text dark:gradient-text-dark mb-2">
              24/7
            </div>
            <div className="text-light-text/70 dark:text-dark-text/70">
              Support Available
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
