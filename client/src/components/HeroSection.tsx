/* ============================================================
   UNCLE AUTHENTIC — HERO SECTION
   Design: Full-bleed cinematic image, dark overlay, editorial
   text anchored left. Blue plate circle motif in background.
   ============================================================ */

const ORDER_URL = "https://www.square.com/";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663440308690/gdtnstsFtdGYsiWxcLLTG3/hero-chicken-rice-oSX7nMLU2VfatgabLz8pVv.webp";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundPosition: "center 40%",
        }}
      />

      {/* Gradient overlay — warm dark at bottom-left, lighter top-right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,20,12,0.82) 0%, rgba(26,20,12,0.55) 50%, rgba(26,20,12,0.2) 100%)",
        }}
      />

      {/* Blue plate circle — decorative, top-right */}
      <div
        className="plate-circle hidden lg:block"
        style={{
          width: "520px",
          height: "520px",
          top: "-80px",
          right: "-100px",
          opacity: 0.12,
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 container flex flex-col justify-end"
        style={{ minHeight: "100svh", paddingBottom: "6rem", paddingTop: "8rem" }}
      >
        <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-5 fade-up">
            <div className="orange-rule" />
            <span className="section-label text-white/70">Adelaide, South Australia</span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-white mb-5 fade-up delay-100"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            THE CRAFT
            <br />
            <span style={{ fontStyle: "italic", color: "#FF5E00" }}>OF AUTHENTICITY.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-white/80 mb-8 fade-up delay-200"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              lineHeight: 1.65,
              maxWidth: "480px",
              fontWeight: 300,
            }}
          >
            Adelaide's premier destination for traditional Hainanese Chicken Rice,
            prepared with uncompromising care.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 fade-up delay-300">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Direct
              <span className="text-white/60 font-normal normal-case tracking-normal" style={{ fontSize: "0.7rem" }}>
                &nbsp;(Support Local)
              </span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 font-body font-semibold"
              style={{
                fontSize: "0.8125rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.35)",
                padding: "0.75rem 1.75rem",
                transition: "all 0.2s ease",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              View Menu
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-up delay-500"
        >
          <span className="font-body text-white/40" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div
            className="w-px bg-white/20"
            style={{ height: "2.5rem" }}
          >
            <div
              className="w-full bg-white/60"
              style={{
                height: "40%",
                animation: "scrollPulse 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(60%); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
