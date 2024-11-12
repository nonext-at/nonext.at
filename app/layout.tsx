import type { Metadata } from 'next'
import { Inter } from 'next/font/google' 
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nonext.io'),
  title: {
    default: 'nonext | Modern Web Development',
    template: '%s | nonext'
  },
  description: 'nonext creates modern, unique websites with cutting-edge technologies and stunning designs.',
  keywords: ['web development', 'modern websites', 'React', 'Next.js', '3D web design'],
  authors: [{ name: 'Michael Prietl' }, { name: 'Noel Hermann' }],
  creator: 'nonext Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nonext.io',
    siteName: 'nonext',
    title: 'nonext | Modern Web Development',
    description: 'Crafting the future of web experiences with innovative designs and technologies.',
    images: [
      {
        url: 'https://nonext.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'nonext - Modern Web Development'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nonext | Modern Web Development',
    description: 'Crafting the future of web experiences with innovative designs and technologies.',
    creator: '@nonext',
    images: ['https://nonext.com/og-image.png']
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="nonext.io" />
      <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <header>
          {/* Add your header content here */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Add your footer content here */}
        </footer> 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "nonext",
              "url": "https://nonext.io",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://nonext.io/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  )
}