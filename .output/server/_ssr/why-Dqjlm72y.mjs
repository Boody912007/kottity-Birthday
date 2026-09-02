import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as NextPageLink } from "./RomanticButton-DUBsQYAh.mjs";
import { n as PageShell, r as SectionTitle, t as Lead } from "./PageShell-CBxYJShK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/why-Dqjlm72y.js
var import_jsx_runtime = require_jsx_runtime();
var REASONS = [
	{
		icon: "😂❤️",
		title: "ضحكتك",
		text: "ضحكتك قادرة تصلح يوم كامل بايظ من غير ما تعملي أي حاجة."
	},
	{
		icon: "🌹",
		title: "أنوثتك",
		text: "فيكي رقة وأنوثة تخليكي مختلفة من غير ما تحاولي."
	},
	{
		icon: "👑",
		title: "جمالك",
		text: "ملكة جمال؟ دي مش مجاملة. دي حقيقة أحمد مقتنع بيها جدًا 😂."
	},
	{
		icon: "🥹",
		title: "حنيتك",
		text: "الحنية اللي فيكي من الحاجات اللي بتخليني أحس إني مطمن."
	},
	{
		icon: "❤️‍🔥",
		title: "حبك ليا",
		text: "طريقتك في حبي واهتمامك بيا حاجة أنا مقدرها أكتر مما بقول."
	},
	{
		icon: "🤍",
		title: "أخلاقك وحياؤك",
		text: "ودي من أكتر الحاجات اللي خلت الإعجاب يبقى حب حقيقي."
	}
];
function WhyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "ستة أسباب من ألف",
		wide: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "ليه بحبك؟ سؤال صعب." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "لأن الأسباب كتير أوي... بس خليني أقولك كام سبب من اللي مخليين قلبي متعلق بيكي. ❤️" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: REASONS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "animate-rise group glass-card relative overflow-hidden rounded-3xl px-6 py-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-glow",
					style: { animationDelay: `${.1 + i * .08}s` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "pointer-events-none absolute -top-14 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-rose-glow/0 blur-2xl transition-all duration-500 group-hover:bg-rose-glow/30"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex text-3xl transition-transform duration-500 group-hover:scale-115 sm:text-4xl",
								children: r.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-title text-xl font-bold text-gold-soft sm:text-2xl",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-[2] text-muted-foreground sm:text-base",
								children: r.text
							})
						]
					})]
				}, r.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextPageLink, {
				to: "/memories",
				children: "نبص على صورنا؟ 📸❤️"
			})
		]
	});
}
//#endregion
export { WhyPage as component };
