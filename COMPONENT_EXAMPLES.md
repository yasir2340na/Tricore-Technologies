/* 
 * Component Usage Examples
 * Copy these snippets to use the reusable components in future modules
 */

// ============================================
// BUTTON COMPONENT
// ============================================

import Button from '../components/Button'
import { HiRocket, HiArrowRight, HiMail } from 'react-icons/hi'

// Primary Button (default)
<Button>Click Me</Button>

// Primary with Icon
<Button icon={HiRocket}>Launch Project</Button>

// Secondary Button
<Button variant="secondary">Learn More</Button>

// Outline Button
<Button variant="outline">Contact Us</Button>

// Large Size
<Button size="lg" icon={HiArrowRight}>Get Started</Button>

// Small Size
<Button size="sm">View Details</Button>

// Custom Styling
<Button className="w-full">Full Width Button</Button>

// With onClick
<Button onClick={() => console.log('Clicked!')}>
  Submit Form
</Button>


// ============================================
// CARD COMPONENT
// ============================================

import Card from '../components/Card'

// Basic Card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Card with Hover Animation (default)
<Card hover>
  <p>This card will lift on hover</p>
</Card>

// Card without Hover
<Card hover={false}>
  <p>Static card</p>
</Card>

// Card with Glow Effect
<Card glow>
  <h3>Featured Item</h3>
  <p>This card has a glowing border</p>
</Card>

// Card with Custom Styling
<Card className="p-8 bg-gradient-primary">
  <p>Custom styled card</p>
</Card>

// Service Card Example
<Card glow className="text-center">
  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
    <HiCode className="w-8 h-8 text-white" />
  </div>
  <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
  <p className="text-gray-400">Modern, scalable solutions</p>
</Card>


// ============================================
// FRAMER MOTION PATTERNS
// ============================================

import { motion } from 'framer-motion'

// Fade In on Load
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Slide Up on Load
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Stagger Children Animation
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

<motion.div
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</motion.div>

// Scroll-triggered Animation
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={containerVariants}
>
  Content appears when scrolled into view
</motion.div>

// Hover Scale Effect
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Interactive element
</motion.div>


// ============================================
// TAILWIND CSS UTILITY CLASSES
// ============================================

// Gradient Text
<h1 className="text-gradient">
  Gradient Heading
</h1>

// Gradient Background
<div className="bg-gradient-primary p-6 rounded-xl">
  Content with gradient background
</div>

// Glassmorphism
<div className="glass p-6 rounded-2xl">
  Glass effect with blur
</div>

// Glow Border
<div className="glow-border p-6 rounded-xl">
  Element with glowing border
</div>

// Responsive Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>

// Flexbox Centering
<div className="flex items-center justify-center min-h-screen">
  Centered content
</div>

// Responsive Padding
<div className="px-4 lg:px-8">
  Responsive horizontal padding
</div>


// ============================================
// ICON USAGE (React Icons)
// ============================================

import {
  HiCode,
  HiDeviceMobile,
  HiChip,
  HiLightningBolt,
  HiUserGroup,
  HiRocket,
  HiShieldCheck,
  HiTrendingUp,
  HiArrowRight,
  HiMenu,
  HiX,
  HiMail,
  HiPhone,
  HiLocationMarker
} from 'react-icons/hi'

// Basic Icon
<HiCode className="w-6 h-6 text-primary-400" />

// Icon in Circle
<div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
  <HiRocket className="w-6 h-6 text-white" />
</div>

// Icon with Text
<div className="flex items-center gap-2">
  <HiUserGroup className="w-5 h-5 text-primary-400" />
  <span>3+ Core Engineers</span>
</div>


// ============================================
// COLOR SCHEME REFERENCE
// ============================================

// Primary Colors
className="text-primary-400"     // #38bdf8 (Light Blue)
className="text-primary-500"     // #0ea5e9 (Primary Blue)
className="text-primary-600"     // #0284c7 (Dark Blue)

// Accent Colors
className="text-accent-purple"   // #a855f7 (Purple)
className="text-accent-pink"     // #ec4899 (Pink)
className="text-accent-orange"   // #f97316 (Orange)

// Grays
className="text-gray-100"        // Almost White
className="text-gray-300"        // Light Gray
className="text-gray-400"        // Medium Gray
className="text-gray-950"        // Almost Black (background)

// Gradients
className="bg-gradient-to-r from-primary-400 via-accent-purple to-accent-pink"
className="bg-gradient-to-br from-primary-600 via-accent-purple to-accent-pink"


// ============================================
// ANIMATION CLASSES
// ============================================

// Custom Animations (defined in index.css)
className="animate-gradient"     // Gradient animation
className="animate-float"        // Floating animation
className="animate-glow"         // Glowing effect
className="animate-pulse"        // Pulse effect (Tailwind default)
className="animate-bounce"       // Bounce effect (Tailwind default)


// ============================================
// SECTION LAYOUT TEMPLATE
// ============================================

<section id="section-name" className="relative py-20 overflow-hidden">
  {/* Background Gradient Orbs */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
  
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    {/* Section Badge */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4"
    >
      <span className="text-sm text-primary-400 font-medium">Section Label</span>
    </motion.div>
    
    {/* Section Title */}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display font-bold mb-6"
    >
      <span className="text-gradient">Section Title</span>
    </motion.h2>
    
    {/* Section Description */}
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-lg text-gray-400 mb-12 max-w-3xl"
    >
      Section description text goes here
    </motion.p>
    
    {/* Section Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Content items */}
    </div>
  </div>
</section>


// ============================================
// RESPONSIVE BREAKPOINTS
// ============================================

// Mobile First Approach
className="text-base md:text-lg lg:text-xl"

// Breakpoint Reference:
// sm:  640px
// md:  768px
// lg:  1024px
// xl:  1280px
// 2xl: 1536px

// Common Responsive Patterns:
className="flex-col md:flex-row"              // Stack on mobile, row on desktop
className="text-3xl md:text-5xl lg:text-7xl" // Responsive text size
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4" // Responsive grid
className="px-4 lg:px-8"                      // Responsive padding
className="hidden lg:block"                   // Hide on mobile, show on desktop
className="block lg:hidden"                   // Show on mobile, hide on desktop
