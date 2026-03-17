/* ============================================================
   UNCLE AUTHENTIC — HOME PAGE
   Design: "Ceramic & Craft" — Artisan Heritage Aesthetic
   Sections: Header · Hero · Utility · Menu · Story · Footer
   ============================================================ */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UtilitySection from "@/components/UtilitySection";
import MenuSection from "@/components/MenuSection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Scroll-triggered fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-ua-parchment">
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <StorySection />
        <UtilitySection />
      </main>
      <Footer />
    </div>
  );
}
