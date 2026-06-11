'use client'

import React from 'react'
import GameCard from './GameCard'

const games = [
  {
    id: '1',
    name: 'Mystical Slots',
    description: 'Classic slot machine with mystical symbols',
    icon: '🎰',
    category: 'slots',
  },
  {
    id: '2',
    name: 'Enchanted Roulette',
    description: 'Magical roulette with fortune wheel',
    icon: '🎡',
    category: 'roulette',
  },
  {
    id: '3',
    name: 'Crystal Blackjack',
    description: 'Strategic card game with crystal rewards',
    icon: '♠️',
    category: 'cards',
  },
  {
    id: '4',
    name: 'Dragon Dice',
    description: 'Roll the mystical dragon dice',
    icon: '🐉',
    category: 'dice',
  },
]

const GameGrid: React.FC = () => {
  return (
    <section id="games" className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-mystical-gold">Featured </span>
        <span className="text-white">Games</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  )
}

export default GameGrid
