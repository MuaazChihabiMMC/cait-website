import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import LayoutWrapper from './LayoutWrapper';
import ClientProviders from '@/components/ClientProviders';
import JsonLd from '@/components/site/JsonLd';
import { SITE, CORE_SERVICES, absoluteUrl } from '@/lib/site';

// Fließtext: Inter (bisherige Schrift, bleibt für Kontinuität)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

// Überschriften: Bricolage Grotesque – kräftig, eigenständig und auch auf dunklem Grund gut lesbar
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const viewport: Viewport = {
  themeColor: '#0c1527',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'CAIT – Digitalagentur in Berlin für SEO, Web, Ads, Software & KI',
    template: '%s | CAIT',
  },
  description:
    'CAIT aus Berlin-Zehlendorf plant und baut, was Unternehmen online brauchen: SEO, Websites, Google Ads, Social Media, individuelle Software und KI-Lösungen.',
  applicationName: 'CAIT',
  authors: [{ name: SITE.owner }],
  creator: SITE.legalName,
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'CAIT',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'CAIT – Digitalagentur in Berlin' }],
  },
  twitter: { card: 'summary_large_image' },
  verification: {
    other: { seobility: '1c042f5ea33996f2bddc2b223ead5944' },
  },
};

// Strukturierte Daten ausschließlich auf Basis belegter Angaben (Impressum, bisherige Website)
const organizationGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#organization`,
      name: 'CAIT',
      legalName: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      image: `${SITE.url}/opengraph-image.png`,
      email: SITE.email,
      telephone: SITE.phoneE164,
      foundingDate: SITE.founded,
      founder: { '@type': 'Person', name: SITE.owner },
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        postalCode: SITE.address.postalCode,
        addressLocality: SITE.address.city,
        addressCountry: SITE.address.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Berlin' },
        { '@type': 'Country', name: 'Deutschland' },
      ],
      sameAs: SITE.sameAs,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Leistungen',
        itemListElement: CORE_SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.label, url: absoluteUrl(s.href) },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: 'CAIT',
      inLanguage: 'de-DE',
      publisher: { '@id': `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        {/* Markiert, dass JavaScript läuft – erst dann werden Scroll-Einblendungen aktiv */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={organizationGraph} />
      </head>
      <body>
        <a href="#inhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <ClientProviders>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ClientProviders>
      </body>
    </html>
  );
}
