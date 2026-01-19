import React from 'react'
import Home from './modules/Home'
import About from './modules/About'
import Services from './modules/Services'
import Team from './modules/Team'
import Portfolio from './modules/Portfolio'
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
      <Team />
    </div>
  )
}

export default App
