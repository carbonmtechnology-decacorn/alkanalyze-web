"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import TechnologyCard from "@/components/TechnologyCard";
import ProcessFlow from "@/components/ProcessFlow";
import CTASection from "@/components/CTASection";
import { integrationPillars, technologies } from "@/data/technologies";

export default function TechnologyPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-28 section-dark">
        <div className="absolute inset-0">
          <Image src="/clean-reactor.jpg" alt="Real industrial processing equipment representing Oleum V1" fill priority sizes="100vw" className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110d] via-[#07110d]/90 to-[#07110d]/20" />
        </div>
        <div className="absolute inset-0 subtle-grid" />
        <div className="container relative z-10 mx-auto px-4 py-24 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-5xl">
            <span className="eyebrow border-emerald-300/20 bg-emerald-300/10 text-emerald-300">Technology</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-7xl leading-[1.02]">
              Oleum V1 converts. Alkanalyze standardizes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              A conversion platform and intelligence layer designed to turn variable landfill-bound plastic into measurable, traceable circular fuel/feedstock.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/technology/oleum-v1">
                  Oleum V1
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="light" asChild>
                <Link href="/technology/alkanalyze">Alkanalyze</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-cream py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="How it works"
            title="From landfill-bound plastic to circular industrial fuel."
            subtitle="A six-stage integrated process powered by Oleum V1 and Alkanalyze."
          />
          <ProcessFlow />
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="container mx-auto space-y-28 px-4 md:px-6">
          <TechnologyCard {...technologies.oleumV1} description={technologies.oleumV1.fullDescription} />
          <TechnologyCard {...technologies.alkanalyze} description={technologies.alkanalyze.fullDescription} reverse />
        </div>
      </section>

      <section className="section-dark py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Integration"
            title="The stack turns variability into measured control."
            subtitle="The point is not one reactor or one dashboard. It is the operating loop between waste, process and output quality."
            dark
          />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {integrationPillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.04}>
                  <div className="group grid gap-5 py-7 md:grid-cols-[4rem_0.38fr_0.62fr] md:items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-emerald-200 transition-transform group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-white">{item.title}</h3>
                    <p className="text-sm leading-7 text-slate-300 md:text-base">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to validate CarbonM's technology with your waste or fuel system?"
        description="Whether you are sourcing circular fuel, supplying landfill-bound plastic, or evaluating investment, we can define a validation pathway."
        primaryCTA={{ label: "Partner With Us", href: "/contact" }}
        secondaryCTA={{ label: "See Applications", href: "/applications" }}
      />
    </div>
  );
}
