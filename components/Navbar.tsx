'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import Logo from '@/components/site/Logo';
import { CORE_SERVICES, MAIN_NAV, MORE_SERVICES, SITE } from '@/lib/site';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobil
  const [panelOpen, setPanelOpen] = useState(false); // Desktop-Leistungen
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bei Seitenwechsel alles schließen
  useEffect(() => {
    setMenuOpen(false);
    setPanelOpen(false);
  }, [pathname]);

  // Mobilmenü: Scrollen der Seite sperren, Escape schließt
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setPanelOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (panelOpen) triggerRef.current?.focus();
      closeAll();
    };
    const onClick = (e: MouseEvent) => {
      if (!panelOpen) return;
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || triggerRef.current?.contains(t)) return;
      setPanelOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [panelOpen, closeAll]);

  const openWithHover = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setPanelOpen(true), 80);
  };
  const closeWithHover = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setPanelOpen(false), 180);
  };

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));
  const servicesActive = [...CORE_SERVICES, ...MORE_SERVICES].some((s) => isActive(s.href)) || pathname === '/leistungen';
  const solid = scrolled || panelOpen || menuOpen;

  // Das Mobilmenü liegt außerhalb des Headers: dessen backdrop-filter würde sonst
  // den Bezugsrahmen für position: fixed bilden und das Menü auf Headerhöhe beschneiden.
  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        solid ? 'border-b border-[var(--line-dark)] bg-night/95 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" className="relative z-10 -ml-1 p-1 text-ink" aria-label="CAIT – zur Startseite">
          <Logo className="h-7 w-auto sm:h-8" title="CAIT" />
        </Link>

        {/* Desktop */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          <div onMouseEnter={openWithHover} onMouseLeave={closeWithHover} className="relative">
            <button
              ref={triggerRef}
              type="button"
              aria-expanded={panelOpen}
              aria-controls="leistungen-panel"
              onClick={() => setPanelOpen((v) => !v)}
              className={`flex h-11 items-center gap-2 px-4 text-[0.95rem] transition-colors hover:text-gold-200 ${
                servicesActive || panelOpen ? 'text-gold-200' : 'text-ink'
              }`}
            >
              Leistungen
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={`transition-transform duration-300 ${panelOpen ? 'rotate-180' : ''}`}>
                <path d="M1 3.5 5 7l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>

            <div
              id="leistungen-panel"
              ref={panelRef}
              hidden={!panelOpen}
              className="absolute left-1/2 top-full w-[min(760px,90vw)] -translate-x-1/2 pt-3"
            >
              <div className="border border-[var(--line-dark)] bg-night-700 p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <ul className="grid grid-cols-2">
                  {CORE_SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        aria-current={isActive(s.href) ? 'page' : undefined}
                        className="group block p-4 transition-colors hover:bg-night-600 focus-visible:bg-night-600"
                      >
                        <span className="font-display text-xl text-ink group-hover:text-gold-200">{s.label}</span>
                        <span className="mt-1 block text-sm text-ink-muted">{s.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line-dark)] px-4 pb-2 pt-4 text-sm">
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-ink-muted">
                    {MORE_SERVICES.map((s) => (
                      <Link key={s.href} href={s.href} className="link hover:text-ink">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                  <Link href="/leistungen" className="link text-gold-200">
                    Alle Leistungen im Überblick
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {MAIN_NAV.filter((n) => n.href !== '/kontakt').map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`flex h-11 items-center px-4 text-[0.95rem] transition-colors hover:text-gold-200 ${
                isActive(item.href) ? 'text-gold-200' : 'text-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={SITE.phoneHref} className="link text-sm text-ink-muted hover:text-ink">
            {SITE.phoneDisplay}
          </a>
          <Link href="/kontakt" className="btn btn-gold min-h-[44px] px-5 text-[0.95rem]">
            Projekt besprechen
          </Link>
        </div>

        {/* Mobil */}
        <button
          type="button"
          className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobilmenue"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`absolute bottom-0 left-0 h-px w-6 bg-current transition-transform duration-300 ${menuOpen ? '-translate-y-[5px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

    </header>
      <div
        id="mobilmenue"
        hidden={!menuOpen}
        className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto bg-night lg:hidden"
      >
        <nav aria-label="Mobile Navigation" className="wrap flex min-h-full flex-col py-8">
          <p className="text-sm text-ink-muted">Leistungen</p>
          <ul className="mt-3">
            {CORE_SERVICES.map((s) => (
              <li key={s.href} className="border-b border-[var(--line-dark)]">
                <Link href={s.href} onClick={closeAll} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="font-display text-2xl text-ink">{s.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-ink-muted">
            {MORE_SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} onClick={closeAll} className="link-static">
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/leistungen" onClick={closeAll} className="link-static text-gold-200">
                Alle Leistungen
              </Link>
            </li>
          </ul>

          <ul className="mt-10 grid grid-cols-2 gap-3">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={closeAll} className="block py-2 text-lg text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-10">
            <Link href="/kontakt" onClick={closeAll} className="btn btn-gold w-full">
              Projekt besprechen
            </Link>
            <a href={SITE.phoneHref} className="btn btn-line w-full">
              Anrufen: {SITE.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
