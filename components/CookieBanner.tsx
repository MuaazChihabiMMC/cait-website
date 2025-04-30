'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: 'accepted' | 'rejected') => {
    Cookies.set('cookie-consent', value, { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-lg text-sm">
      <p className="md:w-3/4">
        Wir verwenden Cookies, um unsere Website zu verbessern. Mit Ihrer Zustimmung helfen Sie uns, Ihre Nutzererfahrung zu optimieren.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => handleConsent('rejected')}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Ablehnen
        </button>
        <button
          onClick={() => handleConsent('accepted')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}