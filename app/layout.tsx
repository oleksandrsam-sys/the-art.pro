import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'THE ART.PRO — B2B Platform · Heating · ISAN · Santeh & Decor · Engineering',
  description: 'THE ART.PRO — B2B-платформа дизайнерських, інженерних та інтерʼєрних рішень для дизайнерів, архітекторів, будівельних компаній та професійних партнерів.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
