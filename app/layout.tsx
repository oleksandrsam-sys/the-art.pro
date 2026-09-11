import type { Metadata } from 'next'
import './globals.css'
import './nav-overrides.css'
import './subproject-header.css'

export const metadata: Metadata = {
  title: 'THE ART.PRO — B2B Platform · THE ART · ISAN · RE:VECT · Santeh & Decor · FIG.system',
  description: 'THE ART.PRO — B2B-платформа дизайнерських, інженерних та інтерʼєрних рішень для дизайнерів, архітекторів, будівельних компаній та професійних партнерів.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
