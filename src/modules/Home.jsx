import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiCode, 
  HiDeviceMobile, 
  HiLightningBolt, 
  HiCube,
  HiChip,
  HiTrendingUp,
  HiUserGroup,
  HiShieldCheck,
  HiArrowRight,
  HiSparkles
} from 'react-icons/hi'
import Button from '../components/Button'
import Card from '../components/Card'

const Home = () => {
  const highlights = [
    {
      icon: HiCode,
      title: 'Web Development',
      description: 'Modern, scalable web applications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: HiDeviceMobile,
      title: 'Mobile Development',
      description: 'iOS & Android native solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: HiChip,
      title: 'AI / ML Solutions',
      description: 'Intelligent automation & insights',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: HiLightningBolt,
      title: 'Automation',
      description: 'Streamline your workflows',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const stats = [
    { icon: HiUserGroup, value: '3+', label: 'Core Engineers' },
    { icon: HiSparkles, value: '50+', label: 'Projects Delivered' },
    { icon: HiTrendingUp, value: '100%', label: 'Client Satisfaction' },
    { icon: HiShieldCheck, value: '24/7', label: 'Support Available' }
  ]

  const trustIndicators = [
    { icon: HiUserGroup, text: '3+ Core Engineers' },
    { icon: HiSparkles, text: 'Startup-Focused' },
    { icon: HiCube, text: 'End-to-End Solutions' }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Gradient Orbs Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-accent-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">Available for new projects</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">TriCore</span>
            <br />
            <span className="text-white">Building Smart</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-primary-400 to-accent-purple bg-clip-text">
              Web, Mobile & AI
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We transform ambitious ideas into powerful digital solutions. 
            Partner with us to build scalable systems that drive growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" icon={HiSparkles}>
              Hire Us
            </Button>
            <Button variant="secondary" size="lg" icon={HiArrowRight}>
              View Our Work
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 text-gray-400"
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <indicator.icon className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium">{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover glow className="text-center h-full">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="flex justify-center mt-20"
        >
          <div className="text-gray-500 text-sm flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
