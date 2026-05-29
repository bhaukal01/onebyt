import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

const navItems = [
  { label: "home", href: "/#home" },
  { label: "services", href: "#services" },
  { label: "providers", href: "#providers" },
  { label: "plans", href: "#plans" },
  { label: "contact", href: "#contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = () => setMobileOpen(false);

  const containerBg = scrolled ? "bg-neutral-900" : "bg-transparent";

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-6 md:px-10 pt-6">
      <div className="opacity-100">
        <nav className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className={`flex items-center gap-2 ${containerBg} rounded-full pl-4 pr-6 py-3 transition-colors duration-300`}
            onClick={handleAnchorClick}
          >
            <BrandLogo className="h-5 w-5" />
            <span className="text-white text-sm font-normal tracking-tight">
              onebyt cloud systems
            </span>
          </Link>

          <div
            className={`hidden md:flex items-center gap-1 ${containerBg} rounded-full px-3 py-2 transition-colors duration-300`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm px-5 py-2 rounded-full text-neutral-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors"
            >
              get started
            </a>

            <button
              type="button"
              className={`md:hidden ${containerBg} rounded-full px-4 py-3 text-sm text-white transition-colors duration-300`}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? "close" : "menu"}
            </button>
          </div>
        </nav>

        <div
          className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${
            mobileOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`rounded-3xl ${containerBg} p-2 transition-colors duration-300`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleAnchorClick}
                className="block text-sm px-4 py-3 rounded-2xl transition-colors text-neutral-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
