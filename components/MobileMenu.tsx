'use client'
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="z-50">
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </button>

      {/* Slide-in Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-blue-800/70 text-white flex flex-col items-start p-6 gap-6 z-40 backdrop-blur-sm">
        {NAV_LINKS.map((link) => (
            <Link key={link.key} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileMenu;