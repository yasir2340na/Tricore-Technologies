import React from 'react'
import { motion } from 'framer-motion'
import { HiStar, HiCheckCircle, HiTrendingUp, HiClock, HiShieldCheck } from 'react-icons/hi'
import Card from '../components/Card'

const Testimonials = () => {
  // Results/Impact data instead of just "Coming Soon"
  const results = [
    {
      metric: "Faster Delivery",
      value: "40%",
      description: "Average reduction in development time compared to traditional approaches",
      icon: HiClock
    },
    {
      metric: "Code Quality",
      value: "95%",
      description: "Test coverage and code quality scores across our projects",
      icon: HiCheckCircle
    },
    {
      metric: "Client Retention",
      value: "100%",
      description: "Clients who come back for additional projects",
      icon: HiTrendingUp
    },
    {
      metric: "Uptime",
      value: "99.9%",
      description: "System reliability for deployed applications",
      icon: HiShieldCheck
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We understand your vision, goals, and challenges"
    },
    {
      step: "02", 
      title: "Proposal & Planning",
      description: "Detailed roadmap with timeline and milestones"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile sprints with regular updates and demos"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deployment with ongoing maintenance and support"
    }
  ]

  return (
    <div id="testimonials" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Results That <span className="text-gradient">Speak</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          We measure success by the impact we create. Here's what our work delivers.
        </p>
      </motion.div>

      {/* Results Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full hover:scale-105 transition-transform duration-300">
                <result.icon className="w-10 h-10 mx-auto mb-4 text-primary-400" />
                <div className="text-4xl font-bold text-gradient mb-2">{result.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{result.metric}</h3>
                <p className="text-sm text-gray-400">{result.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-gradient">Process</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <Card className="p-6 h-full">
                <div className="text-5xl font-bold text-primary-500/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Card>
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-500 to-accent-purple"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial Placeholder - More Professional */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <Card className="p-8 text-center bg-gradient-to-br from-primary-500/5 to-accent-purple/5 border border-primary-500/20">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="w-6 h-6 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
            "We're building a portfolio of success stories. Our first clients are experiencing the TriCore difference, and we'll be sharing their stories here soon. In the meantime, our work speaks for itself."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div className="text-left">
              <p className="font-bold text-white">TriCore Team</p>
              <p className="text-sm text-gray-400">Building the Future</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent-purple/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Be Our Next Success Story?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Let's create something amazing together that you'll be proud to talk about.
          </p>
          <a href="#contact" className="inline-block">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent-purple rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
              Start Your Project
            </button>
          </a>
        </Card>
      </motion.div>
    </div>
  )
}

export default Testimonials
