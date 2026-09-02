import { createFileRoute } from "@tanstack/react-router";
import { NextPageLink } from "../components/birthday/RomanticButton";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      {
        title: "فيديو ليكي يا بنوتي 😍❤️",
      },
      {
        name: "description",
        content: "فيديو مخصوص ليكي من أحمد ❤️",
      },
    ],
  }),
  component: VideoPage,
});

function VideoPage() {
  return (
    <main
      dir="rtl"
      className="animate-page-in relative min-h-screen overflow-hidden px-5 py-14 text-center sm:py-20"
    >
      {/* قلوب خلفية */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute right-[8%] top-[12%] animate-bob text-3xl opacity-60">
          ❤️
        </span>

        <span className="absolute left-[10%] top-[25%] animate-bob text-2xl opacity-50">
          💖
        </span>

        <span className="absolute right-[15%] bottom-[20%] animate-bob text-2xl opacity-50">
          ✨
        </span>

        <span className="absolute left-[15%] bottom-[15%] animate-bob text-3xl opacity-60">
          💕
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="animate-rise">
          <div className="mb-4 text-5xl">🎬</div>

          <p className="text-sm font-semibold tracking-widest text-gold-soft">
            حاجة مخصوص ليكي
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.7] sm:text-6xl">
            الفيديو اللي عملته عشانك ❤️
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            كل ثانية فيه معمولة مخصوص عشانك يا بنوتي...
            <br />
            يمكن الفيديو يقدر يقول شوية من اللي قلبي مش عارف يقوله ❤️
          </p>
        </div>

        {/* الفيديو */}
        <div className="relative mx-auto mt-10 max-w-4xl">
          {/* Glow */}
          <div className="absolute -inset-5 rounded-[3rem] bg-rose-glow/20 blur-3xl" />

          {/* الإطار */}
          <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 p-2 shadow-2xl sm:p-4">
            <div className="overflow-hidden rounded-[1.5rem] bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                className="block h-auto max-h-[75vh] min-h-[250px] w-full object-contain"
              >
                <source
                  src="/video/birthday.mp4"
                  type="video/mp4"
                />

                المتصفح بتاعك مش بيدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        </div>

        {/* رسالة تحت الفيديو */}
        <div
          className="glass-card mx-auto mt-8 max-w-2xl rounded-3xl px-6 py-6"
        >
          <p className="text-lg leading-9 text-muted-foreground">
            اتفرجي عليه للآخر يا قطتي...
            <br />
            عشان كل ثانية فيه معمولة وأنا بفكر فيكي ❤️
          </p>
        </div>

        {/* أزرار */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <NextPageLink to="/song">
            🎵 اسمعي الأغنية يا حياتي
          </NextPageLink>

          <NextPageLink to="/story">
            ❤️ كملي الحكاية
          </NextPageLink>
        </div>
      </div>
    </main>
  );
}