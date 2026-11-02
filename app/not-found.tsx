import Link from 'next/link';
import type { Metadata } from 'next';
import { CORE_SERVICES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="pb-24 pt-[calc(var(--header-h)+4rem)]">
      <div className="wrap">
        <p className="text-gold-200">Fehler 404</p>
        <h1 className="t-h1 mt-4 max-w-[16ch]">Diese Seite gibt es nicht (mehr).</h1>
        <p className="t-lead mt-6 max-w-[52ch] text-ink-soft">
          Vielleicht wurde sie verschoben oder der Link enthält einen Tippfehler. Hier geht es weiter:
        </p>
        <ul className="mt-10 grid max-w-3xl gap-x-8 sm:grid-cols-2">
          {[{ href: '/', label: 'Startseite' }, ...CORE_SERVICES, { href: '/kontakt', label: 'Kontakt' }].map((l) => (
            <li key={l.href} className="border-b border-[var(--line-dark)]">
              <Link href={l.href} className="block py-4 text-ink-soft transition-colors hover:text-gold-200">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
