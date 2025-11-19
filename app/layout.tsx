import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileBar from '@/components/StickyMobileBar'
import QuickContactButton from '@/components/QuickContactButton'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const montserrat = Montserrat({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cucufastservice.ro'),
  title: {
    default: 'Cucu Fast Service — Service Auto Profesionist în Voluntari',
    template: '%s | Cucu Fast Service',
  },
  description: 'Cucu Fast Service — service auto profesionist în Voluntari. Diagnoză, geometrie, revizii, sisteme AC și evacuare. Programează rapid la +40 763 838 273.',
  keywords: ['service auto Voluntari', 'geometrie Voluntari', 'revizie auto Voluntari', 'diagnostic auto Voluntari', 'reparatii auto', 'service auto Ilfov'],
  authors: [{ name: 'Cucu Fast Service' }],
  creator: 'Cucu Fast Service',
  publisher: 'Cucu Fast Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://cucufastservice.ro',
    siteName: 'Cucu Fast Service',
    title: 'Cucu Fast Service — Service Auto Profesionist în Voluntari',
    description: 'Cucu Fast Service — service auto profesionist în Voluntari. Diagnoză, geometrie, revizii, sisteme AC și evacuare.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cucu Fast Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cucu Fast Service — Service Auto Profesionist în Voluntari',
    description: 'Cucu Fast Service — service auto profesionist în Voluntari. Diagnoză, geometrie, revizii, sisteme AC și evacuare.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C8102E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased bg-white text-black">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyMobileBar />
        <QuickContactButton />
      </body>
    </html>
  )
}

