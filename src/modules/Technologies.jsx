import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiCode,
  HiDatabase,
  HiChip,
  HiCube,
  HiLightningBolt,
  HiServer,
  HiTemplate
} from 'react-icons/hi'
import { 
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiPostgresql
} from 'react-icons/si'
import Card from '../components/Card'

const Technologies = () => {
  const techCategories = [
    {
      category: "Frontend Development",
      icon: HiCode,
      color: "primary",
      description: "Modern, responsive user interfaces",
      technologies: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React", icon: SiReact, color: "#61DAFB" }
      ]
    },
    {
      category: "Backend Development",
      icon: HiServer,
      color: "accent-purple",
      description: "Scalable server-side solutions",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: HiServer, color: "#007396" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: HiChip,
      color: "accent-pink",
      description: "Intelligent automation & predictions",
      technologies: [
        { name: "Machine Learning", icon: SiTensorflow, color: "#FF6F00" },
        { name: "Deep Learning", icon: SiPytorch, color: "#EE4C2C" },
        { name: "Model Deployment", icon: HiCube, color: "#0ea5e9" },
        { name: "Automation", icon: HiLightningBolt, color: "#a855f7" }
      ]
    },
    {
      category: "Tools & Databases",
      icon: HiDatabase,
      color: "primary",
      description: "Version control & data management",
      technologies: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "REST APIs", icon: HiTemplate, color: "#0ea5e9" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <div id="tech" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Our <span className="text-gradient">Tech Stack</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          We work with modern, proven technologies to build solutions that scale and perform.
        </p>
      </motion.div>

      {/* Tech Categories Grid */}
      <div className="max-w-7xl mx-auto space-y-12">
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <Card className="p-8 hover:scale-102 transition-all duration-300">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${category.color}/30 to-${category.color}/10 flex items-center justify-center`}>
                  <category.icon className={`w-7 h-7 text-${category.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              </div>

              {/* Technologies Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
              >
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group cursor-pointer"
                  >
                    <tech.icon 
                      className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm font-semibold text-gray-300 text-center group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-6xl mx-auto mt-20"
      >
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent-purple/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Technical Capabilities
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-300">Technologies</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-purple mb-2">4</div>
              <p className="text-gray-300">Core Specializations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-pink mb-2">100%</div>
              <p className="text-gray-300">Modern Stack</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-300">Learning & Adapting</p>
            </div>
          </div>
          <p className="text-gray-300 text-center mt-6">
            We constantly evolve our tech stack to deliver cutting-edge solutions.
          </p>
        </Card>
      </motion.div>

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
            Ready to Use the Right Tech?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            We'll recommend the best stack for your project—no unnecessary complexity.
          </p>
          <a href="#contact" className="inline-block">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent-purple rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
              Discuss Your Project
            </button>
          </a>
        </Card>
      </motion.div>
    </div>
  )
}

export default Technologies
