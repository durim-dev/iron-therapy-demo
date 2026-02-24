import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _oswald = Oswald({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const _inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: 'Iron Therapy - Privatgym & Personal Training Hamburg',
  description: 'Iron Therapy ist dein privates Gym in Hamburg. Personal Training, Trainingsfl\u00e4che f\u00fcr Personal Trainer und Strength Training in professionellem Umfeld. Osterstra\u00dfe 45, 20259 Hamburg.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className="font-serif antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
