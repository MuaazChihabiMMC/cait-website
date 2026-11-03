'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Cookies from 'js-cookie';
import { CONSENT_COOKIE, CONSENT_VERSION, CONSENT_VERSION_COOKIE, contactMethodFromHref, trackEvent } from '@/lib/analytics';

// Lädt den Google Tag Manager erst nach ausdrücklicher Einwilligung.
// Der Cookie-Banner selbst wird einmalig im LayoutWrapper gerendert.
export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [showGTM, setShowGTM] = useState(false);
  const [adsConsent, setAdsConsent] = useState(false);

  useEffect(() => {
    if (Cookies.get(CONSENT_COOKIE) === 'accepted') {
      // Nur Einwilligungen aus dem aktuellen Banner (Version 2) decken die Werbeerfolgsmessung ab.
      setAdsConsent(Cookies.get(CONSENT_VERSION_COOKIE) === CONSENT_VERSION);
      setShowGTM(true);
    }
  }, []);

  // Klicks auf Telefon-, E-Mail- und WhatsApp-Links als Kontaktaufnahme messen.
  useEffect(() => {
    if (!showGTM) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const method = contactMethodFromHref(link.getAttribute('href') || '');
      if (method) trackEvent('contact_click', { contact_method: method, page_path: window.location.pathname });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, [showGTM]);

  const granted = (on: boolean) => (on ? 'granted' : 'denied');

  return (
    <>
      {showGTM && (
        // Google Consent Mode v2: Der Einwilligungsstatus wird im selben Skript vor dem Tag Manager gesetzt.
        <Script id="gtm-script" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{analytics_storage:'granted',ad_storage:'${granted(adsConsent)}',ad_user_data:'${granted(adsConsent)}',ad_personalization:'denied'});
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
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
