import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { technologies } from "@/data/technologies";

export default function AlkanalyzePage() {
  const technology = technologies.alkanalyze;

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[82vh] overflow-hidden pt-28 section-dark">
        <div className="absolute inset-0">
          <Image src={technology.image} alt={technology.imageAlt} fill priority sizes="100vw" className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110d] via-[#07110d]/90 to-[#07110d]/25" />
        </div>
        <div className="absolute inset-0 subtle-grid" />
        <div className="container relative z-10 mx-auto grid min-h-[72vh] gap-12 px-4 py-24 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <span className="eyebrow border-emerald-300/20 bg-emerald-300/10 text-emerald-300">Alkanalyze</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-7xl leading-[1.02]">
              The process intelligence layer for consistent circular fuel.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{technology.fullDescription}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Discuss Alkanalyze
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="light" asChild>
                <Link href="/technology/oleum-v1">See Oleum V1</Link>
              </Button>
            </div>
          </div>
          <div className="border-y border-white/10 py-6">
            <h2 className="text-sm font-black uppercase tracking-[0.24em] text-emerald-300">System status</h2>
            <div className="mt-6 divide-y divide-white/10">
              {technology.specs.map((spec) => (
                <div key={spec.label} className="grid gap-2 py-4 sm:grid-cols-[0.42fr_0.58fr]">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">{spec.label}</div>
                  <div className="text-sm font-bold text-white">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Built around variability"
            title="The missing layer in waste-to-fuel is measured control."
            subtitle="Alkanalyze connects feedstock, reactor and output data so operational learning compounds over time."
          />
          <div className="divide-y divide-emerald-900/10 border-y border-emerald-900/10">
            {technology.features.map((feature, i) => (
              <ScrollReveal key={feature} delay={i * 0.04}>
                <div className="grid gap-4 py-6 md:grid-cols-[3rem_1fr] md:items-center">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <p className="text-lg leading-8 text-foreground/80">{feature}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Want to understand how process data can make waste-derived fuel reliable?"
        description="We can walk through the Alkanalyze roadmap and how it integrates with Oleum V1 operations."
        primaryCTA={{ label: "Partner With Us", href: "/contact" }}
        secondaryCTA={{ label: "Back to Technology", href: "/technology" }}
      />
    </div>
  );
}
