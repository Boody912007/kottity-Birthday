import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionTitle } from "../components/birthday/PageShell";
import { NextPageLink } from "../components/birthday/RomanticButton";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "من أحمد... لقطتي 💌 — رسالة عيد ميلاد لإيمان" },
      {
        name: "description",
        content: "خطاب حب حقيقي من أحمد لإيمان في عيد ميلادها: كل سنة وانتي طيبة يا دنيتي.",
      },
      { property: "og:title", content: "من أحمد... لقطتي. 💌" },
      { property: "og:description", content: "خطاب حب حقيقي، بكل كلمة من القلب." },
    ],
  }),
  component: LetterPage,
});

const PARAGRAPHS = [
  "كل سنة وانتي طيبة يا دنيتى وأحلى وأغلى حاجة حصلتلي في دنيتي كلها 🎂🎈",
  "النهارده مش يوم عادي أبداً، النهارده العيد الحقيقي بتاعي، اليوم اللي اتولدت فيه فرحتي واتولد معاه النور اللى منورلى حياتى ✨ وبسببه عرفت يعني إيه حب بجد ويعني إيه أكون مبسوط من قلبي.",
  "يا قطتى الشقية اللي دخلت حياتي خطفت قلبي من غير استئذان واتربعت جواه لوحدها 🐈❤️، كل سنة وانتي عمرى اللي فات واللي جاي، وانتي حياتى اللي مقدرش أتخيل أعيش منها دقيقة واحدة من غير ما تكوني فيها. بحس إن يوم ميلادك ده هو يوم ميلادي أنا، لأن وجودك هو اللي ادى لأيامي طعم ومعنى.",
  "انتي مش بس حبيبتي، انتي قمرى اللي بيطلع ينورلي عتمة الأيام ويحليها ويطمنني 🌙، وانتي نن عينى من جوه اللي بشوف بيه كل حاجة حلوة في الدنيا 👀💖. ولما بتبصيلي وتضحكي، بنسى كل تعب ومشاكل في الدنيا، لأنك الأمان بتاعي والراحة اللي بستناها آخر كل يوم.",
  "كل نبضة بتدق فيا بتنادي باسمك ومابتحبش غيرك، لأنك ببساطة شريان قلبى اللي بيمدني بالروح وبيخليني عايش 🫀. ويا مزتى القمر اللي مفيش في رقتها وشقاوتها وحلاوتها ودلعها اتنين في الدنيا دي كلها 🍓🔥، مهما كبرتي هتفضلي في عيني البنوتة الصغيرة اللي بدلعها وبخاف عليها من الهوا الطاير.",
  "ربنا يديمك نعمة وسند في حضني يا قطتى الحلوة، ويخليلي ضحكتك وصوتك اللي بينسيني هموم الدنيا. عقبال مليون سنة وانتي دايماً معايا، وفي ظهري، ومالية عليا دنيتي وفرحانة. هنكبر سوا ونعجز سوا ونفضل نحب في بعض وندلع في بعض لحد آخر نفس في عمرنا يا ست البنات 👑💍.",
  "بحبك حب ميتوصفش بكلام، ومفيش لغة في العالم تكفي توصف اللي في قلبي ليكي. عيد ميلاد سعيد يا أغلى من روحي، ويارب السنة دي وكل سنة تحققي كل اللي نفسك فيه وأنا جنبك وفي ظهرك! 🥰🥳🎁🎉🎊",
];

function LetterPage() {
  return (
    <PageShell eyebrow="خطاب مكتوب بالإيد وبالقلب">
      <SectionTitle>من أحمد... لقطتي. 💌</SectionTitle>

      <article
        className="animate-rise relative mt-12 overflow-hidden rounded-[2rem] px-6 py-10 shadow-glow sm:px-12 sm:py-14"
        style={{
          animationDelay: "0.2s",
          background:
            "linear-gradient(170deg, var(--paper), color-mix(in oklab, var(--paper) 82%, var(--gold) 18%))",
          color: "var(--paper-foreground)",
          border: "1px solid color-mix(in oklab, var(--gold) 45%, transparent)",
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-dashed"
          style={{ borderColor: "color-mix(in oklab, var(--ink) 25%, transparent)" }}
        />
        <div className="relative">
          <p className="text-center text-3xl">💌</p>
          <p className="mt-6 text-center font-display text-2xl font-bold sm:text-3xl">
            حبيبتي إيمان،
          </p>
          <div className="mt-8 space-y-6 text-base leading-[2.35] sm:text-lg">
            {PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-10 text-left font-display text-2xl font-bold sm:text-3xl" dir="rtl">
            أحمد ❤️
          </p>
        </div>
      </article>

      <NextPageLink to="/video" variant="gold">
        فيه حاجة عايز الفيديو يقولها 🎬
      </NextPageLink>
    </PageShell>
  );
}
