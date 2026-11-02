import Link from 'next/link';
import JsonLd from './JsonLd';
import { absoluteUrl } from '@/lib/site';

export type Crumb = { href: string; label: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ href: '/', label: 'Start' }, ...items];
  return (
    <>
      <nav aria-label="Brotkrumen" className="text-sm text-ink-muted">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-ink-soft">
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="link hover:text-ink">
                      {c.label}
                    </Link>
                    <span aria-hidden="true" className="text-gold-300/60">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.label,
            item: absoluteUrl(c.href),
          })),
        }}
      />
    </>
  );
}
