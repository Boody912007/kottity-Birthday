import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-CBxYJShK.js
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ children, eyebrow, className = "", wide = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: `animate-page-in relative flex min-h-screen flex-col items-center justify-center px-5 py-16 sm:px-8 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `w-full ${wide ? "max-w-6xl" : "max-w-3xl"}`,
			children: [eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-rise mb-6 text-center text-xs tracking-[0.35em] text-gold/80 sm:text-sm",
				children: eyebrow
			}) : null, children]
		})
	});
}
function SectionTitle({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: `animate-rise text-center font-title text-3xl leading-[1.5] font-bold text-gold-gradient sm:text-4xl md:text-5xl ${className}`,
		children
	});
}
function Lead({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `animate-rise mx-auto mt-6 max-w-2xl text-center text-base leading-[2.1] text-muted-foreground sm:text-lg ${className}`,
		style: { animationDelay: "0.15s" },
		children
	});
}
//#endregion
export { PageShell as n, SectionTitle as r, Lead as t };
