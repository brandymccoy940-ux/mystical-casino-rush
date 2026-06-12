'use client'

import AdminNav from '@/components/AdminNav'
import DashboardCard from '@/components/DashboardCard'
import Navbar from '@/components/Navbar'

export default function AnalyticsPage() {
  const metrics = [
    { title: 'Daily Active Users', value: '1,248' },
    { title: 'Average Session', value: '42 min' },
    { title: "Wheel Spins Today", value: '8,912' },
  ]

  const detailedMetrics = [
    { label: 'New Users (7d)', value: '342' },
    { label: 'Retention Rate', value: '68%' },
    { label: 'Total Revenue', value: '$45.2K' },
  ]

  return (
    <>
      <Navbar />
      <main className="p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">📈 Analytics</h1>

        <AdminNav />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric) => (
            <DashboardCard key={metric.title} title={metric.title} value={metric.value} />
          ))}
        </div>

        {/* Detailed Metrics */}
        <h2 className="text-2xl font-bold text-white mb-6">📊 Detailed Metrics</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {detailedMetrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-mystical-purple/20"
            >
              <h3 className="text-lg font-semibold text-gray-300 mb-2">{metric.label}</h3>
              <div className="text-4xl font-bold text-mystical-gold">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-mystical-purple/20">
          <h3 className="text-2xl font-bold text-mystical-gold mb-6">User Activity Trend</h3>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-mystical-purple/30 rounded-lg">
            <p className="text-gray-400">📊 Chart visualization coming soon...</p>
          </div>
        </div>
      </main>
    </>
  )
}
