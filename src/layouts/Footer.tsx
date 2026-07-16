import { motion } from "framer-motion";
import { FiLinkedin, FiPhone, FiArrowUp } from "react-icons/fi";
import { contactLinks } from "../data/resume";

const iconMap = {
  linkedin: FiLinkedin,
  phone: FiPhone,
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-space-accent/10 bg-space-white dark:bg-space-primary">
      <div className="container-shell flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs tracking-wide text-day-secondary dark:text-space-white/50">
          © {new Date().getFullYear()} Arun Vasudev C. Built with intent.
        </p>

        <div className="flex items-center gap-4">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon === "linkedin" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-space-accent/20 text-day-secondary transition-colors hover:border-space-accent hover:text-space-accent dark:text-space-white/60 dark:hover:text-space-highlight"
              >
                <Icon size={15} />
              </a>
            );
          })}

          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-space-accent text-space-primary transition-colors hover:bg-space-highlight"
          >
            <FiArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
