'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Cookies from 'js-cookie';

// Lädt den Google Tag Manager erst nach ausdrücklicher Einwilligung.
// Der Cookie-Banner selbst wird einmalig im LayoutWrapper gerendert.
export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [showGTM, setShowGTM] = useState(false);

  useEffect(() => {
    if (Cookies.get('cookie-consent') === 'accepted') setShowGTM(true);
  }, []);

  return (
    <>
      {showGTM && (
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NP9D459K');`}
        </Script>
      )}
      {children}
    </>
  );
}
