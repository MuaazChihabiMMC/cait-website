// app/ueber-uns/page.tsx
export const metadata = {
  title: 'Über uns | CAITSocialMedia',
  description: 'Lerne das Team von CAITSocialMedia kennen – deine Experten für SEO, Webentwicklung, Google Ads und Social Media. Persönlich. Digital. Erfolgreich.',
                   alternates: {
    canonical: 'https://www.caitsocialmedia.com/ueber-uns',
  },
};

import AboutPageClient from './AboutPageClient';

export default function AboutPage() {
  return <AboutPageClient />;
}