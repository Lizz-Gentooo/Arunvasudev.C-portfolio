import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      className="relative flex h-8 w-16 items-center rounded-full border border-space-accent/30 bg-space-secondary/40 dark:bg-space-secondary/60 px-1 transition-colors"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-space-accent text-space-primary shadow-md"
        style={{ marginLeft: isDark ? "auto" : 0 }}
      >
        {isDark ? <FiMoon size={13} /> : <FiSun size={13} />}
      </motion.span>
    </button>
  );
}
