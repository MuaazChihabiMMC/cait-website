// app/webentwicklung/page.tsx
import WebPageExpanded from '@/components/WebPageExpanded';
import WebDevHero from '@/components/WebDevHero';
import WebDevFeatures from '@/components/WebDevFeatures';
import WebDevBenefits from '@/components/WebDevBenefits';
import WebDevCta from '@/components/WebDevCta';
import WebFaq from '@/components/WebFaq';
import AnimatedSection from '@/components/AnimatedSection';
import WebdesignContentExpanded from '@/components/WebdesignContentExpanded';
import FaqSchema, { webdesignFaqs } from '@/components/FaqSchema';

export const metadata = {
  title: 'Webdesign Agentur Berlin | Moderne Websites & Shops | CAIT',
  description: 'Webdesign Agentur Berlin: Maßgeschneiderte Websites mit React, Next.js & WordPress. Responsive Design, E-Commerce & Performance. Jetzt beraten lassen!',
  keywords: 'Webdesign Agentur Berlin, Webentwicklung Berlin, Website erstellen Berlin, WordPress Berlin, Next.js Agentur Berlin, E-Commerce Berlin, Webdesign Berlin',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/webentwicklung',
  },
  openGraph: {
    title: 'Webdesign Agentur Berlin | CAIT Social Media',
    description: 'Ihre Webdesign Agentur in Berlin für maßgeschneiderte Websites, die überzeugen und konvertieren.',
    url: 'https://www.caitsocialmedia.com/webentwicklung',
    type: 'website',
  },
};

export default function WebDevPage() {
  return (
    <>
      <FaqSchema faqs={webdesignFaqs} pageUrl="https://www.caitsocialmedia.com/webentwicklung" />

      <WebDevHero />

      <AnimatedSection>
        <WebDevFeatures />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <WebPageExpanded />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <WebdesignContentExpanded />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <WebDevBenefits />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <WebDevCta />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <WebFaq />
      </AnimatedSection>
    </>
  );
}