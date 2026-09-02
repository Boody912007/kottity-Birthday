import type { ReactNode } from "react";

export function PageShell({
  children,
  eyebrow,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
  wide?: boolean;
}) {
  return (
    <main
      className={`animate-page-in relative flex min-h-screen flex-col items-center justify-center px-5 py-16 sm:px-8 ${className}`}
    >
      <div className={`w-full ${wide ? "max-w-6xl" : "max-w-3xl"}`}>
        {eyebrow ? (
          <p className="animate-rise mb-6 text-center text-xs tracking-[0.35em] text-gold/80 sm:text-sm">
            {eyebrow}
          </p>
        ) : null}
        {children}
      </div>
    </main>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`animate-rise text-center font-title text-3xl leading-[1.5] font-bold text-gold-gradient sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`animate-rise mx-auto mt-6 max-w-2xl text-center text-base leading-[2.1] text-muted-foreground sm:text-lg ${className}`}
      style={{ animationDelay: "0.15s" }}
    >
      {children}
    </p>
  );
}
