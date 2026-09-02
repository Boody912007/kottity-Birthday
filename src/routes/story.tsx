import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionTitle } from "../components/birthday/PageShell";
import { NextPageLink } from "../components/birthday/RomanticButton";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "الحكاية اللي أنا بحبها ❤️ — لإيمان" },
      {
        name: "description",
        content: "حكاية أحمد وإيمان، بكلام من القلب وباللهجة المصرية.",
      },
      { property: "og:title", content: "الحكاية اللي أنا بحبها ❤️" },
      { property: "og:description", content: "أول فصل من حكاية أحمد وإيمان." },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <PageShell eyebrow="الفصل الأول">
      <SectionTitle>الحكاية اللي أنا بحبها ❤️</SectionTitle>

      <article
        className="animate-rise glass-card relative mt-12 overflow-hidden rounded-[2rem] px-6 py-10 sm:px-12 sm:py-14"
        style={{ animationDelay: "0.2s" }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-10 h-48 w-48 rounded-full bg-rose-glow/20 blur-3xl"
        />
        <span aria-hidden className="mb-6 block text-center text-4xl">
          🌹
        </span>
        <div className="space-y-6 text-base leading-[2.3] text-foreground/90 sm:text-lg">
          <p>
            حكايتنا مبدأتش بزفة ولا بكلام كبير... بدأت هادية كده، بكلمة وردّ، وضحكة في وقتها،
            وإحساس إن فيه حد بقى مكانه محفوظ جوه القلب من غير ما يطلبه.
          </p>
          <p>
            وأنا كل يوم بيعدي بحس إن الحكاية دي بتكبر. مبقيتيش حد جه في طريقي وخلاص، بقيتي إنتِ
            الطريق نفسه. اللي بحكيلك عليه، واللي بضحك معاه، واللي أول ما يحصل حاجة بيجي في دماغي
            قبل أي حد.
          </p>
          <p>
            أحب في حكايتنا إنها حقيقية. فيها دلع، وفيها زن، وفيها خصام دقيقتين وبعدين حضن، وفيها
            اطمنان إن مهما حصل، إحنا في نفس الناحية.
          </p>
          <p className="font-semibold text-gold-soft">
            وأحب فيها أكتر حاجة... إنها معاكي إنتِ. ومكملينها سوا. ❤️
          </p>
        </div>
      </article>

      <NextPageLink to="/our-day">نروح لليوم اللي غيّر كل حاجة؟ ❤️</NextPageLink>
    </PageShell>
  );
}
