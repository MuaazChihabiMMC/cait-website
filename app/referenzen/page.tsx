import type { Metadata } from 'next';
import ReferenzenClientPage from './ReferenzenClientPage';

export const metadata: Metadata = {
    title: 'Referenzen | Erfolgreiche Projekte | CAIT Social Media Agentur Berlin',
    description: 'Unsere Referenzen und erfolgreiche Kundenprojekte. SEO, Google Ads, Webdesign und Social Media Erfolgsgeschichten aus Berlin.',
    alternates: {
        canonical: 'https://www.caitsocialmedia.com/referenzen',
    },
};

export default function ReferenzenPage() {
    return <ReferenzenClientPage />;
}
