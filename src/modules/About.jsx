import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiLightningBolt, 
  HiShieldCheck, 
  HiSparkles,
  HiUserGroup,
  HiHeart,
  HiTrendingUp
} from 'react-icons/hi'
import Card from '../components/Card'

const About = () => {
  const values = [
    {
      icon: HiShieldCheck,
      title: "Transparency",
      description: "No hidden costs, no surprises. We believe in open communication and honest timelines from day one."
    },
    {
      icon: HiHeart,
      title: "Ownership",
      description: "Your project's success is our responsibility. We take full ownership of delivering solutions that work."
    },
    {
      icon: HiSparkles,
      title: "Innovation",
      description: "We don't just follow trends—we explore what actually solves your problem, whether it's new or proven."
    },
    {
      icon: HiUserGroup,
      title: "Long-term Partnerships",
      description: "We're not here for one-off projects. We build relationships that grow as your business scales."
    }
  ]

  const approach = [
    {
      title: "We Listen First",
      description: "Before writing a single line of code, we understand your challenge and what success looks like for you."
    },
    {
      title: "Quality Over Speed",
      description: "Fast delivery means nothing if it breaks later. We build for the long run, not just the launch date."
    },
    {
      title: "Team-Based Approach",
      description: "You get a dedicated team, not freelancers. Everyone's aligned on your vision and timeline."
    },
    {
      title: "Scalable by Design",
      description: "We build systems that grow with you. No need to rebuild when you get your first 10,000 users."
    }
  ]

  return (
    <div id="about" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section - Company Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          About <span className="text-gradient">TriCore</span>
        </h1>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            TriCore Technologies started with a simple frustration: too many companies were delivering 
            products that looked good in demos but fell apart in real use.
          </p>
          <p>
            We created TriCore to do things differently. No buzzwords, no overpromising. 
            Just a team committed to building technology that actually solves problems—and keeps working 
            long after launch.
          </p>
          <p>
            We focus on <span className="text-primary font-semibold">quality</span>, 
            {' '}<span className="text-accent-purple font-semibold">scalability</span>, 
            {' '}and <span className="text-accent-pink font-semibold">trust</span>. 
            Because software isn't just about features—it's about reliability when it matters most.
          </p>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <HiLightningBolt className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Solve real problems with technology. Not build flashy products that don't deliver. 
              We measure success by whether your users' lives got easier—not by how many features we shipped.
            </p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <HiTrendingUp className="w-8 h-8 text-accent-purple" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Grow with our clients, not just deliver projects. We're not interested in one-and-done deals. 
              We want to be the team you call when you're ready to scale, pivot, or take on your next challenge.
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What We <span className="text-gradient">Stand For</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-6 h-full hover:scale-105 transition-transform duration-300">
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How We Work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How We <span className="text-gradient">Work</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {approach.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent-purple flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent-purple/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Something Real?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Let's talk about your project—no sales pitch, just an honest conversation about what's possible.
          </p>
          <a href="#contact" className="inline-block">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent-purple rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
              Get In Touch
            </button>
          </a>
        </Card>
      </motion.div>
    </div>
  )
}

export default About
