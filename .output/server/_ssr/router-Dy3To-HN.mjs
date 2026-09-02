import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dy3To-HN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BroXS11Z.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function rand(seed) {
	const x = Math.sin(seed * 12.9898) * 43758.5453;
	return x - Math.floor(x);
}
var HEARTS = Array.from({ length: 20 }, (_, i) => ({
	left: rand(i + 1) * 100,
	size: 12 + rand(i + 7) * 24,
	delay: rand(i + 13) * 16,
	duration: 15 + rand(i + 21) * 14,
	drift: (rand(i + 31) - .5) * 160,
	opacity: .25 + rand(i + 41) * .4,
	glyph: [
		"❤",
		"❤️",
		"🤍",
		"💖",
		"♥"
	][Math.floor(rand(i + 53) * 5)]
}));
var SPARKS = Array.from({ length: 34 }, (_, i) => ({
	left: rand(i + 101) * 100,
	top: rand(i + 211) * 100,
	size: 2 + rand(i + 307) * 3.5,
	delay: rand(i + 401) * 6,
	duration: 2.4 + rand(i + 503) * 4,
	gold: rand(i + 601) > .45
}));
function AmbientBackground() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (!mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-rose-glow/15 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-14rem] left-[-8%] h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-[130px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/3 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-blush/8 blur-[140px]" }),
			SPARKS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute rounded-full ${s.gold ? "bg-gold-soft" : "bg-rose-glow"} ${i > 15 ? "hidden sm:block" : ""}`,
				style: {
					left: `${s.left}%`,
					top: `${s.top}%`,
					width: `${s.size}px`,
					height: `${s.size}px`,
					animation: `eman-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`
				}
			}, `s${i}`)),
			HEARTS.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute bottom-0 select-none text-rose-glow ${i > 9 ? "hidden sm:block" : ""}`,
				style: {
					left: `${h.left}%`,
					fontSize: `${h.size}px`,
					["--eman-drift"]: `${h.drift}px`,
					["--eman-op"]: h.opacity,
					animation: `eman-float-up ${h.duration}s linear ${h.delay}s infinite`
				},
				children: h.glyph
			}, `h${i}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_35%,color-mix(in_oklab,var(--velvet)_78%,transparent)_100%)]" })
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card max-w-md rounded-3xl px-8 py-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-title text-6xl font-bold text-gold-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "الصفحة دي مش موجودة"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "يمكن الرابط اتغير... تعالي نرجع من الأول ❤️"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-rose)] px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5",
						children: "رجوع للبداية"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card max-w-md rounded-3xl px-8 py-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-title text-xl font-semibold tracking-tight",
					children: "الصفحة دي مافتحتش"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "حصلت مشكلة صغيرة. جرّبي تحدّثي الصفحة أو ترجعي للبداية."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-rose)] px-6 py-3 text-sm font-bold text-primary-foreground",
						children: "جرّبي تاني"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "glass-card inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold",
						children: "رجوع للبداية"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "لإيمان ❤️ — من أحمد" },
			{
				name: "description",
				content: "تجربة عيد ميلاد رومانسية تفاعلية لإيمان، من أحمد."
			},
			{
				name: "author",
				content: "أحمد"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#1a0810"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Reem+Kufi:wght@400;500;600;700&family=Aref+Ruqaa:wght@400;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ar",
		dir: "rtl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-B92NsntR.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "لأحلى بنوته في دنيتي ❤️ — رسالة من أحمد لإيمان" },
		{
			name: "description",
			content: "مكان صغير، بس كل تفصيلة فيه معمولة عشان إيمان. حكاية حب تفاعلية من أحمد."
		},
		{
			property: "og:title",
			content: "لأحلى بنوته في دنيتي ❤️"
		},
		{
			property: "og:description",
			content: "خدي نفس... واضغطي. تجربة عيد ميلاد مخصوص لإيمان."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./letter-C3mAYBWh.mjs");
var Route$7 = createFileRoute("/letter")({
	head: () => ({ meta: [
		{ title: "من أحمد... لقطتي 💌 — رسالة عيد ميلاد لإيمان" },
		{
			name: "description",
			content: "خطاب حب حقيقي من أحمد لإيمان في عيد ميلادها: كل سنة وانتي طيبة يا دنيتي."
		},
		{
			property: "og:title",
			content: "من أحمد... لقطتي. 💌"
		},
		{
			property: "og:description",
			content: "خطاب حب حقيقي، بكل كلمة من القلب."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./memories-CGTGYhWs.mjs");
var Route$6 = createFileRoute("/memories")({
	head: () => ({ meta: [{ title: "حاجات صغيرة... بس غالية عندي. ❤️" }, {
		name: "description",
		content: "15 صورة من أجمل ذكريات أحمد وإيمان. كل صورة ليها حكاية وكل لحظة ليها مكان في القلب. ❤️"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./our-day-B6klNdGV.mjs");
var Route$5 = createFileRoute("/our-day")({
	head: () => ({ meta: [
		{ title: "14 / 04 ❤️ يومنا — أحمد وإيمان" },
		{
			name: "description",
			content: "14 أبريل، اليوم اللي بدأت فيه الحكاية بجد، وعداد شغال لحظة بلحظة."
		},
		{
			property: "og:title",
			content: "14 / 04 ❤️ يومنا"
		},
		{
			property: "og:description",
			content: "كل رقم هنا وراه لحظة... وكل لحظة فيها جزء منك."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./secret-BX337Jpb.mjs");
var Route$4 = createFileRoute("/secret")({
	head: () => ({ meta: [
		{ title: "بحبك يا إيمان ❤️‍🔥 — الرسالة السرية من أحمد" },
		{
			name: "description",
			content: "آخر حاجة... ليكي إنتِ بس. رسالة سرية من أحمد لإيمان في عيد ميلادها."
		},
		{
			property: "og:title",
			content: "آخر حاجة... ليكي إنتِ بس."
		},
		{
			property: "og:description",
			content: "الرسالة دي مش بتظهر غير لما تدوسي. ❤️"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./song-8N3rk5y3.mjs");
var Route$3 = createFileRoute("/song")({
	head: () => ({ meta: [
		{ title: "اضغطي... واسمعي 🎵 — أدرينالين | حمّاقي" },
		{
			name: "description",
			content: "الأغنية اللي اخترناها لذكريات عيد ميلاد إيمان: أدرينالين — محمد حماقي."
		},
		{
			property: "og:title",
			content: "اضغطي... واسمعي. 🎵"
		},
		{
			property: "og:description",
			content: "أدرينالين — حمّاقي. أغنية ذكرياتنا. ❤️‍🔥"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./story-fiiiYrMU.mjs");
var Route$2 = createFileRoute("/story")({
	head: () => ({ meta: [
		{ title: "الحكاية اللي أنا بحبها ❤️ — لإيمان" },
		{
			name: "description",
			content: "حكاية أحمد وإيمان، بكلام من القلب وباللهجة المصرية."
		},
		{
			property: "og:title",
			content: "الحكاية اللي أنا بحبها ❤️"
		},
		{
			property: "og:description",
			content: "أول فصل من حكاية أحمد وإيمان."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./video-7KwZv6pJ.mjs");
var Route$1 = createFileRoute("/video")({
	head: () => ({ meta: [{ title: "فيديو ليكي يا بنوتي 😍❤️" }, {
		name: "description",
		content: "فيديو مخصوص ليكي من أحمد ❤️"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./why-Dqjlm72y.mjs");
var Route = createFileRoute("/why")({
	head: () => ({ meta: [
		{ title: "ليه بحبك؟ سؤال صعب. — لإيمان من أحمد" },
		{
			name: "description",
			content: "ست أسباب خلّت قلب أحمد متعلق بإيمان: ضحكتك، أنوثتك، جمالك، حنيتك، حبك ليا، أخلاقك."
		},
		{
			property: "og:title",
			content: "ليه بحبك؟ سؤال صعب."
		},
		{
			property: "og:description",
			content: "كام سبب من اللي مخليين قلبي متعلق بيكي. ❤️"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	LetterRoute: Route$7.update({
		id: "/letter",
		path: "/letter",
		getParentRoute: () => Route$9
	}),
	MemoriesRoute: Route$6.update({
		id: "/memories",
		path: "/memories",
		getParentRoute: () => Route$9
	}),
	OurDayRoute: Route$5.update({
		id: "/our-day",
		path: "/our-day",
		getParentRoute: () => Route$9
	}),
	SecretRoute: Route$4.update({
		id: "/secret",
		path: "/secret",
		getParentRoute: () => Route$9
	}),
	SongRoute: Route$3.update({
		id: "/song",
		path: "/song",
		getParentRoute: () => Route$9
	}),
	StoryRoute: Route$2.update({
		id: "/story",
		path: "/story",
		getParentRoute: () => Route$9
	}),
	VideoRoute: Route$1.update({
		id: "/video",
		path: "/video",
		getParentRoute: () => Route$9
	}),
	WhyRoute: Route.update({
		id: "/why",
		path: "/why",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
