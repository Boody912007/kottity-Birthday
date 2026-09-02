import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionTitle } from "../components/birthday/PageShell";
import { NextPageLink } from "../components/birthday/RomanticButton";

export const Route = createFileRoute("/song")({
  head: () => ({
    meta: [
      { title: "اضغطي... واسمعي 🎵 — أدرينالين | حمّاقي" },
      {
        name: "description",
        content: "الأغنية اللي اخترناها لذكريات عيد ميلاد إيمان: أدرينالين — محمد حماقي.",
      },
      { property: "og:title", content: "اضغطي... واسمعي. 🎵" },
      { property: "og:description", content: "أدرينالين — حمّاقي. أغنية ذكرياتنا. ❤️‍🔥" },
    ],
  }),
  component: SongPage,
});

function SongPage() {
  const [failed, setFailed] = useState(false);

  return (
    <PageShell eyebrow="ساوند تراك حكايتنا">
      <SectionTitle>اضغطي... واسمعي. 🎵</SectionTitle>

      <div
        className="animate-rise glass-card mt-12 overflow-hidden rounded-[2rem] px-6 py-10 text-center sm:px-12"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="relative mx-auto flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
          <span aria-hidden className="absolute inset-0 rounded-full bg-rose-glow/25 blur-2xl" />
          <span
            aria-hidden
            className="animate-bob relative flex h-full w-full items-center justify-center rounded-full border border-gold/40 bg-[image:var(--gradient-rose)] text-4xl shadow-glow sm:text-5xl"
          >
            🎧❤️
          </span>
        </div>

        <h2 className="mt-8 font-title text-2xl font-bold text-gold-gradient sm:text-3xl">
          أدرينالين — حمّاقي
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-[2.1] text-muted-foreground sm:text-lg">
          الأغنية اللي اخترناها لذكريات عيد ميلادك. خليها تشتغل وإنتِ بتتفرجي على الموقع. ❤️‍🔥
        </p>

        <div className="mt-8">
          {failed ? (
            <div className="rounded-2xl border border-dashed border-gold/40 px-5 py-6">
              <p className="text-sm text-muted-foreground">
                الأغنية جاية قريب... مكانها محفوظ 🎵
              </p>
              <span className="mt-1 block text-xs text-muted-foreground/60" dir="ltr">
                audio/adrinaline.mp3
              </span>
            </div>
          ) : (
            <audio
              controls
              preload="metadata"
              onError={() => setFailed(true)}
              className="w-full"
              dir="ltr"
            >
              <source src="/audio/adrinaline.mp3" type="audio/mpeg" />
            </audio>
          )}
        </div>
      </div>

      <NextPageLink to="/secret" variant="gold">
        آخر حاجة... وهي الأهم 🔐
      </NextPageLink>
    </PageShell>
  );
}
