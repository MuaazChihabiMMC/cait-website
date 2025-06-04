'use client';

import './globals.css';
import { useEffect, useState } from 'react';
import LayoutWrapper from './LayoutWrapper';
import Script from 'next/script';
import CookieBanner from '../components/CookieBanner';
import Cookies from 'js-cookie';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showGTM, setShowGTM] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (consent === 'accepted') {
      setShowGTM(true);
    }
  }, []);

  return (
    <html lang="de">
      <head>
        <meta name="seobility" content="1c042f5ea33996f2bddc2b223ead5944" />
      </head>
      <body>
        {/* GTM wird nur bei Zustimmung geladen */}
        {showGTM && (
          <>
            <Script id="gtm-script" strategy="afterInteractive">
              {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NP9D459K');
            `}
            </Script>
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-NP9D459K"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              ></iframe>
            </noscript>
          </>
        )}

        {/* Layout und Cookie-Banner */}
        <LayoutWrapper>{children}</LayoutWrapper>
        <CookieBanner />
      </body>
    </html>
  );
}
