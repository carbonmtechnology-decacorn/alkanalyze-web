"use client";

import { motion } from "framer-motion";
import { Factory, Fuel, Gauge, Recycle, ScanLine, Ship, Trash2 } from "lucide-react";

const steps = [
  { icon: Trash2, title: "Landfill-bound waste", description: "Mixed plastic streams that mechanical recycling cannot economically absorb." },
  { icon: ScanLine, title: "Quality mapping", description: "Input quality is assessed, logged and prepared for controlled conversion." },
  { icon: Factory, title: "Oleum V1", description: "Continuous conversion recovers hydrocarbon value from non-recyclable plastics." },
  { icon: Gauge, title: "Alkanalyze", description: "Process data is used to predict, monitor and improve output consistency." },
  { icon: Fuel, title: "FuelMax / NovaNaph", description: "Outputs move into third-party testing and application-specific validation." },
  { icon: Ship, title: "Ships & industry", description: "Hard-to-abate users gain a circular carbon pathway after partner qualification." },
];

export default function ProcessFlow() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#07110d] p-5 text-white md:p-8">
      <div className="absolute inset-0 subtle-grid opacity-60" />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,.22),transparent_35%)]" />
      <div className="relative grid gap-0 lg:grid-cols-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group relative border-b border-white/10 py-6 last:border-b-0 lg:border-b-0 lg:border-r lg:px-5 lg:last:border-r-0"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">0{index + 1}</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-300/10 text-emerald-200 transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 text-xl font-black tracking-tight text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
