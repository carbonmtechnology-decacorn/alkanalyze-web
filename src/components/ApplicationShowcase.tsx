"use client";

import Image from "next/image";
import { Anchor, ArrowUpRight, Factory, Flame, Fuel, Landmark, Ship, Truck, Warehouse } from "lucide-react";
import type { ApplicationData, ApplicationIconName } from "@/data/applications";
import { cn } from "@/lib/utils";

const iconMap = {
  ship: Ship, flame: Flame, factory: Factory, fuel: Fuel,
  landmark: Landmark, warehouse: Warehouse, truck: Truck, anchor: Anchor,
} satisfies Record<ApplicationIconName, typeof Ship>;

export default function ApplicationShowcase({ applications }: { applications: ApplicationData[] }) {
  return (
    <div className="border-t border-emerald-950/25">
      {applications.map((app, index) => {
        const Icon = iconMap[app.iconName];
        const reverse = index % 2 === 1;
        return (
          <article key={app.title} className="grid gap-0 border-b border-emerald-950/20 py-8 lg:grid-cols-2 lg:gap-12 lg:py-12">
            <div className={cn("relative min-h-[320px] overflow-hidden bg-[#0b2821] md:min-h-[400px]", reverse && "lg:order-2")}>
              <Image
                src={app.image}
                alt={app.imageAlt}
                fill
                loading="lazy"
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061710]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-7 flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-white">
                <Icon className="h-5 w-5 text-emerald-300" strokeWidth={1.6} />
                {app.status}
              </div>
            </div>
            <div className="flex flex-col justify-center py-8 lg:py-0">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Application 0{index + 1}</p>
              <h3 className="mt-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.04em] text-[#0c241b] md:text-5xl">{app.title}</h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#486057] md:text-lg">{app.description}</p>
              <p className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.17em] text-emerald-800">
                Application-specific qualification <ArrowUpRight className="h-5 w-5" />
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
