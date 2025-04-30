// app/api/kontakt/route.ts

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.strato.de',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Kontakt" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER!,
      subject: 'Neue Kontaktanfrage',
      html: `
        <h3>Neue Nachricht von ${name}</h3>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Fehler beim Senden:', error);
    return NextResponse.json({ error: 'Fehler beim Versand' }, { status: 500 });
  }
}