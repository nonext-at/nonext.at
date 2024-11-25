import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/custom-cursor'), { ssr: false });

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://nonext.at'),
  title: {
    default: 'nonext | Kreative Webentwicklung und Webdesign in Vorarlberg',
    template: '%s | nonext',
  },
  "description": "nonext in Vorarlberg erstellt moderne Websites und Webapps mit innovativem Design. Starte dein Projekt noch heute mit unserem Team!",
  keywords: ['Webentwicklung', 'Webdesign Vorarlberg', 'moderne Websites', 'React', 'Next.js', 'SEO Optimierung', 'digitale Transformation Vorarlberg'],
  authors: [{ name: 'Michael Prietl' }, { name: 'Noel Hermann' }],
  creator: 'nonext Team',
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://nonext.at',
    siteName: 'nonext',
    title: 'nonext | Kreative Websites für Vorarlberg',
    description: 'Deine Webagentur für innovative und maßgeschneiderte Websites in Vorarlberg. Jetzt Kontakt aufnehmen!',
    images: [
      {
        url: 'https://nonext.at/og-image.png',
        width: 1200,
        height: 630,
        alt: 'nonext - Kreative Webentwicklung aus Vorarlberg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nonext | Kreative Webentwicklung | Starte dein Projekt heute!',
    description: 'Die Zukunft von Web-Erlebnissen mit innovativem Design und Technologie gestalten.',
    creator: '@nonext',
    images: ['https://nonext.at/og-image.png'],
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
        <meta name="apple-mobile-web-app-title" content="nonext.at" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="nonext.at" />
        <meta property="og:locale" content="de_AT" />

        <link rel="alternate" hrefLang="de" href="https://nonext.at/" />
        <link rel="alternate" hrefLang="de" href="https://www.nonext.at/" />
      </head>
      <body>
        <header>
        </header>
        <main id="main-content" aria-label="Main content">
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://nonext.at"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "nonext",
                "url": "https://nonext.at",
                "logo": "https://nonext.at/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+4369918357220",
                  "email": "info@nonext.at",
                  "contactType": "Customer Service",
                  "areaServed": "AT",
                  "availableLanguage": "German"
                },
                "sameAs": [
                  "https://www.facebook.com/nonext",
                  "https://www.instagram.com/nonext.at",
                  "https://www.linkedin.com/company/nonext"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Landstrasse 33",
                  "addressLocality": "Höchst",
                  "addressRegion": "Vorarlberg",
                  "postalCode": "6973",
                  "addressCountry": "AT"
                }
              }
            ])
          }}
        />


      </body>
    </html>
  )
}
