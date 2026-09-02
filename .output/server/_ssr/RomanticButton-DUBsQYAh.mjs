import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RomanticButton-DUBsQYAh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GLYPHS = [
	"❤️",
	"💖",
	"✨",
	"🤍",
	"💫",
	"❤️‍🔥"
];
function prefersReduced() {
	return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
}
/** Small burst of hearts + sparkles at a screen position. */
function spawnHearts(x, y, count = 12) {
	if (typeof document === "undefined" || prefersReduced()) return;
	const layer = document.createElement("div");
	layer.setAttribute("aria-hidden", "true");
	layer.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:60;overflow:hidden;contain:strict";
	for (let i = 0; i < count; i++) {
		const el = document.createElement("span");
		const angle = Math.PI * 2 * i / count + Math.random() * .5;
		const dist = 60 + Math.random() * 120;
		el.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "❤️";
		el.style.cssText = `position:absolute;left:${x}px;top:${y}px;font-size:${14 + Math.random() * 18}px;--bx:${Math.cos(angle) * dist}px;--by:${Math.sin(angle) * dist - 40}px;animation:eman-burst ${700 + Math.random() * 500}ms cubic-bezier(.2,.7,.3,1) forwards`;
		layer.appendChild(el);
	}
	document.body.appendChild(layer);
	window.setTimeout(() => layer.remove(), 1500);
}
/** Big celebration: many hearts, particles and sparkles across the screen. */
function celebrate(durationMs = 5200) {
	if (typeof document === "undefined" || prefersReduced()) return;
	const layer = document.createElement("div");
	layer.setAttribute("aria-hidden", "true");
	layer.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:60;overflow:hidden;contain:strict";
	document.body.appendChild(layer);
	const mobile = window.innerWidth < 640;
	const perWave = mobile ? 7 : 16;
	const waves = mobile ? 8 : 12;
	let wave = 0;
	const timer = window.setInterval(() => {
		for (let i = 0; i < perWave; i++) {
			const el = document.createElement("span");
			const isSpark = Math.random() > .55;
			const left = Math.random() * 100;
			if (isSpark) el.style.cssText = `position:absolute;left:${left}%;bottom:-30px;width:${3 + Math.random() * 4}px;height:${3 + Math.random() * 4}px;border-radius:99px;background:${Math.random() > .5 ? "oklch(0.9 0.11 88)" : "oklch(0.72 0.17 10)"};--eman-drift:${(Math.random() - .5) * 260}px;--eman-op:0.9;animation:eman-float-up ${4 + Math.random() * 4}s linear forwards`;
			else {
				el.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "❤️";
				el.style.cssText = `position:absolute;left:${left}%;bottom:-40px;font-size:${16 + Math.random() * 26}px;--eman-drift:${(Math.random() - .5) * 220}px;--eman-op:0.95;animation:eman-float-up ${4.5 + Math.random() * 4}s linear forwards`;
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
var base = "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-bold transition-all duration-300 active:scale-95 sm:text-lg";
var styles = {
	primary: "bg-[image:var(--gradient-rose)] text-primary-foreground shadow-glow hover:-translate-y-1 hover:brightness-110",
	gold: "bg-[image:var(--gradient-gold)] text-accent-foreground shadow-glow hover:-translate-y-1 hover:brightness-105",
	ghost: "glass-card text-foreground hover:-translate-y-1 hover:border-gold/50 hover:text-gold-soft"
};
function Shine() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 -translate-x-[120%] bg-[linear-gradient(100deg,transparent,color-mix(in_oklab,white_35%,transparent),transparent)] group-hover:[animation:eman-shine_0.9s_ease]"
	});
}
function ActionButton({ children, onClick, variant = "primary", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: (e) => {
			spawnHearts(e.clientX, e.clientY);
			onClick?.();
		},
		className: `${base} ${styles[variant]} ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shine, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative",
			children
		})]
	});
}
function NextPageLink({ to, children, variant = "primary" }) {
	const navigate = useNavigate();
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 flex justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			disabled: leaving,
			onClick: (e) => {
				spawnHearts(e.clientX, e.clientY, 16);
				setLeaving(true);
				window.setTimeout(() => {
					navigate({ to });
				}, 520);
			},
			className: `${base} ${styles[variant]} ${leaving ? "opacity-80" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shine, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative",
				children
			})]
		})
	});
}
//#endregion
export { spawnHearts as i, NextPageLink as n, celebrate as r, ActionButton as t };
