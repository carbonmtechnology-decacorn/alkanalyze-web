"use client";

import Image from "next/image";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { impactMetrics, impactStatements } from "@/data/impact";

export default function ImpactPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[78vh] items-center overflow-hidden pt-28 section-dark">
        <div className="absolute inset-0">
          <Image src="/impact-plant.jpg" alt="Real clean industrial plant connected to circular fuel impact" fill priority sizes="100vw" className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110d] via-[#07110d]/90 to-[#07110d]/20" />
        </div>
        <div className="absolute inset-0 subtle-grid" />
        <div className="container relative z-10 mx-auto px-4 py-24 md:px-6">
          <div className="max-w-5xl">
            <span className="eyebrow border-emerald-300/20 bg-emerald-300/10 text-emerald-300">Impact</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-7xl leading-[1.02]">
              Circular carbon for a world that cannot afford to waste it.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              CarbonM's impact model is based on landfill diversion potential, fossil displacement potential, traceability and new value from low-value plastic-rich waste.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Potential metrics"
            title="Targets and estimates, not overclaimed results."
            subtitle="Final verified figures should be published only after plant operations and third-party validation."
          />
          <div className="grid gap-0 border-y border-emerald-900/10 md:grid-cols-4">
            {impactMetrics.map((metric, i) => (
              <ScrollReveal key={metric.label} delay={i * 0.05}>
                <div className="h-full border-b border-emerald-900/10 py-8 md:border-b-0 md:border-r md:px-6 md:last:border-r-0">
                  <div className="text-5xl font-black tracking-tight text-emerald-800 md:text-6xl">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </div>
                  <h3 className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{metric.label}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{metric.description}</p>
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">{metric.qualifier}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Impact areas"
            title="What changes when non-recyclable plastic becomes a circular industrial resource."
            dark
          />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {impactStatements.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <div className="grid gap-4 py-8 md:grid-cols-[0.32fr_0.68fr] md:items-start">
                  <h3 className="text-2xl font-black tracking-tight text-white">{item.title}</h3>
                  <p className="text-base leading-8 text-slate-300 md:text-lg">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Want to evaluate the impact of your plastic waste or fuel demand?"
        description="We can help map the right waste-to-fuel validation pathway for your operation."
        primaryCTA={{ label: "Partner With Us", href: "/contact" }}
        secondaryCTA={{ label: "Read Resources", href: "/resources" }}
      />
    </div>
  );
}
