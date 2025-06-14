import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import GridBackground from './components/GridBackground'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'A unique portfolio showcasing creative development work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.className} text-white antialiased`}>
        <GridBackground />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
