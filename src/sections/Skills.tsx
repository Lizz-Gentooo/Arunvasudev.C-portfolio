import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow mb-3">02 // Systems</p>
          <h2 className="section-heading mb-14 max-w-2xl">
            Instrumentation &amp; capability.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-space-accent/15 bg-white/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-space-accent/40 dark:bg-space-secondary/30">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(77,168,218,0.12),transparent_60%)]" />

                <h3 className="relative font-display text-xl font-semibold text-day-text dark:text-space-white">
                  {group.category}
                </h3>
                <p className="relative mt-1 font-mono text-xs tracking-widest text-space-accent">
                  {String(gi + 1).padStart(2, "0")} / {String(skillGroups.length).padStart(2, "0")}
                </p>

                <ul className="relative mt-6 flex flex-wrap gap-2.5">
                  {group.skills.map((skill, si) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: si * 0.06 }}
                      whileHover={{ y: -3 }}
                      className="rounded-lg border border-space-accent/20 bg-space-accent/5 px-3.5 py-2 font-body text-sm text-day-text/85 dark:text-space-white/80"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
