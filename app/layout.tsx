import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Dela_Gothic_One, Noto_Sans_JP } from 'next/font/google'
import { BootOverlay } from '@/components/boot-overlay'
import './globals.css'

const dela = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dela',
  display: 'swap',
})

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PORTFOLIO | 河田 実',
  description:
    'ポートフォリオ。自己紹介、スキル、経歴、制作実績を掲載しています。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffe600',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${dela.variable} ${noto.variable}`} data-scroll-behavior="smooth">
      <body>
        <BootOverlay />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
