import type { Metadata } from 'next';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import { SITE, absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Anbieterkennzeichnung gemäß § 5 DDG für die Website von CAIT.',
  alternates: { canonical: absoluteUrl('/impressum') },
};

export default function ImpressumPage() {
  return (
    <section className="pb-24 pt-[calc(var(--header-h)+3rem)] sm:pt-[calc(var(--header-h)+4.5rem)]">
      <div className="wrap">
        <Breadcrumbs items={[{ href: '/impressum', label: 'Impressum' }]} />
        <h1 className="t-h1 mt-10">Impressum</h1>

        <div className="prose-cait mt-14 space-y-12">
          <div>
            <h2 className="t-h3">Angaben gemäß § 5 DDG</h2>
            <p className="mt-4">
              {SITE.legalName}
              <br />
              {SITE.owner}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.city}
            </p>
          </div>

          <div>
            <h2 className="t-h3">Kontakt</h2>
            <p className="mt-4">
              Telefon: <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              <br />
              E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>

          <div>
            <h2 className="t-h3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <p className="text-sm text-ink-muted">
            Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">e-recht24.de</a>
          </p>
        </div>
      </div>
    </section>
  );
}
