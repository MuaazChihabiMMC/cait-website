'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  };

  return (
    <>
      {/* Burger Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="z-50 lg:hidden transition-transform duration-300"
          aria-label="Open menu"
        >
          <Image 
            src="/menu.svg" 
            alt="menu" 
            width={32} 
            height={32}
            className="filter invert" // Macht das Icon weiß
          />
        </button>
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen w-full bg-[#0c1832] text-white p-6 transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-semibold text-blue-100">Menü</span>
          <button 
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <Image 
              src="/close.svg" 
              alt="close" 
              width={28} 
              height={28}
              className="filter invert" // Macht das Icon weiß
            />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.key} className="border-b border-[#1a2a4a] pb-4">
                <button
                  onClick={() => toggleDropdown(link.key)}
                  className={`w-full text-left flex justify-between items-center text-lg ${
                    openDropdown === link.key ? 'text-blue-300' : 'text-blue-100'
                  }`}
                >
                  {link.label}
                  <span className="text-blue-400">
                    {openDropdown === link.key ? '▴' : '▾'}
                  </span>
                </button>
                {openDropdown === link.key && (
                  <ul className="mt-3 ml-3 space-y-3">
                    {link.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          className="block text-blue-100 hover:text-blue-300 pl-2 py-1.5 border-l-2 border-[#2d3a5a] hover:border-blue-400 transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={link.key}
                href={link.href}
                className="text-lg text-blue-100 hover:text-blue-300 py-2 border-b border-[#1a2a4a]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;