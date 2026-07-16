import Reveal from "../components/Reveal";
import aboutImg from "../assets/About_card.jpg";
import { personal } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow mb-3">01 // About</p>
          <h2 className="section-heading mb-14 max-w-2xl">
            Grounded in mechanics, aimed at the sky.
          </h2>
        </Reveal>

        <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal direction="right" className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative overflow-hidden rounded-2xl border border-space-accent/20">
              <img
                src={aboutImg}
                alt={`${personal.name} portrait`}
                className="h-full w-full object-cover grayscale-[15%]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-space-primary/50 via-transparent to-transparent" />
            </div>
            {/* Blueprint corner marks */}
            <span className="absolute -left-2 -top-2 h-5 w-5 border-l border-t border-space-accent/60" />
            <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b border-r border-space-accent/60" />
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.05}>
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-space-accent">
                Career Objective
              </h3>
              <p className="mt-3 font-body text-lg leading-relaxed text-day-text/90 dark:text-space-white/80">
                {personal.objective}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-space-accent">
                Where Interest Points
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {personal.areasOfInterest.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-space-accent/25 bg-space-accent/5 px-4 py-2 font-mono text-xs tracking-wide text-day-text dark:text-space-white/80"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-space-accent">
                Extra-Curricular Strengths
              </h3>
              <ul className="mt-4 space-y-3">
                {personal.strengths.map((strength) => (
                  <li
                    key={strength}
                    className="flex gap-3 font-body text-base leading-relaxed text-day-text/85 dark:text-space-white/70"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-space-accent" />
                    {strength}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
