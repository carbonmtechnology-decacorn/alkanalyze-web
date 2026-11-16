"use client";

import type { ReactNode } from "react";

/**
 * Content must be visible before hydration. Opacity-zero Framer Motion
 * wrappers could leave entire sections blank when dev assets are blocked.
 * Keep this API stable for every existing section.
 */
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "slideLeft" | "slideRight" | "scale";
  once?: boolean;
}

export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  return <div className={className}>{children}</div>;
}
