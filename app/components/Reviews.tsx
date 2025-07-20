'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5,
    text: 'Arslan transformed our product launch video into a cinematic masterpiece. The attention to detail and creative vision exceeded all expectations.',
    logo: '🚀'
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Creative Studios',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 5,
    text: 'Working with Arslan was incredible. He understood our brand vision and delivered content that perfectly captured our message with stunning visual effects.',
    logo: '🎨'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'YouTube Creator',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 5,
    text: 'My channel growth exploded after Arslan started editing my videos. The quality and engagement rates improved dramatically. Highly recommended!',
    logo: '📺'
  },
  {
    id: 4,
    name: 'David Kim',
    company: 'Brand Agency',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 5,
    text: 'Professional, creative, and always on time. Arslan brings a unique cinematic style that sets our content apart from the competition.',
    logo: '✨'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    company: 'E-commerce Brand',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    rating: 5,
    text: 'Our product videos became conversion machines after Arslan\'s magic touch. The ROI on video marketing increased by 300%.',
    logo: '💎'
  },
]

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-scroll functionality
  useEffect(() => {
    if (inView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [inView])

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    resetAutoScroll()
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    resetAutoScroll()
  }

  const resetAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length)
      }, 5000)
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? 'text-yellow-400 fill-current'
            : 'text-light-text/30 dark:text-dark-text/30'
        }`}
      />
    ))
  }

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-20 bg-gradient-to-br from-light-bg via-light-primary/5 to-light-accent/5 dark:from-dark-bg dark:via-dark-primary/5 dark:to-dark-accent/5 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-light-primary/30 dark:border-dark-primary/30 rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-light-accent/20 dark:bg-dark-accent/20 rounded-lg rotate-45 animate-float" />
        </div>
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
            Client
            <span className="text-light-primary dark:text-dark-primary text-glow"> Reviews</span>
          </h2>
          <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
            Hear what clients say about their cinematic storytelling experience
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Review Card */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="glass dark:glass-dark rounded-2xl p-8 lg:p-12 h-full flex flex-col justify-center relative box-glow dark:box-glow-dark">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-light-primary dark:text-dark-primary opacity-50 mb-6" />
                  
                  {/* Review Text */}
                  <blockquote className="text-xl lg:text-2xl text-light-text dark:text-dark-text leading-relaxed mb-8 flex-1 flex items-center">
                    &ldquo;{reviews[currentIndex].text}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={reviews[currentIndex].avatar}
                        alt={reviews[currentIndex].name}
                        className="w-16 h-16 rounded-full border-2 border-light-primary dark:border-dark-primary"
                      />
                      <div>
                        <h4 className="font-bold text-light-text dark:text-dark-text text-lg">
                          {reviews[currentIndex].name}
                        </h4>
                        <p className="text-light-text/70 dark:text-dark-text/70">
                          {reviews[currentIndex].company}
                        </p>
                        <div className="flex items-center space-x-1 mt-1">
                          {renderStars(reviews[currentIndex].rating)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Company Logo */}
                    <div className="text-4xl">
                      {reviews[currentIndex].logo}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <motion.button
              onClick={prevReview}
              className="p-3 glass dark:glass-dark rounded-full hover:bg-light-primary/20 dark:hover:bg-dark-primary/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-light-text dark:text-dark-text" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    resetAutoScroll()
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-light-primary dark:bg-dark-primary scale-125'
                      : 'bg-light-text/30 dark:bg-dark-text/30 hover:bg-light-primary/50 dark:hover:bg-dark-primary/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextReview}
              className="p-3 glass dark:glass-dark rounded-full hover:bg-light-primary/20 dark:hover:bg-dark-primary/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-light-text dark:text-dark-text" />
            </motion.button>
          </div>

          {/* Testimonial Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">
                5.0
              </div>
              <div className="text-light-text/70 dark:text-dark-text/70">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">
                50+
              </div>
              <div className="text-light-text/70 dark:text-dark-text/70">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">
                98%
              </div>
              <div className="text-light-text/70 dark:text-dark-text/70">
                Return Rate
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
