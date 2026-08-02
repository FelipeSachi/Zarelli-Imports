import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/zarelli/Preloader";
import { Navbar } from "@/components/zarelli/Navbar";
import { Hero } from "@/components/zarelli/Hero";
import { About } from "@/components/zarelli/About";
import { ProductsArabic as Products } from "@/components/zarelli/ProductsArabic";
import { Encomenda } from "@/components/zarelli/Encomenda";
import { Diferenciais } from "@/components/zarelli/Diferenciais";
import { InstagramFeed } from "@/components/zarelli/InstagramFeed";
import { Footer } from "@/components/zarelli/Footer";

const title = "Zarelli Imports — Perfumes Importados Originais sob Encomenda";
const description =
  "Perfumes importados originais, produtos exclusivos e atendimento personalizado. Curadoria de luxo e importação segura para todo o Brasil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function PromotionalPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[60] w-[min(88vw,320px)] rounded-[1.4rem] border border-champagne/50 bg-gradient-to-br from-[#1a1209] via-[#0f0f0f] to-[#2b1d0f] p-5 shadow-[0_0_40px_rgba(255,205,150,0.25)] backdrop-blur-xl">
      <div className="absolute inset-0 rounded-[1.4rem] border border-champagne/20" />
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute right-3 top-3 rounded-full border border-champagne/30 bg-black/30 px-2 py-1 text-sm text-ivory/80 transition hover:bg-champagne hover:text-graphite"
        aria-label="Fechar promoção"
      >
        ×
      </button>
      <p className="pr-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-champagne">Preços especiais</p>
      <h3 className="mt-3 text-base font-semibold leading-6 text-ivory">Promoções válidas até o Dia dos Pais!</h3>
      <p className="mt-2 text-sm leading-6 text-ivory/80">
        Garanta seu perfume com ofertas exclusivas por tempo limitado.
      </p>
      <div className="mt-4 inline-flex rounded-full border border-champagne/40 bg-champagne/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-champagne">
        Oferta exclusiva
      </div>
    </div>
  );
}

function Index() {
  return (
    <>
      <Preloader />
      <Navbar />
      <PromotionalPopup />
      <main>
        <Hero />
        <About />
        <Products />
        <Encomenda />
        <Diferenciais />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
