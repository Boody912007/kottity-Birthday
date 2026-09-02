import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as NextPageLink } from "./RomanticButton-DUBsQYAh.mjs";
import { n as PageShell, r as SectionTitle, t as Lead } from "./PageShell-CBxYJShK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/memories-CGTGYhWs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Image card that shows an elegant placeholder until the real file is uploaded. */
function PhotoCard({ src, caption, index }) {
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "animate-rise group glass-card overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/55 hover:shadow-glow",
		style: { animationDelay: `${.06 * index}s` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-4/5 w-full overflow-hidden bg-[image:var(--gradient-night)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center gap-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-3xl opacity-80",
							children: "🖼️"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "الصورة جاية قريب ❤️"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.65rem] text-muted-foreground/60",
							dir: "ltr",
							children: src.slice(1)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: caption,
					loading: "lazy",
					decoding: "async",
					onLoad: (e) => {
						if (e.currentTarget.naturalWidth > 1) setLoaded(true);
					},
					className: `relative h-full w-full object-cover transition-all duration-700 will-change-transform group-hover:scale-110 ${loaded ? "opacity-100" : "opacity-0"}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,color-mix(in_oklab,var(--velvet)_75%,transparent))] opacity-70" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "px-4 py-4 text-center text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-gold-soft",
			children: caption
		})]
	});
}
var CAPTIONS = [
	"عيونك فيها سحر بيخطف قلبي كل سنة وانتي أجمل حاجة حصلتلي في حياتي يا نور عيني ❤️✨",
	"ضحكتك دي هي اللي بتنور دنيتي وتخليني أطير في السما بحبك موت يا حبيبة قلبي 🥰😘",
	"انتي اللي مولعة الدنيا بجمالك، بس أنا قلبي ولع بحبك أكتر كل سنة وانتي قلبي ❤️🔥💋",
	"بحب كل تفصيلة فيكي، وكل نظرة من عيونك يا أحلى ملاك نزل على الأرض 💖🌹😇",
	"شجرة الكريسماس دي ولا حاجة جنبك انتي الهدية الحقيقية اللي ربنا بعتهالي. بحبك قد الكون ❤️🎁🎄",
	"انتي النبض اللي عايش بيه، وانتي النفس اللي بتنفسه ربنا ما يحرمنيش منك أبدًا يا كل حياتي ❤️🫶🥰",
	"قاعدة كأنك ملكة على عرش قلبي وست البنات كلهم ربنا يخليكي ليا يا أحلى برنسيسة ❤️👑😍",
	"لون الحب مش بس لايق عليكي ده انتي الحب نفسه يا روحي. ربنا يخليكي ليا يا كل دنيتي ❤️🌹💋",
	"الورد بياخد من جمالك يا أحلى وردة في بستان حياتي. بعشقك يا أغلى من عيوني 🥰🌸❤️",
	"معاكي الدنيا كلها بتبقى تمام، وبنسى كل همومي بحبك أكتر من أي حاجة في الدنيا ❤️🎧👍",
	"ضحكتك دي بتنور الدنيا كلها كل سنة وانتي منورة حياتي وقلبي يا حبيبة قلبي 🥰❤️😘",
	"أحلى بوسة لأجمل عيون في الكون كل سنة وانتي طيبة وشقية وحتة من قلبي 💋🥰✌️",
	"دي بتخليني أقع في حبك كل يوم من جديد ربنا يكتبلنا الخير سوا وما يحرمنيش منك أبدًا يا عمري ❤️💍🥺",
	"قلبي ملك ليكي في أي مكان وزمان ومهما عدينا بحاجات هنفضل سوا وقلوبنا مع بعض ❤️🫶😍",
	"كل لحظة معاكي بتسوى الدنيا وما فيها يارب نفضل سوا العمر كله ونعمل ذكريات أحلى وأحلى. بحبك يا رفيقة دربي ❤️🌸👩‍❤️‍👨"
];
function MemoriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "ألبوم صغير لينا",
		wide: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "حاجات صغيرة... بس غالية عندي. ❤️" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lead, { children: [
				"هنا مكان صورنا...",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"كل صورة ليها حكاية.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"وكل لحظة ليها مكان في قلبي. ❤️‍🔥"
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
				children: CAPTIONS.map((caption, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCard, {
					index: i,
					src: `/images/photo${i + 1}.jpg`,
					caption
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextPageLink, {
				to: "/letter",
				children: "فيه خطاب مستنيكي 💌"
			})
		]
	});
}
//#endregion
export { MemoriesPage as component };
