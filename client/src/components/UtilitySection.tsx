/* ============================================================
   UNCLE AUTHENTIC — ORDERING SECTION
   Design: Off-white parchment bg, charcoal text, orange CTA.
   Clean, sophisticated. Features: UberEats, DoorDash, Pickup.
   ============================================================ */

import { MapPin, Clock, ArrowRight, ShoppingBag, UtensilsCrossed, Navigation } from "lucide-react";

export default function UtilitySection() {
  return (
    <section
      id="order"
      className="bg-ua-parchment relative overflow-hidden"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      aria-label="Order Now"
    >
      {/* Decorative blue circle */}
      <div
        className="absolute rounded-full bg-ua-blue pointer-events-none"
        style={{ width: "400px", height: "400px", top: "-120px", right: "-80px", opacity: 0.18, zIndex: 0 }}
      />
      <div className="container relative z-10">
        {/* Top divider */}
        <div className="flex items-center gap-4 mb-12 fade-up">
          <div className="orange-rule" />
          <span className="section-label">Order Your Way</span>
          <div className="flex-1 h-px bg-ua-charcoal/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <h2
              className="font-display text-ua-charcoal mb-5 fade-up"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.8rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              CRAVING CHICKEN RICE?
              <br />
              <span className="font-serif-italic text-ua-orange" style={{ fontWeight: 600 }}>
                Order Delivery or Pickup.
              </span>
            </h2>

            <p
              className="font-body text-ua-charcoal/70 mb-8 fade-up delay-100"
              style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: "480px" }}
            >
              Get Uncle Authentic delivered straight to your door or swing by to pick it up fresh. Choose your preferred platform below.
            </p>

            {/* Info pills */}
            <div className="flex flex-wrap gap-4 mb-8 fade-up delay-200">
              <div className="flex items-center gap-2 bg-ua-cream px-4 py-2.5 rounded-sm">
                <MapPin size={15} className="text-ua-orange" />
                <span className="font-body text-ua-charcoal/80" style={{ fontSize: "0.875rem" }}>
                  Adelaide, South Australia
                </span>
              </div>
              <div className="flex items-center gap-2 bg-ua-cream px-4 py-2.5 rounded-sm">
                <Clock size={15} className="text-ua-orange" />
                <span className="font-body text-ua-charcoal/80" style={{ fontSize: "0.875rem" }}>
                  Check platforms for live hours
                </span>
              </div>
            </div>
          </div>

          {/* Right: Order options cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 fade-up delay-200">
            {[
              {
                icon: <UtensilsCrossed size={22} className="text-ua-orange" />,
                title: "Pickup / Takeaway",
                desc: "Order ahead and pick up at our Adelaide location.",
                url: "https://uncleauthentichainanesechickenrice.square.site/#LS4DASL34NHSUXOKE5MYQK5T",
              },
              {
                icon: <Navigation size={22} className="text-ua-orange" />,
                title: "UberEats",
                desc: "Fast delivery right to your door with UberEats.",
                url: "https://www.ubereats.com/au/store/uncle-authentic-hainanese-chicken-rice/ZT_9ZY0VV6msQgmG6XhEow?srsltid=AfmBOorZx5LsRqi3HaW5dU14dkNVm-IzEkSoJVl7ZNn2bPEdNmns_0Dr",
              },
              {
                icon: <ShoppingBag size={22} className="text-ua-orange" />,
                title: "DoorDash",
                desc: "Order through DoorDash and track your delivery.",
                url: "https://www.doordash.com/store/uncle-authentic-chicken-rice-%EF%BC%88-uncle-%E6%B5%B7%E5%8D%97%E9%B8%A1%E9%A5%AD%E4%B8%93%E9%97%A8%E5%BA%97%EF%BC%89-adelaide-25211693/34380555/?srsltid=AfmBOooLJi9LBDuxIjl9D8d2KJnFy8jyAIPwfGIYej35tzwjFp7MJ9o4",
              },
            ].map((card, i) => (
              <a
                key={card.title}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-ua-charcoal/8 p-5 group flex items-center justify-between hover:border-ua-orange/30 hover:shadow-md transition-all duration-200"
                style={{ borderRadius: "2px" }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-ua-cream rounded-sm group-hover:bg-ua-orange/10 transition-colors">
                    {card.icon}
                  </div>
                  <div>
                    <h3
                      className="font-display text-ua-charcoal mb-1"
                      style={{ fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.01em" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="font-body text-ua-charcoal/60"
                      style={{ fontSize: "0.85rem", lineHeight: 1.4 }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-ua-orange opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
