import { useMemo } from "react";

/** Partículas de fundo mais visíveis, com trajetória mais longa e vertical. */
export function Particles({ count = 28 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        size: 2 + ((i * 11) % 4),
        duration: 12 + ((i * 5) % 10),
        delay: (i * 2) % 12,
        bottom: -((i * 8) % 50),
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-champagne/80 shadow-[0_0_12px_rgba(255,205,150,0.45)]"
          style={{
            left: `${d.left}%`,
            bottom: `${d.bottom}px`,
            width: d.size,
            height: d.size,
            animation: `drift ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}