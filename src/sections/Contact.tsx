import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiLinkedin,
  FiSend,
  FiCheck,
} from "react-icons/fi";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Reveal from "../components/Reveal";
import contactBg from "../assets/ferrari-f1-hero.jpg";
import { contactLinks } from "../data/resume";

const iconMap = {
  phone: FiPhone,
  linkedin: FiLinkedin,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 sm:py-36"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      />

      {/* 40% Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="container-shell relative z-10">
        <Reveal>
          <p className="eyebrow mb-3">05 // Ground Control</p>
          <h2 className="section-heading mb-14 max-w-2xl">
            Let's talk.
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="right" className="space-y-4">
            <p className="max-w-sm font-body text-day-secondary dark:text-space-white/60">
              Open to internships and conversations about aerospace design and
              mechanical systems. Reach out directly below.
            </p>

            <div className="space-y-3 pt-4">
              {contactLinks.map((link) => {
                const Icon = iconMap[link.icon];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-space-accent/15 bg-white/50 px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-space-accent/40 dark:bg-space-secondary/30"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-space-accent/10 text-space-accent">
                      <Icon size={16} />
                    </span>

                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-day-secondary dark:text-space-white/40">
                        {link.label}
                      </span>

                      <span className="block font-body text-sm text-day-text dark:text-space-white/85">
                        {link.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="relative space-y-5 rounded-2xl border border-space-accent/15 bg-white/60 p-8 backdrop-blur-sm dark:bg-space-secondary/30"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-day-secondary dark:text-space-white/50">
                    Name
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-space-accent/20 bg-transparent px-4 py-2.5 font-body text-sm text-day-text outline-none transition-colors focus:border-space-accent dark:text-space-white"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-day-secondary dark:text-space-white/50">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-space-accent/20 bg-transparent px-4 py-2.5 font-body text-sm text-day-text outline-none transition-colors focus:border-space-accent dark:text-space-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-day-secondary dark:text-space-white/50">
                  Message
                </label>

                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the opportunity..."
                  className="w-full resize-none rounded-lg border border-space-accent/20 bg-transparent px-4 py-2.5 font-body text-sm text-day-text outline-none transition-colors focus:border-space-accent dark:text-space-white"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-space-accent px-6 py-3 font-display text-sm font-semibold text-space-primary transition-colors hover:bg-space-highlight"
              >
                {submitted ? (
                  <>
                    <FiCheck size={16} />
                    Message logged
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-center font-mono text-[11px] text-day-secondary/70 dark:text-space-white/30">
                This form is a UI preview — please use the contact links
                for a direct reply.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}