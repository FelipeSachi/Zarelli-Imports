import { Instagram, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

export function InstagramFeed() {
  return (
    <section className="bg-background px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow">Instagram</p>
          <h2 className="mt-6 font-display text-4xl text-foreground md:text-5xl">
            <a
              href="https://www.instagram.com/zarelli_imports/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-transparent transition-colors duration-300 hover:decoration-champagne"
            >
              Zarelli_Imports
            </a>
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-14 text-center">
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.instagram.com/zarelli_imports/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-foreground/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-foreground transition-colors duration-500 hover:border-champagne hover:text-champagne"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.2} aria-hidden />
              Instagram
            </a>

            <a
              href="https://wa.me/5544984641899"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-foreground/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-foreground transition-colors duration-500 hover:border-champagne hover:text-champagne"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.2} aria-hidden />
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-12 text-center">
          <a
            href="https://www.instagram.com/zarelli_imports/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-3 text-[0.68rem] tracking-[0.24em] text-foreground uppercase transition-colors duration-500 hover:border-champagne hover:text-champagne"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.2} aria-hidden />
            Seguir
          </a>
        </Reveal>
      </div>
    </section>
  );
}