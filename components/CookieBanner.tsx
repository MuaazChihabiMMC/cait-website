'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!Cookies.get('cookie-consent')) setVisible(true);
  }, []);

  const handleConsent = (value: 'accepted' | 'rejected') => {
    Cookies.set('cookie-consent', value, { expires: 365, sameSite: 'Lax' });
    setVisible(false);
    if (value === 'accepted') window.location.reload();
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl border border-[var(--line-gold)] bg-night-900/95 p-5 text-sm shadow-2xl backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <p className="text-ink-soft">
        Wir nutzen Statistik-Cookies (Google Tag Manager), um die Website zu verbessern – nur mit Ihrer Zustimmung.
        Details stehen in der{' '}
        <Link href="/datenschutz" className="link-static text-ink">
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => handleConsent('rejected')} className="btn btn-line min-h-[44px] flex-1 whitespace-nowrap px-4 text-[0.95rem] sm:flex-none sm:px-5">
          Nur notwendige
        </button>
        <button type="button" onClick={() => handleConsent('accepted')} className="btn btn-gold min-h-[44px] flex-1 whitespace-nowrap px-4 text-[0.95rem] sm:flex-none sm:px-5">
          Statistik erlauben
        </button>
      </div>
    </div>
  );
}
