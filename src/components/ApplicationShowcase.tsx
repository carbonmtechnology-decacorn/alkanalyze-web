"use client";

import Image from "next/image";
import { Anchor, ArrowRight, Factory, Flame, Fuel, Landmark, Ship, Truck, Warehouse } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { ApplicationData, ApplicationIconName } from "@/data/applications";
import { cn } from "@/lib/utils";

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

export default function ApplicationShowcase({ applications }: { applications: ApplicationData[] }) {
  return (
    <div className="space-y-8">
      {applications.map((app, index) => {
        const Icon = iconMap[app.iconName];
        const reverse = index % 2 === 1;
        return (
          <ScrollReveal key={app.title} delay={index * 0.03}>
            <article className="group relative overflow-hidden rounded-[2.5rem] border border-emerald-900/10 bg-[#fffdf8] shadow-[0_24px_80px_rgba(7,17,13,0.08)]">
              <div className={cn("grid min-h-[390px] lg:grid-cols-[0.9fr_1.1fr]", reverse && "lg:grid-cols-[1.1fr_0.9fr]")}> 
                <div className={cn("relative min-h-[280px] overflow-hidden", reverse && "lg:order-2")}> 
                  <Image src={app.image} alt={app.imageAlt} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07110d]/80 via-[#07110d]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                    <Icon className="h-4 w-4 text-emerald-200" strokeWidth={1.7} />
                    {app.status}
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-emerald-700">Use case 0{index + 1}</span>
                  <h3 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-foreground md:text-5xl">{app.title}</h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{app.description}</p>
                  <div className="mt-8 flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
                    Validation pathway
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
