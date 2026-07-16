import Reveal from "../components/Reveal";
import { education, certifications } from "../data/resume";
import { FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow mb-3">03 // Trajectory Log</p>
          <h2 className="section-heading mb-14 max-w-2xl">Education</h2>
        </Reveal>

        <div className="relative border-l border-space-accent/20 pl-8 sm:pl-10">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.1} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-space-accent bg-space-white dark:bg-space-primary sm:-left-[49px]" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-space-accent">
                {item.timeframe || "Completed"}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-day-text dark:text-space-white">
                {item.degree}
              </h3>
              <p className="mt-1 font-body text-day-secondary dark:text-space-white/60">
                {item.institution}
                {item.affiliation ? ` · ${item.affiliation}` : ""}
              </p>
            </Reveal>
          ))}
        </div>

        {certifications.length > 0 && (
          <Reveal delay={0.2} className="mt-20">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-space-accent mb-6">
              Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-3 rounded-2xl border border-space-accent/15 bg-white/60 p-5 dark:bg-space-secondary/30"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-space-accent/10 text-space-accent">
                    <FiAward size={15} />
                  </span>
                  <div>
                    <p className="font-body text-sm font-medium text-day-text dark:text-space-white">
                      {cert.title}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-day-secondary dark:text-space-white/50">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
