import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="bg-background px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
        <Reveal>
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Mais do que perfumes. Memórias.
          </h2>
          <span className="hairline mt-10 block max-w-40" />
        </Reveal>

        <Reveal delay={120} className="space-y-7 text-sm leading-loose font-light text-muted-foreground md:text-base">
          <p>
            Na Zarelli Imports acreditamos que cada fragrância carrega uma história. Mais do que
            importar produtos, buscamos conectar pessoas a experiências, memórias e momentos
            inesquecíveis.
          </p>
          <p>
            Trabalhamos com curadoria rigorosa, fornecedores verificados e um processo de importação
            transparente do primeiro contato até a entrega.
          </p>
          <p className="font-display text-2xl text-foreground italic md:text-3xl">
            Elegância que permanece.
          </p>
        </Reveal>
      </div>
    </section>
  );
}