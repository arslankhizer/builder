'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, Youtube, Linkedin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

    const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arslaneditz@gmail.com',
      href: 'mailto:arslaneditz@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92-XXX-XXXXXXX',
      href: 'tel:+92XXXXXXXXX'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/arslaneditz',
      color: 'text-pink-500'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/@arslaneditz',
      color: 'text-red-500'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/arslaneditz',
      color: 'text-blue-500'
    }
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-light-bg dark:bg-dark-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-light-primary dark:bg-dark-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-light-accent dark:bg-dark-accent rounded-full blur-3xl" />
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
            Let's Create
            <span className="text-light-primary dark:text-dark-primary text-glow"> Together</span>
          </h2>
          <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your next cinematic project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8 box-glow dark:box-glow-dark">
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light-bg/50 dark:bg-dark-bg/50 border border-light-text/20 dark:border-dark-text/20 rounded-lg focus:border-light-primary dark:focus:border-dark-primary focus:outline-none transition-colors text-light-text dark:text-dark-text"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light-bg/50 dark:bg-dark-bg/50 border border-light-text/20 dark:border-dark-text/20 rounded-lg focus:border-light-primary dark:focus:border-dark-primary focus:outline-none transition-colors text-light-text dark:text-dark-text"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-light-bg/50 dark:bg-dark-bg/50 border border-light-text/20 dark:border-dark-text/20 rounded-lg focus:border-light-primary dark:focus:border-dark-primary focus:outline-none transition-colors text-light-text dark:text-dark-text"
                    placeholder="Project subject"
                  />
                </div>

                <div>
                  <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-light-bg/50 dark:bg-dark-bg/50 border border-light-text/20 dark:border-dark-text/20 rounded-lg focus:border-light-primary dark:focus:border-dark-primary focus:outline-none transition-colors text-light-text dark:text-dark-text resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-white hover:scale-105'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass dark:glass-dark rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-light-primary/20 dark:bg-dark-primary/20 rounded-lg">
                      <info.icon className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                    </div>
                    <div>
                      <div className="text-light-text/70 dark:text-dark-text/70 text-sm">
                        {info.label}
                      </div>
                      <div className="text-light-text dark:text-dark-text font-medium">
                        {info.href !== '#' ? (
                          <a href={info.href} className="hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          info.value
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-light-text/10 dark:border-dark-text/10">
                <h4 className="text-light-text dark:text-dark-text font-semibold mb-4">
                  Follow My Work
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className={`p-3 glass dark:glass-dark rounded-lg hover:scale-110 transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass dark:glass-dark rounded-2xl p-8 h-64"
            >
              <div className="w-full h-full bg-gradient-to-br from-light-primary/20 via-light-accent/10 to-light-primary/20 dark:from-dark-primary/20 dark:via-dark-accent/10 dark:to-dark-primary/20 rounded-lg flex items-center justify-center border border-light-text/10 dark:border-dark-text/10">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 mx-auto text-light-primary dark:text-dark-primary" />
                  <p className="text-light-text/70 dark:text-dark-text/70 font-medium">
                    Interactive Map
                  </p>
                  <p className="text-light-text/50 dark:text-dark-text/50 text-sm">
                    Los Angeles, CA
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
