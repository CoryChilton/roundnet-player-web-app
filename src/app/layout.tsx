import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Roundnet Player',
  description: 'By the players for the players',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
