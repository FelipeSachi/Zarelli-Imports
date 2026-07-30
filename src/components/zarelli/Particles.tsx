import { useMemo } from "react";

/** Extremely subtle drifting champagne particles for the hero backdrop. */
export function Particles({ count = 26 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        size: 1 + ((i * 13) % 3),
        duration: 16 + ((i * 7) % 18),
        delay: (i * 3) % 20,
        bottom: -((i * 11) % 40),
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-champagne/50"
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