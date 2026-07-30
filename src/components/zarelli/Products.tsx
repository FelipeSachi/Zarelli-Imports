import { Reveal } from "./Reveal";

export function Products() {
  return (
    <section id="produtos" className="bg-graphite px-6 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="eyebrow">Vitrine</p>
          <h2 className="mt-6 font-display text-4xl text-ivory md:text-5xl">
            Perfumes Árabes
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-ivory/70 md:text-base">
            No momento não temos nenhum perfume árabe disponível.
          </p>
        </Reveal>
      </div>
    </section>
  );
}