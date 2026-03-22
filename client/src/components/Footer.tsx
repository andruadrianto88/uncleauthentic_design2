/* ============================================================
   UNCLE AUTHENTIC — FOOTER
   Design: Minimalist charcoal background, off-white text.
   Social links, deep links, contact, "Powered by Square".
   ============================================================ */

import { MapPin, Instagram, Facebook, Clock, Mail } from "lucide-react";

const ORDER_URL = "https://uncleauthentichainanesechickenrice.square.site/#LS4DASL34NHSUXOKE5MYQK5T";

const NAV_LINKS = [
  { label: "Our Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Order Direct", href: ORDER_URL, external: true },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/uncleauthentic/",
    icon: <Instagram size={17} />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/unclechickenrice/?locale=zh_CN",
    icon: <Facebook size={17} />,
  },
  {
    label: "Email",
    href: "mailto:growiseuncle@gmail.com",
    icon: <Mail size={17} />,
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
              <img
                src="/assets/logo.png"
                alt="Uncle Authentic Logo"
                className="h-10 w-auto object-contain flex-shrink-0"
              />
            </div>
            <p className="font-body text-white/50" style={{ fontSize: "0.8125rem", lineHeight: 1.7, maxWidth: "240px" }}>
              Adelaide's authentic Hainanese Chicken Rice. Prepared with uncompromising care, daily.
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
            <a
              href="https://maps.google.com/?q=4A/8+Waymouth+St,+Adelaide+SA+5000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 mb-4 group hover:opacity-80 transition-opacity"
            >
              <MapPin size={14} className="text-ua-orange mt-0.5 flex-shrink-0" />
              <div className="font-body text-white/60 group-hover:text-ua-orange transition-colors" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                4A/8 Waymouth St,
                <br />
                Adelaide SA 5000
              </div>
            </a>
            
            <div className="flex items-start gap-2 mb-6">
              <Clock size={14} className="text-ua-orange mt-0.5 flex-shrink-0" />
              <div className="font-body text-white/60" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                <p className="mb-0.5 font-semibold text-white/80">Opening Hours</p>
                <p>Mon - Sat: 11:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label === "Email" ? undefined : "_blank"}
                  rel={s.label === "Email" ? undefined : "noopener noreferrer"}
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="font-body text-white/30" style={{ fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Uncle Authentic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
