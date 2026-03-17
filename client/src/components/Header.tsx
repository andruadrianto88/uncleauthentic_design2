/* ============================================================
   UNCLE AUTHENTIC — HEADER COMPONENT
   Design: Sticky, minimal. Logo left, CTA right.
   Logo: "UNCLE" white text in Signature Orange circle.
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const ORDER_URL = "https://uncleauthentichainanesechickenrice.square.site/#LS4DASL34NHSUXOKE5MYQK5T";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Our Story", href: "#story" },
    { label: "Find Us", href: "#footer" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ua-charcoal/95 backdrop-blur-sm shadow-lg py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group" aria-label="Uncle Authentic Home">
          {/* Orange circle with UNCLE text */}
          <div
            className="flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              backgroundColor: "#FF5E00",
              flexShrink: 0,
            }}
          >
            <span
              className="font-display font-bold text-white"
              style={{ fontSize: "0.55rem", letterSpacing: "0.08em" }}
            >
              UNCLE
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-display font-bold text-white"
              style={{ fontSize: "0.9rem", letterSpacing: "0.04em" }}
            >
              UNCLE AUTHENTIC
            </span>
            <span
              className="font-body text-white/60"
              style={{ fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
            >
              Hainanese Chicken Rice
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-white/80 hover:text-white transition-colors duration-200"
              style={{ fontSize: "0.8125rem", letterSpacing: "0.06em" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ORDER DIRECT CTA */}
        <div className="flex items-center gap-3">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex"
            style={{ padding: "0.6rem 1.25rem", fontSize: "0.75rem" }}
          >
            Order Direct
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-ua-charcoal border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-white/80 hover:text-ua-orange transition-colors"
              style={{ fontSize: "0.9rem", letterSpacing: "0.04em" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Order Direct
          </a>
        </div>
      )}
    </header>
  );
}
