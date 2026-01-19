import React from 'react'
import Home from './modules/Home'
import About from './modules/About'
import Services from './modules/Services'
import Portfolio from './modules/Portfolio'
import Technologies from './modules/Technologies'
import Team from './modules/Team'
import Testimonials from './modules/Testimonials'
import Contact from './modules/Contact'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Technologies />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
