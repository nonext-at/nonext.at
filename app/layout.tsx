import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/custom-cursor'), { ssr: false });

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://nonext.io'),
  title: {
    default: 'nonext | Moderne Webentwicklung',
    template: '%s | nonext',
  },
  description: 'nonext erstellt moderne, einzigartige Websites mit modernster Technologie und beeindruckendem Design.',
  keywords: ['Webentwicklung', 'moderne Websites', 'React', 'Next.js', '3D-Webdesign'],
  authors: [{ name: 'Michael Prietl' }, { name: 'Noel Hermann' }],
  creator: 'nonext Team',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://nonext.io',
    siteName: 'nonext',
    title: 'nonext | Kreative Webentwicklung | Starte dein Projekt heute!',
    description: 'Wir gestalten außergewöhnliche digitale Erlebnisse durch innovative Designs und modernste Entwicklung.',
    images: [
      {
        url: 'https://nonext.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'nonext - Kreative Webentwicklung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nonext | Kreative Webentwicklung | Starte dein Projekt heute!',
    description: 'Die Zukunft von Web-Erlebnissen mit innovativem Design und Technologie gestalten.',
    creator: '@nonext',
    images: ['https://nonext.io/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" dir="ltr" className={inter.className}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="nonext.io" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="nonext.io" />
        <meta property="og:locale" content="de_DE" />

        <link rel="alternate" hrefLang="de" href="https://nonext.io/" />
        <link rel="alternate" hrefLang="de" href="https://www.nonext.io/" />
      </head>
      <body>
        <header>
        </header>
        <main aria-label="Main content">
          {children}
          <CustomCursor />
          <SpeedInsights />
          <Analytics />
        </main> 
        <footer>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://nonext.io"
                }
              ]
            })
          }}
        />

      </body>
    </html>
  )
}