"use client";

import type { CSSProperties, HTMLAttributes, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export default function KineticCard({ className, children, onMouseMove, ...props }: HTMLAttributes<HTMLDivElement>) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    event.currentTarget.style.setProperty("--mouse-y", `${y}%`);
    onMouseMove?.(event);
  }

  return (
    <div
      className={cn("kinetic-card", className)}
      onMouseMove={handleMouseMove}
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
