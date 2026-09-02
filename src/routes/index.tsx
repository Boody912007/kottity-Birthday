import { createFileRoute } from "@tanstack/react-router";
import { NextPageLink } from "../components/birthday/RomanticButton";
import { RevealGate } from "../components/birthday/RevealGate";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "لأحلى بنوته في دنيتي ❤️ — رسالة من أحمد لإيمان" },
      {
        name: "description",
        content: "مكان صغير، بس كل تفصيلة فيه معمولة عشان إيمان. حكاية حب تفاعلية من أحمد.",
      },
      { property: "og:title", content: "لأحلى بنوته في دنيتي ❤️" },
      {
        property: "og:description",
        content: "خدي نفس... واضغطي. تجربة عيد ميلاد مخصوص لإيمان.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <RevealGate>
      <HomeContent />
    </RevealGate>
  );
}

function HomeContent() {
  return (
    <main className="animate-page-in relative flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center">

      <p className="animate-rise glass-card rounded-full px-5 py-2 text-sm text-gold-soft">
        رسالة من أحمد ❤️
      </p>

      <div
        className="animate-rise relative my-10 flex items-center justify-center"
        style={{ animationDelay: "0.1s" }}
      >
        <span aria-hidden className="absolute h-40 w-40 rounded-full bg-rose-glow/25 blur-3xl" />
        <span
  aria-hidden
  className="heart-red relative inline-block text-[7rem] leading-none select-none sm:text-[9rem]"
>
  ♥
</span>
      </div>

      <h1
        className="animate-rise font-display text-4xl leading-[1.65] font-bold sm:text-6xl md:text-7xl"
        style={{ animationDelay: "0.2s" }}
      >
        لأحلى{" "}
        <span className="relative inline-block text-gold-gradient">
          بنوته
          <span
            aria-hidden
            className="absolute -bottom-2 right-0 left-0 h-[3px] rounded-full bg-[image:var(--gradient-gold)] opacity-80"
          />
        </span>
        <br />
        في دنيتي
      </h1>

      <div
        className="animate-rise glass-card mt-12 max-w-xl rounded-3xl px-6 py-8 sm:px-10"
        style={{ animationDelay: "0.35s" }}
      >
        <p className="text-base leading-[2.2] text-muted-foreground sm:text-lg">
          لروحي، وحياتي، وعمري كله...
          <br />
          عملتلك مكان صغير كده، بس كل تفصيلة فيه معمولة عشانك إنتِ. 🥹❤️
          <br />
          <span className="font-semibold text-gold-soft">خدي نفس... واضغطي.</span>
        </p>
      </div>

      <NextPageLink to="/story">ابدئي الحكاية ❤️</NextPageLink>
    </main>
  );
}

