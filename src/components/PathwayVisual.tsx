import Image from "next/image";
import { Plane } from "lucide-react";
import type { Pathway } from "@/data/pathways";

export default function PathwayVisual({
  pathway,
  priority = false,
}: {
  pathway: Pathway;
  priority?: boolean;
}) {
  if (pathway.image)
    return (
      <Image
        src={pathway.image}
        alt={pathway.alt}
        fill
        priority={priority}
        sizes="(min-width:1024px) 60vw, 100vw"
        className="object-cover"
      />
    );
  return (
    <div className="aviation-visual" role="img" aria-label={pathway.alt}>
      <div className="aviation-orbit orbit-one" />
      <div className="aviation-orbit orbit-two" />
      <Plane aria-hidden="true" strokeWidth={0.7} />
      <span className="aviation-label">
        PRECURSOR → PROCESSING → QUALIFICATION
      </span>
      <span className="aviation-note">
        Aviation pathway / engineering illustration
      </span>
    </div>
  );
}
