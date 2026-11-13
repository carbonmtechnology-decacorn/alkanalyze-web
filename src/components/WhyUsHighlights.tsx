import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const reasons = [
  {
    number: "01",
    label: "Operational reliability",
    title: "Less time lost to fuel-related problems.",
    description: "Cleaner hydrocarbon specifications support a case for lower burner fouling and maintenance. CarbonM targets 20–30% lower fuel-related downtime, subject to validation on the customer's equipment."
  },
  {
    number: "02",
    label: "Commercial resilience",
    title: "Built for fossil-price volatility.",
    description: "Feedstock flexibility, yield optimisation and downstream upgrading form the basis for resilient fuel economics. Actual cost advantages depend on industrial operating conditions."
  },
  {
    number: "03",
    label: "Circular-market demand",
    title: "A route back to petrochemicals.",
    description: "Plastic EPR and European recycled-content policy create opportunities for qualified circular feedstocks. NovaNaph targets those value chains alongside FuelMax's industrial fuel applications."
  }
];

export default function WhyUsHighlights() {
  return (
    <section id="why-carbonm" className="bg-[#f4f0e7] py-20 text-[#08251b] md:py-28">
      <div className="container mx-auto grid gap-14 px-5 md:px-8 lg:grid-cols-[0.44fr_0.56fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-800">Why CarbonM?</p>
          <h2 className="mt-7 max-w-xl text-4xl font-black leading-[1.06] tracking-[-0.045em] md:text-6xl">
            Because <span className="font-serif italic font-normal">better fuel</span> is a business decision.
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-[#486057]">
            More useful hydrocarbons. Cleaner product specifications. A stronger commercial case for industry.
          </p>
          <Link href="/why-us" className="mt-9 inline-flex items-center gap-3 border-b border-emerald-800 pb-3 text-sm font-black uppercase tracking-[0.14em] text-emerald-900 hover:text-emerald-600">
            Explore the advantage <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="border-t border-emerald-950/30">
          {reasons.map((reason) => (
            <article key={reason.number} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-emerald-950/20 py-10 md:grid-cols-[5rem_1fr] md:py-12">
              <span className="text-sm font-black tracking-[0.16em] text-emerald-700">{reason.number}</span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800">{reason.label}</p>
                <h3 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-4xl">{reason.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#486057]">{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
