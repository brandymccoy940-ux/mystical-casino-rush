import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Mystical Casino Rush',
  description: 'Experience the mystical world of casino gaming',
  keywords: ['casino', 'games', 'slots', 'gaming'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-mystical-dark text-gray-100">
        {children}
      </body>
    </html>
  )
}
