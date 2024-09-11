import { Roboto, Anton } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "500", "700"] })
const anton = Anton({subsets: ["latin"], weight: "400"} )

export const metadata = {
  title: {
    default: 'Next App Homepage',
    template: "%s | Next App"
  },
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${anton.className} bg-main-bg`}>
        <div className='max-container px-10'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
