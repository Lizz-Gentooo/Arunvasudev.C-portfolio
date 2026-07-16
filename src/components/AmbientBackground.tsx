import { useMemo } from "react";

interface Star {
  top: string;
  left: string;
  size: number;
  delay: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() < 0.85 ? 1 : 2,
    delay: Math.random() * 4,
  }));
}

export default function AmbientBackground() {
  const stars = useMemo(() => generateStars(70), []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-70 dark:opacity-100" />

      {/* Radial vignette to focus content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(77,168,218,0.10),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(77,168,218,0.16),transparent)]" />

      {/* Star field - visible mainly in dark mode */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700">
        {stars.map((star, i) => (
          <span
            key={i}
            className="star animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Orbital rings, far upper right - suggests a satellite pass */}
      <div className="absolute -right-40 -top-40 h-[520px] w-[520px] opacity-20 dark:opacity-30">
        <div className="absolute inset-0 rounded-full border border-space-accent animate-orbit-slow" />
        <div className="absolute inset-8 rounded-full border border-dashed border-space-highlight/60 animate-orbit-reverse" />
      </div>

      {/* Faint orbital arc, lower left */}
      <svg
        className="absolute -left-24 bottom-0 h-[420px] w-[420px] opacity-10 dark:opacity-20"
        viewBox="0 0 400 400"
        fill="none"
      >
        <ellipse
          cx="200"
          cy="200"
          rx="190"
          ry="90"
          stroke="#4DA8DA"
          strokeWidth="1"
          transform="rotate(-15 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="140"
          ry="60"
          stroke="#7DD3FC"
          strokeWidth="1"
          strokeDasharray="4 6"
          transform="rotate(10 200 200)"
        />
      </svg>
    </div>
  );
}
