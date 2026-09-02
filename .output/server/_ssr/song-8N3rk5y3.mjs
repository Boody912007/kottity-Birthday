import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as NextPageLink } from "./RomanticButton-DUBsQYAh.mjs";
import { n as PageShell, r as SectionTitle } from "./PageShell-CBxYJShK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/song-8N3rk5y3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SongPage() {
	const [failed, setFailed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "ساوند تراك حكايتنا",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "اضغطي... واسمعي. 🎵" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-rise glass-card mt-12 overflow-hidden rounded-[2rem] px-6 py-10 text-center sm:px-12",
				style: { animationDelay: "0.2s" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "absolute inset-0 rounded-full bg-rose-glow/25 blur-2xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "animate-bob relative flex h-full w-full items-center justify-center rounded-full border border-gold/40 bg-[image:var(--gradient-rose)] text-4xl shadow-glow sm:text-5xl",
							children: "🎧❤️"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 font-title text-2xl font-bold text-gold-gradient sm:text-3xl",
						children: "أدرينالين — حمّاقي"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-base leading-[2.1] text-muted-foreground sm:text-lg",
						children: "الأغنية اللي اخترناها لذكريات عيد ميلادك. خليها تشتغل وإنتِ بتتفرجي على الموقع. ❤️‍🔥"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-dashed border-gold/40 px-5 py-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "الأغنية جاية قريب... مكانها محفوظ 🎵"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs text-muted-foreground/60",
								dir: "ltr",
								children: "audio/adrinaline.mp3"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
							controls: true,
							preload: "metadata",
							onError: () => setFailed(true),
							className: "w-full",
							dir: "ltr",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
								src: "/audio/adrinaline.mp3",
								type: "audio/mpeg"
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextPageLink, {
				to: "/secret",
				variant: "gold",
				children: "آخر حاجة... وهي الأهم 🔐"
			})
		]
	});
}
//#endregion
export { SongPage as component };
