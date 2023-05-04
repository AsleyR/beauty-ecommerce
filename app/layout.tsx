import ProjectWarning from './(components)/ProjectWarning'
import Navbar from './(components)/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beauty Ecommerce',
  description: 'Beauty ecommerce.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <ProjectWarning />
        <Navbar />
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
}
