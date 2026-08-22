import Image from "next/image";
import Link from "next/link";
import { Linkedin, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { advisors, team, type TeamMember } from "@/data/team";

function ProfileCard({ member, compact = false, delay = 0 }: { member: TeamMember; compact?: boolean; delay?: number }) {
  return (
    <ScrollReveal delay={delay}>
      <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/10">
        <div className="relative aspect-[4/5] overflow-hidden bg-emerald-950/5">
          <Image
            src={member.image}
            alt={`${member.name} profile photo`}
            fill
            sizes={compact ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/10 to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-black tracking-tight text-white">{member.name}</h3>
            <p className="mt-1 text-sm font-semibold text-emerald-200">{member.role}</p>
          </div>
        </div>
        <div className="p-5 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{member.education}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{compact ? member.shortBio : member.bio}</p>
          {member.linkedin && (
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-950"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          )}
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pt-28 section-dark">
        <div className="absolute inset-0">
          <Image src="/impact-workers.jpg" alt="Real waste recovery and sorting operation" fill priority sizes="100vw" className="object-cover opacity-32" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110d] via-[#07110d]/90 to-[#07110d]/30" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.18),transparent_34%)]" />
        <div className="container relative z-10 mx-auto px-4 py-24 md:px-6">
          <div className="max-w-4xl">
            <span className="eyebrow border-emerald-300/20 bg-emerald-300/10 text-emerald-300">About CarbonM</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.05]">
              Building the missing reliability layer for waste-to-circular-fuel systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              CarbonM was born from direct exposure to India&apos;s waste and pyrolysis ecosystem. The insight was simple: conversion alone is not enough. Industrial customers need consistency, traceability and validated output quality.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="container mx-auto grid gap-14 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal variant="slideLeft">
            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white p-3 shadow-2xl shadow-emerald-950/10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image src="/clean-reactor.jpg" alt="Real industrial pilot or process equipment" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Sparkles className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Oleum V1 + Alkanalyze turns variability into measured control.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slideRight">
            <SectionHeader
              label="Our story"
              title="From plastic waste problem to circular industrial platform."
              subtitle="CarbonM is focused on converting landfill-bound, non-recyclable plastic waste into circular fuel/feedstock through Oleum V1 and Alkanalyze."
              centered={false}
            />
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                The company started with a practical observation: small-scale pyrolysis operators can produce oil, but the market struggles with variable feedstock, inconsistent output and lack of traceable process control.
              </p>
              <p>
                CarbonM&apos;s current direction is to solve that reliability problem through an integrated hardware and data stack. Oleum V1 handles the continuous conversion pathway. Alkanalyze creates the intelligence layer for feedstock mapping, monitoring, prediction and quality control.
              </p>
              <p>
                The mission is to turn the plastic waste that the world has given up on into circular carbon for ships, industry and future petrochemical feedstock pathways.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-soft py-24 md:py-32" id="team">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Team"
            title="A technical and operating team built around waste, process and data."
            subtitle="CarbonM combines chemical engineering, process development, material science, operations, supply chain and industrial partnership execution."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <ProfileCard key={member.name} member={member} delay={i * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32" id="advisors">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Advisors"
            title="Guidance across process control, chemistry, petrochemicals and commercialization."
            subtitle="The advisor group helps CarbonM connect technical development with industrial fuel/feedstock market requirements."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisors.map((member, i) => (
              <ProfileCard key={member.name} member={member} compact delay={i * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Help us build the circular carbon infrastructure layer."
        description="CarbonM is open to partners across waste supply, industrial fuel demand, marine blending, testing and investment."
        primaryCTA={{ label: "Partner With Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Technology", href: "/technology" }}
      />
    </div>
  );
}
