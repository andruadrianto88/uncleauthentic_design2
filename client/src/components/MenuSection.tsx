/* ============================================================
   UNCLE AUTHENTIC — MENU SECTION
   Design: Simple menu image with a PDF download button.
   ============================================================ */

import { Download } from "lucide-react";

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="bg-ua-cream relative overflow-hidden"
      style={{ paddingTop: "5.5rem", paddingBottom: "5.5rem" }}
      aria-label="Our Menu"
    >
      {/* Decorative blue circle */}
      <div
        className="absolute rounded-full bg-ua-blue pointer-events-none"
        style={{ width: "500px", height: "500px", bottom: "-150px", left: "-100px", opacity: 0.15, zIndex: 0 }}
      />
      
      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center fade-up mb-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="orange-rule" />
            <span className="section-label">The Menu</span>
            <div className="orange-rule" />
          </div>
          <h2
            className="font-display text-ua-charcoal mb-4"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            OUR MENU
          </h2>
          <p
            className="font-body text-ua-charcoal/70 max-w-xl mx-auto mb-8"
            style={{ fontSize: "1rem", lineHeight: 1.75 }}
          >
            Explore our authentic Hainanese Chicken Rice offerings, prepared fresh daily with time-honoured methods.
          </p>
          
          <a
            href="/assets/Uncle%20-Menu_2024_July.pdf"
            download="Uncle_Authentic_Menu.pdf"
            className="btn-primary inline-flex items-center gap-2 mb-10"
          >
            <Download size={16} />
            Download Full Menu (PDF)
          </a>
        </div>

        {/* Menu Image Display */}
        <div className="relative fade-up delay-200 w-full overflow-hidden shadow-xl" style={{ borderRadius: "4px" }}>
          {/* Default to menu-image.jpg or webp. Provide placeholder alt text */}
          <img
            src="/assets/menu.jpg" 
            alt="Uncle Authentic Full Menu"
            className="w-full object-cover"
            style={{ display: "block", minHeight: "400px", backgroundColor: "#fff" }}
            onError={(e) => {
              // Fallback styling if image not uploaded yet
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
            loading="lazy"
          />
          {/* Fallback box shown if image fails to load */}
          <div 
            className="w-full bg-white flex-col items-center justify-center border-2 border-dashed border-ua-charcoal/20 p-12 text-center"
            style={{ display: "none", minHeight: "400px" }}
          >
            <p className="font-display text-ua-charcoal/50 text-xl font-bold mb-2">Menu Image Pending</p>
            <p className="font-body text-ua-charcoal/40 text-sm">Please upload <code>menu-image.webp</code> to the public folder.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
