'use client';

import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import CookieConsent from '@/components/CookieConsent';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function GlobalProviders({ children }: { children: React.ReactNode }) {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    if (Cookies.get('cookie_consent') === 'true') {
      setConsentGiven(true);
    }
  }, []);

  return (
    <>
      {children}
      {consentGiven && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WFV8MYNPQ6"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WFV8MYNPQ6', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      <SpeedInsights />
      <CookieConsent />
    </>
  );
}