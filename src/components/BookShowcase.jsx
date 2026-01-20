import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiChevronLeft, 
  HiChevronRight, 
  HiX,
  HiExternalLink,
  HiCode
} from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const BookShowcase = ({ projects, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState('next')

  const handleNextPage = () => {
    if (currentPage < projects.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setFlipDirection('next')
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setFlipDirection('prev')
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNextPage()
      } else if (e.key === 'ArrowLeft') {
        handlePrevPage()
      } else if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, isFlipping])

  const currentProject = projects[currentPage]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-50 text-white/80 hover:text-white transition-colors"
      >
        <HiX className="w-8 h-8" />
      </button>

      {/* 3D Book Container */}
      <div 
        className="relative max-w-6xl w-full h-[80vh] perspective-book"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Book */}
        <div className="book-container">
          {/* Left Page (Static - Cover or Previous Content) */}
          <motion.div 
            className="book-page book-page-left"
            initial={{ rotateY: 0 }}
          >
            <div className="book-page-content page-left-content">
              <div className="flex flex-col justify-between h-full p-8 lg:p-12">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-gradient">
                      TriCore
                    </h1>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                      Portfolio
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mb-8"></div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Explore our collection of innovative projects and solutions.
                      Each page tells a story of problem-solving and creativity.
                    </p>
                  </motion.div>
                </div>
                
                <div className="text-gray-400 text-sm">
                  <p>Project {currentPage + 1} of {projects.length}</p>
                  <div className="flex gap-2 mt-4">
                    {projects.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx === currentPage 
                            ? 'w-8 bg-primary-500' 
                            : 'w-2 bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Page (Flipping Content) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className={`book-page book-page-right ${isFlipping ? 'flipping' : ''} ${
                flipDirection === 'next' ? 'flip-next' : 'flip-prev'
              }`}
              initial={{ 
                rotateY: flipDirection === 'next' ? 0 : -180 
              }}
              animate={{ 
                rotateY: isFlipping 
                  ? (flipDirection === 'next' ? -180 : 0)
                  : 0
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              <div className="book-page-content page-right-content">
                <div className="h-full overflow-y-auto p-8 lg:p-12 custom-scrollbar">
                  {/* Project Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: isFlipping ? 0.4 : 0 }}
                  >
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-6">
                      <HiCode className="w-5 h-5 text-primary-400" />
                      <span className="text-sm font-semibold text-primary-400 uppercase tracking-wide">
                        {currentProject.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                      {currentProject.name}
                    </h2>

                    {/* Problem Statement */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-accent-purple mb-3">
                        The Problem
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {currentProject.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-accent-pink mb-3">
                        Our Solution
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {currentProject.solution}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-primary-400 mb-4">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.tech.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-green-400 mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {currentProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                      {currentProject.github && (
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 text-white font-semibold"
                        >
                          <FaGithub className="w-5 h-5" />
                          View Code
                        </a>
                      )}
                      {currentProject.liveDemo && (
                        <a
                          href={currentProject.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-purple hover:from-primary-500 hover:to-accent-purple/90 rounded-lg transition-all duration-300 text-white font-semibold"
                        >
                          <HiExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0 || isFlipping}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-50 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${
            currentPage === 0 || isFlipping
              ? 'opacity-30 cursor-not-allowed'
              : 'opacity-100 hover:bg-white/20 hover:scale-110'
          }`}
        >
          <HiChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={handleNextPage}
          disabled={currentPage === projects.length - 1 || isFlipping}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-50 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${
            currentPage === projects.length - 1 || isFlipping
              ? 'opacity-30 cursor-not-allowed'
              : 'opacity-100 hover:bg-white/20 hover:scale-110'
          }`}
        >
          <HiChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/60 text-sm">
        <p>Use arrow buttons or keyboard ← → to navigate</p>
      </div>
    </motion.div>
  )
}

export default BookShowcase
