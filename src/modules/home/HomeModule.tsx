'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GameGrid from '@/components/GameGrid'
import Footer from '@/components/Footer'

export default function HomeModule() {
  return (
    <div className="min-h-screen bg-gradient-mystical">
      <Header />
      <Hero />
      <GameGrid />
      <Footer />
    </div>
  )
}
