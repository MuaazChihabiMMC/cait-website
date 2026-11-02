'use client';

import Link from 'next/link';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import Arrow from '@/components/site/Arrow';
import {
  AdMock,
  BrowserFrame,
  ChatMock,
  CodeMock,
  FlowMock,
  PhoneFrame,
  SerpMock,
  SiteMock,
  SocialPostMock,
} from '@/components/site/Mockups';

type Step = {
  phase: string;
  text: string;
  services: { href: string; label: string; short: string }[];
};

function Visual({ index }: { index: number }) {
  if (index === 0)
    return (
      <div className="relative h-full w-full">
        <BrowserFrame url="google.de/search" className="absolute left-0 top-[6%] w-[88%]">
          <SerpMock />
        </BrowserFrame>
        <AdMock className="absolute bottom-[4%] right-0 w-[62%]" />
      </div>
    );
  if (index === 1)
    return (
      <div className="relative h-full w-full">
        <BrowserFrame className="absolute left-0 top-[8%] w-[86%]">
          <SiteMock />
        </BrowserFrame>
        <PhoneFrame className="absolute bottom-[2%] right-0 w-[36%]">
          <SocialPostMock />
        </PhoneFrame>
      </div>
    );
  return (
    <div className="relative h-full w-full">
      <CodeMock className="absolute left-0 top-[4%] w-[80%]" />
      <ChatMock className="absolute bottom-[10%] right-0 w-[56%]" />
      <FlowMock className="absolute bottom-[0%] left-[4%] w-[60%]" />
    </div>
  );
}

// Abschnitt mit fixiertem Bild: Beim Scrollen durch die drei Aufgaben wechselt das Motiv.
// Kein Scroll-Hijacking – die Seite scrollt normal, nur das Bild bleibt stehen.
export default function ScrollStory({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 60%', 'end 60%'] });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const i = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    if (i !== active) setActive(i);
  });

  return (
    <div ref={ref} className="relative grid gap-16 lg:grid-cols-12 lg:gap-12">
      {/* Fixiertes Motiv (nur Desktop) */}
      <div className="hidden lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:block">
        <div className="sticky top-[14vh] h-[72vh]">
          <div className="absolute -left-6 top-0 h-full w-px bg-white/10" aria-hidden="true">
            <motion.span
              className="absolute left-0 top-0 block w-px origin-top bg-gold-300"
              style={{ height: '100%', scaleY: scrollYProgress }}
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Visual index={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Texte */}
      <ol className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
        {steps.map((step, i) => (
          <li
            key={step.phase}
            className={`flex flex-col justify-center py-10 transition-opacity duration-500 lg:min-h-[80vh] lg:py-0 ${
              active === i ? 'lg:opacity-100' : 'lg:opacity-35'
            }`}
          >
            <span className="eyebrow self-start">
              Aufgabe {i + 1} von {steps.length}
            </span>
            <h3 className="t-h2 mt-5">{step.phase}</h3>
            <p className="mt-4 max-w-[46ch] text-lg text-ink-soft">{step.text}</p>

            <div className="relative mt-10 aspect-[4/3] w-full lg:hidden" aria-hidden="true">
              <Visual index={i} />
            </div>

            <ul className="mt-8 space-y-3">
              {step.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="row-link group flex items-center justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-gold-300/50 hover:bg-white/[0.06]"
                  >
                    <span>
                      <span className="block font-display text-xl font-semibold group-hover:text-gold-200">{s.label}</span>
                      <span className="mt-1 block text-[0.95rem] text-ink-muted">{s.short}</span>
                    </span>
                    <Arrow className="text-gold-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
