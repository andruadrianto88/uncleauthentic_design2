import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-ua-charcoal flex flex-col items-center justify-center text-center px-6">
      <div
        className="rounded-full bg-ua-orange flex items-center justify-center mb-8"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="font-display font-bold text-white" style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}>
          UNCLE
        </span>
      </div>
      <h1
        className="font-display text-white mb-3"
        style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
      >
        404
      </h1>
      <p className="font-body text-white/50 mb-8" style={{ fontSize: "1rem" }}>
        This page seems to have wandered off the menu.
      </p>
      <button onClick={() => setLocation("/")} className="btn-primary">
        Back to Home
      </button>
    </div>
  );
}
