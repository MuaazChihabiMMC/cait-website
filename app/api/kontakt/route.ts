// app/api/kontakt/route.ts

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

// Spam keywords to block
const SPAM_KEYWORDS = [
  'viagra', 'casino', 'lottery', 'bitcoin', 'crypto', 'pills',
  'cheap', 'free money', 'winner', 'prize', 'click here',
  '.ru/', '.cn/', 'buy now', 'make money', 'work from home',
  'earn extra', 'double your', 'no obligation', 'act now',
  'limited time', 'congratulations', 'you have been selected'
];

// Disposable email domains to block
const BLOCKED_EMAIL_DOMAINS = [
  'tempmail.com', 'throwaway.email', '10minutemail.com',
  'guerrillamail.com', 'mailinator.com', 'temp-mail.org',
  'fakeinbox.com', 'trashmail.com'
];

function getClientIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

function containsSpam(text: string): boolean {
  const lowerText = text.toLowerCase();
  return SPAM_KEYWORDS.some(keyword => lowerText.includes(keyword));
}

function isBlockedEmailDomain(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return BLOCKED_EMAIL_DOMAINS.some(blocked => domain?.includes(blocked));
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;
  if (email.length > 254) return false;

  // Check for common spam patterns
  const localPart = email.split('@')[0];
  if (localPart.length > 64) return false;
  if (/^\d+$/.test(localPart)) return false; // All numbers

  return true;
}

function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>]/g, '') // Remove angle brackets
    .trim()
    .slice(0, 5000); // Limit length
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  // Skip verification in development if no key is set
  if (!secretKey || secretKey === 'test') {
    console.log('Turnstile verification skipped (development mode)');
    return true;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function POST(req: Request) {
  const ip = getClientIP(req);

  // Rate limiting check
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte warten Sie einen Moment.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, message, turnstileToken, timestamp } = body;

    // Timestamp validation (prevent replay attacks)
    const now = Date.now();
    if (!timestamp || now - timestamp > 5 * 60 * 1000 || timestamp > now) {
      return NextResponse.json(
        { error: 'Ungültige Anfrage. Bitte laden Sie die Seite neu.' },
        { status: 400 }
      );
    }

    // Required fields validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedPhone = phone ? sanitizeInput(phone) : '';

    // Validate lengths
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { error: 'Der Name muss zwischen 2 und 100 Zeichen lang sein.' },
        { status: 400 }
      );
    }

    if (sanitizedMessage.length < 10) {
      return NextResponse.json(
        { error: 'Die Nachricht muss mindestens 10 Zeichen enthalten.' },
        { status: 400 }
      );
    }

    // Email validation
    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    // Blocked email domains
    if (isBlockedEmailDomain(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Bitte verwenden Sie eine permanente E-Mail-Adresse.' },
        { status: 400 }
      );
    }

    // Spam check
    if (containsSpam(sanitizedName) || containsSpam(sanitizedMessage)) {
      console.log(`Spam detected from IP: ${ip}`);
      return NextResponse.json(
        { error: 'Ihre Nachricht konnte nicht gesendet werden.' },
        { status: 400 }
      );
    }

    // Turnstile verification
    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Bitte bestätigen Sie, dass Sie kein Roboter sind.' },
        { status: 400 }
      );
    }

    const turnstileValid = await verifyTurnstile(turnstileToken);
    if (!turnstileValid) {
      return NextResponse.json(
        { error: 'Captcha-Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut.' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.strato.de',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Kontakt" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER!,
      replyTo: sanitizedEmail,
      subject: `Neue Kontaktanfrage von ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0c1832; border-bottom: 2px solid #fcd066; padding-bottom: 10px;">
            Neue Kontaktanfrage
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px; background: #fafafa;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">E-Mail:</td>
              <td style="padding: 10px; background: #fafafa;">
                <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a>
              </td>
            </tr>
            ${sanitizedPhone ? `
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px; background: #fafafa;">${sanitizedPhone}</td>
            </tr>
            ` : ''}
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #0c1832;">Nachricht:</h3>
            <div style="background: #fafafa; padding: 15px; border-left: 4px solid #fcd066; white-space: pre-wrap;">
              ${sanitizedMessage}
            </div>
          </div>
          
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #666;">
            Gesendet über das Kontaktformular auf caitsocialmedia.com<br />
            IP: ${ip} | Zeit: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
          </p>
        </div>
      `,
    });

    console.log(`Contact form submission successful from IP: ${ip}`);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Fehler beim Senden:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  const entries = Array.from(rateLimitMap.entries());
  for (const [ip, record] of entries) {
    if (now - record.timestamp > RATE_LIMIT_WINDOW * 2) {
      rateLimitMap.delete(ip);
    }
  }
}, 60000);