/* ============================================================
   UNCLE AUTHENTIC — FOOTER
   Design: Minimalist charcoal background, off-white text.
   Social links, deep links, contact, "Powered by Square".
   ============================================================ */

import { MapPin, Instagram, Facebook } from "lucide-react";

const ORDER_URL = "https://www.square.com/";

const NAV_LINKS = [
  { label: "Our Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Order Direct", href: ORDER_URL, external: true },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: <Instagram size={17} />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: <Facebook size={17} />,
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-ua-charcoal"
      style={{ paddingTop: "4rem", paddingBottom: "2.5rem" }}
      aria-label="Footer"
    >
      <div className="container">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center rounded-full"
                style={{ width: "2.25rem", height: "2.25rem", backgroundColor: "#FF5E00", flexShrink: 0 }}
              >
                <span className="font-display font-bold text-white" style={{ fontSize: "0.5rem", letterSpacing: "0.08em" }}>
                  UNCLE
                </span>
              </div>
              <div>
                <div className="font-display font-bold text-white" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
                  UNCLE AUTHENTIC
                </div>
                <div className="font-body text-white/40" style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Hainanese Chicken Rice
                </div>
              </div>
            </div>
            <p className="font-body text-white/50" style={{ fontSize: "0.8125rem", lineHeight: 1.7, maxWidth: "240px" }}>
              Adelaide's most authentic Hainanese Chicken Rice. Prepared with uncompromising care, daily.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="font-body text-white/30 mb-4"
              style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}
            >
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="font-body text-white/60 hover:text-ua-orange transition-colors duration-200"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p
              className="font-body text-white/30 mb-4"
              style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}
            >
              Find Us
            </p>
            <div className="flex items-start gap-2 mb-4">
              <MapPin size={14} className="text-ua-orange mt-0.5 flex-shrink-0" />
              <p className="font-body text-white/60" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                Adelaide, South Australia
              </p>
            </div>
            <div className="flex gap-3 mt-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center text-white/50 hover:text-ua-orange border border-white/15 hover:border-ua-orange/40 transition-all duration-200"
                  style={{ width: "2.25rem", height: "2.25rem", borderRadius: "2px" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30" style={{ fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Uncle Authentic. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-body text-white/25" style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}>
              Powered by
            </span>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-white/40 hover:text-ua-orange transition-colors duration-200"
              style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em" }}
            >
              Square
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
