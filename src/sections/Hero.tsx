import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import profileImg from "../assets/profile.jpg";
import heroBg from "../assets/ferrari-f1-hero.jpg";
import MagneticButton from "../components/MagneticButton";
import { personal, resumeFile } from "../data/resume";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="container-shell relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.p variants={item} className="eyebrow mb-5">
            Flight Plan // Trajectory: Aerospace Design
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-day-text dark:text-space-white sm:text-5xl lg:text-6xl"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl font-body text-lg text-day-secondary dark:text-space-white/70"
          >
            {personal.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-lg font-body text-base leading-relaxed text-day-secondary/90 dark:text-space-white/55"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={resumeFile} download variant="primary">
              <FiDownload size={16} />
              Download Resume
            </MagneticButton>

            <MagneticButton href="#contact" variant="outline">
              <FiMail size={16} />
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.a
            variants={item}
            href="#about"
            className="mt-16 hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-day-secondary/70 dark:text-space-white/40 lg:flex"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="flex"
            >
              <FiArrowDown size={14} />
            </motion.span>

            Scroll to explore
          </motion.a>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
          className="order-1 mx-auto lg:order-2"
        >
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            {/* Orbit Rings */}
            <div className="absolute inset-[-18px] animate-orbit-slow rounded-full border border-space-accent/25" />

            <div className="absolute inset-[-38px] animate-orbit-reverse rounded-full border border-dashed border-space-accent/15" />

            <span className="absolute -right-1 top-6 h-2 w-2 animate-orbit-slow rounded-full bg-space-highlight shadow-[0_0_12px_rgba(125,211,252,0.8)]" />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-space-accent/20 via-transparent to-space-highlight/10 blur-2xl" />

            {/* Profile */}
            <div className="relative h-full w-full overflow-hidden rounded-full border border-space-white/40 bg-space-secondary/20 shadow-[0_20px_60px_-15px_rgba(11,18,32,0.5)] backdrop-blur-sm dark:border-space-white/10">
              <img
                src={profileImg}
                alt={personal.name}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}