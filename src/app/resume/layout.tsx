import React from 'react'
import './globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })
// const locale = 'pt'

export const metadata = {
  title: 'Dev João Jardim',
  description: 'Portfólio do desenvolvedor Front-End João Jardim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={sora.className}>
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body id="body" className="themeConfig relative">
        {children}
      </body>
    </html>
  )
}
