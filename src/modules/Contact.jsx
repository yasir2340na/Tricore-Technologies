import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCheckCircle,
  HiExclamationCircle
} from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import Card from '../components/Card'
import Button from '../components/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: ''
  })
  const [formStatus, setFormStatus] = useState(null) // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    // Simulate form submission (replace with actual email service)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormStatus('success')
      setFormData({ name: '', email: '', projectDescription: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus(null), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "tricoretechnologies3@gmail.com",
      link: "mailto:tricoretechnologies3@gmail.com",
      color: "text-primary"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+92 340 3170885",
      link: "https://wa.me/923403170885",
      color: "text-green-500"
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Pakistan",
      link: null,
      color: "text-accent-purple"
    }
  ]

  return (
    <div id="contact" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Let's Work <span className="text-gradient">Together</span>
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed">
          Have an idea? Let's build it together.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="projectDescription" className="block text-sm font-semibold text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              {/* Success/Error Message */}
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                >
                  <HiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <p className="text-green-400 text-sm">
                    Message sent successfully! We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
                >
                  <HiExclamationCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We're here to answer your questions and discuss how we can help bring your project to life. 
              Reach out through any channel below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-400 mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors duration-300 break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Quick Response Card */}
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent-purple/10">
            <div className="flex items-center gap-3 mb-3">
              <HiCheckCircle className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Quick Response Guarantee</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We typically respond within 24 hours on business days. For urgent inquiries, 
              reach out via WhatsApp for faster response.
            </p>
          </Card>

          {/* Why Choose Us Card */}
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Why Work With Us?</h3>
            <ul className="space-y-3">
              {[
                'No commitment consultations',
                'Transparent pricing & timelines',
                'Direct communication—no middlemen',
                'Post-launch support included'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="text-primary mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent-purple/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Building?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            No pressure, no sales pitch—just an honest conversation about what's possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:tricoretechnologies3@gmail.com" 
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent-purple rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-white cursor-pointer"
              onClick={(e) => {
                window.location.href = 'mailto:tricoretechnologies3@gmail.com'
              }}
            >
              Email Us Directly
            </a>
            <a 
              href="https://wa.me/923403170885" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 glass rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-white flex items-center gap-2 cursor-pointer"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Chat
            </a>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default Contact
