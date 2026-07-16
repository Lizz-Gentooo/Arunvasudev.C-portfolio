import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import { resumeFile } from "../data/resume";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-28 sm:py-36">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow mb-3">04 // Documentation</p>
          <h2 className="section-heading mb-14 max-w-2xl">Resume</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 overflow-hidden rounded-3xl border border-space-accent/20 bg-gradient-to-br from-white/70 to-space-accent/5 p-10 text-center backdrop-blur-sm dark:from-space-secondary/40 dark:to-space-accent/5 sm:p-14">
            <div className="absolute inset-0 blueprint-grid opacity-30" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-space-accent/30 bg-space-accent/10 text-space-accent shadow-lg"
            >
              <FiFileText size={30} />
            </motion.div>

            <div className="relative">
              <h3 className="font-display text-xl font-semibold text-day-text dark:text-space-white">
                Arun_Vasudev_Resume.pdf
              </h3>
              <p className="mt-2 max-w-md font-body text-sm text-day-secondary dark:text-space-white/60">
                A complete overview of education, technical &amp; soft skills, and areas of
                interest — ready to share with recruiters.
              </p>
            </div>

            <div className="relative flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href={resumeFile} download variant="primary">
                <FiDownload size={16} /> Download Resume
              </MagneticButton>
              <MagneticButton href={resumeFile} target="_blank" variant="outline">
                <FiExternalLink size={16} /> Open Resume
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
