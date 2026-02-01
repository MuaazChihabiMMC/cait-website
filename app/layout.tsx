import './globals.css';
import LayoutWrapper from './LayoutWrapper';
import ClientProviders from '@/components/ClientProviders';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Agentur Berlin | CAIT Social Media',
  description: 'Ihre Top Marketing Agentur in Berlin: spezialisiert auf SEO, Google Ads, Webdesign und Social Media.',
  authors: [{ name: 'CAIT Social Media' }],
  keywords: 'SEO Agentur Berlin, Google Ads Agentur Berlin, Webdesign Agentur Berlin, Social Media Agentur Berlin, Online Marketing Berlin, Marketing Agentur Berlin',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'CAIT Social Media - Marketing Agentur Berlin',
    images: [
      {
        url: '/opengraph-image.png', // Fallback image if available
        width: 1200,
        height: 630,
        alt: 'CAIT Social Media Agency Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  metadataBase: new URL('https://www.caitsocialmedia.com'),
  alternates: {
    canonical: './',
  },
  verification: {
    other: {
      seobility: '1c042f5ea33996f2bddc2b223ead5944',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CAIT Social Media - Marketing Agentur Berlin",
    "description": "Ihre Top Marketing Agentur in Berlin: SEO Agentur Berlin, Google Ads Agentur Berlin, Webdesign Agentur Berlin und Social Media Agentur Berlin.",
    "url": "https://www.caitsocialmedia.com",
    "telephone": "+493022689840",
    "email": "info@caitsocialmedia.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Berliner Straße 17",
      "addressLocality": "Berlin",
      "addressRegion": "Berlin",
      "postalCode": "14169",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.4422",
      "longitude": "13.2612"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€",
    "areaServed": {
      "@type": "City",
      "name": "Berlin"
    },
    "sameAs": [],
    "knowsAbout": ["SEO Agentur Berlin", "Google Ads Agentur Berlin", "Webdesign Agentur Berlin", "Social Media Agentur Berlin"]
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientProviders>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ClientProviders>
      </body>
    </html>
  );
}
