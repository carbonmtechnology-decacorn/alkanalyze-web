import Image from "next/image";
import type { Metadata } from "next";
import { FileCheck2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FuelMaxComparisonTable, LabSourceNote, NovaNaphSpecTable, OleumEfficiencyTable } from "@/components/SpecTables";
import { outputHighlights } from "@/data/specs";
import OutputCarousel from "@/components/OutputCarousel";

export const metadata: Metadata = {
  title: "Outputs and Lab Data",
  description:
    "CarbonM output data for Oleum V1 efficiency, FuelMax upgraded plastic oil and NovaNaph naphtha-range output under third-party validation.",
};

export default function OutputsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pt-28 section-dark">
        <div className="absolute inset-0">
          <Image src="/circular-economy.jpg" alt="Circular fuel and feedstock validation visual" fill priority sizes="100vw" className="object-cover opacity-32" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110d] via-[#07110d]/90 to-[#07110d]/30" />
        </div>
        <div className="absolute inset-0 subtle-grid" />
        <div className="container relative z-10 mx-auto px-4 py-24 md:px-6">
          <div className="max-w-4xl">
            <span className="eyebrow border-emerald-300/20 bg-emerald-300/10 text-emerald-300">Outputs</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.05]">
              FuelMax and NovaNaph data, shown carefully and ready for validation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              The output page separates measured third-party results from application claims. It gives partners a clear view of Oleum V1 efficiency, upgraded FuelMax specifications and NovaNaph distillation data.
            </p>
          </div>
          <div className="mt-10 grid border-y border-white/10 sm:grid-cols-3">
            {outputHighlights.map((item) => (
              <div key={item.title} className="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0 sm:[&:not(:last-child)]:border-r sm:[&:not(:last-child)]:border-white/10">
                <div className="text-3xl font-black text-white">{item.metric}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">{item.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <OutputCarousel />
        </div>
      </section>

      <section className="section-soft py-24 md:py-32" id="oleum-efficiency">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
            <SectionHeader
              label="Oleum V1 efficiency"
              title="Upgrading reduces key contaminants while maintaining high recovery."
              subtitle="The table compares raw pyrolysis oil and upgraded plastic oil values from the supplied Macana Labs test summary."
              centered={false}
              className="mb-0"
            />
            <LabSourceNote />
          </div>
          <OleumEfficiencyTable />
        </div>
      </section>

      <section className="bg-background py-24 md:py-32" id="fuelmax">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="FuelMax"
            title="Updated upgraded oil comparison for industrial fuel conversations."
            subtitle="FuelMax values are shown beside LDO/distillate fuel, HFO/residual fuel and other pyrolysis oil references. Treat this as validation data, not a blanket certification claim."
          />
          <FuelMaxComparisonTable />
        </div>
      </section>

      <section className="section-dark py-24 md:py-32" id="novanaph">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="NovaNaph"
            title="Naphtha-range output with ASTM D86 distillation profile."
            subtitle="NovaNaph is the circular naphtha pathway. The supplied Macana Labs report shows a naphtha oil sample with IBP 38°C and FBP 140°C."
            dark
          />
          <div className="rounded-[2rem] bg-white/95 p-5 shadow-2xl shadow-black/20 md:p-8">
            <NovaNaphSpecTable />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-emerald-900/10 bg-white p-8 text-center shadow-sm md:p-10">
              <FileCheck2 className="mx-auto h-9 w-9 text-emerald-700" strokeWidth={1.7} />
              <h2 className="mt-5 text-2xl font-black tracking-tight text-foreground md:text-3xl">Important validation note</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                These values help partners understand CarbonM's current output direction. Fuel use, marine blending, industrial boiler adoption, cracker acceptance and certification require separate third-party testing, customer trials and regulatory review.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        headline="Want to validate FuelMax or NovaNaph for your use case?"
        description="CarbonM can structure a testing pathway for waste suppliers, fuel buyers, blenders, petrochemical partners and investors."
        primaryCTA={{ label: "Start Validation", href: "/contact" }}
        secondaryCTA={{ label: "Explore Technology", href: "/technology" }}
      />
    </div>
  );
}
