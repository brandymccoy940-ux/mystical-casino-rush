'use client'

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 border-t border-mystical-purple/20 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold text-mystical-gold mb-4">Mystical Casino</h4>
            <p className="text-gray-400 text-sm">
              Experience the magic of online gaming with our mystical casino platform.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Games</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-mystical-gold transition">Slots</a></li>
              <li><a href="#" className="hover:text-mystical-gold transition">Roulette</a></li>
              <li><a href="#" className="hover:text-mystical-gold transition">Blackjack</a></li>
              <li><a href="#" className="hover:text-mystical-gold transition">Dice</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-mystical-gold transition">About</a></li>
              <li><a href="#" className="hover:text-mystical-gold transition">Contact</a></li>
              <li><a href="#" className="hover:text-mystical-gold transition">Support</a></li>
              <li><a href="#" className="hover:text-mystical-gold transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Legal</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-mystical-gold transition">Privacy</a></li>
              <li><a href="#" className="hover:text-mystical-gold transition">Terms</a></li>
              <li><a href="#" className="hover:text-mystical-gold transition">Responsible Gaming</a></li>
              <li><a href="#" className="hover:text-mystical-gold transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Mystical Casino Rush. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-mystical-gold transition">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-mystical-gold transition">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-mystical-gold transition">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
