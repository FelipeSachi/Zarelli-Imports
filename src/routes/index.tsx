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

function Index() {
  return (
    <>
      <Preloader />
      <Navbar />
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
