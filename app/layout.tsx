import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import dynamic from 'next/dynamic';
import Header from '@/components/header'
import { SectionProvider } from './SectionContext';
import Footer from '@/components/footer'

const CustomCursor = dynamic(() => import('@/components/custom-cursor'), { ssr: false });

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://nonext.at'),
  title: {
    default: 'nonext | Kreative Webentwicklung und Webdesign in Vorarlberg',
    template: '%s | nonext',
  },
  "description": "nonext in Vorarlberg erstellt moderne Websites und Webapps mit innovativem Design. Starte dein Projekt noch heute mit unserem Team!",
  keywords: [
    'Webentwicklung',
    'Webdesign Vorarlberg',
    'moderne Websites',
    'React',
    'Next.js',
    'SEO Optimierung',
    'digitale Transformation Vorarlberg',
    'Projekte',
    'Team',
  ],
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
  alternates: {
    canonical: 'https://nonext.at',
    languages: {
      'de': 'https://nonext.at'
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
                    "item": "https://nonext.at",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Projekte",
                    "item": "https://nonext.at/projekte",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Team",
                    "item": "https://nonext.at/team",
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Impressum",
                    "item": "https://nonext.at/impressum",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "nonext",
                "url": "https://nonext.at",
                "logo": "https://nonext.at/logo.png",
                "foundingDate": "2024",
                "founder": [
                  { "@type": "Person", "name": "Noel Hermann" },
                  { "@type": "Person", "name": "Michael Prietl" },
                ],
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": 2,
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+4369918357220",
                  "email": "info@nonext.at",
                  "contactType": "Customer Service",
                  "areaServed": "AT",
                  "availableLanguage": "German",
                },
                "sameAs": [
                  "https://www.facebook.com/nonext",
                  "https://www.instagram.com/nonext.at",
                  "https://www.linkedin.com/company/nonext-at",
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Landstrasse 33",
                  "addressLocality": "Höchst",
                  "addressRegion": "Vorarlberg",
                  "postalCode": "6973",
                  "addressCountry": "AT",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "nonext",
                "url": "https://nonext.at",
                "inLanguage": "de",
                "publisher": {
                  "@type": "Organization",
                  "name": "nonext",
                  "url": "https://nonext.at",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "nonext",
                "url": "https://nonext.at",
                "logo": "https://nonext.at/logo.png",
                "image": "https://nonext.at/og-image.png",
                "description": "nonext in Vorarlberg erstellt moderne Websites und Webapps mit innovativem Design.",
                "telephone": "+4369918357220",
                "email": "info@nonext.at",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Bundesstraße 101",
                  "addressLocality": "Lauterach",
                  "addressRegion": "Vorarlberg",
                  "postalCode": "6923",
                  "addressCountry": "AT",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 47.4775,
                  "longitude": 9.7314,
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "AT",
                },
                "priceRange": "$$",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00",
                },
                "sameAs": [
                  "https://www.facebook.com/nonext",
                  "https://www.instagram.com/nonext.at",
                  "https://www.linkedin.com/company/nonext-at",
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Webentwicklung Dienstleistungen",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Design",
                        "description": "UI/UX Design, Wireframing, Prototyping und Markenidentität",
                      },
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Entwicklung",
                        "description": "Frontend- und Backend-Entwicklung mit React, Next.js und Node.js",
                      },
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Optimierung",
                        "description": "Performance-Audits, Code-Optimierung und Core Web Vitals",
                      },
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "SEO & Analyse",
                        "description": "Keyword-Recherche, On-Page-SEO, Technisches SEO und Analytics",
                      },
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Hosting & Bereitstellung",
                        "description": "Cloud-Hosting, SSL-Zertifikate, automatisierte Backups und Überwachung",
                      },
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Wartung & Support",
                        "description": "24/7-Support, Sicherheitsupdates und Feature-Erweiterungen",
                      },
                    },
                  ],
                },
              },
            ]),
          }}
        />
      </head>
      <body>
        <header>
        </header>
        <main id="main-content" aria-label="Main content">
          <SectionProvider>
            <Header />
            {children}
          </SectionProvider>
          <CustomCursor />
          <SpeedInsights />
          <Analytics />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
