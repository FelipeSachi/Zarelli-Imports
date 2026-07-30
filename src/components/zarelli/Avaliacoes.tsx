import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Marina A.",
    city: "São Paulo, SP",
    text: "Encomendei um nicho difícil de achar e chegou original, lacrado e antes do prazo. Atendimento impecável.",
  },
  {
    name: "Rafael T.",
    city: "Curitiba, PR",
    text: "A curadoria é outro nível. Sinto que estou comprando de uma maison, não de uma loja.",
  },
  {
    name: "Helena C.",
    city: "Belo Horizonte, MG",
    text: "Discretos, atenciosos e transparentes em cada etapa da importação. Já é minha terceira compra.",
  },
];

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="bg-graphite px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow">Avaliações</p>
          <h2 className="mt-6 font-display text-4xl text-ivory md:text-5xl">
            Confiança construída em detalhes.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 110}>
              <figure className="glass-card h-full rounded-2xl p-8">
                <div className="flex gap-1" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-champagne text-champagne" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-6 text-sm leading-loose font-light text-ivory/75">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-display text-lg text-ivory">{r.name}</p>
                  <p className="text-[0.65rem] tracking-[0.2em] text-ivory/45 uppercase">{r.city}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}