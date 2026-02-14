import React from 'react'

function FinalCTA() {
  return (
    <section className="py-32 px-[20vw]">
      <div className="glass-strong rounded-3xl p-16 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Ready to Simplify Your Life?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of people who have transformed their productivity with OneForAll. Start your journey today.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-black px-10 py-2 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="glass px-10 py-2 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
