// components/KontaktForm.tsx
'use client';

import { useState } from 'react';

export default function KontaktForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/kontakt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert('Fehler beim Senden. Bitte versuche es später erneut.');
    }
  };

  return (
    <section className="bg-[#0c1832] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Kontaktformular</h2>
        {submitted ? (
          <div className="text-center text-green-400 font-semibold text-lg">
            Vielen Dank! Die <strong className="text-white">CAIT Agentur Berlin</strong> meldet sich in Kürze bei dir.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-[#fcd066]">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 border border-[#fcd066]/30 rounded-lg bg-[#fcd066] text-[#0c1832]/10 text-white placeholder-blue-300/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Dein Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-[#fcd066]">E-Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border border-[#fcd066]/30 rounded-lg bg-[#fcd066] text-[#0c1832]/10 text-white placeholder-blue-300/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="deine@email.de"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-[#fcd066]">Telefon (optional)</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 border border-[#fcd066]/30 rounded-lg bg-[#fcd066] text-[#0c1832]/10 text-white placeholder-blue-300/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+49 123 456789"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-[#fcd066]">Nachricht</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-4 border border-[#fcd066]/30 rounded-lg bg-[#fcd066] text-[#0c1832]/10 text-white placeholder-blue-300/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Wie können wir dir helfen?"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-[#fcd066] text-[#0c1832] hover:bg-[#fcd066] text-[#0c1832] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
              >
                Nachricht senden
              </button>
            </div>
          </form>
        )}
      </div>

      <section className="bg-[#fcd066] text-[#0c1832]/10 text-gray-100 py-16 px-6 mt-16 rounded-xl">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-white">Warum du uns kontaktieren solltest</h2>
          <p>
            Als erfahrene <strong className="text-white">Online-Marketing-Agentur aus Berlin</strong> stehen wir dir mit Expertise in den Bereichen 
            <strong className="text-white"> SEO, Google Ads, Social Media und Webdesign</strong> zur Seite. Ob du ein erstes Beratungsgespräch wünschst, konkrete Maßnahmen brauchst oder langfristige Zusammenarbeit suchst - bei uns bist du richtig.
          </p>
          <p>
            Die <strong className="text-white">CAIT Agentur</strong> hat bereits über 100 erfolgreiche Projekte umgesetzt, von lokalen Dienstleistern bis zu internationalen Unternehmen. Unsere Beratung ist individuell, transparent und datenbasiert.
          </p>
          <p>
            Wir freuen uns auf deine Nachricht, telefonisch, per E-Mail oder direkt über das Kontaktformular. Gemeinsam machen wir dein digitales Projekt sichtbar und erfolgreich.
          </p>
        </div>
      </section>
    </section>
  );
}