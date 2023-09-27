import './globals.css'
import { Inter } from 'next/font/google'
import 'react-notion-x/src/styles.css'
// import 'prismjs/themes/prism-tomorrow.css'
// import 'prism-themes/themes/prism-atom-dark.css'
import 'prism-themes/themes/prism-vsc-dark-plus.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog - Kaleb Jensen',
  description: 'My Blog Using Notion API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
