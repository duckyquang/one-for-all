import React from 'react'
import Hero from './Hero'
import Reviews from './Reviews'
import Features from './Features'
import FinalCTA from './FinalCTA'
import Contact from './Contact'
import Particles from './Particles'

function Landing() {
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

export default Landing
