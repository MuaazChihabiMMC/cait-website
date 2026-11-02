// Zentrale, belegte Unternehmensangaben. Quelle: Impressum und bestehende Website.
// Bitte nur hier pflegen – Header, Footer, Kontaktseite und strukturierte Daten lesen daraus.

export const SITE = {
  name: 'CAIT',
  legalName: 'CAIT Agentur',
  owner: 'Muaaz Chihabi',
  url: 'https://www.caitsocialmedia.com',
  email: 'info@caitsocialmedia.com',
  phoneDisplay: '030 2268 9840',
  phoneHref: 'tel:+493022689840',
  phoneE164: '+493022689840',
  whatsapp: 'https://wa.me/493022689840',
  address: {
    street: 'Berliner Straße 17',
    postalCode: '14169',
    city: 'Berlin',
    district: 'Zehlendorf',
    country: 'DE',
  },
  geo: { lat: 52.4422, lng: 13.2612 },
  openingHours: 'Montag bis Freitag, 9 bis 18 Uhr',
  founded: '2022',
  googlePartnerUrl: 'https://www.google.com/partners/agency?id=4801646033',
  provenExpertUrl: 'https://www.provenexpert.com/cait-seo-social-media-und-ads-agentur/',
  sameAs: [
    'https://www.instagram.com/caitsocialmedia',
    'https://www.linkedin.com/company/caitsocialmedia',
    'https://www.facebook.com/caitsocialmedia',
  ],
} as const;

export type NavItem = { href: string; label: string; description?: string };

export const CORE_SERVICES: NavItem[] = [
  { href: '/seo-agentur-berlin', label: 'Suchmaschinenoptimierung', description: 'Technik, Inhalte, lokale Sichtbarkeit' },
  { href: '/webentwicklung', label: 'Webdesign & Webentwicklung', description: 'Websites, Landingpages, Onlineshops' },
  { href: '/google-ads-agentur-berlin', label: 'Google Ads', description: 'Suchmaschinenwerbung mit klarer Messung' },
  { href: '/social-media', label: 'Social Media', description: 'Strategie, Inhalte, bezahlte Kampagnen' },
  { href: '/softwareentwicklung', label: 'Softwareentwicklung', description: 'Webanwendungen und Schnittstellen' },
  { href: '/ki-loesungen', label: 'KI-Lösungen', description: 'Chatbots und Automatisierung' },
];

export const MORE_SERVICES: NavItem[] = [
  { href: '/pr-agentur-berlin', label: 'PR & Pressearbeit' },
  { href: '/google-bewertungen-loeschen', label: 'Google-Bewertungen prüfen lassen' },
];

export const MAIN_NAV: NavItem[] = [
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
];

// Kunden, die auf der bisherigen Website mit Namen und Link genannt wurden.
export const CLIENTS: { name: string; url: string; industry: string }[] = [
  { name: 'KFZ Gutachter Kayed', url: 'https://www.kfz-gutachten-berlin-kayed.de', industry: 'Kfz-Gutachten' },
  { name: 'ZK Unfallgutachten', url: 'https://zk-unfallgutachten.de', industry: 'Unfallgutachten' },
  { name: 'Juwelier Preußenpark', url: 'https://www.schmuck-gold-uhren-ankauf.de/', industry: 'Juwelier' },
  { name: 'Polsterei Marya', url: 'https://polsterei-marya.de/', industry: 'Polsterei' },
  { name: 'Marya Möbel', url: 'https://marya-moebel.de/', industry: 'Möbel' },
  { name: 'Faucon Logistik', url: 'https://fauconlogistic.com/', industry: 'Logistik' },
  { name: 'Jessy-Ka-James', url: 'https://jessy-ka-james.com/', industry: 'Autorin' },
  { name: 'Ursula Gupta Stiftung', url: 'https://www.ursula-gupta-stiftung.de/', industry: 'Stiftung' },
  { name: 'GO On Outlet', url: 'https://goonoutlet.eu/', industry: 'Handel' },
  { name: 'Elektro Azzam', url: 'https://elektro-azzam.de/', industry: 'Elektrotechnik' },
  { name: 'Azzam Supermarkt', url: 'https://www.azzam-supermarkt.de/', industry: 'Lebensmittelhandel' },
  { name: 'Azzam Frühstückshaus', url: 'https://www.azzam-fruehstueckshaus.de/', industry: 'Gastronomie' },
  { name: 'Ocean Fisch Restaurant', url: 'http://ocean-fisch-restaurant.de/', industry: 'Gastronomie' },
  { name: 'Lüx Event Center', url: 'https://www.luxeventcenter.de/', industry: 'Eventlocation' },
  { name: 'Sultan Event Center', url: 'https://sultaneventcenter.de/', industry: 'Eventlocation' },
  { name: 'Only One GmbH', url: 'http://onlyonegmbh.de/', industry: 'Unternehmen' },
  { name: 'Lumina Café & Bar', url: 'https://lumina-peach-eta.vercel.app/', industry: 'Gastronomie' },
  { name: 'Glanzity Gebäudereinigung', url: 'https://webseite-zeta.vercel.app/', industry: 'Gebäudereinigung' },
  { name: 'Alt und Gesund', url: 'https://altundgesund.vercel.app/', industry: 'Gesundheit' },
];

export function absoluteUrl(path = '/') {
  return `${SITE.url}${path === '/' ? '' : path}`;
}
