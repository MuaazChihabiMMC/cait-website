import { CLIENTS } from '@/lib/site';

// Laufband mit Kundennamen. Pausiert bei Hover/Fokus; bei reduzierter Bewegung steht es still und bricht um.
export default function Marquee() {
  const items = CLIENTS.map((c) => c.name);
  return (
    <div className="marquee group relative overflow-hidden py-8" aria-label="Eine Auswahl unserer Kunden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night to-transparent" />
      <ul className="marquee-track flex w-max items-center gap-12">
        {[...items, ...items].map((name, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= items.length ? true : undefined}
            className="flex items-center gap-12 whitespace-nowrap font-display text-2xl font-semibold text-ink-muted/80 sm:text-3xl"
          >
            {name}
            <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-gold-300/60" />
          </li>
        ))}
      </ul>
    </div>
  );
}
