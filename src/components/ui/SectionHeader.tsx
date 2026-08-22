import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  dark?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  dark = false,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-12 max-w-3xl space-y-4",
        centered ? "text-center" : "text-left mx-0",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "eyebrow",
            dark
              ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-300"
              : "border-emerald-900/10 bg-emerald-900/5 text-emerald-700"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-[1.08]",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base leading-relaxed md:text-lg",
            dark ? "text-slate-300" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
