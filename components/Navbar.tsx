import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MobileMenu from './MobileMenu';


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 bg-white shadow-sm">
      <Link href="/">
        <Image src="/cait logo tran black.svg" alt="logo" width={100} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
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

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Kontakt"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;