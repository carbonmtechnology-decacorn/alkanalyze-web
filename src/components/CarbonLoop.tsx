"use client";

import { Factory, Fuel, Recycle, Ship, Trash2 } from "lucide-react";

const loopItems = [
  { label: "Landfill-bound plastic", icon: Trash2 },
  { label: "Recovery", icon: Recycle },
  { label: "YieldBoost + Magnet", icon: Factory },
  { label: "FuelMax / NovaNaph", icon: Fuel },
  { label: "Ships & industry", icon: Ship },
];

export default function CarbonLoop() {
  return (
    <section className="relative z-20 bg-[#07110d] px-4 py-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-full border border-emerald-300/20 bg-white/[0.05] p-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="relative flex min-w-[900px] items-center justify-between gap-2 lg:min-w-0">
          <div className="absolute left-[6%] right-[6%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent" />
          {loopItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label}
                className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-[#081712] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-slate-100"
              >
                <Icon className="h-4 w-4 text-emerald-300" strokeWidth={1.7} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
