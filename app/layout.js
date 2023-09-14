import './globals.css'
import { Inter } from 'next/font/google'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
