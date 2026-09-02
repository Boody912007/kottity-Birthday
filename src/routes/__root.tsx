import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AmbientBackground } from "../components/birthday/AmbientBackground";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-card max-w-md rounded-3xl px-8 py-10 text-center">
        <h1 className="font-title text-6xl font-bold text-gold-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">الصفحة دي مش موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          يمكن الرابط اتغير... تعالي نرجع من الأول ❤️
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-rose)] px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            رجوع للبداية
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-card max-w-md rounded-3xl px-8 py-10 text-center">
        <h1 className="font-title text-xl font-semibold tracking-tight">الصفحة دي مافتحتش</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          حصلت مشكلة صغيرة. جرّبي تحدّثي الصفحة أو ترجعي للبداية.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-rose)] px-6 py-3 text-sm font-bold text-primary-foreground"
          >
            جرّبي تاني
          </button>
          <a
            href="/"
            className="glass-card inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold"
          >
            رجوع للبداية
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "لإيمان ❤️ — من أحمد" },
      { name: "description", content: "تجربة عيد ميلاد رومانسية تفاعلية لإيمان، من أحمد." },
      { name: "author", content: "أحمد" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1a0810" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Reem+Kufi:wght@400;500;600;700&family=Aref+Ruqaa:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AmbientBackground />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
