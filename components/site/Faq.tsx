import JsonLd from './JsonLd';

export type FaqEntry = { q: string; a: string };

// Natives details/summary: per Tastatur bedienbar, ohne JavaScript funktionsfähig.
export default function Faq({
  items,
  tone = 'dark',
  withSchema = true,
}: {
  items: FaqEntry[];
  tone?: 'dark' | 'light';
  withSchema?: boolean;
}) {
  const line = tone === 'light' ? 'border-[var(--line-light)]' : 'border-[var(--line-dark)]';
  return (
    <>
      <div className={`border-t ${line}`}>
        {items.map((item) => (
          <details key={item.q} className={`faq-item group border-b ${line}`}>
            <summary className="flex items-start justify-between gap-6 py-6 text-left">
              <h3 className="font-display text-xl leading-snug sm:text-2xl">{item.q}</h3>
              <span
                aria-hidden="true"
                className="faq-icon mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center text-gold-300"
              >
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </span>
            </summary>
            <div className="faq-body prose-cait pb-7 pr-10 opacity-90">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
      {withSchema && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((i) => ({
              '@type': 'Question',
              name: i.q,
              acceptedAnswer: { '@type': 'Answer', text: i.a },
            })),
          }}
        />
      )}
    </>
  );
}
