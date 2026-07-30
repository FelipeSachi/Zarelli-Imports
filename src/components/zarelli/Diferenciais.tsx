import { Reveal } from "./Reveal";

const items = [
  { title: "Produtos Originais", text: "Procedência verificada, sempre." },
  { title: "Atendimento Personalizado", text: "Um consultor dedicado a você." },
  { title: "Importação Segura", text: "Rastreio e documentação completos." },
  { title: "Produtos Exclusivos", text: "Peças raras e edições limitadas." },
  { title: "Entrega para todo o Brasil", text: "Embalagem discreta e protegida." },
];

export function Diferenciais() {
  return (
    <section className="bg-background px-6 pb-28 md:pb-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="hairline block" />
        </Reveal>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-[0_1px_30px_-24px_rgba(31,31,31,0.5)] transition-all duration-700 hover:-translate-y-1 hover:border-champagne/45">
                <span aria-hidden className="text-champagne">
                  ✔
                </span>
                <h3 className="mt-4 font-display text-2xl text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed font-light text-muted-foreground">
                  {it.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}