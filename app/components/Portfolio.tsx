'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, X, ExternalLink, Filter } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'Cinematic Masterpiece',
    category: 'Cinematic',
    thumbnail: 'https://picsum.photos/600/400?random=1',
    videoUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    description: 'Cinematic storytelling with professional color grading and atmospheric sound design.',
  },
  {
    id: 2,
    title: 'YouTube Content Creation',
    category: 'YouTube',
    thumbnail: 'https://picsum.photos/600/400?random=2',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    description: 'Engaging YouTube content with dynamic editing and seamless transitions.',
  },
  {
    id: 3,
    title: 'Premium Reel',
    category: 'Reels',
    thumbnail: 'https://picsum.photos/600/400?random=3',
    videoUrl: 'https://vimeo.com/76979871',
    description: 'High-impact reel showcasing creative editing techniques and visual storytelling.',
  },
  {
    id: 4,
    title: 'Commercial Production',
    category: 'Ads',
    thumbnail: 'https://picsum.photos/600/400?random=4',
    videoUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    description: 'Professional commercial with brand storytelling and motion graphics.',
  },
  {
    id: 5,
    title: 'Tech Product Launch',
    category: 'Ads',
    thumbnail: 'https://picsum.photos/600/400?random=5',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    description: 'Product reveal video with sleek animations and modern transitions.',
  },
  {
    id: 6,
    title: 'Documentary Feature',
    category: 'Cinematic',
    thumbnail: 'https://picsum.photos/600/400?random=6',
    videoUrl: 'https://vimeo.com/76979871',
    description: 'Compelling documentary with interview cuts and archival footage.',
  },
]

const categories = ['All', 'YouTube', 'Ads', 'Reels', 'Cinematic']

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState<typeof portfolioItems[0] | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 bg-light-bg dark:bg-dark-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-light-primary dark:bg-dark-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-light-accent dark:bg-dark-accent rounded-full blur-3xl" />
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
            Featured
            <span className="text-light-primary dark:text-dark-primary text-glow"> Portfolio</span>
          </h2>
          <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
            A showcase of cinematic storytelling through carefully crafted video content
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-white shadow-lg box-glow dark:box-glow-dark'
                  : 'glass dark:glass-dark text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl glass dark:glass-dark hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  {/* Thumbnail */}
                  <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                    
                    {/* Play Button */}
                    <motion.button
                      onClick={() => setSelectedVideo(item)}
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-light-primary/20 dark:group-hover:bg-dark-primary/20 transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </motion.button>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-light-primary dark:bg-dark-primary text-white text-sm font-medium rounded-full">
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2 group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-light-text/70 dark:text-dark-text/70 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-light-bg dark:bg-dark-bg rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-light-text/10 dark:border-dark-text/10">
                <div>
                  <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-light-text/70 dark:text-dark-text/70">
                    {selectedVideo.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 hover:bg-light-text/10 dark:hover:bg-dark-text/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-light-text dark:text-dark-text" />
                </button>
              </div>

              {/* Video */}
              <div className="aspect-video bg-black">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-light-primary/20 dark:bg-dark-primary/20 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-light-primary dark:text-dark-primary ml-1" />
                    </div>
                    <p className="text-white/70">Video Player Placeholder</p>
                    <a
                      href={selectedVideo.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-light-primary dark:text-dark-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open in YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-light-text/80 dark:text-dark-text/80">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
