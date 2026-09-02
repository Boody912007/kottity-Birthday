import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as NextPageLink } from "./RomanticButton-DUBsQYAh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B92NsntR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REVEAL_AT = /* @__PURE__ */ new Date("2026-09-04T21:00:00Z");
function parts(ms) {
	const total = Math.floor(Math.max(0, ms) / 1e3);
	return {
		days: Math.floor(total / 86400),
		hours: Math.floor(total % 86400 / 3600),
		minutes: Math.floor(total % 3600 / 60),
		seconds: total % 60
	};
}
function Flip({ value, label, delay }) {
	const text = String(value).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-rise group relative flex min-w-[4.5rem] flex-col items-center gap-2 sm:min-w-[7rem]",
		style: { animationDelay: `${delay}s` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-card animate-float-soft flex w-full flex-col items-center rounded-[1.75rem] px-3 py-5 sm:px-6 sm:py-7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "animate-tick font-title text-4xl leading-none font-bold tabular-nums text-gold-gradient sm:text-6xl",
				children: text
			}, text)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.72rem] tracking-[0.3em] text-muted-foreground sm:text-sm",
			children: label
		})]
	});
}
function RevealGate({ children }) {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setNow(Date.now());
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	if (now !== null && now >= REVEAL_AT.getTime()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	const t = parts(now === null ? REVEAL_AT.getTime() : REVEAL_AT.getTime() - now);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "animate-page-in relative flex min-h-screen flex-col items-center justify-center px-5 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "animate-breathe absolute h-[26rem] w-[26rem] rounded-full bg-blush/40 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-rise glass-card rounded-full px-5 py-2 text-xs tracking-[0.3em] text-gold-soft sm:text-sm",
				children: "لسه شويّة ❤️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "heart-red animate-heartbeat animate-glow-pulse relative my-8 inline-block text-[5rem] leading-none select-none sm:text-[7rem]",
				children: "♥"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "animate-rise font-display text-3xl leading-[1.6] font-bold sm:text-5xl",
				style: { animationDelay: "0.12s" },
				children: [
					"في حاجة مستنية ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold-gradient",
						children: "إيمان"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"تفتح بالظبط الساعة 12"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-rise mt-5 max-w-md text-sm leading-[2.1] text-muted-foreground sm:text-base",
				style: { animationDelay: "0.2s" },
				children: "5 سبتمبر 2026 — أول لحظة في يوم ميلادك. لحد ساعتها، الحكاية نايمة في مكانها... بس القلب عدّاده شغال. 🕊️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6",
				dir: "rtl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flip, {
						value: t.days,
						label: "يوم",
						delay: .28
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flip, {
						value: t.hours,
						label: "ساعة",
						delay: .36
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flip, {
						value: t.minutes,
						label: "دقيقة",
						delay: .44
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flip, {
						value: t.seconds,
						label: "ثانية",
						delay: .52
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-rise mt-12 w-56 gold-rule sm:w-80",
				style: { animationDelay: "0.6s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-rise mt-6 font-title text-base text-gold-gradient sm:text-lg",
				style: { animationDelay: "0.66s" },
				children: "إستني بس... تستاهلي أحلى مفاجأة 🎀"
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeContent, {}) });
}
function HomeContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "animate-page-in relative flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-rise glass-card rounded-full px-5 py-2 text-sm text-gold-soft",
				children: "رسالة من أحمد ❤️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-rise relative my-10 flex items-center justify-center",
				style: { animationDelay: "0.1s" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "absolute h-40 w-40 rounded-full bg-rose-glow/25 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "heart-red relative inline-block text-[7rem] leading-none select-none sm:text-[9rem]",
					children: "♥"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "animate-rise font-display text-4xl leading-[1.65] font-bold sm:text-6xl md:text-7xl",
				style: { animationDelay: "0.2s" },
				children: [
					"لأحلى",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative inline-block text-gold-gradient",
						children: ["بنوته", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "absolute -bottom-2 right-0 left-0 h-[3px] rounded-full bg-[image:var(--gradient-gold)] opacity-80"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"في دنيتي"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-rise glass-card mt-12 max-w-xl rounded-3xl px-6 py-8 sm:px-10",
				style: { animationDelay: "0.35s" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-base leading-[2.2] text-muted-foreground sm:text-lg",
					children: [
						"لروحي، وحياتي، وعمري كله...",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"عملتلك مكان صغير كده، بس كل تفصيلة فيه معمولة عشانك إنتِ. 🥹❤️",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-gold-soft",
							children: "خدي نفس... واضغطي."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextPageLink, {
				to: "/story",
				children: "ابدئي الحكاية ❤️"
			})
		]
	});
}
//#endregion
export { Index as component };
