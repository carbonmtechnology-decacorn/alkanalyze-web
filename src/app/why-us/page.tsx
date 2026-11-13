import type { Metadata } from "next";
import Link from "next/link";
import CarbonFAQ from "@/components/CarbonFAQ";
import { ArrowUpRight, Factory, Gauge, Recycle, ShieldCheck, TrendingDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Why CarbonM? | Fuel Quality, Reliability and Circular Feedstocks",
  description: "Why CarbonM's FuelMax and NovaNaph matter: lower-contaminant hydrocarbon fuels, targeted lower fuel-related downtime, fossil-price resilience and circular petrochemical demand.",
  alternates: { canonical: "/why-us" },
};

const benefits = [
  {
    icon: Gauge,
    subtitle: "Reliability",
    title: "Less downtime. More availability.",
    body: "FuelMax is designed around lower contaminant loads in industrial fuel. Based on tested fuel properties, CarbonM targets 20–30% less fuel-related burner and furnace downtime versus relevant conventional-fuel baselines. The reduction remains a target until independently verified on customer equipment.",
    metric: "20–30%",
    metricLabel: "target reduction in fuel-related downtime",
  },
  {
    icon: Factory,
    subtitle: "Industrial productivity",
    title: "Fuel can influence more than the energy bill.",
    body: "When boiler or furnace availability is a production bottleneck, fewer fuel-related stoppages can enable additional output and sales. Approximately 0.25% sales uplift is an illustrative scenario, not a validated customer result; actual outcomes depend on utilisation, baseline downtime and market demand.",
    metric: "0.25%",
    metricLabel: "illustrative, conditional sales uplift",
  },
  {
    icon: TrendingDown,
    subtitle: "Economics",
    title: "High fossil-price variation tolerance.",
    body: "Domestic plastic feedstocks, better hydrocarbon yield and selective downstream upgrading provide a path to more resilient economics when petroleum prices fluctuate. Delivery price and any margin benefit vary with feedstock procurement, energy and logistics.",
    metric: "COST",
    metricLabel: "supply flexibility and process efficiency",
  },
  {
    icon: Recycle,
    subtitle: "Circularity",
    title: "Circular carbon for petrochemical supply chains.",
    body: "Indian plastic EPR and the EU Packaging and Packaging Waste Regulation create opportunities for traceable recycled-content value chains. Chemical recycling can complement mechanical recycling for certain difficult streams; use in petrochemicals is subject to technical qualification, classification and chain-of-custody rules.",
    metric: "P2P",
    metricLabel: "plastic-to-plastic pathway through circular feedstocks",
  },
  {
    icon: ShieldCheck,
    subtitle: "Policy-linked demand",
    title: "Regulatory exposure changes buying decisions.",
    body: "India's CCTS, EU CBAM and EU ETS each influence specific facilities and markets under different rules. CarbonM's indicative 350,000 tonnes of LDO/MHO demand exposed to relevant CCTS/CBAM-linked industrial supply chains represents an addressable-market scenario, corresponding to about ₹2,450 crore at ₹70/kg. It is not a direct mandate on each tonne of fuel. Recycled-carbon fuel treatment and carbon-cost savings require lifecycle accounting and scheme-specific qualification.",
    metric: "350kt",
    metricLabel: "illustrative exposed LDO/MHO market, not mandated consumption",
  },
];

export default function WhyUsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071b13] px-5 pb-24 pt-44 text-white md:px-8 md:pb-32">
        <div className="pointer-events-none absolute -right-12 top-28 h-[430px] w-[430px] rounded-full border border-emerald-300/15 md:h-[700px] md:w-[700px]" />
        <div className="pointer-events-none absolute -right-12 top-28 h-[430px] w-[430px] rounded-full border-[70px] border-emerald-300/5 md:h-[700px] md:w-[700px]" />
        <div className="container relative mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-300">Why CarbonM?</p>
          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[1] tracking-[-0.055em] md:text-7xl lg:text-[6rem]">
            Better hydrocarbon products. <span className="font-serif font-normal italic text-emerald-300">Stronger industrial economics.</span>
          </h1>
          <p className="mt-9 max-w-2xl text-lg leading-9 text-slate-300">
            We connect reliable thermal-fuel performance, circular petrochemical feedstocks and process optimisation in one industrial proposition.
          </p>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-3 border-b border-emerald-300 pb-3 text-sm font-black uppercase tracking-[0.15em] text-emerald-300 hover:text-white">
            Talk to CarbonM <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="bg-[#f4f0e7] py-20 text-[#09261c] md:py-28">
        <div className="container mx-auto grid gap-14 px-5 md:px-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-black uppercase tracking-[0.23em] text-emerald-800">The industrial case</p>
            <h2 className="mt-5 text-4xl font-black leading-[1.06] tracking-[-0.04em] md:text-5xl">
              Why buyers <span className="font-serif font-normal italic">look beyond fuel price.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-[#53665c]">
              Measurable quality comes first. Commercial, regulatory and operational value follow only where the application supports them.
            </p>
          </div>
          <div className="border-t border-emerald-950/25">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="border-b border-emerald-950/20 py-12 md:py-16">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.23em] text-emerald-700">0{index + 1} / {benefit.subtitle}</span>
                    <Icon className="h-7 w-7 text-emerald-800" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-7 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">{benefit.title}</h3>
                  <p className="mt-6 max-w-3xl text-base leading-8 text-[#4b6055] md:text-lg">{benefit.body}</p>
                  <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    <strong className="text-4xl font-black tracking-[-0.06em] text-emerald-900 md:text-6xl">{benefit.metric}</strong>
                    <span className="max-w-xs text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">{benefit.metricLabel}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#09251b] py-20 text-white md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-emerald-300">Two technologies / Two markets</p>
          <div className="mt-8 grid gap-12 border-t border-white/20 pt-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">YieldBoost <span className="text-emerald-300">→</span> Magnet</h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                Physics-informed conversion optimisation followed by selective downstream contaminant reduction.
              </p>
              <Link href="/technology" className="mt-7 inline-flex gap-2 border-b border-emerald-300 pb-2 text-sm font-bold text-emerald-300">
                Explore our technology <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-white/20 pt-5">
                <h3 className="text-3xl font-black">FuelMax</h3>
                <p className="mt-3 leading-7 text-slate-300">Upgraded industrial liquid fuel for thermal equipment, subject to qualification.</p>
              </div>
              <div className="border-t border-white/20 pt-5">
                <h3 className="text-3xl font-black">NovaNaph</h3>
                <p className="mt-3 leading-7 text-slate-300">Circular naphtha-range hydrocarbons for petrochemical qualification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CarbonFAQ />
    </main>
  );
}
