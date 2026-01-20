import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker,
  HiArrowUp,
  HiHeart
} from 'react-icons/hi'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaWhatsapp,
  FaInstagram
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'AI Solutions', href: '#services' },
    { name: 'Automation', href: '#services' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/khalidhussain-dev', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/923403170885', label: 'WhatsApp' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-950 border-t border-white/5">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-purple rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">TriCore</h3>
                  <p className="text-xs text-gray-400">Technologies</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Building smart Web, Mobile & AI solutions. We transform ambitious ideas into powerful digital products.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-purple flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-primary-500 group-hover:w-4 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-primary-500 group-hover:w-4 transition-all duration-300"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-6 text-lg">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:tricoretechnologies3@gmail.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    <HiMail className="w-5 h-5 text-primary-500" />
                    <span>tricoretechnologies3@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/923403170885"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    <FaWhatsapp className="w-5 h-5 text-green-500" />
                    <span>+92 340 3170885</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <HiLocationMarker className="w-5 h-5 text-accent-purple" />
                  <span>Pakistan</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} TriCore Technologies. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <HiHeart className="w-4 h-4 text-red-500 animate-pulse" /> in Pakistan
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-purple rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-500/30 z-40 hover:shadow-xl hover:shadow-primary-500/50 transition-shadow duration-300"
        aria-label="Back to top"
      >
        <HiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer
