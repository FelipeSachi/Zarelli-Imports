import { useEffect, useState } from "react";
import crest from "@/assets/zarelli-logo.png";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-graphite-deep"
      style={{ animation: "veil-out 700ms ease 1.2s forwards" }}
    >
      <img
        src={crest}
        alt=""
        width={1024}
        height={1024}
        className="h-24 w-24 opacity-90"
        style={{ animation: "crest-in 1.2s cubic-bezier(0.22,1,0.36,1) both" }}
      />
      <span
        className="mt-6 font-display text-sm tracking-[0.5em] text-ivory/70"
        style={{ animation: "crest-in 1.4s cubic-bezier(0.22,1,0.36,1) 0.15s both" }}
      >
        ZARELLI
      </span>
    </div>
  );
}