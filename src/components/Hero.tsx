'use client'

import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mystical opacity-40"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="text-white">Welcome to </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mystical-gold to-mystical-purple">
            Mystical Casino Rush
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Experience the enchantment of mystical gaming with our collection of thrilling casino games.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-mystical-gold text-black rounded-lg font-bold text-lg hover:bg-mystical-gold/90 transition glow-gold">
            Play Now
          </button>
          <button className="px-8 py-3 border-2 border-mystical-gold text-mystical-gold rounded-lg font-bold text-lg hover:bg-mystical-gold/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
