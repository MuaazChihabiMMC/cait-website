// app/api/kontakt/route.ts
// Versendet Anfragen aus dem Kontaktformular per SMTP (Strato).
// Benötigte Umgebungsvariablen: EMAIL_USER, EMAIL_PASS
// Optional: CONTACT_TO (Empfänger, Standard: EMAIL_USER)

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 3;

const SPAM_KEYWORDS = [
  'viagra', 'casino', 'lottery', 'free money', 'you have been selected',
  'make money fast', 'work from home', 'earn extra cash', 'double your',
];

const BLOCKED_EMAIL_DOMAINS = [
  'tempmail.com', 'throwaway.email', '10minutemail.com', 'guerrillamail.com',
  'mailinator.com', 'temp-mail.org', 'fakeinbox.com', 'trashmail.com',
];

const ALLOWED_INTERESTS = new Set([
  'Suchmaschinenoptimierung',
  'Webdesign & Webentwicklung',
  'Google Ads',
  'Social Media',
  'Softwareentwicklung',
  'KI-Lösungen',
  'Noch unklar',
]);

function getClientIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unbekannt';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  for (const [key, rec] of Array.from(rateLimitMap.entries())) {
    if (now - rec.timestamp > RATE_LIMIT_WINDOW * 2) rateLimitMap.delete(key);
  }
  const record = rateLimitMap.get(ip);
  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  if (record.count >= MAX_REQUESTS) return true;
  record.count++;
  return false;
}

const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const isValidEmail = (email: string) =>
  email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.split('@')[0].length <= 64;

const bad = (error: string, status = 400) => NextResponse.json({ error }, { status });

export async function POST(req: Request) {
  const ip = getClientIP(req);
  if (isRateLimited(ip)) return bad('Zu viele Anfragen in kurzer Zeit. Bitte warten Sie eine Minute.', 429);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return bad('Ungültige Anfrage.');
  }

  // Honeypot: Bots füllen das versteckte Feld aus. Antwort wirkt erfolgreich, es wird nichts versendet.
  if (clean(body.website, 200)) return NextResponse.json({ success: true });

  // Zeitprüfung: Formulare, die in unter 3 Sekunden ausgefüllt werden, stammen fast immer von Bots.
  const now = Date.now();
  const startedAt = Number(body.startedAt) || 0;
  const timestamp = Number(body.timestamp) || 0;
  if (!timestamp || Math.abs(now - timestamp) > 2 * 60 * 60 * 1000) {
    return bad('Die Seite war zu lange geöffnet. Bitte laden Sie sie neu und senden Sie die Anfrage erneut.');
  }
  if (startedAt && timestamp - startedAt < 3000) return NextResponse.json({ success: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 30);
  const company = clean(body.company, 120);
  const message = clean(body.message, 5000);
  const interests = Array.isArray(body.interests)
    ? body.interests.filter((i): i is string => typeof i === 'string' && ALLOWED_INTERESTS.has(i))
    : [];

  if (name.length < 2) return bad('Bitte geben Sie Ihren Namen an.');
  if (!isValidEmail(email)) return bad('Bitte geben Sie eine gültige E-Mail-Adresse an.');
  if (BLOCKED_EMAIL_DOMAINS.some((d) => email.endsWith(`@${d}`))) return bad('Bitte verwenden Sie eine dauerhafte E-Mail-Adresse.');
  if (message.length < 10) return bad('Bitte beschreiben Sie Ihr Anliegen in mindestens 10 Zeichen.');

  const haystack = `${name} ${message}`.toLowerCase();
  if (SPAM_KEYWORDS.some((k) => haystack.includes(k))) {
    console.warn(`Kontaktformular: Spam-Verdacht (IP ${ip})`);
    return NextResponse.json({ success: true });
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    console.error('Kontaktformular: EMAIL_USER oder EMAIL_PASS ist nicht gesetzt.');
    return bad('Das Formular ist gerade nicht erreichbar. Bitte schreiben Sie an info@caitsocialmedia.com oder rufen Sie uns an.', 503);
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Unternehmen', company],
    ['E-Mail', email],
    ['Telefon', phone],
    ['Interesse', interests.join(', ')],
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #0c1527;">
      <h2 style="border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Neue Anfrage über caitsocialmedia.com</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([k, v]) => `<tr>
              <td style="padding: 8px 10px; background: #eceef2; font-weight: bold; width: 130px; vertical-align: top;">${k}</td>
              <td style="padding: 8px 10px; background: #f5f6f9;">${escapeHtml(v)}</td>
            </tr>`,
          )
          .join('')}
      </table>
      <h3 style="margin-top: 24px;">Nachricht</h3>
      <div style="background: #f5f6f9; padding: 14px; border-left: 4px solid #d4af37; white-space: pre-wrap;">${escapeHtml(message)}</div>
      <p style="font-size: 12px; color: #4a5468; margin-top: 24px;">
        Eingegangen am ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
      </p>
    </div>`;

  const text = [...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`), '', 'Nachricht:', message].join('\n');

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.strato.de',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Website CAIT" <${user}>`,
      to: process.env.CONTACT_TO || user,
      replyTo: { name, address: email },
      subject: `Neue Anfrage von ${name}${company ? ` (${company})` : ''}${interests.length ? ` – ${interests.join(', ')}` : ''}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Kontaktformular: Versand fehlgeschlagen', error);
    return bad('Die Anfrage konnte gerade nicht versendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an info@caitsocialmedia.com.', 502);
  }
}
