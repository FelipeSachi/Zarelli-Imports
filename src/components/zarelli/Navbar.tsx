import { useEffect, useState } from "react";
import crest from "@/assets/zarelli-logo.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#encomenda", label: "Sob Encomenda" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-champagne/15 bg-graphite-deep/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
      >
        <a href="#topo" className="flex items-center gap-3">
          <img src={crest} alt="Brasão Zarelli Imports" width={1024} height={1024} className="h-9 w-9" />
          <span className="font-display text-sm tracking-[0.38em] text-ivory">ZARELLI</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.7rem] tracking-[0.22em] text-ivory/70 uppercase transition-colors duration-500 hover:text-champagne"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#encomenda"
          className="hidden rounded-full border border-champagne/40 px-6 py-2.5 text-[0.7rem] tracking-[0.22em] text-champagne uppercase transition-colors duration-500 hover:bg-champagne hover:text-graphite md:inline-block"
        >
          Encomendar
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="block h-px w-6 bg-ivory/80" />
          <span className="block h-px w-6 bg-ivory/80" />
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-champagne/15 bg-graphite-deep/95 px-6 py-6 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-xs tracking-[0.22em] text-ivory/75 uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}