// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import LayoutWrapper from './LayoutWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'CAIT | SEO Agentur, Google Ads, Webdesign & Social Media ',
  description: 'Sichtbarkeit, Reichweite & Umsatz steigern – mit CAIT, deiner SEO-Agentur für Google Ads, Webdesign und Social Media. Jetzt kostenlos beraten lassen.',
  verification: {
    google: 'G-WFV8MYNPQ6', // Nur falls du Google Search Console nutzen willst
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
      <meta name="seobility" content="1c042f5ea33996f2bddc2b223ead5944"></meta>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NP9D459K');
          `}
        </Script>

        
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NP9D459K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <LayoutWrapper>
          {children}
        </LayoutWrapper>

        {/* Optional: Analytics via GTM (nicht nötig direkt hier) */}
        <SpeedInsights />
      </body>
    </html>
  )
}