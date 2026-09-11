import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'THE ART.PRO — Engineering × Heating × Interior',
  description: 'Преміальні інженерні та опалювальні рішення для дизайнерів, архітекторів і приватних проєктів.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
