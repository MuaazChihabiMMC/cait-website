// app/seo/content-erstellung/ContentErstellungClient.tsx
'use client';

import { motion } from 'framer-motion';
import { FaPenNib } from 'react-icons/fa';
import Link from 'next/link';

export default function ContentErstellungClient() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-blue-900">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 flex items-center gap-3"
      >
        <FaPenNib className="text-blue-600" /> SEO Content Erstellung für Top Rankings & Sichtbarkeit
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
        className="text-lg mb-6 text-blue-800"
      >
        Wir schreiben Inhalte, die Google liebt und Nutzer lesen wollen – von informativen Blogartikeln über Service-Seiten bis hin zu überzeugenden Landingpages.
      </motion.p>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">🔍 Keyword-optimierte Inhalte</h2>
          <p className="text-blue-800">
            Jede Textproduktion beginnt bei uns mit einer fundierten Keyword-Recherche. Wir stellen sicher, dass deine Inhalte nicht nur gut klingen, sondern auch gefunden werden.
          </p>
        </motion.div>

        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">✍️ Conversion-orientiertes Copywriting</h2>
          <p className="text-blue-800">
            Ob Headlines, Call-to-Actions oder strukturierter Fließtext – wir optimieren deinen Content auf Lesbarkeit, Struktur und Wirkung.
          </p>
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <Link 
          href="/kontakt" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Jetzt Content-Angebot anfordern
        </Link>
      </motion.div>
    </main>
  );
}