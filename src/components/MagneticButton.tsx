import { motion } from "framer-motion";
import { ReactNode, useRef, useState, MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  download?: boolean;
  target?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  target,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 font-display";
  const styles =
    variant === "primary"
      ? "bg-space-accent text-space-primary hover:bg-space-highlight dark:bg-space-accent dark:text-space-primary"
      : "border border-current/30 text-current hover:border-current/70";

  const motionProps = {
    animate: { x: pos.x, y: pos.y },
    transition: { type: "spring" as const, stiffness: 150, damping: 12, mass: 0.4 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `${base} ${styles} ${className}`,
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
