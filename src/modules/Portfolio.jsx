import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiCode,
  HiDeviceMobile,
  HiChip,
  HiExternalLink,
  HiDatabase,
  HiLightningBolt,
  HiCube
} from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import Card from '../components/Card'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      name: "CBC Disease Predictor",
      category: "ai",
      problem: "Medical professionals need accurate, fast disease detection based on Complete Blood Count (CBC) test results to diagnose Anemia and Leukemia early.",
      solution: "Built an AI-powered web application using RandomForest and XGBoost ML models that predicts Anemia and Leukemia with high accuracy based on CBC parameters. Features include real-time form validation, data preprocessing, and clear result visualization.",
      tech: ["React", "Python", "Flask", "TailwindCSS", "scikit-learn", "XGBoost", "Framer Motion"],
      github: "https://github.com/yasir2340na/cbc-disease-predictor",
      features: [
        "AI-powered disease prediction with ML models",
        "Dual disease analysis (Anemia & Leukemia)",
        "Real-time data validation and preprocessing",
        "Modern glassmorphism UI with animations",
        "Fully responsive across all devices"
      ],
      screenshot: null // To be added later
    },
    {
      id: 2,
      name: "TeamCollab",
      category: "web",
      problem: "Teams struggle with project coordination and real-time collaboration. Traditional tools are either too complex or lack essential features like AI assistance.",
      solution: "Developed a modern project management platform with Kanban boards, drag-and-drop task management, and real-time updates via Socket.IO. Integrated AI-powered task suggestions to help teams break down projects intelligently.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "TailwindCSS", "JWT", "Framer Motion"],
      github: "https://github.com/yasir2340na/teamcollab",
      liveDemo: "https://teamcollab-alpha.vercel.app",
      features: [
        "Real-time collaboration with Socket.IO",
        "AI-powered task suggestions",
        "Drag & drop Kanban board",
        "JWT-based authentication",
        "Project & task analytics dashboard"
      ],
      screenshot: null
    },
    {
      id: 3,
      name: "Time Analyzer",
      category: "web",
      problem: "People struggle to understand how they spend their time and identify productivity patterns. Most tracking apps are complex or require accounts.",
      solution: "Created a frontend-only time management analyzer that lets users log activities, categorize time usage, and visualize insights through charts. All data is stored locally using localStorage—no server needed.",
      tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Chart.js", "LocalStorage API"],
      github: "https://github.com/yasir2340na/Time-Analyzer",
      features: [
        "Activity tracking with categories",
        "Productive vs unproductive time analysis",
        "Interactive charts with Chart.js",
        "Smart pattern detection & suggestions",
        "100% client-side with localStorage"
      ],
      screenshot: null
    },
    {
      id: 4,
      name: "User Management System",
      category: "web",
      problem: "Admin dashboards and backend panels need efficient user management with CRUD operations, but building from scratch is time-consuming.",
      solution: "Built a responsive user management system with full CRUD functionality using PHP and MySQL. Features include form validation, search functionality, and a clean Bootstrap interface for easy admin operations.",
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "JavaScript"],
      github: "https://github.com/khalidhussain-dev/User-Management-System",
      features: [
        "Complete CRUD operations",
        "Form validation & error handling",
        "Real-time user search",
        "Responsive Bootstrap UI",
        "MySQL database integration"
      ],
      screenshot: null
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: HiCube },
    { id: 'web', name: 'Web Apps', icon: HiCode },
    { id: 'mobile', name: 'Mobile Apps', icon: HiDeviceMobile },
    { id: 'ai', name: 'AI Projects', icon: HiChip }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'web': return HiCode
      case 'mobile': return HiDeviceMobile
      case 'ai': return HiChip
      default: return HiCube
    }
  }

  const getCategoryColor = (category) => {
    switch(category) {
      case 'web': return 'text-primary'
      case 'mobile': return 'text-accent-purple'
      case 'ai': return 'text-accent-pink'
      default: return 'text-gray-400'
    }
  }

  return (
    <div id="portfolio" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Our <span className="text-gradient">Work</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Real projects that solve real problems. From AI-powered healthcare to team collaboration tools.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary to-accent-purple text-white scale-105'
                  : 'glass text-gray-300 hover:scale-105'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category)
              const categoryColor = getCategoryColor(project.category)

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full flex flex-col hover:scale-105 transition-all duration-300 group">
                    {/* Screenshot Placeholder */}
                    <div className="w-full h-48 mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent-purple/20 flex items-center justify-center overflow-hidden relative">
                      {project.screenshot ? (
                        <img 
                          src={project.screenshot} 
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <CategoryIcon className={`w-16 h-16 ${categoryColor} mx-auto mb-2`} />
                          <p className="text-gray-400 text-sm">Screenshot Coming Soon</p>
                        </div>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <CategoryIcon className={`w-4 h-4 ${categoryColor}`} />
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        {project.category === 'ai' ? 'AI Project' : project.category === 'web' ? 'Web App' : 'Mobile App'}
                      </span>
                    </div>

                    {/* Project Name */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>

                    {/* Problem Statement */}
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Problem:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-4 flex-grow">
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Solution:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded text-xs font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-gray-700">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors duration-300"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span className="text-sm font-semibold">View Code</span>
                      </a>
                      {project.liveDemo && (
                        <>
                          <span className="text-gray-700">|</span>
                          <a 
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors duration-300"
                          >
                            <HiExternalLink className="w-5 h-5" />
                            <span className="text-sm font-semibold">Live Demo</span>
                          </a>
                        </>
                      )}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
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
            Have a Project in Mind?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Let's build something great together. We're ready to turn your ideas into reality.
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

export default Portfolio
