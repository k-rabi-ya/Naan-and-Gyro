import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://naanandgyro.com'),
  title: 'Naan & Gyro | Royal Indian-Turkish Fusion Kitchen',
  description: 'Where the Bosphorus meets the Spice Route. Charred Turkish grills, wood-fired Pide, slow-cooked Dum Biryanis, and rich Indian curries in a dark luxury editorial atmosphere.',
  keywords: [
    'Indian Turkish fusion',
    'Lahmacun',
    'Butter Chicken Pide',
    'Charred Turkish Grills',
    'Dum Biryani',
    'Halal Fine Dining',
    'Naan & Gyro',
    'Wood-fired Pide',
    'Craft Cocktails & Turkish Tea'
  ],
  authors: [{ name: 'Naan & Gyro Culinary Group' }],
  openGraph: {
    title: 'Naan & Gyro | Where the Bosphorus Meets the Spice Route',
    description: 'Experience high-end Indian-Turkish fusion dining. Wood-fired flatbreads, flame-charred kababs, and rich hand-crafted curries.',
    url: 'https://naanandgyro.com',
    siteName: 'Naan & Gyro',
    images: [
      {
        url: '/images/headline.jpg',
        width: 1200,
        height: 630,
        alt: 'Naan & Gyro Signature Fusion Feast',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naan & Gyro | Royal Indian-Turkish Fusion',
    description: 'Charred Turkish grills meets rich Indian tandoori masterworks.',
    images: ['/images/headline.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Naan & Gyro',
    image: 'https://naanandgyro.com/images/headline.jpg',
    '@id': 'https://naanandgyro.com',
    url: 'https://naanandgyro.com',
    telephone: '+1-555-622-6497',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '742 Bosphorus Way, Spice District',
      addressLocality: 'Metropolis',
      postalCode: '10001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    servesCuisine: ['Indian', 'Turkish', 'Middle Eastern', 'Fusion'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '11:30',
        closes: '23:00',
      },
    ],
    menu: 'https://naanandgyro.com/#menu',
    acceptsReservations: 'True',
  }

  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B0B0D] text-zinc-100 antialiased selection:bg-amber-600 selection:text-white">
        {children}
      </body>
    </html>
  )
}
