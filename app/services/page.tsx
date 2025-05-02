// app/services/page.tsx
export const metadata = {
    title: 'Services | CAIT Marketing',
    description: 'Unsere Leistungen: SEO, Google Ads, Webentwicklung & Social Media Marketing. Maßgeschneiderte Lösungen für Ihr Business.',
  };
  
  import ServicesPageClient from './ServicesPageClient';
  
  export default function ServicesPage() {
    return <ServicesPageClient />;
  }