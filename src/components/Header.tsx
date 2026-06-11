'use client'

import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-mystical-purple/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-mystical-gold">✨</div>
          <h1 className="text-2xl font-bold text-white">Mystical Casino</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#games" className="text-gray-300 hover:text-mystical-gold transition">
            Games
          </a>
          <a href="#about" className="text-gray-300 hover:text-mystical-gold transition">
            About
          </a>
          <a href="#contact" className="text-gray-300 hover:text-mystical-gold transition">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2 text-mystical-gold border border-mystical-gold rounded-lg hover:bg-mystical-gold/10 transition">
            Sign In
          </button>
          <button className="px-6 py-2 bg-mystical-gold text-black rounded-lg font-semibold hover:bg-mystical-gold/90 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
