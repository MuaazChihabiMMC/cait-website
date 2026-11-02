import Link from 'next/link';
import Logo from '@/components/site/Logo';
import { CORE_SERVICES, MORE_SERVICES, SITE } from '@/lib/site';

const company = [
  { href: '/leistungen', label: 'Alle Leistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--line-dark)] bg-night-900 text-ink">
      <div className="wrap py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" aria-label="CAIT – zur Startseite" className="inline-block text-ink">
              <Logo className="h-9 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-ink-muted">
              Digitalagentur aus Berlin-Zehlendorf für Suchmaschinenoptimierung, Websites, Google Ads, Social Media,
              individuelle Software und KI-Lösungen.
            </p>
            <address className="mt-8 space-y-1 not-italic text-ink-soft">
              <p>{SITE.legalName}</p>
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.postalCode} {SITE.address.city}
              </p>
              <p className="pt-3">
                <a href={SITE.phoneHref} className="link">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="link">
                  {SITE.email}
                </a>
              </p>
            </address>
          </div>

          <nav aria-label="Leistungen" className="lg:col-span-4">
            <h2 className="text-sm text-ink-muted">Leistungen</h2>
            <ul className="mt-4 space-y-2.5">
              {[...CORE_SERVICES, ...MORE_SERVICES].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="link text-ink-soft hover:text-ink">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Unternehmen" className="lg:col-span-3">
            <h2 className="text-sm text-ink-muted">CAIT</h2>
            <ul className="mt-4 space-y-2.5">
              {company.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="link text-ink-soft hover:text-ink">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={SITE.googlePartnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link mt-8 inline-block text-sm text-ink-muted hover:text-ink"
            >
              Google Partner – Profil bei Google
            </a>
          </nav>
        </div>

        <div className="cut mt-16" aria-hidden="true" />

        <div className="mt-8 flex flex-col gap-4 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/impressum" className="link hover:text-ink">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="link hover:text-ink">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
