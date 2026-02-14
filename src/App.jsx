import React from 'react'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Features from './components/Features'
import FinalCTA from './components/FinalCTA'
import Contact from './components/Contact'
import Particles from './components/Particles'

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <Particles />
      <div className="relative z-10">
        <Hero />
        <Reviews />
        <Features />
        <FinalCTA />
        <Contact />
      </div>
    </div>
  )
}

export default App
