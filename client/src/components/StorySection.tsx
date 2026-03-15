/* ============================================================
   UNCLE AUTHENTIC — STORY / AUTHENTICITY SECTION
   Design: Warm wood tones + behind-the-scenes kitchen image.
   Desktop: cinematic 55/45 split. Mobile: stacked.
   ============================================================ */

const KITCHEN_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663440308690/gdtnstsFtdGYsiWxcLLTG3/kitchen-craft-8MrvEvfqVnQXKPMgnVWnmh.webp";

const PILLARS = [
  { label: "Slow-Poached", value: "Daily" },
  { label: "Tradition", value: "Honoured" },
  { label: "Shortcuts", value: "Zero" },
];

export default function StorySection() {
  return (
    <section
      id="story"
      className="bg-ua-charcoal overflow-hidden"
      aria-label="Our Story"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-0" style={{ minHeight: "clamp(500px, 70vw, 780px)" }}>
        {/* Left: Image panel */}
        <div className="relative overflow-hidden order-1 lg:order-1" style={{ minHeight: "340px" }}>
          <img
            src={KITCHEN_IMAGE}
            alt="Chef poaching chicken in aromatic broth — the craft of Uncle Authentic"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            loading="lazy"
          />
          {/* Warm overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(26,16,8,0.1) 0%, rgba(26,16,8,0.4) 100%)",
            }}
          />
          {/* Blue plate circle — decorative */}
          <div
            className="absolute rounded-full bg-ua-blue"
            style={{
              width: "300px",
              height: "300px",
              bottom: "-60px",
              left: "-60px",
              opacity: 0.08,
            }}
          />
          {/* Stat overlay on image */}
          <div className="absolute bottom-8 left-8 right-8 flex gap-6">
            {PILLARS.map((p) => (
              <div key={p.label} className="text-center">
                <div
                  className="font-display text-white"
                  style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1 }}
                >
                  {p.value}
                </div>
                <div
                  className="font-body text-white/50 mt-1"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                >
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text panel */}
        <div
          className="flex flex-col justify-center order-2 lg:order-2 wood-texture"
          style={{
            padding: "clamp(2.5rem, 6vw, 5rem)",
            background: "linear-gradient(135deg, #2A2A2A 0%, #1a1008 100%)",
          }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 fade-up">
            <div className="orange-rule" />
            <span className="section-label" style={{ color: "rgba(255,255,255,0.5)" }}>
              The Craft
            </span>
          </div>

          <h2
            className="font-display text-white mb-6 fade-up delay-100"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.02em",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            MASTERING
            <br />
            <span
              className="font-serif-italic"
              style={{ color: "#FF5E00", fontWeight: 600 }}
            >
              The Tradition.
            </span>
          </h2>

          <p
            className="font-body text-white/65 mb-6 fade-up delay-200"
            style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: "420px" }}
          >
            Authenticity isn't a buzzword; it's a daily practice. From the warmth of our
            wood-accented dining room to the distinct blue plates that hold our signature
            dishes, every detail is considered.
          </p>

          <p
            className="font-body text-white/65 mb-10 fade-up delay-300"
            style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: "420px" }}
          >
            We dedicate hours to the slow craft of traditional poaching and roasting,
            ensuring every bite reflects our heritage.{" "}
            <span className="text-white font-medium">No shortcuts. Just exceptional Hainanese Chicken Rice.</span>
          </p>

          {/* Pull quote */}
          <blockquote
            className="border-l-2 border-ua-orange pl-5 mb-10 fade-up delay-400"
          >
            <p
              className="font-serif-italic text-white/80"
              style={{ fontSize: "1.05rem", lineHeight: 1.65 }}
            >
              "Every plate we serve is a quiet act of respect — for the tradition,
              for the craft, and for the people we feed."
            </p>
            <footer
              className="font-body text-ua-orange mt-2"
              style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              — Uncle Authentic
            </footer>
          </blockquote>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-8 fade-up delay-400" />

          {/* Craft details */}
          <div className="grid grid-cols-2 gap-4 fade-up delay-500">
            {[
              { label: "Poaching Method", value: "Traditional slow-poach in aromatic broth" },
              { label: "Roasting Method", value: "High-heat air-roast for perfect crackling" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="font-body text-ua-orange mb-1"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}
                >
                  {item.label}
                </p>
                <p
                  className="font-body text-white/55"
                  style={{ fontSize: "0.8125rem", lineHeight: 1.5 }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
