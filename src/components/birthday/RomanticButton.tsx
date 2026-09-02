import { useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { spawnHearts } from "./burst";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-bold transition-all duration-300 active:scale-95 sm:text-lg";

const styles = {
  primary:
    "bg-[image:var(--gradient-rose)] text-primary-foreground shadow-glow hover:-translate-y-1 hover:brightness-110",
  gold: "bg-[image:var(--gradient-gold)] text-accent-foreground shadow-glow hover:-translate-y-1 hover:brightness-105",
  ghost:
    "glass-card text-foreground hover:-translate-y-1 hover:border-gold/50 hover:text-gold-soft",
} as const;

function Shine() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-[linear-gradient(100deg,transparent,color-mix(in_oklab,white_35%,transparent),transparent)] group-hover:[animation:eman-shine_0.9s_ease]"
    />
  );
}

export function ActionButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        spawnHearts(e.clientX, e.clientY);
        onClick?.();
      }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <Shine />
      <span className="relative">{children}</span>
    </button>
  );
}

export function NextPageLink({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof styles;
}) {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  return (
    <div className="mt-12 flex justify-center">
      <button
        type="button"
        disabled={leaving}
        onClick={(e) => {
          spawnHearts(e.clientX, e.clientY, 16);
          setLeaving(true);
          window.setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            navigate({ to: to as any });
          }, 520);
        }}
        className={`${base} ${styles[variant]} ${leaving ? "opacity-80" : ""}`}
      >
        <Shine />
        <span className="relative">{children}</span>
      </button>
    </div>
  );
}
