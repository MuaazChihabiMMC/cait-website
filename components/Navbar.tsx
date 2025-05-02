import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full transition-all duration-300 z-30 ${scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-5"}`}>
      <div className="max-container padding-container relative flex items-center justify-between">
        {/* Mobile: Invisible box to reserve space left */}
        <div className="w-[32px] lg:hidden" />

        {/* Logo: centered on mobile, left on desktop */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none transition-transform hover:scale-105"
        >
          <Image
            src="/cait logo tran black.svg"
            alt="logo"
            width={scrolled ? 90 : 100}
            height={scrolled ? 26 : 29}
            priority
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li 
                key={link.key} 
                className="relative px-2 pb-2"
                onMouseEnter={() => setActiveDropdown(link.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className={`regular-16 flexCenter cursor-pointer pb-1.5 transition-all ${activeDropdown === link.key ? 'font-bold text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}>
                  {link.label}
                  <span className={`ml-1 transition-transform duration-200 ${activeDropdown === link.key ? 'rotate-180' : ''}`}>▾</span>
                </span>
                
                <ul 
                  className={`absolute top-full left-0 flex flex-col bg-white text-gray-800 shadow-lg rounded-md py-2 w-56 z-50 min-h-[80px] border border-gray-100 transition-all duration-300 origin-top ${
                    activeDropdown === link.key 
                      ? 'scale-y-100 opacity-100 pointer-events-auto' 
                      : 'scale-y-95 opacity-0 pointer-events-none'
                  }`}
                >
                  {link.children.map((child) => (
                    <li key={child.key}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 hover:pl-6"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="regular-16 text-gray-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-blue-600"
                >
                  <span className="relative group">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button + Component */}
        <div className="lg:hidden flex items-center">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;