import './globals.css'

import {Navbar, Footer} from '@/components'

export const metadata = {
  title: 'Dydx connector',
  description: 'A Dydx connector',
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
