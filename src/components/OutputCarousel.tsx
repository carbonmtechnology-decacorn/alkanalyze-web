"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Beaker, Fuel, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Oleum V1 efficiency",
    kicker: "Before / after upgrading",
    metric: "76.2%",
    unit: "chloride reduction",
    description: "Raw pyrolysis oil is upgraded toward a cleaner, lower-contaminant fuel/feedstock stream while maintaining high liquid recovery.",
    icon: Beaker,
    image: "/clean-reactor.jpg",
    bullets: ["147 mg/kg -> 35 mg/kg chloride", "0.028 wt% -> 0.016 wt% sulphur", "98 vol% -> 95 vol% oil recovery"],
  },
  {
    title: "FuelMax",
    kicker: "Circular industrial fuel pathway",
    metric: "10,870",
    unit: "kcal/kg GCV",
    description: "Upgraded plastic oil positioned for industrial and marine fuel-blending validation, with partner-specific approvals handled separately.",
    icon: Fuel,
    image: "/heavy-industry.jpg",
    bullets: ["Flash point 62°C", "Sulphur 0.02%", "Carbon residue 0.18%"],
  },
  {
    title: "NovaNaph",
    kicker: "Circular naphtha pathway",
    metric: "140°C",
    unit: "final boiling point",
    description: "A naphtha-range stream with ASTM D86 distillation data for future petrochemical qualification and circular feedstock discussions.",
    icon: Sparkles,
    image: "/circular-economy.jpg",
    bullets: ["IBP 38°C", "50% recovery 94°C", "95% recovery 135°C"],
  },
  {
    title: "Validation boundary",
    kicker: "Careful claims only",
    metric: "3rd",
    unit: "party lab source",
    description: "Certification, application approval, marine blending and cracker acceptance remain separate validation steps with relevant partners.",
    icon: ShieldCheck,
    image: "/ship-marine.jpg",
    bullets: ["Macana Labs source language", "No certification overclaiming", "Application-specific validation"],
  },
];

export default function OutputCarousel() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const Icon = slide.icon;

  return (
    <section className="relative overflow-hidden rounded-[2.75rem] bg-[#07110d] text-white shadow-2xl shadow-emerald-950/20">
      <div className="absolute inset-0 subtle-grid" />
      <div className="grid min-h-[620px] lg:grid-cols-[0.42fr_0.58fr]">
        <div className="relative z-10 flex flex-col justify-between border-b border-white/10 p-6 md:p-9 lg:border-b-0 lg:border-r">
          <div>
            <span className="eyebrow border-emerald-300/20 bg-emerald-300/10 text-emerald-300">Output selector</span>
            <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">Choose the pathway. Read the evidence.</h2>
          </div>
          <div className="mt-10 grid gap-2">
            {slides.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={cn(
                  "group flex items-center justify-between gap-4 border-t border-white/10 py-5 text-left transition-colors",
                  index === active ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.24em] text-emerald-300">0{index + 1}</span>
                  <span className="mt-1 block text-xl font-black tracking-tight md:text-2xl">{item.title}</span>
                </span>
                <span className={cn("h-2.5 w-2.5 rounded-full transition-all", index === active ? "bg-emerald-300" : "bg-white/20 group-hover:bg-white/50")} />
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={slide.image} alt={slide.title} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07110d] via-[#07110d]/50 to-[#07110d]/20" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 flex min-h-[620px] flex-col justify-end p-7 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="max-w-3xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-300/10 text-emerald-200 backdrop-blur-xl">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <div className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-emerald-300">{slide.kicker}</div>
                <h3 className="mt-3 text-4xl font-black tracking-tight md:text-7xl">{slide.title}</h3>
                <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-2">
                  <span className="text-5xl font-black tracking-tight text-emerald-200 md:text-7xl">{slide.metric}</span>
                  <span className="pb-2 text-sm font-black uppercase tracking-[0.2em] text-slate-300">{slide.unit}</span>
                </div>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{slide.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {slide.bullets.map((bullet) => (
                    <span key={bullet} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 backdrop-blur-xl">
                      {bullet}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
