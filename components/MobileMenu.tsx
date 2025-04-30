// components/MobileMenu.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'SEO', href: '/seo' },
  { label: 'Webentwicklung', href: '/webentwicklung' },
  { label: 'Google Ads', href: '/google-ads' },
  { label: 'Social Media', href: '/social-media' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white"
        aria-label="Menü öffnen"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-blue-900 z-50 p-6 shadow-lg">
          <ul className="space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-white text-lg hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
