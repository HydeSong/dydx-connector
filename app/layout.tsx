import './globals.css'

import {Navbar, Footer} from '@/components'

export const metadata = {
  title: 'dYdX connector',
  description: 'A dYdX connector',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/> {children}
        <Footer/>
      </body>
    </html>
  )
}
