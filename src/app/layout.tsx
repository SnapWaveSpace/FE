import './globals.css'
import type { Metadata } from 'next'
import { FC, ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'SnapWave',
  description: 'SnapWave',
}

interface IProps {
  children: ReactNode
}

const RootLayout: FC<IProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
export default RootLayout
