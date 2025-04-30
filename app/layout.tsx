// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import LayoutWrapper from './LayoutWrapper'
import CookieConsent from '@/components/CookieConsent'
import Script from 'next/script'
import CookieConsentBanner from '@/components/CookieConsentBanner'


export const metadata: Metadata = {
  title: 'CAITSocialMedia | Agentur für SEO, Google Ads, Webdesign & Social Media',
  description: 'Deine Agentur für Online-Marketing mit Strategie, Performance und Design.',
  verification: {
    google: 'G-WFV8MYNPQ6', // 👉 hier deine Google-Site-Verification (nicht Analytics-ID!)
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head />
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

        {/* Google Analytics – wird nur im Client ausgeführt */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WFV8MYNPQ6"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WFV8MYNPQ6');
          `}
        </Script>

        <SpeedInsights />
       
        

      </body>
    </html>
  )
}