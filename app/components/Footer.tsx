'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/arslaneditz',
      color: 'hover:text-pink-500'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/@arslaneditz',
      color: 'hover:text-red-500'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/arslaneditz',
      color: 'hover:text-blue-500'
    },
    {
      icon: Mail,
      name: 'Email',
            url: 'mailto:arslaneditz@gmail.com',
      color: 'hover:text-green-500'
    }
  ]

    const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'YouTube Editing',
    'Commercial Videos',
    'Cinematic Content',
    'Motion Graphics',
    'Color Grading',
    'Sound Design'
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      ref={ref}
      className="bg-light-bg dark:bg-dark-bg border-t border-light-text/10 dark:border-dark-text/10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-light-primary dark:bg-dark-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-light-accent dark:bg-dark-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-4 gap-12 py-16"
        >
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4">
                <span className="text-light-primary dark:text-dark-primary">ARSLAN</span>
                <span className="text-light-accent dark:text-dark-accent"> EDIT'Z</span>
              </h3>
              <p className="text-light-text/70 dark:text-dark-text/70 text-lg leading-relaxed max-w-md">
                Creating cinematic experiences through expert video editing and motion design. 
                Every project tells a story, every frame matters.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-light-text/70 dark:text-dark-text/70">
                <Mail className="w-4 h-4" />
                                <span>arslaneditz@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-light-text/70 dark:text-dark-text/70">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-light-text/70 dark:text-dark-text/70">
                <MapPin className="w-4 h-4" />
                                <span>Lahore, Pakistan</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`p-3 glass dark:glass-dark rounded-lg text-light-text dark:text-dark-text ${social.color} transition-all duration-300 hover:scale-110 border border-light-border dark:border-dark-border`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-light-text/70 dark:text-dark-text/70 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-light-text/70 dark:text-dark-text/70"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-light-text/10 dark:border-dark-text/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-light-text/60 dark:text-dark-text/60 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start space-x-2">
                                <span>© 2025 ARSLAN EDIT'Z – Crafted with Precision</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              </p>
            </div>

            {/* Theme Toggle & Back to Top */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <motion.button
                onClick={scrollToTop}
                className="px-4 py-2 glass dark:glass-dark rounded-lg text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Top ↑
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent" />
      <div className="absolute bottom-0 right-0 w-24 h-1 bg-gradient-to-l from-light-accent to-transparent dark:from-dark-accent dark:to-transparent" />
    </footer>
  )
}
