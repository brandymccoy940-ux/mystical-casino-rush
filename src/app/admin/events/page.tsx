'use client'

import AdminNav from '@/components/AdminNav'
import EventCard from '@/components/EventCard'
import Navbar from '@/components/Navbar'

export default function EventsPage() {
  const events = [
    {
      title: 'Moonlight Fortune Week',
      description: 'Bonus Wheel rewards all week. Special bonuses on every spin!',
    },
    {
      title: 'Widow Witch Night',
      description: 'Exclusive avatar cosmetic drops. Limited time only!',
    },
    {
      title: 'Dragon Scale Festival',
      description: '3x rewards on all games. Celebrate with triple points!',
    },
    {
      title: 'Shadow Awakening',
      description: 'New seasonal content and exclusive items available now.',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">🎪 Event Manager</h1>

        <AdminNav />

        <button className="mb-6 bg-mystical-gold text-black font-bold px-6 py-3 rounded-lg hover:bg-mystical-gold/90 transition">
          ➕ Create New Event
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <EventCard key={event.title} title={event.title} description={event.description} />
          ))}
        </div>
      </main>
    </>
  )
}
