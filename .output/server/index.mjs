globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/audio/README.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"33-qmqUklSNQlHmC25kytdHKNYuhzc\"",
		"mtime": "2026-09-01T12:04:48.519Z",
		"size": 51,
		"path": "../public/audio/README.txt"
	},
	"/assets/index-CwS3YkKN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"566fd-77XyL/NblfP3/XlBM6yQN9XW7RQ\"",
		"mtime": "2026-09-02T02:46:55.847Z",
		"size": 354045,
		"path": "../public/assets/index-CwS3YkKN.js"
	},
	"/assets/letter-BXCihm26.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"107a-MoYygnlgew9ORo+lHwzpyeNbVo4\"",
		"mtime": "2026-09-02T02:46:55.866Z",
		"size": 4218,
		"path": "../public/assets/letter-BXCihm26.js"
	},
	"/assets/memories-BdxCPeo_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"123d-36QFPBKfyxGqg4ifn0eH1Nt6u3w\"",
		"mtime": "2026-09-02T02:46:55.953Z",
		"size": 4669,
		"path": "../public/assets/memories-BdxCPeo_.js"
	},
	"/assets/our-day-CcIBKNQ5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5dc-yqwe3YVGtmEYiGbwCm/C0XlFm1g\"",
		"mtime": "2026-09-02T02:46:56.023Z",
		"size": 1500,
		"path": "../public/assets/our-day-CcIBKNQ5.js"
	},
	"/assets/RomanticButton-DA3rpQpT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e32-TrbSpfyVxLmwurgyx/Z49etzpwc\"",
		"mtime": "2026-09-02T02:46:55.866Z",
		"size": 3634,
		"path": "../public/assets/RomanticButton-DA3rpQpT.js"
	},
	"/assets/PageShell-B387w4rM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"397-uacXkY760XCGMInz77N6da6waLE\"",
		"mtime": "2026-09-02T02:46:55.860Z",
		"size": 919,
		"path": "../public/assets/PageShell-B387w4rM.js"
	},
	"/assets/routes-BBWOFVv9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13a5-/S9zh5FqacgdXOKbTqpolQe6voo\"",
		"mtime": "2026-09-02T02:46:56.024Z",
		"size": 5029,
		"path": "../public/assets/routes-BBWOFVv9.js"
	},
	"/assets/secret-5Ww53hPj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ceb-t7i6LOJs7cUoYXusknUPiFNewC4\"",
		"mtime": "2026-09-02T02:46:56.210Z",
		"size": 7403,
		"path": "../public/assets/secret-5Ww53hPj.js"
	},
	"/assets/song-BIv6krxu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"831-ipE3J74jbiqmzOarZoZ0+xTy4eY\"",
		"mtime": "2026-09-02T02:46:56.211Z",
		"size": 2097,
		"path": "../public/assets/song-BIv6krxu.js"
	},
	"/assets/styles-BroXS11Z.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15b94-ouBfVU3h1lvWU4xDA9bZRzxmfk4\"",
		"mtime": "2026-09-02T02:46:56.215Z",
		"size": 88980,
		"path": "../public/assets/styles-BroXS11Z.css"
	},
	"/assets/story-D1fGyNpz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7cd-WhDsqKbnCTnYr/jpoRGnA8K2g/8\"",
		"mtime": "2026-09-02T02:46:56.213Z",
		"size": 1997,
		"path": "../public/assets/story-D1fGyNpz.js"
	},
	"/assets/why-BucPOfXq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97c-48GikuREEMj4XSf28dPwubHcKQA\"",
		"mtime": "2026-09-02T02:46:56.214Z",
		"size": 2428,
		"path": "../public/assets/why-BucPOfXq.js"
	},
	"/assets/video-DaHREHMQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2a-jL+4p1/BWj3CV/ax3UJ4kfcpqI8\"",
		"mtime": "2026-09-02T02:46:56.213Z",
		"size": 2858,
		"path": "../public/assets/video-DaHREHMQ.js"
	},
	"/images/photo1.jpg": {
		"type": "image/jpeg",
		"etag": "\"136ae-eIlTBUeCO6Fw5rhQYzLcQ/cOYag\"",
		"mtime": "2026-05-02T02:03:33.000Z",
		"size": 79534,
		"path": "../public/images/photo1.jpg"
	},
	"/images/photo11.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d128-h8mYi+m7tOm7UXGLzYM3EXhRcX0\"",
		"mtime": "2025-05-29T20:01:04.000Z",
		"size": 119080,
		"path": "../public/images/photo11.jpg"
	},
	"/images/photo12.jpg": {
		"type": "image/jpeg",
		"etag": "\"18328-sIfYTu0Dv6pIXBtTBpcYhXfjgmk\"",
		"mtime": "2026-09-02T00:30:11.000Z",
		"size": 99112,
		"path": "../public/images/photo12.jpg"
	},
	"/images/photo10.jpg": {
		"type": "image/jpeg",
		"etag": "\"12301-kTexbQ9DOHRl94mEN2PUtS/ZMWA\"",
		"mtime": "2026-05-02T02:04:44.000Z",
		"size": 74497,
		"path": "../public/images/photo10.jpg"
	},
	"/images/photo13.jpg": {
		"type": "image/jpeg",
		"etag": "\"deb4-YOAWxdb8ESirpoKm218uNWWe8kY\"",
		"mtime": "2025-08-10T19:02:04.000Z",
		"size": 57012,
		"path": "../public/images/photo13.jpg"
	},
	"/images/photo2.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cb8b-3fK7sS/9WGRzbRKtTTooFwFR2mA\"",
		"mtime": "2025-06-03T21:01:50.000Z",
		"size": 117643,
		"path": "../public/images/photo2.jpg"
	},
	"/images/photo3.jpg": {
		"type": "image/jpeg",
		"etag": "\"131c2-QL/kNknXNdK9EidWuy6qgokK5YE\"",
		"mtime": "2026-07-03T23:46:10.000Z",
		"size": 78274,
		"path": "../public/images/photo3.jpg"
	},
	"/images/photo4.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cb4f-v5kSyNt6nyZ27BctWNfmPCvk93Y\"",
		"mtime": "2026-05-02T02:04:57.000Z",
		"size": 117583,
		"path": "../public/images/photo4.jpg"
	},
	"/images/photo15.jpg": {
		"type": "image/jpeg",
		"etag": "\"16b3a6-zCfhHmNuX4Fsj8JAZjAaO1Y8nbk\"",
		"mtime": "2025-06-25T17:09:28.000Z",
		"size": 1487782,
		"path": "../public/images/photo15.jpg"
	},
	"/images/photo5.jpg": {
		"type": "image/jpeg",
		"etag": "\"13185-8R3XhNXoSlw5OAOL9DOJH6lD5AE\"",
		"mtime": "2026-01-09T09:55:47.000Z",
		"size": 78213,
		"path": "../public/images/photo5.jpg"
	},
	"/images/photo6.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ad98-ZxNcfR2zz0QU6WbLLRaA0J43QSQ\"",
		"mtime": "2025-07-18T19:06:28.000Z",
		"size": 109976,
		"path": "../public/images/photo6.jpg"
	},
	"/images/photo7.jpg": {
		"type": "image/jpeg",
		"etag": "\"158a8-szepJGdiIqq4yeeBpKp+7O5P62o\"",
		"mtime": "2025-07-18T19:06:28.000Z",
		"size": 88232,
		"path": "../public/images/photo7.jpg"
	},
	"/images/photo8.jpg": {
		"type": "image/jpeg",
		"etag": "\"28c36-cxPM84SwacYXmjn4coVAmXAcwcE\"",
		"mtime": "2026-09-02T00:30:11.000Z",
		"size": 166966,
		"path": "../public/images/photo8.jpg"
	},
	"/images/photo9.jpg": {
		"type": "image/jpeg",
		"etag": "\"119f2-bTKJqM29W6NgZYEzJgGTsEgJ0dA\"",
		"mtime": "2026-05-02T02:04:45.000Z",
		"size": 72178,
		"path": "../public/images/photo9.jpg"
	},
	"/images/README .txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"4c-Nr/yxnacy8IqQbIpj9BzIa9HJf0\"",
		"mtime": "2026-09-02T00:32:48.626Z",
		"size": 76,
		"path": "../public/images/README .txt"
	},
	"/video/README.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"37-irwHxtD+Fz3HpRBtDbV9KjokIlE\"",
		"mtime": "2026-09-01T12:04:54.407Z",
		"size": 55,
		"path": "../public/video/README.txt"
	},
	"/audio/adrinaline.mp3": {
		"type": "audio/mpeg",
		"etag": "\"7917fc-e+oA/TnbHXyu7RSrDGHp2cgt4Zg\"",
		"mtime": "2026-09-02T02:30:41.195Z",
		"size": 7935996,
		"path": "../public/audio/adrinaline.mp3"
	},
	"/images/photo14.jpg": {
		"type": "image/jpeg",
		"etag": "\"b45bd2-t12T5gf2G1K8vB7fLwQU9WSJoio\"",
		"mtime": "2025-05-06T14:16:13.000Z",
		"size": 11819986,
		"path": "../public/images/photo14.jpg"
	},
	"/video/birthday.mp4": {
		"type": "video/mp4",
		"etag": "\"2f256e3-2K3wIUofcstw32mBZPPU7zmfjZA\"",
		"mtime": "2026-09-01T12:02:33.000Z",
		"size": 49436387,
		"path": "../public/video/birthday.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_r_XjT0 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_r_XjT0
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
