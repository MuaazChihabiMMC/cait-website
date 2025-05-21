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
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Kontaktformular</h2>
        {submitted ? (
          <div className="text-center text-green-700 font-semibold text-lg">
  Vielen Dank! Die <strong>CAIT Social Media Agentur Berlin</strong> meldet sich in Kürze bei dir.
</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-black">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-blue-900 rounded-md bg-white text-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-black">E-Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-blue-900 rounded-md bg-white text-black"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium text-black">Telefon (optional)</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-blue-900 rounded-md bg-white text-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-black">Nachricht</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-blue-900 rounded-md bg-white text-black"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
              >
                Nachricht senden
              </button>
            </div>
          </form>
        )}
      </div>
      <section className="bg-white text-blue-900 py-16 px-6">
  <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
    <h2 className="text-2xl font-bold text-blue-800">Warum du uns kontaktieren solltest</h2>
    <p>
      Als erfahrene <strong>Online-Marketing-Agentur aus Berlin</strong> stehen wir dir mit Expertise in den Bereichen 
      <strong> SEO, Google Ads, Social Media und Webdesign</strong> zur Seite. Ob du ein erstes Beratungsgespräch wünschst, konkrete Maßnahmen brauchst oder langfristige Zusammenarbeit suchst – bei uns bist du richtig.
    </p>
    <p>
      Die <strong>CAIT Social Media Agentur</strong> hat bereits über 100 erfolgreiche Projekte umgesetzt – von lokalen Dienstleistern bis zu internationalen Unternehmen. Unsere Beratung ist individuell, transparent und datenbasiert.
    </p>
    <p>
      Wir freuen uns auf deine Nachricht – telefonisch, per E-Mail oder direkt über das Kontaktformular. Gemeinsam machen wir dein digitales Projekt sichtbar und erfolgreich.
    </p>
  </div>
</section>
    </section>
  );
}