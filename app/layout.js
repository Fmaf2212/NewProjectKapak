import BackToTop from './components/BackToTop'
import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Kapak Huayta',
  description: 'Generated by create next app',
}

import './style.css'
import './stylos.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
