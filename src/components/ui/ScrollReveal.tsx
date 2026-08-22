"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "slideLeft" | "slideRight" | "scale";
  once?: boolean;
}

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0 } },
  slideLeft: { hidden: { opacity: 0, x: -42 }, show: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: 42 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1 } },
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
  once = true,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
