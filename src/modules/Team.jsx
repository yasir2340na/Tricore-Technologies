import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
  HiChip,
  HiDatabase,
  HiCube
} from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import Card from '../components/Card'

// Import team images
import khalidImage from '../team pictures/khalid hussain.jpg'
import yasirImage from '../team pictures/yasir ali.jpg'
import waseemImage from '../team pictures/waseem mazari.png'

const Team = () => {
  const teamMembers = [
    {
      name: "Khalid Hussain",
      role: "Founder / Lead Developer",
      title: "Technical architecture & delivery",
      image: khalidImage,
      skills: [
        { icon: HiCode, name: "Web Development" },
        { icon: HiDeviceMobile, name: "Mobile Apps" },
        { icon: HiLightningBolt, name: "AI Automation" }
      ],
      expertise: "Experience focus",
      github: "https://github.com/khalidhussain-dev",
      description: "Leads technical architecture and ensures delivery meets the highest standards. Specializes in building scalable web and mobile solutions with AI integration."
    },
    {
      name: "Yasir Ali",
      role: "Manager / AI Engineer",
      title: "AI strategy & project management",
      image: yasirImage,
      skills: [
        { icon: HiChip, name: "AI & Machine Learning" },
        { icon: HiCube, name: "Deep Learning" },
        { icon: HiLightningBolt, name: "Solution Planning" }
      ],
      expertise: "Client communication & management",
      github: "https://github.com/yasir2340na",
      description: "Drives AI strategy and manages client relationships. Expert in translating complex technical solutions into business value and ensuring project success."
    },
    {
      name: "Waseem",
      role: "Full-Stack Developer / Manager",
      title: "System reliability & performance",
      image: waseemImage,
      skills: [
        { icon: HiCode, name: "Python & Java" },
        { icon: HiDatabase, name: "Backend Systems" },
        { icon: HiCube, name: "Database & Integrations" }
      ],
      expertise: "Full-Stack Development",
      github: null, // To be added
      description: "Ensures system reliability and optimal performance. Specializes in backend architecture, database design, and seamless integrations across platforms."
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div id="team" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Meet the <span className="text-gradient">Team</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Real people with real expertise. No outsourcing, no freelancers—just a dedicated team 
          committed to building solutions that work.
        </p>
      </motion.div>

      {/* Team Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            variants={itemVariants}
            className="flex"
          >
            <Card className="p-6 flex flex-col h-full hover:scale-105 transition-all duration-300 group">
              {/* Team Member Photo with Decorative Frame */}
              <div className="relative w-40 h-40 mx-auto mb-6">
                {/* Decorative gradient border ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent-purple to-accent-pink p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-dark-900"></div>
                </div>
                
                {/* Main image container with gradient border */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-primary via-accent-purple to-accent-pink p-1 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-dark-900">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent-purple/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-1">{member.role}</p>
                <p className="text-sm text-gray-400">{member.title}</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                {member.description}
              </p>

              {/* Skills */}
              <div className="space-y-2 mb-4">
                {member.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <skill.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Expertise Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-full text-xs font-semibold">
                  {member.expertise}
                </span>
              </div>

              {/* GitHub Link */}
              <div className="pt-4 border-t border-gray-700">
                {member.github ? (
                  <a 
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-gray-300 hover:text-primary transition-colors duration-300 group"
                  >
                    <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-semibold">View GitHub</span>
                  </a>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm">GitHub coming soon</span>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Our Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent-purple/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Why Work With Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <p className="text-gray-300 text-sm">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-purple mb-2">100%</div>
              <p className="text-gray-300 text-sm">Dedicated Team</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-pink mb-2">24/7</div>
              <p className="text-gray-300 text-sm">Support Available</p>
            </div>
          </div>
          <p className="text-gray-300 text-center mt-6">
            Every project gets our full attention. No distractions, no juggling—just focused work from people who care about the outcome.
          </p>
        </Card>
      </motion.div>
    </div>
  )
}

export default Team
