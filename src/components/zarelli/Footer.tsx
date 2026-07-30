import { Instagram, Mail, MessageCircle } from "lucide-react";
import crest from "@/assets/zarelli-logo.png";

export function Footer() {
  return (
    <footer id="contato" className="bg-graphite-deep px-6 pt-24 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <img
              src={crest}
              alt="Brasão Zarelli Imports"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-16 w-16"
            />
            <p className="mt-5 font-display text-sm tracking-[0.38em] text-ivory">ZARELLI IMPORTS</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed font-light text-ivory/50">
              Elegância que permanece.
            </p>
          </div>

          <div>
            <p className="eyebrow">Contato</p>
            <ul className="mt-6 space-y-4 text-sm font-light text-ivory/65">
              <li>
                <a
                  href="https://wa.me/5544984641899"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 transition-colors duration-500 hover:text-champagne"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.2} aria-hidden /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zarelli_imports/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 transition-colors duration-500 hover:text-champagne"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.2} aria-hidden /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:paraguaiimportados4@gmail.com"
                  className="inline-flex items-center gap-3 transition-colors duration-500 hover:text-champagne"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.2} aria-hidden /> ParaguaiImportados4@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Institucional</p>
            <ul className="mt-6 space-y-4 text-sm font-light text-ivory/65">
              <li>
                <a href="#sobre" className="transition-colors duration-500 hover:text-champagne">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#encomenda" className="transition-colors duration-500 hover:text-champagne">
                  Políticas de Importação
                </a>
              </li>
              <li>
                <a href="#encomenda" className="transition-colors duration-500 hover:text-champagne">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <span className="hairline mt-16 block" />
        <p className="mt-8 text-center text-[0.65rem] tracking-[0.2em] text-ivory/35 uppercase">
          © {new Date().getFullYear()} Zarelli Imports — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}