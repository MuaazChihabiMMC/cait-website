// app/seo/content-erstellung/page.tsx
'use client';

import type { Metadata } from 'next';
import React from 'react';
import { motion } from 'framer-motion';
import { FaPenNib } from 'react-icons/fa';
import Link from 'next/link';

// Metadata muss in einer Server-Komponente oder layout.tsx definiert werden
// Für Client-Komponenten können wir es hier nicht direkt exportieren

export default function ContentErstellungPage() {
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
        Wir schreiben Inhalte, die Google liebt und Nutzer lesen wollen...
      </motion.p>

      {/* Rest der animierten Inhalte... */}

      <div className="mt-12">
        <Link href="/kontakt" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Jetzt Content-Angebot anfordern
        </Link>
      </div>
    </main>
  );
}