/*
  Bildmotive als gezeichnete Oberflächen statt Stockfotos:
  Sie zeigen, woran CAIT arbeitet (Website, Suche, Anzeigen, Social Media,
  Software, KI), laden ohne Bilddateien und bleiben auf jedem Bildschirm scharf.
  Alle Inhalte sind neutrale Beispiele ohne Kennzahlen oder Versprechen.
*/

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export function BrowserFrame({
  url = 'ihr-unternehmen.de',
  children,
  className,
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl border border-white/10 bg-[#0f1a30] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.75)]',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#0b1426] px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="flex flex-1 items-center gap-2 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-ink-muted">
          <svg width="9" height="11" viewBox="0 0 9 11" aria-hidden="true">
            <path d="M1.5 5V3.5a3 3 0 0 1 6 0V5M1 5h7v5.5H1z" fill="none" stroke="currentColor" strokeWidth="1.1" />
          </svg>
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

// Beispiel-Website eines Kunden (Startseite)
export function SiteMock({ className }: { className?: string }) {
  return (
    <div className={cx('bg-[#f6f3ec] p-5 text-[#1b2433] sm:p-6', className)}>
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-bold tracking-tight">Werkstatt Nord</span>
        <span className="flex gap-3 text-[10px] text-[#5b6578]">
          <span>Leistungen</span>
          <span>Über uns</span>
          <span className="rounded-md bg-[#1b2433] px-2 py-1 text-white">Termin</span>
        </span>
      </div>
      <div className="mt-6 grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <p className="font-display text-[22px] font-bold leading-[1.1] tracking-tight sm:text-[26px]">
            Ihr Fahrzeug in den besten Händen.
          </p>
          <p className="mt-2 text-[10.5px] leading-relaxed text-[#5b6578]">
            Meisterbetrieb in Berlin – Inspektion, Reparatur und Gutachten aus einer Hand.
          </p>
          <span className="mt-4 inline-block rounded-md bg-[#c8962e] px-3 py-1.5 text-[10px] font-semibold text-white">
            Termin vereinbaren
          </span>
        </div>
        <div className="col-span-2 overflow-hidden rounded-xl bg-gradient-to-br from-[#2b3a55] via-[#3d5378] to-[#c8962e]">
          <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
            <circle cx="88" cy="26" r="14" fill="#f2d48a" opacity=".9" />
            <path d="M0 78 L30 52 L52 66 L78 40 L120 70 L120 100 L0 100Z" fill="#1b2433" opacity=".55" />
            <path d="M0 88 L40 66 L70 80 L120 58 L120 100 L0 100Z" fill="#0f1a30" opacity=".7" />
          </svg>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {['Inspektion', 'Unfallgutachten', 'Reparatur'].map((t) => (
          <div key={t} className="rounded-lg bg-white p-2.5 shadow-sm">
            <span className="block h-1.5 w-6 rounded bg-[#c8962e]" />
            <span className="mt-2 block text-[10px] font-semibold">{t}</span>
            <span className="mt-1 block h-1 w-full rounded bg-[#e6e1d6]" />
            <span className="mt-1 block h-1 w-2/3 rounded bg-[#e6e1d6]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhoneFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cx(
        // Ohne eigenes "absolute" ist der Rahmen relativ positioniert (für die Kamera-Aussparung)
        !className?.includes('absolute') && 'relative',
        'overflow-hidden rounded-[2.2rem] border-[7px] border-[#1d2638] bg-black shadow-[0_40px_90px_-25px_rgba(0,0,0,0.8)]',
        className,
      )}
    >
      <span className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
      {children}
    </div>
  );
}

// Social-Media-Beitrag
export function SocialPostMock({ className, variant = 'a' }: { className?: string; variant?: 'a' | 'b' }) {
  if (variant === 'b')
    return (
      <div className={cx('bg-white pb-4 pt-8 text-[#111]', className)}>
        <div className="flex items-center gap-2 px-3">
          <span className="h-7 w-7 rounded-full bg-[#0c1527] p-[2px]">
            <span className="block h-full w-full rounded-full border-2 border-white bg-[#3d5378]" />
          </span>
          <span className="text-[11px] font-semibold">werkstatt.nord</span>
          <span className="ml-auto rounded bg-[#eceef2] px-1.5 py-0.5 text-[9px] font-semibold text-[#3f4a5e]">Reel</span>
        </div>
        <div className="relative mt-2 aspect-[4/5] bg-gradient-to-b from-[#2b3a55] to-[#0f1a30]">
          <svg viewBox="0 0 100 125" className="h-full w-full" aria-hidden="true">
            <circle cx="50" cy="52" r="16" fill="#fff" opacity=".92" />
            <path d="M45 44 L59 52 L45 60Z" fill="#0c1527" />
            <rect x="12" y="98" width="52" height="5" rx="2.5" fill="#fff" opacity=".85" />
            <rect x="12" y="107" width="34" height="4" rx="2" fill="#fff" opacity=".5" />
          </svg>
        </div>
        <p className="px-3 pt-3 text-[10.5px] leading-snug">
          <b>werkstatt.nord</b> 60 Sekunden Inspektion – so läuft es bei uns ab.
        </p>
      </div>
    );
  return (
    <div className={cx('bg-white pb-4 pt-8 text-[#111]', className)}>
      <div className="flex items-center gap-2 px-3">
        <span className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px]">
          <span className="block h-full w-full rounded-full border-2 border-white bg-[#c8962e]" />
        </span>
        <span className="text-[11px] font-semibold">cafe.lumen</span>
        <span className="ml-auto text-[13px] leading-none text-[#888]">···</span>
      </div>
      <div className="mt-2 aspect-square bg-gradient-to-br from-[#f4d9a8] via-[#e8a774] to-[#8a4b3b]">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
          <circle cx="50" cy="56" r="24" fill="#fff6ea" />
          <circle cx="50" cy="56" r="17" fill="#6b3a24" />
          <path d="M42 52 q8 -10 16 0 q-8 10 -16 0z" fill="#f2d4a8" opacity=".9" />
          <path d="M74 50 q10 0 10 8 q0 8 -10 8" fill="none" stroke="#fff6ea" strokeWidth="4" />
        </svg>
      </div>
      <div className="flex items-center gap-3 px-3 pt-3" aria-hidden="true">
        <svg width="18" height="16" viewBox="0 0 24 22">
          <path d="M12 21s-9-5.6-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.4-9 12-9 12z" fill="#ee2a5b" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M21 12a8 8 0 0 1-12 7l-5 1 1-5a8 8 0 1 1 16-3z" fill="none" stroke="#111" strokeWidth="2" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M22 3 2 10l8 3 3 8z" fill="none" stroke="#111" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="px-3 pt-2 text-[10.5px] leading-snug">
        <b>cafe.lumen</b> Neuer Herbst-Röstkaffee ist da – heute ab 8 Uhr in Zehlendorf.
      </p>
    </div>
  );
}

// Suchergebnisseite
export function SerpMock({ query = 'Kfz-Gutachter Berlin', className }: { query?: string; className?: string }) {
  return (
    <div className={cx('bg-white p-5 text-[#202124]', className)}>
      <div className="flex items-center gap-3 rounded-full border border-[#dfe1e5] px-4 py-2 shadow-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10" cy="10" r="7" fill="none" stroke="#5f6368" strokeWidth="2.4" />
          <path d="m15 15 6 6" stroke="#5f6368" strokeWidth="2.4" />
        </svg>
        <span className="text-[12px]">{query}</span>
      </div>
      <div className="mt-4 space-y-4">
        <div className="relative rounded-xl bg-[#fff8e6] p-3 ring-2 ring-[#d4af37]">
          <span className="absolute -top-2.5 right-3 rounded-full bg-[#d4af37] px-2 py-0.5 text-[9px] font-bold text-[#0c1527]">
            Ihr Unternehmen
          </span>
          <span className="block text-[10px] text-[#4d5156]">ihr-unternehmen.de › gutachten</span>
          <span className="mt-0.5 block text-[14px] leading-snug text-[#1a0dab]">Kfz-Gutachten in Berlin – schnell &amp; unabhängig</span>
          <span className="mt-1 block text-[10.5px] leading-snug text-[#4d5156]">
            Unfallgutachten, Wertgutachten und Beratung. Termine auch kurzfristig …
          </span>
        </div>
        {[0, 1].map((i) => (
          <div key={i} className="px-3 opacity-60">
            <span className="block h-1.5 w-28 rounded bg-[#dadce0]" />
            <span className="mt-2 block h-2.5 w-56 max-w-full rounded bg-[#c6cdf5]" />
            <span className="mt-2 block h-1.5 w-full rounded bg-[#e8eaed]" />
            <span className="mt-1 block h-1.5 w-4/5 rounded bg-[#e8eaed]" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Google-Ads-Anzeige
export function AdMock({ className }: { className?: string }) {
  return (
    <div className={cx('rounded-2xl bg-white p-4 text-[#202124] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]', className)}>
      <span className="text-[10px] font-bold">Gesponsert</span>
      <span className="mt-1 flex items-center gap-2 text-[10px] text-[#4d5156]">
        <span className="h-4 w-4 rounded-full bg-[#0c1527]" />
        ihr-unternehmen.de
      </span>
      <span className="mt-1 block text-[14px] leading-snug text-[#1a0dab]">Elektriker in Berlin – Termin heute anfragen</span>
      <span className="mt-1 block text-[10.5px] leading-snug text-[#4d5156]">
        Meisterbetrieb für Installation und Reparatur. Jetzt anrufen oder online buchen.
      </span>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {['Anrufen', 'Leistungen', 'Kontakt'].map((t) => (
          <span key={t} className="rounded-full border border-[#dadce0] px-2.5 py-1 text-[10px] text-[#1a0dab]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// Kleines Diagramm (ohne Zahlen): Entwicklung über Zeit
export function ChartMock({ title = 'Anfragen über die Website', className }: { title?: string; className?: string }) {
  return (
    <div className={cx('rounded-2xl border border-white/10 bg-[#101c34]/95 p-4 shadow-2xl backdrop-blur', className)}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-ink-soft">{title}</span>
        <span className="rounded-full bg-[#28c840]/15 px-2 py-0.5 text-[9px] font-semibold text-[#5fe07e]">steigend</span>
      </div>
      <svg viewBox="0 0 200 70" className="mt-3 w-full" aria-hidden="true">
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d4af37" stopOpacity=".45" />
            <stop offset="1" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[15, 35, 55].map((y) => (
          <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="rgba(255,255,255,.07)" />
        ))}
        <path d="M0 60 C25 58 35 50 55 48 S90 40 110 34 S150 22 170 16 S195 8 200 6 L200 70 L0 70Z" fill="url(#chart-fill)" />
        <path d="M0 60 C25 58 35 50 55 48 S90 40 110 34 S150 22 170 16 S195 8 200 6" fill="none" stroke="#e2c25a" strokeWidth="2.2" />
        <circle cx="200" cy="6" r="3.5" fill="#e2c25a" />
      </svg>
    </div>
  );
}

// Benachrichtigung über eine neue Anfrage
export function NotifyMock({ className }: { className?: string }) {
  return (
    <div className={cx('flex items-center gap-3 rounded-2xl border border-white/10 bg-[#f5f6f9] p-3 pr-5 shadow-2xl', className)}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0c1527] text-[#e2c25a]">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 6h18v12H3zM3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[#0c1527]">
        <span className="block text-[11px] font-semibold">Neue Anfrage</span>
        <span className="block text-[10px] text-[#3f4a5e]">über das Kontaktformular · gerade eben</span>
      </span>
    </div>
  );
}

// Chatbot-Dialog
export function ChatMock({ className }: { className?: string }) {
  return (
    <div className={cx('rounded-2xl border border-white/10 bg-[#0f1a30] p-4 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.75)]', className)}>
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#e2c25a] to-[#9a7d2e] text-[11px] font-bold text-[#0c1527]">
          KI
        </span>
        <span>
          <span className="block text-[11px] font-semibold text-ink">Assistent</span>
          <span className="flex items-center gap-1 text-[9.5px] text-[#5fe07e]">
            <i className="h-1.5 w-1.5 rounded-full bg-[#5fe07e]" /> online
          </span>
        </span>
      </div>
      <div className="mt-3 space-y-2.5 text-[11px] leading-snug">
        <p className="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-[#d4af37] px-3 py-2 text-[#0c1527]">
          Haben Sie am Samstag geöffnet?
        </p>
        <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 px-3 py-2 text-ink-soft">
          Ja, samstags von 10 bis 14 Uhr. Soll ich Ihnen einen Termin vorschlagen?
          <span className="mt-1 block text-[9.5px] text-ink-muted">Quelle: Öffnungszeiten</span>
        </p>
        <p className="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-[#d4af37] px-3 py-2 text-[#0c1527]">Gern, 11 Uhr.</p>
        <span className="flex w-14 gap-1 rounded-2xl bg-white/10 px-3 py-2.5" aria-hidden="true">
          <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted" />
          <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted [animation-delay:150ms]" />
          <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted [animation-delay:300ms]" />
        </span>
      </div>
    </div>
  );
}

// Code-Editor (Schnittstelle)
export function CodeMock({ className }: { className?: string }) {
  const lines: [string, string][][] = [
    [['#c792ea', 'export async function '], ['#82aaff', 'syncAuftrag'], ['#d6deeb', '(auftrag) {']],
    [['#d6deeb', '  '], ['#c792ea', 'const '], ['#d6deeb', 'kunde = '], ['#c792ea', 'await '], ['#82aaff', 'crm'], ['#d6deeb', '.find(auftrag.email)']],
    [['#d6deeb', '  '], ['#c792ea', 'await '], ['#82aaff', 'buchhaltung'], ['#d6deeb', '.rechnung({ kunde, auftrag })']],
    [['#d6deeb', '  '], ['#c792ea', 'await '], ['#82aaff', 'kalender'], ['#d6deeb', '.termin(auftrag.datum)']],
    [['#d6deeb', '  '], ['#c792ea', 'return '], ['#ecc48d', "'erledigt'"]],
    [['#d6deeb', '}']],
  ];
  return (
    <div className={cx('overflow-hidden rounded-2xl border border-white/10 bg-[#0b1426] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.75)]', className)}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 text-[10.5px] text-ink-muted">
        <span className="rounded bg-white/5 px-2 py-0.5 text-ink-soft">auftraege.ts</span>
        <span>schnittstelle.ts</span>
      </div>
      <pre className="overflow-hidden px-4 py-4 font-mono text-[11px] leading-[1.75]" aria-hidden="true">
        {lines.map((parts, i) => (
          <div key={i} className="flex gap-4 whitespace-pre">
            <span className="w-3 text-right text-white/25">{i + 1}</span>
            <span>
              {parts.map(([c, t], j) => (
                <span key={j} style={{ color: c }}>
                  {t}
                </span>
              ))}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}

// Abgleich zwischen Systemen (Automatisierung)
export function FlowMock({ className }: { className?: string }) {
  const nodes = ['Formular', 'CRM', 'Rechnung', 'Kalender'];
  return (
    <div className={cx('rounded-2xl border border-white/10 bg-[#101c34]/95 p-4 shadow-2xl', className)}>
      <span className="text-[11px] font-medium text-ink-soft">Automatischer Ablauf</span>
      <div className="mt-3 flex items-center gap-1.5">
        {nodes.map((n, i) => (
          <div key={n} className="flex items-center gap-1.5">
            <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[10px] text-ink-soft">{n}</span>
            {i < nodes.length - 1 && <span className="h-px w-3 bg-[#d4af37]" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}
