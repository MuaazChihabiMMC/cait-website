'use client'

import { useEffect, useState } from 'react'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'
import Script from 'next/script'

export default function CookieConsentBanner() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const consent = getCookieConsentValue()
    if (consent === 'true') setAccepted(true)
  }, [])

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        declineButtonText="Ablehnen"
        enableDeclineButton
        cookieName="caits_cookie_consent"
        style={{ background: '#2B373B', fontSize: '14px' }}
        buttonStyle={{ background: '#4eaf4e', color: 'white', fontSize: '14px' }}
        declineButtonStyle={{ background: '#d9534f', color: 'white', fontSize: '14px' }}
        onAccept={() => setAccepted(true)}
      >
        Diese Website verwendet Cookies für Statistik und Marketing. Du kannst zustimmen oder ablehnen.
      </CookieConsent>

      {accepted && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WFV8MYNPQ6"
            strategy="afterInteractive"
          />
          <Script id="ga" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WFV8MYNPQ6');
            `}
          </Script>
        </>
      )}
    </>
  )
}