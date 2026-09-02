import { useEffect, useState } from "react";

// Deterministic pseudo-random so SSR and client render identically.
function rand(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const HEARTS = Array.from({ length: 20 }, (_, i) => ({
  left: rand(i + 1) * 100,
  size: 12 + rand(i + 7) * 24,
  delay: rand(i + 13) * 16,
  duration: 15 + rand(i + 21) * 14,
  drift: (rand(i + 31) - 0.5) * 160,
  opacity: 0.25 + rand(i + 41) * 0.4,
  glyph: ["❤", "❤️", "🤍", "💖", "♥"][Math.floor(rand(i + 53) * 5)],
}));

const SPARKS = Array.from({ length: 34 }, (_, i) => ({
  left: rand(i + 101) * 100,
  top: rand(i + 211) * 100,
  size: 2 + rand(i + 307) * 3.5,
  delay: rand(i + 401) * 6,
  duration: 2.4 + rand(i + 503) * 4,
  gold: rand(i + 601) > 0.45,
}));

export function AmbientBackground() {
  // Decorative only: mount after hydration so randomized inline styles
  // never cause an SSR/client mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft light pools */}
      <div className="absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-rose-glow/15 blur-[120px]" />
      <div className="absolute bottom-[-14rem] left-[-8%] h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-[130px]" />
      <div className="absolute top-1/3 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-blush/8 blur-[140px]" />


      {/* floating sparkles */}
      {SPARKS.map((s, i) => (
        <span
          key={`s${i}`}
          className={`absolute rounded-full ${s.gold ? "bg-gold-soft" : "bg-rose-glow"} ${
            i > 15 ? "hidden sm:block" : ""
          }`}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `eman-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* floating hearts */}
      {HEARTS.map((h, i) => (
        <span
          key={`h${i}`}
          className={`absolute bottom-0 select-none text-rose-glow ${
            i > 9 ? "hidden sm:block" : ""
          }`}
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            ["--eman-drift" as string]: `${h.drift}px`,
            ["--eman-op" as string]: h.opacity,
            animation: `eman-float-up ${h.duration}s linear ${h.delay}s infinite`,
          }}
        >
          {h.glyph}
        </span>
      ))}

      {/* velvet vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_35%,color-mix(in_oklab,var(--velvet)_78%,transparent)_100%)]" />
    </div>
  );
}
