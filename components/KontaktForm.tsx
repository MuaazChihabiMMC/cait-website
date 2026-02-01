// components/KontaktForm.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

// Spam keywords to block
const SPAM_KEYWORDS = [
  'viagra', 'casino', 'lottery', 'bitcoin', 'crypto', 'pills',
  'cheap', 'free money', 'winner', 'prize', 'click here',
  'http://', 'https://', '.ru', '.cn', 'buy now'
];

export default function KontaktForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    website: '', // Honeypot field
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);

  // Load Turnstile script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Initialize Turnstile when script loads
    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA', // Test key for development
          callback: (token: string) => {
            setTurnstileToken(token);
          },
          'error-callback': () => {
            setError('Captcha-Fehler. Bitte Seite neu laden.');
          },
        });
      }
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  // Client-side spam check
  const containsSpam = (text: string): boolean => {
    const lowerText = text.toLowerCase();
    return SPAM_KEYWORDS.some(keyword => lowerText.includes(keyword));
  };

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Honeypot check - if filled, silently "succeed" but don't send
    if (formData.website) {
      setSubmitted(true);
      return;
    }

    // Client-side validation
    if (!formData.name.trim() || formData.name.length < 2) {
      setError('Bitte geben Sie einen gültigen Namen ein.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setError('Die Nachricht muss mindestens 10 Zeichen enthalten.');
      return;
    }

    // Spam check
    if (containsSpam(formData.name) || containsSpam(formData.message)) {
      setError('Ihre Nachricht konnte nicht gesendet werden.');
      return;
    }

    // Turnstile check
    if (!turnstileToken) {
      setError('Bitte bestätigen Sie, dass Sie kein Roboter sind.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          turnstileToken,
          timestamp: Date.now(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Fehler beim Senden. Bitte versuchen Sie es später erneut.');
        // Reset Turnstile on error
        if (window.turnstile) {
          window.turnstile.reset();
        }
        setTurnstileToken(null);
      }
    } catch {
      setError('Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#0c1832] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Kontaktformular</h2>
        {submitted ? (
          <div className="text-center text-green-400 font-semibold text-lg p-8 bg-green-900/20 rounded-xl border border-green-500/30">
            <svg className="w-16 h-16 mx-auto mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Vielen Dank für Ihre Nachricht!<br />
            Die <strong className="text-white">CAIT Agentur Berlin</strong> meldet sich in Kürze bei Ihnen.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Honeypot field - hidden from users */}
            <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
              <label htmlFor="website">Website</label>
              <input
                type="text"
                name="website"
                id="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-[#fcd066]">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={100}
                className="w-full p-4 border border-[#fcd066]/30 rounded-lg bg-[#1a2a4a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#fcd066] focus:border-transparent transition-all"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-[#fcd066]">
                E-Mail <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                className="w-full p-4 border border-[#fcd066]/30 rounded-lg bg-[#1a2a4a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#fcd066] focus:border-transparent transition-all"
                placeholder="ihre@email.de"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-[#fcd066]">Telefon (optional)</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={30}
                className="w-full p-4 border border-[#fcd066]/30 rounded-lg bg-[#1a2a4a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#fcd066] focus:border-transparent transition-all"
                placeholder="+49 123 456789"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-[#fcd066]">
                Nachricht <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                className="w-full p-4 border border-[#fcd066]/30 rounded-lg bg-[#1a2a4a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#fcd066] focus:border-transparent transition-all resize-y"
                placeholder="Wie können wir Ihnen helfen?"
              ></textarea>
            </div>

            {/* Cloudflare Turnstile Widget */}
            <div className="flex justify-center">
              <div ref={turnstileRef} className="cf-turnstile" data-theme="dark"></div>
            </div>

            {/* Error message */}
            {error && (
              <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-center">
                {error}
              </div>
            )}

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#fcd066] text-[#0c1832] hover:bg-[#e5bc55] px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-[#fcd066]/30 transition-all hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Wird gesendet...
                  </span>
                ) : (
                  'Nachricht senden'
                )}
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              Mit dem Absenden stimmen Sie unserer{' '}
              <a href="/datenschutz" className="text-[#fcd066] hover:underline">Datenschutzerklärung</a> zu.
            </p>
          </form>
        )}
      </div>

      <section className="bg-[#1a2a4a] text-gray-100 py-16 px-6 mt-16 rounded-xl max-w-3xl mx-auto">
        <div className="space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-[#fcd066]">Warum Sie uns kontaktieren sollten</h2>
          <p>
            Als erfahrene <strong className="text-white">Online-Marketing-Agentur aus Berlin</strong> stehen wir Ihnen mit Expertise in den Bereichen
            <strong className="text-white"> SEO, Google Ads, Social Media und Webdesign</strong> zur Seite. Ob Sie ein erstes Beratungsgespräch wünschen, konkrete Maßnahmen brauchen oder langfristige Zusammenarbeit suchen - bei uns sind Sie richtig.
          </p>
          <p>
            Die <strong className="text-white">CAIT Agentur</strong> hat bereits über 100 erfolgreiche Projekte umgesetzt, von lokalen Dienstleistern bis zu internationalen Unternehmen. Unsere Beratung ist individuell, transparent und datenbasiert.
          </p>
          <p>
            Wir freuen uns auf Ihre Nachricht, telefonisch, per E-Mail oder direkt über das Kontaktformular. Gemeinsam machen wir Ihr digitales Projekt sichtbar und erfolgreich.
          </p>
        </div>
      </section>
    </section>
  );
}

// TypeScript declaration for Turnstile
declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'error-callback'?: () => void;
      }) => void;
      reset: () => void;
    };
  }
}