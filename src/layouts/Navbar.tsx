import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../hooks/useTheme";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-space-accent/10 bg-space-white/80 backdrop-blur-lg dark:bg-space-primary/80"
          : "bg-transparent"
      }`}
    >
      <nav className="container-shell flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="font-display text-sm font-semibold tracking-[0.15em] uppercase text-day-text dark:text-space-white"
        >
          Arunvasudev C<span className="text-space-accent"></span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-body text-sm text-day-secondary transition-colors hover:text-space-accent dark:text-space-white/70 dark:hover:text-space-highlight"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-space-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`h-px w-5 bg-current transition-transform ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-current transition-transform ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-col gap-1 border-t border-space-accent/10 bg-space-white/95 px-6 pb-4 pt-2 dark:bg-space-primary/95 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 font-body text-sm text-day-secondary dark:text-space-white/80"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
