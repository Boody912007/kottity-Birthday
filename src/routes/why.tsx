import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionTitle, Lead } from "../components/birthday/PageShell";
import { NextPageLink } from "../components/birthday/RomanticButton";

export const Route = createFileRoute("/why")({
  head: () => ({
    meta: [
      { title: "ليه بحبك؟ سؤال صعب. — لإيمان من أحمد" },
      {
        name: "description",
        content: "ست أسباب خلّت قلب أحمد متعلق بإيمان: ضحكتك، أنوثتك، جمالك، حنيتك، حبك ليا، أخلاقك.",
      },
      { property: "og:title", content: "ليه بحبك؟ سؤال صعب." },
      { property: "og:description", content: "كام سبب من اللي مخليين قلبي متعلق بيكي. ❤️" },
    ],
  }),
  component: WhyPage,
});

const REASONS = [
  {
    icon: "😂❤️",
    title: "ضحكتك",
    text: "ضحكتك قادرة تصلح يوم كامل بايظ من غير ما تعملي أي حاجة.",
  },
  {
    icon: "🌹",
    title: "أنوثتك",
    text: "فيكي رقة وأنوثة تخليكي مختلفة من غير ما تحاولي.",
  },
  {
    icon: "👑",
    title: "جمالك",
    text: "ملكة جمال؟ دي مش مجاملة. دي حقيقة أحمد مقتنع بيها جدًا 😂.",
  },
  {
    icon: "🥹",
    title: "حنيتك",
    text: "الحنية اللي فيكي من الحاجات اللي بتخليني أحس إني مطمن.",
  },
  {
    icon: "❤️‍🔥",
    title: "حبك ليا",
    text: "طريقتك في حبي واهتمامك بيا حاجة أنا مقدرها أكتر مما بقول.",
  },
  {
    icon: "🤍",
    title: "أخلاقك وحياؤك",
    text: "ودي من أكتر الحاجات اللي خلت الإعجاب يبقى حب حقيقي.",
  },
];

function WhyPage() {
  return (
    <PageShell eyebrow="ستة أسباب من ألف" wide>
      <SectionTitle>ليه بحبك؟ سؤال صعب.</SectionTitle>
      <Lead>
        لأن الأسباب كتير أوي... بس خليني أقولك كام سبب من اللي مخليين قلبي متعلق بيكي. ❤️
      </Lead>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <article
            key={r.title}
            className="animate-rise group glass-card relative overflow-hidden rounded-3xl px-6 py-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-glow"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-14 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-rose-glow/0 blur-2xl transition-all duration-500 group-hover:bg-rose-glow/30"
            />
            <div className="relative">
              <span className="inline-flex text-3xl transition-transform duration-500 group-hover:scale-115 sm:text-4xl">
                {r.icon}
              </span>
              <h2 className="mt-4 font-title text-xl font-bold text-gold-soft sm:text-2xl">
                {r.title}
              </h2>
              <p className="mt-3 text-sm leading-[2] text-muted-foreground sm:text-base">
                {r.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      <NextPageLink to="/memories">نبص على صورنا؟ 📸❤️</NextPageLink>
    </PageShell>
  );
}
