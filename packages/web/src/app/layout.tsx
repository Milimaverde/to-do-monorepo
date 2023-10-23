import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Josefin_Sans as JosefinSans } from 'next/font/google'

const josefinsans = JosefinSans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'To Do List',
  description: 'A simple to do list app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={josefinsans.className}
    >
      <body className="bg-2 dark:bg-13">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
