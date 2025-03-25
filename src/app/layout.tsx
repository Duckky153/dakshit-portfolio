import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Providers } from './providers'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ParticleField } from '@/components/ui/ParticleField'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-foreground`}>
        <Providers>
          <CustomCursor />
          <ParticleField />
          <main className="relative min-h-screen">
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}