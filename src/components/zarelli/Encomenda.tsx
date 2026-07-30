import { Search, Compass, Plane, PackageCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { icon: Search, title: "Você escolhe", text: "Envie a referência do produto desejado." },
  { icon: Compass, title: "Nós encontramos", text: "Curadoria em fornecedores verificados." },
  { icon: Plane, title: "Importamos", text: "Processo seguro e rastreado." },
  { icon: PackageCheck, title: "Você recebe", text: "Entrega para todo o Brasil." },
];

export function Encomenda() {
  return (
    <section id="encomenda" className="bg-background px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow">Sob Encomenda</p>
          <h2 className="mt-6 font-display text-4xl text-foreground md:text-5xl">
            Autenticidade em cada detalhe.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed font-light text-muted-foreground">
            Encontramos o que não está em estoque. Um processo simples, discreto e acompanhado de
            perto.
          </p>
        </Reveal>

        <ol className="mt-20 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="relative text-center md:text-left">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-champagne/35 md:mx-0">
                <s.icon className="h-5 w-5 text-champagne" strokeWidth={1.2} aria-hidden />
              </div>
              <p className="mt-6 text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                0{i + 1}
              </p>
              <h3 className="mt-2 font-display text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">{s.text}</p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="mx-auto mt-8 block h-8 w-px bg-champagne/30 md:absolute md:top-7 md:right-0 md:mt-0 md:h-px md:w-8"
                />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}