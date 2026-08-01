"use client";

import { Instagram, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import ameerIcon from "@/assets/ameer/icone.png";
import ameerImage1 from "@/assets/ameer/mudar1.png";
import ameerImage2 from "@/assets/ameer/mudar2.png";
import ameerImage3 from "@/assets/ameer/mudar3.png";
import ameerImage4 from "@/assets/ameer/mudar4.png";
import ameerImage5 from "@/assets/ameer/mudar5.png";

import wazeerIcon from "@/assets/wazeer/icone.png";
import wazeerImage1 from "@/assets/wazeer/mudar1.png";
import wazeerImage2 from "@/assets/wazeer/mudar2.png";
import wazeerImage3 from "@/assets/wazeer/mudar3.png";
import wazeerImage4 from "@/assets/wazeer/mudar4.png";

import safeerIcon from "@/assets/safeer/icone.png";
import safeerImage1 from "@/assets/safeer/D_NQ_NP_2X_779913-MLA113727089091_062026-F.png";
import safeerImage2 from "@/assets/safeer/D_NQ_NP_2X_865452-MLA113727178851_062026-F.png";
import safeerImage3 from "@/assets/safeer/D_NQ_NP_2X_967119-MLA113727089105_062026-F.png";

import attarIcon from "@/assets/attar wesal/icone.png";
import attarImage1 from "@/assets/attar wesal/D_NQ_NP_2X_605179-MLB112761461783_062026-F-perfume-al-wataniah-attar-al-wesal-parfum-m-100ml.png";
import attarImage2 from "@/assets/attar wesal/D_NQ_NP_2X_805091-MLB111682729348_062026-F-perfume-al-wataniah-attar-al-wesal-parfum-m-100ml.png";
import attarImage3 from "@/assets/attar wesal/D_NQ_NP_2X_875049-MLB111681661184_062026-F-perfume-al-wataniah-attar-al-wesal-parfum-m-100ml.png";

const products = [
  {
    id: "ameer",
    name: "Lattafa Al Noble Ameer Edp Unissex 100ml",
    brand: "Lattafa Al Noble",
    icon: ameerIcon,
    images: [ameerImage1, ameerImage2, ameerImage3, ameerImage4, ameerImage5],
    description:
      "Al Noble Ameer é um perfume sofisticado e versátil, perfeito para o dia a dia ou ocasiões especiais. Sua fragrância combina frescor, notas aromáticas e um fundo amadeirado, proporcionando uma sensação de limpeza, elegância e confiança. Conta com excelente fixação e ótima projeção, além de um frasco luxuoso que valoriza ainda mais o produto. É uma excelente opção para quem busca qualidade premium e ótimo custo-benefício.",
    oldPrice: "179,90",
    price: "159,90",
  },
  {
    id: "safeer",
    name: "Al Noble Safeer Edp 100ML",
    brand: "Al Noble",
    icon: safeerIcon,
    images: [safeerImage1, safeerImage2, safeerImage3],
    description:
      "Al Noble Safeer é um perfume marcante e sofisticado, perfeito para quem busca uma fragrância elegante e diferenciada. Combina notas verdes, aromáticas e amadeiradas, criando um aroma fresco, refinado e de excelente presença. Possui ótima fixação e boa projeção, sendo ideal para uso diário ou ocasiões especiais. Seu frasco premium e o excelente custo-benefício fazem dele uma ótima escolha para quem aprecia perfumes árabes de alta qualidade.",
    oldPrice: "179,90",
    price: "159,90",
  },
  {
    id: "wazeer",
    name: "Lattafa Al Noble Wazeer 100ml Edp",
    brand: "Lattafa Al Noble",
    icon: wazeerIcon,
    images: [wazeerImage1, wazeerImage2, wazeerImage3, wazeerImage4],
    description:
      "Al Noble Wazeer é um perfume sofisticado e marcante, ideal para quem busca elegância e presença. Possui excelente fixação e projeção, com uma fragrância que mistura frescor, doçura e notas amadeiradas de forma equilibrada. Perfeito para noites, ocasiões especiais e dias mais amenos, transmite luxo, confiança e personalidade. Seu frasco premium completa a experiência, tornando-o uma ótima escolha para quem deseja um perfume de alto desempenho e excelente custo-benefício.",
    oldPrice: "179,90",
    price: "159,90",
  },
  {
    id: "attar-wesal",
    name: "Al Wataniah Attar Al Wesal Parfum M 100ml",
    brand: "Al Wataniah",
    icon: attarIcon,
    images: [attarImage1, attarImage2, attarImage3],
    description:
      "Attar Al Wesal é um perfume elegante e versátil, perfeito para quem busca sofisticação em qualquer ocasião. Sua fragrância une notas doces, florais e amadeiradas, proporcionando um aroma envolvente, moderno e agradável. Conta com excelente fixação e ótima projeção, garantindo longa duração na pele. Seu frasco luxuoso e o ótimo custo-benefício fazem dele uma excelente escolha para quem deseja um perfume árabe de alta qualidade.",
    oldPrice: null,
    price: null,
  },
];

export function ProductsArabic() {
  return (
    <section id="produtos" className="bg-graphite px-6 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="eyebrow">Vitrine</p>
          <h2 className="mt-6 font-display text-4xl text-ivory md:text-5xl">Perfumes Árabes</h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-ivory/70 md:text-base">
            Seleção exclusiva de fragrâncias árabes com curadoria premium e atendimento personalizado.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 xl:grid-cols-4">
          {products.map((product) => (
            <Dialog key={product.id}>
              <div className="group overflow-hidden rounded-[2rem] border border-ivory/10 bg-graphite-deep p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-champagne/50">
                <div className="space-y-5">
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="relative block overflow-hidden rounded-[1.75rem] border border-ivory/10 bg-graphite-deep transition duration-500 hover:bg-graphite/90 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                    >
                      <div className="flex h-[240px] sm:h-[320px] w-full items-center justify-center rounded-[1.5rem] border-2 border-white/90 bg-graphite-deep">
                        <img
                          src={product.icon}
                          alt={`${product.name} principal`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
                    </button>
                  </DialogTrigger>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-ivory/60">{product.brand}</p>
                    <h3 className="text-xl font-semibold leading-tight text-ivory">{product.name}</h3>
                    {product.price ? (
                      <div className="flex items-end gap-3">
                        <span className="text-sm text-ivory/50 line-through">R$ {product.oldPrice}</span>
                        <span className="text-2xl font-semibold text-champagne">R$ {product.price}</span>
                      </div>
                    ) : (
                      <p className="text-sm text-ivory/60">Preço sob consulta</p>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" type="button">
                      Comprar
                    </Button>
                  </DialogTrigger>
                </div>

                <DialogContent className="max-w-[95vw] sm:max-w-6xl p-0 bg-graphite-deep text-ivory shadow-2xl max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)] overflow-hidden rounded-t-[2rem] sm:rounded-[2rem] pb-4 sm:pb-6">
                  <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-ivory/20" />
                  <div className="grid gap-4 rounded-[2rem] bg-[#0f0f0f] p-4 sm:p-6 md:grid-cols-[1.8fr_1fr] items-start">

                    <div className="relative overflow-hidden rounded-[1.75rem] bg-[#111] min-h-[240px] sm:min-h-[360px] md:min-h-[480px]">
                      <Carousel className="relative">
                        <CarouselContent className="flex">
                          {product.images.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="flex h-[240px] sm:h-[360px] md:h-[480px] w-full items-center justify-center bg-[#111] px-3 sm:px-6">                                <img
                                  src={image}
                                  alt={`${product.name} imagem ${index + 1}`}
                                  className="h-full w-full max-w-full object-contain"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:absolute sm:flex left-4 top-1/2 -translate-y-1/2 z-20 rounded-full border border-ivory/20 bg-black/60 text-white hover:bg-black/80" />
                        <CarouselNext className="hidden sm:absolute sm:flex right-4 top-1/2 -translate-y-1/2 z-20 rounded-full border border-ivory/20 bg-black/60 text-white hover:bg-black/80" />
                      </Carousel>

                      <p className="mt-3 px-3 text-center text-xs uppercase tracking-[0.22em] text-ivory/60 sm:hidden">
                        arraste para ver mais imagens
                      </p>
                    </div>

                    <div className="relative">
                      <div className="flex max-h-[calc(100vh-7rem)] md:max-h-[480px] flex-col justify-between gap-6 overflow-y-auto rounded-[1.5rem] bg-graphite-deep p-4 sm:p-6 pr-6 hide-scrollbar">
                        <div className="space-y-6">
                          <DialogTitle className="text-3xl font-semibold text-ivory">{product.name}</DialogTitle>
                          <div className="overflow-hidden pr-4 text-sm leading-7 text-ivory/70">
                            {product.description ? (
                              <p>{product.description}</p>
                            ) : (
                              <p>{`${product.brand} — edição selecionada para quem busca sofisticação e presença.`}</p>
                            )}
                          </div>

                          <div className="mt-8 space-y-4 rounded-3xl border border-champagne/40 bg-champagne/5 p-6 text-sm text-ivory shadow-[0_12px_40px_-20px_rgba(255,205,150,0.45)]">
                            <p className="text-base font-semibold uppercase tracking-[0.18em] text-champagne">
                              Para adquirir nos chame em alguma das redes sociais.
                            </p>
                            <p className="text-sm font-medium text-ivory/80">Promoção limitada.</p>
                          </div>

                          <div className="mt-6 grid gap-3">
                            <a
                              href="https://www.instagram.com/zarelli_imports/"
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-3 rounded-full border border-ivory/15 bg-foreground/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-ivory transition hover:border-champagne hover:text-champagne"
                            >
                              <Instagram className="h-4 w-4" aria-hidden />
                              Instagram
                            </a>
                            <a
                              href="https://wa.me/5544984641899"
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-3 rounded-full border border-ivory/15 bg-foreground/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-ivory transition hover:border-champagne hover:text-champagne"
                            >
                              <MessageCircle className="h-4 w-4" aria-hidden />
                              WhatsApp
                            </a>
                          </div>
                        </div>

                        <div className="space-y-3 rounded-[1.5rem] bg-[#121212] p-5 text-sm text-ivory/70">
                          <p className="text-sm uppercase tracking-[0.24em] text-ivory/70">Detalhes</p>
                          <p>Imagens originais do produto com o ícone principal aberto para visualização.</p>
                          <p>
                            {product.price ? (
                              <span>
                                De <span className="line-through">R$ {product.oldPrice}</span> por <span className="font-semibold text-champagne">R$ {product.price}</span>
                              </span>
                            ) : (
                              "Preço sob consulta."
                            )}
                          </p>
                        </div>
                      </div>
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
                    </div>
                  </div>
                </DialogContent>
              </div>
            </Dialog>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-champagne/20 bg-[#111] p-8 text-center text-sm text-ivory/70">
          <p className="font-semibold text-ivory">Para adquirir nos chame em alguma das redes sociais. promoção limitada.</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.instagram.com/zarelli_imports/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-foreground/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-ivory transition hover:border-champagne hover:text-champagne"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              Instagram
            </a>
            <a
              href="https://wa.me/5544984641899"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-foreground/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-ivory transition hover:border-champagne hover:text-champagne"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
