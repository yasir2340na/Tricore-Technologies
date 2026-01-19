import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['home', 'about', 'services', 'portfolio', 'tech', 'team', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for navbar height
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Technologies', href: '#tech' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const isActive = (href) => {
    const section = href.replace('#', '')
    return activeSection === section
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-2xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="relative w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center animate-glow">
              <span className="text-2xl font-bold text-white">T</span>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-gradient">TriCore</h1>
              <p className="text-[10px] text-gray-400 -mt-1">Technologies</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.href) 
                    ? 'text-primary font-bold' 
                    : 'text-gray-300 hover:text-primary-400'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <a href="#contact">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block px-6 py-2.5 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              Hire Us
            </motion.button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white text-3xl p-2"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="lg:hidden mt-4 glass rounded-2xl p-6"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-lg font-medium transition-colors border-b border-white/5 last:border-0 ${
                  isActive(item.href)
                    ? 'text-primary font-bold pl-4 border-l-4 border-primary'
                    : 'text-gray-300 hover:text-primary-400 hover:pl-4'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" className="block">
              <button className="w-full mt-4 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all">
                Hire Us
              </button>
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
