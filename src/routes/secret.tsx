import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/birthday/PageShell";
import { ActionButton } from "../components/birthday/RomanticButton";
import { Typewriter } from "../components/birthday/Typewriter";
import { celebrate, spawnHearts } from "../components/birthday/burst";

export const Route = createFileRoute("/secret")({
  head: () => ({
    meta: [
      { title: "بحبك يا إيمان ❤️‍🔥 — الرسالة السرية من أحمد" },
      {
        name: "description",
        content: "آخر حاجة... ليكي إنتِ بس. رسالة سرية من أحمد لإيمان في عيد ميلادها.",
      },
      { property: "og:title", content: "آخر حاجة... ليكي إنتِ بس." },
      { property: "og:description", content: "الرسالة دي مش بتظهر غير لما تدوسي. ❤️" },
    ],
  }),
  component: SecretPage,
});

const FIRST_LINE = "يا أقرب حد لقلبي ويا أحلى صدفة غيرتلي مجرى حياتي كلها ✨";

const BODY = [
  "من يوم ما عرفتك وأنا حاسس إن قلبي اتخلق من جديد عشان بس ينبض باسمك. معاكي عرفت إن الحب مش بس كلام، الحب هو الأمان اللي بحسه بمجرد ما بسمع صوتك، والراحة اللي بتملى روحي لما بشوف ضحكتك اللي بتنور دنيتي 💖.",
  "انتي العيلة، والصاحبة، والحبيبة اللي مفيش في حنيتها ولا في جمال روحها اتنين. كل يوم بكتشف فيكي حاجة جديدة تخليني أعشقك أكتر من اليوم اللي قبله. بغير عليكي من الهوا الطاير، وبخاف عليكي من أي حاجة ممكن تضايقك. انتي النعمة اللي بدعي ربنا ليل ونهار إنها تدوم وتفضل مالية عليا حياتي، وانتي الحضن اللي بهرب ليه من زحمة الدنيا 🥰🔥.",
];

const BODY_2 = [
  "يا نصيبى اللى انا بحمد ربنا على انى قابلته، يا مكانى الصح ونصى الحلو اللى انا كملته، يا حبيبى بمعنى الكلمه 💍❤️",
  "أنتي العوض الحلو اللي ربنا طبطب بيه على قلبي بعد أي تعب. أنا مش بس بحبك، أنا بعشق كل تفصيلة فيكي.. بعشق حنيتك، وجنانك، وروحك الحلوة اللي بتخطفني من روحي. أنتي الست اللي ملت عيني ومبقتش شايف غيرها في الدنيا دي كلها، وأنتي الحلم اللي كنت بتمناه وصحيت لقيته حقيقة بين إيديا.",
  "بوعدك أفضل جنبك وسندك، وأفضل أدلعك وأشيلك جوه عيني طول ما أنا عايش. كل لمسة من ايدك بتطمني، وكل بصة في عينكي بتاخدني لعالم تاني مفيهوش غيرنا إحنا وبس. ربنا يخليكي ليا يا كل مالي، ومايحرمنيش من دفا حضنك أبداً يا أغلى من روحي! 🥰💖🌍",
  "وعايزك تتأكدي إن دي مش مجرد كلمات، ده وعد وعهد عليا هفضل أوفيه لآخر نفس في عمري. هفضل أحميكي، وأحتويكي، وأكون ليكي الضهر اللي تتسندي عليه من غير ما تفكري. انتي تستاهلي يتجابلك حتة من السما، وتستاهلي أفرشلك الأرض ورد وأعيشك ملكة متوجة جوه قلبي.",
  "هتفضلي دايماً أميرتي، وبنتي المدللة، وست البنات اللي مفيش قبلها ولا بعدها.. بحبك يا أحلى وأغلى حاجة في عمري كله! 👑🕊️🔥",
];

function SecretPage() {
  const [opened, setOpened] = useState(false);
  const [typed, setTyped] = useState(false);
  const [partyMessage, setPartyMessage] = useState(false);

  return (
    <PageShell eyebrow="الصفحة الأخيرة" wide>
      {!opened ? (
        <div className="text-center">
          <div className="animate-bob animate-glow-pulse mx-auto mb-8 text-[5.5rem] leading-none select-none sm:text-[7rem]">
            🔐
          </div>
          <h1 className="animate-rise font-display text-3xl leading-[1.6] font-bold text-gold-gradient sm:text-5xl">
            آخر حاجة... ليكي إنتِ بس.
          </h1>
          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-base leading-[2.1] text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.15s" }}
          >
            خليكي مركزة... الرسالة دي مش بتظهر غير لما تدوسي. ❤️
          </p>
          <div className="mt-12 flex justify-center">
            <ActionButton
              variant="gold"
              onClick={() => {
                celebrate(2600);
                setOpened(true);
              }}
            >
              افتحي الرسالة يا دنيتي ❤️
            </ActionButton>
          </div>
        </div>
      ) : (
        <div className="animate-page-in">
          <article className="glass-card relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-12 sm:py-14">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-glow/25 blur-3xl"
            />
            <div className="relative">
              <Typewriter
                text={FIRST_LINE}
                onDone={() => setTyped(true)}
                className="text-center font-display text-xl leading-[1.9] font-bold text-gold-gradient sm:text-3xl"
              />

              <div
                className={`mt-10 space-y-6 text-base leading-[2.35] text-foreground/90 transition-all duration-1000 sm:text-lg ${
                  typed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                {BODY.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p className="text-center font-title text-lg font-bold text-gold-soft sm:text-xl">
                  وفي الآخر عايز أقولك..
                </p>
                {BODY_2.map((p, i) => (
                  <p key={`b${i}`}>{p}</p>
                ))}
              </div>
            </div>
          </article>

          <div className="relative mt-16 text-center">
            <span
              aria-hidden
              className="absolute inset-x-0 top-1/2 mx-auto h-40 max-w-lg -translate-y-1/2 rounded-full bg-rose-glow/20 blur-3xl"
            />
            <span aria-hidden className="animate-bob absolute -top-6 right-[12%] text-2xl">
              ❤️
            </span>
            <span
              aria-hidden
              className="animate-bob absolute -top-2 left-[10%] text-2xl"
              style={{ animationDelay: "0.8s" }}
            >
              💖
            </span>
            <span
              aria-hidden
              className="animate-bob absolute -bottom-6 left-[28%] text-xl"
              style={{ animationDelay: "1.4s" }}
            >
              ❤️‍🔥
            </span>
            <h2 className="animate-heartbeat relative font-display text-3xl leading-[1.7] font-bold text-gold-gradient sm:text-5xl md:text-6xl">
              بحبييييييييييييييييييييك يا عمرى وروحى وحياتىىىىىىى ❤️‍🔥
            </h2>
          </div>

          <div className="mt-14 flex flex-col items-center gap-6">
            <ActionButton
              variant="gold"
              onClick={() => {
                celebrate(6000);
                setPartyMessage(true);
                window.setTimeout(
                  () => spawnHearts(window.innerWidth / 2, window.innerHeight / 2, 22),
                  400,
                );
              }}
            >
              اضغطي هنا يا ملكتي 👑
            </ActionButton>

            {partyMessage ? (
              <p className="animate-rise glass-card rounded-full px-6 py-4 text-center text-base font-bold text-gold-soft sm:text-lg">
               كل سنة وانتي طيبة يا اغلى حاجة في دنيتي 🎂❤️ يا عمري اللي منور حياتي ربنا يخليكي ليا وما يحرمني منك ابدا 🥰✨ كل يوم معاكي بيبقى عيد بس النهاردة عيد ميلاد القمر 🌙💖 يا رب السنة دي تحققي كل اللي بتتمنيه وتفضلي دايما مبسوطة وضحكتك مالية وشك 🥺💘 بحبك اوي يا روحي وعقبال مليون سنة وانتي منورة دنيتي وفي حضني 🫂🎉🥳
              </p>
            ) : null}
          </div>
        </div>
      )}
    </PageShell>
  );
}
