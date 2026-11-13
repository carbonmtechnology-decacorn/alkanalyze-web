"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, FlaskConical, Map, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollStory from "@/components/ScrollStory";
import WhyUsHighlights from "@/components/WhyUsHighlights";
import ProcessFlow from "@/components/ProcessFlow";
import TechnologyCard from "@/components/TechnologyCard";
import ApplicationShowcase from "@/components/ApplicationShowcase";
import CTASection from "@/components/CTASection";
import CarbonLoop from "@/components/CarbonLoop";
import OutputCarousel from "@/components/OutputCarousel";
import { technologies } from "@/data/technologies";
import { applications } from "@/data/applications";
import { labSource } from "@/data/specs";

const validationItems = [
  { icon: FlaskConical, title: "Product quality", status: "Lab-tested", description: "FuelMax and NovaNaph quality properties are evaluated against product-specific downstream requirements." },
  { icon: ShieldCheck, title: "Industrial qualification", status: "Application-specific", description: "Burner compatibility, handling and fuel-system suitability are assessed for each industrial application." },
  { icon: Users, title: "Target industries", status: "Commercial focus", description: "Industrial boilers, furnaces, refineries, petrochemicals and marine blending partners." },
  { icon: BookOpen, title: "Circular feedstock pathways", status: "Qualification", description: "Recycled-content and chain-of-custody claims depend on the applicable regulations and certification." },
  { icon: Award, title: "Process advantage", status: "Technology", description: "YieldBoost supports hydrocarbon yield optimisation; Magnet targets lower contaminants and improved output consistency." },
  { icon: Map, title: "Operating presence", status: "India", description: "Registered office in Pilani and operating activities in Shamirpet, Hyderabad." },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section
        id="hero"
        className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-[#07110d] pb-20 pt-40 md:min-h-[88svh] md:pb-28 md:pt-40"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-landfill.jpg"
            alt="Mixed plastic waste awaiting recovery into useful industrial hydrocarbons"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06130f]/95 via-[#06130f]/80 to-[#06130f]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06130f]/90 via-transparent to-[#06130f]/15" />
        </div>
        <div className="container relative z-10 mx-auto px-5 md:px-8">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-emerald-300" />
              <span className="text-xs font-black uppercase tracking-[0.28em] text-emerald-200">
                CarbonM / Industrial circular carbon
              </span>
            </div>
            <h1 className="mt-9 max-w-[980px] text-5xl font-black leading-[0.99] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Plastic waste.
              <span className="mt-2 block text-emerald-300">Industrial value.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
              We engineer difficult plastic streams into upgraded industrial fuel and circular
              petrochemical feedstocks. YieldBoost optimises hydrocarbon recovery.
              Magnet improves oil quality.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/why-us">Why CarbonM? <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="light" asChild>
                <Link href="/technology">Explore the technology</Link>
              </Button>
            </div>
            <div className="mt-14 grid max-w-3xl gap-4 border-t border-white/30 pt-6 text-sm text-slate-200 sm:grid-cols-2">
              <p><strong className="font-black text-emerald-200">FuelMax</strong> / industrial thermal fuel</p>
              <p><strong className="font-black text-emerald-200">NovaNaph</strong> / circular naphtha-range feedstock</p>
            </div>
          </div>
        </div>
      </section>

      <CarbonLoop />
      <WhyUsHighlights />

      <section className="section-dark py-16 md:py-24" id="problem">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <ScrollReveal variant="slideLeft">
              <SectionHeader
                label="The problem"
                title="Plastic waste is not the end of the material story."
                subtitle="Mixed, low-value plastic streams can remain difficult for mechanical recycling. CarbonM pursues value recovery into fuel and circular chemical feedstock pathways."
                dark
                centered={false}
              />
              <div className="mt-10 border-y border-white/10 py-7">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="text-5xl font-black tracking-tight text-white">350M+</div>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-slate-400">Tonnes of plastic produced annually globally.</p>
                  </div>
                  <div>
                    <div className="text-5xl font-black tracking-tight text-white">&lt;10%</div>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-slate-400">Effectively recycled through conventional routes.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slideRight" delay={0.12}>
              <div className="relative min-h-[470px] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/30">
                <Image src="/plastic-bales.jpg" alt="Real bales of mixed plastic waste" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 border-l border-emerald-300/70 pl-5 text-left">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-200">Carbon recovery opportunity</p>
                  <p className="mt-3 max-w-xl text-base leading-7 text-slate-100">Recovering value from plastic streams that the current recycling system leaves behind.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollStory />

      <section className="section-gradient-transition py-16 md:py-24" id="transformation">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <SectionHeader
              label="The transformation"
              title={<>From landfill liability to <span className="text-emerald-300">industrial circularity.</span></>}
              subtitle="The CarbonM stack is presented as a controlled sequence: feedstock preparation, conversion with YieldBoost optimisation, Magnet upgrading and application-specific validation."
              dark
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ProcessFlow />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32" id="technology">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Our technology"
            title="YieldBoost optimises. Magnet upgrades."
            subtitle="Physics-informed yield optimisation and selective oil upgrading, designed to deliver high-value industrial and circular petrochemical hydrocarbons."
          />
          <div className="space-y-16 md:space-y-24">
            <TechnologyCard {...technologies.yieldboost} description={technologies.yieldboost.shortDescription} />
            <TechnologyCard {...technologies.magnet} description={technologies.magnet.shortDescription} reverse />
          </div>
        </div>
      </section>

      <section className="section-cream py-24 md:py-32" id="outputs-preview">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Outputs"
            title="FuelMax for industry. NovaNaph for circular petrochemicals."
            subtitle={`Selected values are based on third-party testing shared by CarbonM from ${labSource.shortName}. Final fuel approval remains partner-specific.`}
          />
          <OutputCarousel />
        </div>
      </section>

      <section className="bg-background py-24 md:py-32" id="applications">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Applications"
            title="Built for hard-to-abate sectors, not generic green claims."
            subtitle="Ships, industrial boilers, furnaces, cement, refineries and petrochemical feedstock routes each need their own validation pathway."
          />
          <ApplicationShowcase applications={applications.slice(0, 4)} />
          <div className="mt-10 flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/applications">
                View all applications
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32" id="validation">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Validation and roadmap"
            title="Quality, suitability and industrial collaboration."
            subtitle="Product testing and application-specific engineering guide each partnership, while our technology focuses on better hydrocarbon yield and quality."
          />
          <div className="divide-y divide-emerald-900/10 border-y border-emerald-900/10">
            {validationItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.04}>
                  <div className="group grid gap-5 py-7 transition-colors md:grid-cols-[3.5rem_0.28fr_0.22fr_0.5fr] md:items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-900/10 bg-white text-emerald-700 transition-transform group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <h3 className="font-black text-foreground">{item.title}</h3>
                    <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">{item.status}</span>
                    <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="Discuss industrial FuelMax and circular NovaNaph solutions with CarbonM."
        description="Whether you are an industrial fuel buyer, petrochemical partner, waste supplier, or marine blender, we welcome applications-focused technical discussions."
        primaryCTA={{ label: "Partner With Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore the Technology", href: "/technology" }}
      />
    </div>
  );
}
