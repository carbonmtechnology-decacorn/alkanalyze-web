import Image from "next/image";
import ApplicationShowcase from "@/components/ApplicationShowcase";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import { applications } from "@/data/applications";

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[76vh] items-center overflow-hidden pt-28 section-dark">
        <div className="absolute inset-0">
          <Image src="/heavy-industry.jpg" alt="Real heavy industrial facility using dense liquid energy" fill priority sizes="100vw" className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110d] via-[#07110d]/90 to-[#07110d]/20" />
        </div>
        <div className="absolute inset-0 subtle-grid" />
        <div className="container relative z-10 mx-auto px-4 py-24 md:px-6">
          <div className="max-w-5xl">
            <span className="eyebrow border-emerald-300/20 bg-emerald-300/10 text-emerald-300">Applications</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-7xl leading-[1.02]">
              Circular carbon for the sectors that still need dense liquid energy.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              CarbonM focuses on practical validation pathways for marine, industrial, cement, refining and petrochemical partners.
            </p>
          </div>
        </div>
      </section>

      <section className="section-cream py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Use cases"
            title="Not generic demand. Specific industrial pathways."
            subtitle="Each use case has its own fuel specification, safety requirement, blending rule and validation sequence. The website presents these as pathways, not approvals."
          />
          <ApplicationShowcase applications={applications} />
        </div>
      </section>

      <CTASection
        headline="Have an industrial or marine fuel pathway to validate?"
        description="We are looking for partners across fuel blending, heavy industry, waste supply, testing and investment."
        primaryCTA={{ label: "Partner With Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Technology", href: "/technology" }}
      />
    </div>
  );
}
