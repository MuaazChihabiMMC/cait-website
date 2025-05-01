import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-5 z-30 relative">
      <div className="max-container padding-container relative flex items-center justify-between">
        
        {/* Mobile: Invisible box to reserve space left */}
        <div className="w-[32px] lg:hidden" />

        {/* Logo: centered on mobile, left on desktop */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none"
        >
          <Image
            src="/cait logo tran black.svg"
            alt="logo"
            width={100}
            height={29}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-12">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li key={link.key} className="relative group px-2 pb-2">
                <span className="regular-16 text-gray-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-blue-600">
                  {link.label} ▾
                </span>
                <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-gray-800 shadow-lg rounded-md py-2 w-56 z-50 pointer-events-auto min-h-[80px] border border-gray-100">
                  {link.children.map((child) => (
                    <li key={child.key}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <Button
            type="button"
            title="Kontakt"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        {/* Mobile Menu Button + Component */}
        <div className="lg:hidden flex items-center">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;