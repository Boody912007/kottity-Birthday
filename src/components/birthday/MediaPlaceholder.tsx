import { useState } from "react";

/** Image card that shows an elegant placeholder until the real file is uploaded. */
export function PhotoCard({
  src,
  caption,
  index,
}: {
  src: string;
  caption: string;
  index: number;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure
      className="animate-rise group glass-card overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/55 hover:shadow-glow"
      style={{ animationDelay: `${0.06 * index}s` }}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden bg-[image:var(--gradient-night)]">
        {/* placeholder frame — visible until the real photo loads */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
          <span className="text-3xl opacity-80">🖼️</span>
          <span className="text-xs text-muted-foreground">الصورة جاية قريب ❤️</span>
          <span className="text-[0.65rem] text-muted-foreground/60" dir="ltr">
            {src.slice(1)}
          </span>
        </div>

        <img
          src={src}
          alt={caption}
          loading="lazy"
          decoding="async"
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth > 1) setLoaded(true);
          }}
          className={`relative h-full w-full object-cover transition-all duration-700 will-change-transform group-hover:scale-110 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,color-mix(in_oklab,var(--velvet)_75%,transparent))] opacity-70" />
      </div>
      <figcaption className="px-4 py-4 text-center text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-gold-soft">
        {caption}
      </figcaption>
    </figure>
  );
}
