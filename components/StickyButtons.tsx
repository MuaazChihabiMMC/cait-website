'use client';

import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function StickyButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/493022689840"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Nachricht senden"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+493022689840"
        aria-label="Jetzt anrufen"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#d4af37] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <FaPhoneAlt className="text-xl group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}
