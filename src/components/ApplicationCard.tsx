"use client";

import Image from "next/image";
import { Anchor, ArrowUpRight, Factory, Flame, Fuel, Landmark, Ship, Truck, Warehouse } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { ApplicationIconName } from "@/data/applications";

const iconMap = {
  ship: Ship,
  flame: Flame,
  factory: Factory,
  fuel: Fuel,
  landmark: Landmark,
  warehouse: Warehouse,
  truck: Truck,
  anchor: Anchor,
} satisfies Record<ApplicationIconName, typeof Ship>;

interface ApplicationCardProps {
  iconName: ApplicationIconName;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  status?: string;
  delay?: number;
}

export default function ApplicationCard({
  iconName,
  title,
  description,
  image,
  imageAlt,
  status,
  delay = 0,
}: ApplicationCardProps) {
  const Icon = iconMap[iconName];

  return (
    <ScrollReveal delay={delay}>
      <article className="group grid h-full overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[#fffdf8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/10">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-lg">
            <Icon className="h-5 w-5" strokeWidth={1.7} />
          </div>
          <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <div className="grid content-between p-6">
          <div>
            {status && (
              <span className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                {status}
              </span>
            )}
            <h3 className="text-xl font-black tracking-tight text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
