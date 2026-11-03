// Messung von Anfragen für Google Analytics 4 und Google Ads (über den Google Tag Manager).
// Ereignisse landen nur im dataLayer, wenn der Tag Manager nach Einwilligung geladen wurde.
// Bewusst ohne personenbezogene Daten (kein Name, keine E-Mail, keine Telefonnummer).

export const CONSENT_COOKIE = 'cookie-consent';
export const CONSENT_VERSION_COOKIE = 'cookie-consent-v';
// Version 2: Einwilligung umfasst Statistik UND Werbeerfolgsmessung (Google Ads).
export const CONSENT_VERSION = '2';

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || !Array.isArray(window.dataLayer)) return;
  const payload: DataLayerEvent = { event, ...params };
  window.dataLayer.push(payload);
}

export type ContactMethod = 'phone' | 'email' | 'whatsapp';

export function contactMethodFromHref(href: string): ContactMethod | null {
  const h = href.trim().toLowerCase();
  if (h.startsWith('tel:')) return 'phone';
  if (h.startsWith('mailto:')) return 'email';
  if (h.includes('wa.me/') || h.includes('api.whatsapp.com') || h.startsWith('whatsapp:')) return 'whatsapp';
  return null;
}
