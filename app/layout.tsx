import './globals.css';
import LayoutWrapper from './LayoutWrapper';
import ClientProviders from '@/components/ClientProviders';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SEO Agentur Berlin | CAIT Social Media',
  description: 'Ihre Top Marketing Agentur in Berlin: spezialisiert auf SEO, Google Ads, Webdesign und Social Media. Über 100 erfolgreiche Projekte.',
  authors: [{ name: 'CAIT Social Media' }],
  keywords: 'SEO Agentur Berlin, Google Ads Agentur Berlin, Webdesign Agentur Berlin, Social Media Agentur Berlin, Online Marketing Berlin, Marketing Agentur Berlin',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'CAIT Social Media - Marketing Agentur Berlin',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'CAIT Social Media - Marketing Agentur Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@caitsocialmedia',
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
  // Enhanced JSON-LD structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.caitsocialmedia.com/#organization",
    "name": "CAIT Social Media - Marketing Agentur Berlin",
    "description": "Ihre Top Marketing Agentur in Berlin: SEO Agentur Berlin, Google Ads Agentur Berlin, Webdesign Agentur Berlin und Social Media Agentur Berlin. Über 100 erfolgreiche Projekte.",
    "url": "https://www.caitsocialmedia.com",
    "logo": "https://www.caitsocialmedia.com/logo.png",
    "image": "https://www.caitsocialmedia.com/opengraph-image.png",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "€€",
    "areaServed": [
      {
        "@type": "City",
        "name": "Berlin"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Berlin-Mitte"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Berlin-Charlottenburg"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Berlin-Kreuzberg"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Berlin-Neukölln"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Berlin-Prenzlauer Berg"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/caitsocialmedia",
      "https://www.linkedin.com/company/caitsocialmedia",
      "https://www.facebook.com/caitsocialmedia"
    ],
    "knowsAbout": [
      "SEO Agentur Berlin",
      "Suchmaschinenoptimierung",
      "Google Ads",
      "Performance Marketing",
      "Webdesign",
      "Webentwicklung",
      "Social Media Marketing",
      "Content Marketing",
      "Local SEO",
      "E-Commerce SEO"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimierung",
            "description": "Professionelle Suchmaschinenoptimierung für bessere Google Rankings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management",
            "description": "Profitables Google Ads Kampagnenmanagement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Webdesign & Entwicklung",
            "description": "Moderne, responsive Websites mit Next.js und React"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Strategisches Social Media Marketing für Instagram, TikTok und LinkedIn"
          }
        }
      ]
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.caitsocialmedia.com/#organization",
    "name": "CAIT Social Media",
    "url": "https://www.caitsocialmedia.com",
    "logo": "https://www.caitsocialmedia.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+493022689840",
      "contactType": "customer service",
      "areaServed": "DE",
      "availableLanguage": ["German", "English"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.caitsocialmedia.com/#website",
    "url": "https://www.caitsocialmedia.com",
    "name": "CAIT Social Media - Marketing Agentur Berlin",
    "publisher": {
      "@id": "https://www.caitsocialmedia.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.caitsocialmedia.com/suche?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="de" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ClientProviders>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ClientProviders>
      </body>
    </html>
  );
}
