import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/birthday/PageShell";
import { NextPageLink } from "../components/birthday/RomanticButton";
import { Countdown } from "../components/birthday/Countdown";

export const Route = createFileRoute("/our-day")({
  head: () => ({
    meta: [
      { title: "14 / 04 ❤️ يومنا — أحمد وإيمان" },
      {
        name: "description",
        content: "14 أبريل، اليوم اللي بدأت فيه الحكاية بجد، وعداد شغال لحظة بلحظة.",
      },
      { property: "og:title", content: "14 / 04 ❤️ يومنا" },
      { property: "og:description", content: "كل رقم هنا وراه لحظة... وكل لحظة فيها جزء منك." },
    ],
  }),
  component: OurDayPage,
});

function OurDayPage() {
  return (
    <PageShell eyebrow="التاريخ اللي مش بينسى">
      <p className="animate-rise text-center font-title text-2xl font-bold text-gold-gradient sm:text-3xl">
        14 / 04 ❤️
      </p>

      <h1
        className="animate-rise mt-4 text-center font-display text-6xl leading-[1.3] font-bold sm:text-8xl md:text-[9rem]"
        style={{ animationDelay: "0.1s" }}
      >
        <span className="animate-glow-pulse inline-block text-gold-gradient">يومنا</span>
      </h1>

      <p
        className="animate-rise mx-auto mt-8 max-w-2xl text-center text-base leading-[2.2] text-muted-foreground sm:text-lg"
        style={{ animationDelay: "0.2s" }}
      >
        التاريخ ده مش مجرد يوم في النتيجة. ده اليوم اللي فيه كل حاجة بقت رسمية وحقيقية، اليوم اللي
        قلنا فيه إحنا مع بعض بجد ومش سايبين إيد بعض. من يومها والعدّاد ماشي ومش بيوقف. ❤️
      </p>


      <p
        className="animate-rise mt-10 text-center text-base leading-relaxed font-semibold text-gold-soft sm:text-lg"
        style={{ animationDelay: "0.35s" }}
      >
        كل رقم هنا وراه لحظة... وكل لحظة فيها جزء منك.
      </p>

      <NextPageLink to="/why" variant="gold">
        طب أقولك ليه بحبك؟ ❤️
      </NextPageLink>
    </PageShell>
  );
}
