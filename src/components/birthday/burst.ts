const GLYPHS = ["❤️", "💖", "✨", "🤍", "💫", "❤️‍🔥"];

function prefersReduced() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true
  );
}

/** Small burst of hearts + sparkles at a screen position. */
export function spawnHearts(x: number, y: number, count = 12) {
  if (typeof document === "undefined" || prefersReduced()) return;

  const layer = document.createElement("div");
  layer.setAttribute("aria-hidden", "true");
  layer.style.cssText =
    "position:fixed;inset:0;pointer-events:none;z-index:60;overflow:hidden;contain:strict";

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const dist = 60 + Math.random() * 120;
    el.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "❤️";
    el.style.cssText = `position:absolute;left:${x}px;top:${y}px;font-size:${
      14 + Math.random() * 18
    }px;--bx:${Math.cos(angle) * dist}px;--by:${
      Math.sin(angle) * dist - 40
    }px;animation:eman-burst ${700 + Math.random() * 500}ms cubic-bezier(.2,.7,.3,1) forwards`;
    layer.appendChild(el);
  }

  document.body.appendChild(layer);
  window.setTimeout(() => layer.remove(), 1500);
}

/** Big celebration: many hearts, particles and sparkles across the screen. */
export function celebrate(durationMs = 5200) {
  if (typeof document === "undefined" || prefersReduced()) return;

  const layer = document.createElement("div");
  layer.setAttribute("aria-hidden", "true");
  layer.style.cssText =
    "position:fixed;inset:0;pointer-events:none;z-index:60;overflow:hidden;contain:strict";
  document.body.appendChild(layer);

  const mobile = window.innerWidth < 640;
  const perWave = mobile ? 7 : 16;
  const waves = mobile ? 8 : 12;

  let wave = 0;
  const timer = window.setInterval(() => {
    for (let i = 0; i < perWave; i++) {
      const el = document.createElement("span");
      const isSpark = Math.random() > 0.55;
      const left = Math.random() * 100;
      if (isSpark) {
        el.style.cssText = `position:absolute;left:${left}%;bottom:-30px;width:${
          3 + Math.random() * 4
        }px;height:${3 + Math.random() * 4}px;border-radius:99px;background:${
          Math.random() > 0.5 ? "oklch(0.9 0.11 88)" : "oklch(0.72 0.17 10)"
        };--eman-drift:${(Math.random() - 0.5) * 260}px;--eman-op:0.9;animation:eman-float-up ${
          4 + Math.random() * 4
        }s linear forwards`;
      } else {
        el.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "❤️";
        el.style.cssText = `position:absolute;left:${left}%;bottom:-40px;font-size:${
          16 + Math.random() * 26
        }px;--eman-drift:${(Math.random() - 0.5) * 220}px;--eman-op:0.95;animation:eman-float-up ${
          4.5 + Math.random() * 4
        }s linear forwards`;
      }
      layer.appendChild(el);
    }
    wave += 1;
    if (wave >= waves) window.clearInterval(timer);
  }, 380);

  window.setTimeout(() => {
    window.clearInterval(timer);
    layer.remove();
  }, durationMs + 4500);
}
