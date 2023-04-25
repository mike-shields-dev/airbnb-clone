import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal';
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'AirBnb',
  description: 'AirBnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal 
            isOpen 
            title="Title"
            actionLabel='Submit'
            body={<div>Body</div>} 
          />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
