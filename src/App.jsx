import React, { useState } from 'react'
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
import SectionTransition from './components/SectionTransition'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="relative min-h-screen overflow-hidden">
          <ScrollProgress />
          <ParticleBackground />
          <Navbar />
          <Home />
          <SectionTransition>
            <About />
          </SectionTransition>
          <SectionTransition>
            <Services />
          </SectionTransition>
          <SectionTransition>
            <Portfolio />
          </SectionTransition>
          <SectionTransition>
            <Technologies />
          </SectionTransition>
          <SectionTransition>
            <Team />
          </SectionTransition>
          <SectionTransition>
            <Testimonials />
          </SectionTransition>
          <SectionTransition>
            <Contact />
          </SectionTransition>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
