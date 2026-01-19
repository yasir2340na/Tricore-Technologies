import React from 'react'
import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import Card from '../components/Card'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Coming Soon",
      role: "Client Testimonial",
      company: "",
      rating: 5,
      text: "We're currently collecting testimonials from our clients. Check back soon to see what they're saying about working with TriCore Technologies!",
      image: null
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
        className="max-w-4xl mx-auto mb-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Client <span className="text-gradient">Testimonials</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hear from those who've worked with us. Real projects, real results, real feedback.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
              "{testimonials[0].text}"
            </p>
            <div>
              <p className="font-bold text-white mb-1">{testimonials[0].name}</p>
              <p className="text-sm text-gray-400">{testimonials[0].role}</p>
            </div>
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
