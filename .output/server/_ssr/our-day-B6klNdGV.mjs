import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as NextPageLink } from "./RomanticButton-DUBsQYAh.mjs";
import { n as PageShell } from "./PageShell-CBxYJShK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-day-B6klNdGV.js
var import_jsx_runtime = require_jsx_runtime();
function OurDayPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "التاريخ اللي مش بينسى",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-rise text-center font-title text-2xl font-bold text-gold-gradient sm:text-3xl",
				children: "14 / 04 ❤️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "animate-rise mt-4 text-center font-display text-6xl leading-[1.3] font-bold sm:text-8xl md:text-[9rem]",
				style: { animationDelay: "0.1s" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "animate-glow-pulse inline-block text-gold-gradient",
					children: "يومنا"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-rise mx-auto mt-8 max-w-2xl text-center text-base leading-[2.2] text-muted-foreground sm:text-lg",
				style: { animationDelay: "0.2s" },
				children: "التاريخ ده مش مجرد يوم في النتيجة. ده اليوم اللي فيه كل حاجة بقت رسمية وحقيقية، اليوم اللي قلنا فيه إحنا مع بعض بجد ومش سايبين إيد بعض. من يومها والعدّاد ماشي ومش بيوقف. ❤️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-rise mt-10 text-center text-base leading-relaxed font-semibold text-gold-soft sm:text-lg",
				style: { animationDelay: "0.35s" },
				children: "كل رقم هنا وراه لحظة... وكل لحظة فيها جزء منك."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextPageLink, {
				to: "/why",
				variant: "gold",
				children: "طب أقولك ليه بحبك؟ ❤️"
			})
		]
	});
}
//#endregion
export { OurDayPage as component };
