import type { Metadata } from 'next'
import { NavbarComponent } from '@/components/navbar'
import { FooterComponent } from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vishesh',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
          <NavbarComponent />
          <main className='flex-grow'>{children}</main>
          <FooterComponent />
        </div>
      </body>
    </html>
  )
}
