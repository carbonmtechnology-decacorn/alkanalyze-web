"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
}

export default function TextReveal({ children, className, as = "h2", delay = 0 }: TextRevealProps) {
  const words = children.split(" ");
  const content = words.map((word, index) => (
    <span key={`${word}-${index}`} className="inline-block overflow-hidden align-top">
      <motion.span
        className="mr-[0.28em] inline-block"
        initial={{ y: "105%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.72, delay: delay + index * 0.035, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>
    </span>
  ));

  if (as === "h1") return <motion.h1 className={className} aria-label={children}>{content}</motion.h1>;
  if (as === "p") return <motion.p className={className} aria-label={children}>{content}</motion.p>;
  if (as === "span") return <motion.span className={className} aria-label={children}>{content}</motion.span>;
  return <motion.h2 className={className} aria-label={children}>{content}</motion.h2>;
}
