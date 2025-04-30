'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    setVisible(false);
    window.location.reload(); // wichtig, um Analytics zu aktivieren
  };

  const declineCookies = () => {
    Cookies.set('cookie_consent', 'false', { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300 shadow-lg z-50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-black">
        <p className="mb-2 sm:mb-0">
          Wir verwenden Cookies, um unsere Website zu optimieren und Ihnen relevante Inhalte anzuzeigen.
        </p>
        <div className="flex space-x-2">
          <button onClick={declineCookies} className="px-4 py-2 border rounded">
            Ablehnen
          </button>
          <button onClick={acceptCookies} className="px-4 py-2 bg-blue-600 text-white rounded">
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}