import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Signature visual element: a vertical "flight trajectory" rail that tracks
 * scroll progress, styled like a blueprint dimension line with degree tick
 * marks. A small craft marker travels the line as the page is explored -
 * echoing a flight plan / launch trajectory without literal rocket clip-art.
 */
export default function TrajectoryRail() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.3,
  });

  const topPercent = useTransform(smoothProgress, (v) => `${v * 100}%`);
  const ticks = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-6 top-0 z-40 hidden h-full w-10 lg:block"
    >
      <div className="relative mx-auto h-full w-px bg-space-accent/15">
        <motion.div
          className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-space-highlight via-space-accent to-transparent"
          style={{ scaleY: smoothProgress }}
        />
        {ticks.map((t) => (
          <div
            key={t}
            className="absolute -left-1.5 h-px w-3 bg-space-accent/25"
            style={{ top: `${(t / (ticks.length - 1)) * 100}%` }}
          />
        ))}
        <motion.div
          className="absolute -left-[5px] h-[11px] w-[11px] rounded-full border border-space-highlight bg-space-primary shadow-[0_0_10px_rgba(125,211,252,0.6)]"
          style={{ top: topPercent }}
        />
      </div>
    </div>
  );
}
