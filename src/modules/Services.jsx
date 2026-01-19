import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
  HiChip,
  HiDatabase,
  HiTemplate,
  HiCube,
  HiSparkles,
  HiTrendingUp
} from 'react-icons/hi'
import Card from '../components/Card'

const Services = () => {
  const services = [
    {
      category: "Web Development",
      icon: HiCode,
      color: "primary",
      description: "Full-stack web applications built with modern frameworks and scalable architecture. From concept to deployment.",
      bestFor: "Startups, SaaS platforms, Enterprise dashboards",
      offerings: [
        {
          icon: HiTemplate,
          title: "React / Modern JS",
          description: "Fast, interactive web apps using React, Next.js, or Vue. Clean code, smooth UX.",
          bestFor: "Modern web apps, SPAs"
        },
        {
          icon: HiCube,
          title: "Full-Stack Development",
          description: "Complete web solutions with frontend, backend, and database—all working together seamlessly.",
          bestFor: "MVP launches, complete products"
        },
        {
          icon: HiTemplate,
          title: "Admin Panels & Dashboards",
          description: "Custom admin interfaces for managing users, data, and operations. Built for efficiency.",
          bestFor: "Business tools, internal systems"
        },
        {
          icon: HiDatabase,
          title: "APIs & Backend",
          description: "RESTful APIs and backend services with Node.js, Express, and proper database design.",
          bestFor: "Mobile apps, integrations"
        }
      ]
    },
    {
      category: "Mobile App Development",
      icon: HiDeviceMobile,
      color: "accent-purple",
      description: "Native and cross-platform mobile apps for Android and iOS. Performance-focused and user-friendly.",
      bestFor: "Product launches, Mobile-first businesses",
      offerings: [
        {
          icon: HiDeviceMobile,
          title: "Android & iOS Apps",
          description: "Native mobile applications built for performance, following platform-specific design guidelines.",
          bestFor: "High-performance apps"
        },
        {
          icon: HiCube,
          title: "Flutter / Cross-Platform",
          description: "Single codebase for both Android and iOS. Faster development without compromising quality.",
          bestFor: "Startups, MVP launches"
        },
        {
          icon: HiTemplate,
          title: "App UI/UX Implementation",
          description: "Pixel-perfect designs brought to life with smooth animations and intuitive interactions.",
          bestFor: "User-focused apps"
        },
        {
          icon: HiDatabase,
          title: "Backend + App Integration",
          description: "Connect your app to cloud services, databases, and APIs. Real-time sync, push notifications.",
          bestFor: "Full-featured apps"
        }
      ]
    },
    {
      category: "AI & Automation",
      icon: HiLightningBolt,
      color: "accent-pink",
      description: "AI-powered solutions that automate workflows, analyze data, and make intelligent decisions at scale.",
      bestFor: "Data-driven companies, Process automation",
      offerings: [
        {
          icon: HiChip,
          title: "AI/ML Model Development",
          description: "Custom machine learning models trained on your data. From image recognition to text analysis.",
          bestFor: "Data-rich businesses"
        },
        {
          icon: HiLightningBolt,
          title: "Deep Learning Solutions",
          description: "Advanced neural networks for complex problems—computer vision, NLP, predictive analytics.",
          bestFor: "Research, Complex AI needs"
        },
        {
          icon: HiSparkles,
          title: "AI Chatbots & Automation",
          description: "Intelligent chatbots and workflow automation that handle repetitive tasks 24/7.",
          bestFor: "Customer support, Operations"
        },
        {
          icon: HiTrendingUp,
          title: "Data Analysis & Prediction",
          description: "Turn raw data into insights. Predictive models that help you make better business decisions.",
          bestFor: "Analytics, Forecasting"
        }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div id="services" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          What We <span className="text-gradient">Build</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          We focus on three core areas where our team excels. Each service is designed 
          to solve real problems and deliver measurable results.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto space-y-24">
        {services.map((service, serviceIndex) => (
          <motion.div
            key={service.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
            className="space-y-8"
          >
            {/* Service Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <service.icon className={`w-12 h-12 text-${service.color}`} />
                <h2 className="text-3xl md:text-4xl font-bold">{service.category}</h2>
              </div>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-3">
                {service.description}
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-primary font-semibold">Best for:</span> {service.bestFor}
              </p>
            </div>

            {/* Offerings Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {service.offerings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  variants={itemVariants}
                >
                  <Card className="p-6 h-full hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-${service.color}/20 to-${service.color}/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <offering.icon className={`w-6 h-6 text-${service.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          {offering.description}
                        </p>
                        <p className="text-xs text-gray-400">
                          <span className="text-primary font-semibold">Best for:</span> {offering.bestFor}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Divider - except after last service */}
            {serviceIndex < services.length - 1 && (
              <div className="pt-12">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-24 text-center"
      >
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent-purple/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Let's discuss your project. We'll help you figure out the right approach.
          </p>
          <a href="#contact" className="inline-block">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent-purple rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
              Start a Conversation
            </button>
          </a>
        </Card>
      </motion.div>
    </div>
  )
}

export default Services
