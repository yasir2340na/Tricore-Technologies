import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, glow = false }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`glass rounded-2xl p-6 ${glow ? 'glow-border' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
