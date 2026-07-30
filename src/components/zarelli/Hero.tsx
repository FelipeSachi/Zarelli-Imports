import crest from "@/assets/zarelli-logo.png";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-graphite px-6 pt-28 pb-20 text-center"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 10%, color-mix(in oklab, var(--champagne) 9%, transparent), transparent 60%)",
        }}
      />
      <Particles />

      <div className="relative mx-auto max-w-3xl">
        <img
          src={crest}
          alt="Brasão Zarelli Imports"
          width={1024}
          height={1024}
          className="mx-auto h-28 w-28 md:h-36 md:w-36"
        />
        <p className="eyebrow mt-8">Zarelli Imports</p>
        <h1 className="mt-6 font-display text-4xl leading-[1.1] text-ivory md:text-6xl lg:text-7xl">
          Descubra fragrâncias que deixam um legado.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed font-light text-ivory/65 md:text-base">
          Perfumes importados originais, produtos exclusivos e atendimento personalizado para quem
          valoriza qualidade e autenticidade.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#produtos"
            className="w-full rounded-full bg-champagne px-9 py-3.5 text-[0.7rem] tracking-[0.24em] text-graphite uppercase transition-all duration-500 hover:bg-champagne/85 sm:w-auto"
          >
            Explorar Catálogo
          </a>
          <a
            href="#encomenda"
            className="w-full rounded-full border border-ivory/25 px-9 py-3.5 text-[0.7rem] tracking-[0.24em] text-ivory/85 uppercase transition-all duration-500 hover:border-champagne hover:text-champagne sm:w-auto"
          >
            Fazer Encomenda
          </a>
        </div>
      </div>

      <div aria-hidden className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="block h-14 w-px bg-gradient-to-b from-transparent to-champagne/50" />
      </div>
    </section>
  );
}