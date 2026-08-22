"use client";

import Image from "next/image";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Factory, Fuel, Gauge, Recycle, Ship, Trash2 } from "lucide-react";

const storySteps = [
  {
    icon: Trash2,
    label: "01",
    title: "Waste the market rejects",
    description: "Plastic-rich streams currently treated as disposal liabilities become the starting point for circular carbon recovery.",
    image: "/hero-landfill.jpg",
  },
  {
    icon: Recycle,
    label: "02",
    title: "Recovered and prepared",
    description: "Feedstock is aggregated, prepared and mapped so variability is visible before it enters the process.",
    image: "/plastic-bales.jpg",
  },
  {
    icon: Factory,
    label: "03",
    title: "Oleum V1 conversion",
    description: "CarbonM's continuous platform converts difficult mixed plastics into circular fuel/feedstock under controlled operating windows.",
    image: "/clean-reactor.jpg",
  },
  {
    icon: Gauge,
    label: "04",
    title: "Alkanalyze intelligence",
    description: "Sensor data, feedstock quality and output measurements form a feedback loop for consistency, traceability and learning.",
    image: "/intelligence-ml.jpg",
  },
  {
    icon: Fuel,
    label: "05",
    title: "Output under validation",
    description: "FuelMax and NovaNaph are tested through application-specific blending, safety and quality pathways.",
    image: "/circular-economy.jpg",
  },
  {
    icon: Ship,
    label: "06",
    title: "Ships and heavy industry",
    description: "Hard-to-abate sectors gain a route to circular carbon without waiting for full infrastructure replacement.",
    image: "/ship-marine.jpg",
  },
];

function StickyFrameLayer({ image, index, progress }: { image: string; index: number; progress: MotionValue<number> }) {
  const count = storySteps.length;
  const segment = 1 / count;
  const start = Math.max(0, index * segment - segment * 0.4);
  const peak = Math.min(1, index * segment + segment * 0.55);
  const end = Math.min(1, (index + 1) * segment + segment * 0.35);
  const opacityInput = index === 0 ? [0, segment * 0.65, segment * 1.3] : index === count - 1 ? [start, peak, 1] : [start, peak, end];
  const opacityOutput = index === 0 ? [1, 1, 0] : index === count - 1 ? [0, 1, 1] : [0, 1, 0];
  const opacity = useTransform(progress, opacityInput, opacityOutput);
  const scale = useTransform(progress, opacityInput, [1.08, 1, 1.04]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity, scale }}>
      <Image src={image} alt="CarbonM scroll story visual" fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
    </motion.div>
  );
}

export default function ScrollStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.03, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section ref={ref} className="relative mesh-industrial text-white">
      <div className="absolute inset-0 subtle-grid" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:py-32">
          <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)]">
            <div className="relative h-[560px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
              {storySteps.map((step, index) => (
                <StickyFrameLayer key={step.title} image={step.image} index={index} progress={scrollYProgress} />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07110d] via-[#07110d]/30 to-transparent" />
              <motion.div
                style={{ rotate }}
                className="absolute right-7 top-7 h-24 w-24 rounded-full border border-emerald-300/25 bg-emerald-300/10 backdrop-blur-xl"
              >
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300" />
                <div className="absolute left-1/2 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-teal-200" />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="eyebrow border-emerald-300/20 bg-emerald-300/10 text-emerald-300">Sequence-driven story</span>
                <h2 className="mt-5 max-w-xl text-3xl font-black tracking-tight md:text-5xl">
                  From landfill liability to industrial circularity.
                </h2>
                <p className="mt-4 max-w-lg text-slate-300">
                  A pinned visual sequence showing CarbonM's conversion and intelligence stack.
                </p>
                <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
                  <ArrowDown className="h-4 w-4 animate-bounce text-emerald-300" />
                  Keep scrolling
                </div>
              </div>
            </div>
          </div>

          <div className="relative py-2">
            <div className="absolute left-5 top-7 h-[calc(100%-3.5rem)] w-px bg-white/10" />
            <motion.div
              style={{ scaleY }}
              className="absolute left-5 top-7 h-[calc(100%-3.5rem)] w-px origin-top bg-gradient-to-b from-emerald-300 to-teal-300"
            />
            <div className="space-y-14">
              {storySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.62, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                    className="relative ml-14 border-b border-white/10 pb-12 last:border-b-0"
                  >
                    <div className="absolute -left-[3.75rem] top-1 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/25 bg-[#07110d] text-emerald-300 shadow-lg shadow-black/20">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div className="grid gap-6 md:grid-cols-[0.72fr_0.28fr] md:items-start">
                      <div>
                        <span className="text-xs font-black uppercase tracking-[0.28em] text-emerald-300">{step.label}</span>
                        <h3 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">{step.title}</h3>
                        <p className="mt-4 max-w-xl text-base leading-8 text-slate-300 md:text-lg">{step.description}</p>
                      </div>
                      <div className="relative hidden aspect-square overflow-hidden rounded-full border border-white/10 md:block">
                        <Image src={step.image} alt={step.title} fill sizes="170px" className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
