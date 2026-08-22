"use client";

import { motion } from "framer-motion";
import { Factory, Fuel, Recycle, Ship, Trash2 } from "lucide-react";

const loopItems = [
  { label: "Landfill-bound plastic", icon: Trash2 },
  { label: "Recovery", icon: Recycle },
  { label: "Oleum V1", icon: Factory },
  { label: "FuelMax / NovaNaph", icon: Fuel },
  { label: "Ships & industry", icon: Ship },
];

export default function CarbonLoop() {
  return (
    <section className="relative z-20 bg-[#07110d] px-4 py-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-full border border-emerald-300/20 bg-white/[0.05] p-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="relative flex min-w-[900px] items-center justify-between gap-2 lg:min-w-0">
          <motion.div
            className="absolute left-[6%] right-[6%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          {loopItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-[#081712] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-slate-100"
              >
                <Icon className="h-4 w-4 text-emerald-300" strokeWidth={1.7} />
                <span>{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
