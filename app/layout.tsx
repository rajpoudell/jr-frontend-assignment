import './globals.css'
import { Inter } from 'next/font/google'
import './marcela-laskoski-YrtFlrLo2DQ-unsplash (1).jpg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music Sansar',
  description: 'Sansar for music lovers', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto w-[80%] text-center bg-[url('./marcela-laskoski-YrtFlrLo2DQ-unsplash (1).jpg')]`}>{children}</body>
    </html>
  )
}
