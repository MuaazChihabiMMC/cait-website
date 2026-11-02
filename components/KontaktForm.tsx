'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { SITE } from '@/lib/site';

export const INTERESTS = [
  'Suchmaschinenoptimierung',
  'Webdesign & Webentwicklung',
  'Google Ads',
  'Social Media',
  'Softwareentwicklung',
  'KI-Lösungen',
  'Noch unklar',
] as const;

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export default function KontaktForm() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', company: '', message: '', website: '' });
  const [interests, setInterests] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [serverError, setServerError] = useState('');
  const startedAt = useRef(Date.now());
  const successRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof Errors]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const toggleInterest = (i: string) =>
    setInterests((list) => (list.includes(i) ? list.filter((x) => x !== i) : [...list, i]));

  const validate = (): Errors => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = 'Bitte geben Sie Ihren Namen an.';
    if (!isEmail(values.email.trim())) e.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an, z. B. name@firma.de.';
    if (values.message.trim().length < 10) e.message = 'Bitte beschreiben Sie Ihr Anliegen in mindestens 10 Zeichen.';
    return e;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError('');
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim(),
          message: values.message.trim(),
          interests,
          website: values.website, // Honeypot
          startedAt: startedAt.current,
          timestamp: Date.now(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setServerError(
          data.error ||
            `Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an ${SITE.email}.`,
        );
        return;
      }
      setStatus('sent');
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus('error');
      setServerError(`Keine Verbindung zum Server. Prüfen Sie Ihre Internetverbindung oder schreiben Sie an ${SITE.email}.`);
    }
  };

  if (status === 'sent') {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="outline-none">
        <p className="font-display font-semibold text-3xl leading-tight sm:text-4xl">Anfrage gesendet.</p>
        <p className="muted mt-4 max-w-md">
          Danke, {values.name.split(' ')[0]}. Ihre Nachricht ist bei uns angekommen. Wir melden uns per E-Mail
          {values.phone ? ' oder telefonisch' : ''} bei Ihnen.
        </p>
        <p className="muted mt-6 text-sm">
          Eilt es? Rufen Sie uns an:{' '}
          <a href={SITE.phoneHref} className="link-static text-slate-ink">
            {SITE.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  const describe = (field: keyof Errors) => (errors[field] ? `${field}-fehler` : undefined);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="pflichtfelder" className="space-y-6">
      <p id="pflichtfelder" className="muted text-sm">
        Felder mit * sind Pflichtfelder.
      </p>

      {/* Honeypot – für Menschen unsichtbar */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website (bitte leer lassen)</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-medium">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            value={values.name}
            onChange={onChange}
            aria-invalid={!!errors.name}
            aria-describedby={describe('name')}
            className="field"
          />
          {errors.name && (
            <p id="name-fehler" className="mt-2 text-sm text-[#b42318]">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block font-medium">
            Unternehmen
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            value={values.company}
            onChange={onChange}
            className="field"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-medium">
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={254}
            value={values.email}
            onChange={onChange}
            aria-invalid={!!errors.email}
            aria-describedby={describe('email')}
            className="field"
          />
          {errors.email && (
            <p id="email-fehler" className="mt-2 text-sm text-[#b42318]">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block font-medium">
            Telefon <span className="font-normal text-slate-muted">(für Rückruf)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={30}
            value={values.phone}
            onChange={onChange}
            className="field"
          />
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 font-medium">Worum geht es?</legend>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => {
            const checked = interests.includes(i);
            return (
              <label
                key={i}
                className={`relative flex min-h-[44px] cursor-pointer items-center border px-4 text-[0.95rem] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--night)] ${
                  checked
                    ? 'border-[var(--night)] bg-[var(--night)] text-ink'
                    : 'border-[var(--line-light)] bg-kalk-100 text-slate-ink hover:border-[var(--night)]'
                }`}
              >
                <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleInterest(i)} name="interests" value={i} />
                {i}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-2 block font-medium">
          Ihr Anliegen *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          value={values.message}
          onChange={onChange}
          aria-invalid={!!errors.message}
          aria-describedby={['message-hinweis', describe('message')].filter(Boolean).join(' ')}
          className="field resize-y"
        />
        <p id="message-hinweis" className="mt-2 text-sm text-slate-muted">
          Hilfreich sind: Ihr Ziel, der aktuelle Stand (z. B. Link zur Website) und ein gewünschter Zeitrahmen.
        </p>
        {errors.message && (
          <p id="message-fehler" className="mt-2 text-sm text-[#b42318]">
            {errors.message}
          </p>
        )}
      </div>

      <div aria-live="assertive">
        {status === 'error' && serverError && (
          <p className="border-l-2 border-[#b42318] bg-[#fdecea] px-4 py-3 text-sm text-[#7a1a12]">{serverError}</p>
        )}
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm text-slate-muted">
          Wir verwenden Ihre Angaben nur zur Bearbeitung der Anfrage. Mehr dazu in der{' '}
          <Link href="/datenschutz" className="link-static text-slate-ink">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <button type="submit" disabled={status === 'sending'} className="btn btn-night shrink-0 disabled:cursor-wait disabled:opacity-70">
          {status === 'sending' ? 'Wird gesendet …' : 'Anfrage senden'}
        </button>
      </div>
    </form>
  );
}
