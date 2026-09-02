import { useEffect, useState, type ReactNode } from "react";

// 5 September 2026, 00:00 Cairo time (UTC+3) => 4 Sep 2026 21:00 UTC
export const REVEAL_AT = new Date("2026-09-04T21:00:00Z");

function parts(ms: number) {
  const total = Math.floor(Math.max(0, ms) / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

function Flip({ value, label, delay }: { value: number; label: string; delay: number }) {
  const text = String(value).padStart(2, "0");
  return (
    <div
      className="animate-rise group relative flex min-w-[4.5rem] flex-col items-center gap-2 sm:min-w-[7rem]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="glass-card animate-float-soft flex w-full flex-col items-center rounded-[1.75rem] px-3 py-5 sm:px-6 sm:py-7">
        <span
          key={text}
          className="animate-tick font-title text-4xl leading-none font-bold tabular-nums text-gold-gradient sm:text-6xl"
        >
          {text}
        </span>
      </div>
      <span className="text-[0.72rem] tracking-[0.3em] text-muted-foreground sm:text-sm">
        {label}
      </span>
    </div>
  );
}

export function RevealGate({ children }: { children: ReactNode }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  // Until the client knows the time, render the calm waiting screen (no spoilers).
  const open = now !== null && now >= REVEAL_AT.getTime();
  if (open) return <>{children}</>;

  const t = parts(now === null ? REVEAL_AT.getTime() : REVEAL_AT.getTime() - now);

  return (
    <main className="animate-page-in relative flex min-h-screen flex-col items-center justify-center px-5 py-20 text-center">
      <span
        aria-hidden
        className="animate-breathe absolute h-[26rem] w-[26rem] rounded-full bg-blush/40 blur-[130px]"
      />

      <p className="animate-rise glass-card rounded-full px-5 py-2 text-xs tracking-[0.3em] text-gold-soft sm:text-sm">
        لسه شويّة ❤️
      </p>

<span
  aria-hidden
  className="heart-red animate-heartbeat animate-glow-pulse relative my-8 inline-block text-[5rem] leading-none select-none sm:text-[7rem]"
>
  ♥
</span>

      <h1
        className="animate-rise font-display text-3xl leading-[1.6] font-bold sm:text-5xl"
        style={{ animationDelay: "0.12s" }}
      >
        في حاجة مستنية <span className="text-gold-gradient">إيمان</span>
        <br />
        تفتح بالظبط الساعة 12
      </h1>

      <p
        className="animate-rise mt-5 max-w-md text-sm leading-[2.1] text-muted-foreground sm:text-base"
        style={{ animationDelay: "0.2s" }}
      >
        5 سبتمبر 2026 — أول لحظة في يوم ميلادك. لحد ساعتها، الحكاية نايمة في مكانها... بس القلب
        عدّاده شغال. 🕊️
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6" dir="rtl">
        <Flip value={t.days} label="يوم" delay={0.28} />
        <Flip value={t.hours} label="ساعة" delay={0.36} />
        <Flip value={t.minutes} label="دقيقة" delay={0.44} />
        <Flip value={t.seconds} label="ثانية" delay={0.52} />
      </div>

      <div className="animate-rise mt-12 w-56 gold-rule sm:w-80" style={{ animationDelay: "0.6s" }} />

      <p
        className="animate-rise mt-6 font-title text-base text-gold-gradient sm:text-lg"
        style={{ animationDelay: "0.66s" }}
      >
        إستني بس... تستاهلي أحلى مفاجأة 🎀
      </p>
    </main>
  );
}
