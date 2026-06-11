'use client'

import React from 'react'

interface GameCardProps {
  game: {
    id: string
    name: string
    description: string
    icon: string
    category: string
  }
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="group bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-mystical-purple/20 hover:border-mystical-gold/50 transition cursor-pointer">
      <div className="h-32 bg-gradient-mystical flex items-center justify-center text-6xl group-hover:scale-110 transition">
        {game.icon}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{game.description}</p>

        <button className="w-full px-4 py-2 bg-mystical-gold text-black rounded-lg font-semibold hover:bg-mystical-gold/90 transition">
          Play Now
        </button>
      </div>
    </div>
  )
}

export default GameCard
