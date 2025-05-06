'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPenNib } from 'react-icons/fa';
import Link from 'next/link';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'CAIT SEO Agentur | Content Erstellung Agentur Berlin ',
  description: 'Deine SEO Agentur für Content SEO .',
 
}
export default function SEOContentPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-blue-900">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 flex items-center gap-3"
      >
        <FaPenNib className="text-blue-600" /> SEO-Content-Erstellung
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
        className="text-lg mb-6 text-blue-800"
      >
        Wir schreiben Inhalte, die Google liebt und Nutzer lesen wollen – von informativen Blogartikeln über Service-Seiten bis hin zu überzeugenden Landingpages.
      </motion.p>

      <section className="space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-2">🔍 Keyword-optimierte Inhalte</h2>
          <p className="text-blue-800">
            Jede Textproduktion beginnt bei uns mit einer fundierten Keyword-Recherche. Wir stellen sicher, dass deine Inhalte nicht nur gut klingen, sondern auch gefunden werden.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-2">✍️ Conversion-orientiertes Copywriting</h2>
          <p className="text-blue-800">
            Ob Headlines, Call-to-Actions oder strukturierter Fließtext – wir optimieren deinen Content auf Lesbarkeit, Struktur und Wirkung. So wird aus Besuchern messbar mehr.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">📄 Content für jede Seite</h2>
          <p className="text-blue-800">
            Von Kategorie-Texten im Onlineshop über Blogbeiträge bis hin zu Landingpages für Kampagnen – wir liefern dir suchmaschinenfreundliche Inhalte für jede Art von Seite.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2">📈 Mit Strategie zum Content-Erfolg</h2>
          <p className="text-blue-800">
            Unser Content ist eingebettet in deine SEO-Strategie – mit klaren Zielen, Zielgruppenbezug und messbarem Impact. Jeder Beitrag trägt zu deiner Sichtbarkeit und deinem Umsatz bei.
          </p>
        </motion.div>
      </section>

      <div className="mt-12">
        <Link href="/kontakt" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Jetzt Content-Angebot anfordern
        </Link>
      </div>
    </main>
  );
}