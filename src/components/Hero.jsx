import React from 'react'

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-[20vw] relative overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-6">
          OneForAll
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 font-light mb-12">
          Your life, simplified.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="glass-strong px-8 py-2 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300">
            Get Started
          </button>
          <button className="glass px-8 py-2 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
