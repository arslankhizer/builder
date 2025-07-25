import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { Navigation } from './components/Navigation'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'ARSLAN EDIT\'Z | Professional Video Editor & Motion Designer',
  description: 'Cinematic video editing and motion design services. Creating stunning visuals for YouTube, commercials, and cinematic content.',
  keywords: 'video editing, motion design, cinematic, YouTube editor, commercial video, Arslan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
            <body className={`font-cinematic antialiased`}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
