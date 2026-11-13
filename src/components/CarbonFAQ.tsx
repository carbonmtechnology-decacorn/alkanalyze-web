const questions=[
{q:"What is FuelMax?",a:"FuelMax is CarbonM's upgraded plastic-derived industrial liquid fuel intended for applications such as boilers and furnaces, subject to compatibility and site-specific qualification."},
{q:"What is NovaNaph?",a:"NovaNaph is CarbonM's circular naphtha-range hydrocarbon product for potential petrochemical feedstock use, subject to downstream product specifications and certification."},
{q:"How does YieldBoost work?",a:"YieldBoost combines reaction kinetics, process sensors and soft-sensor estimates to recommend operating conditions that improve valuable C5-C20 hydrocarbon vapour selectivity."},
{q:"What does Magnet do?",a:"Magnet is CarbonM's proprietary downstream oil-upgrading process, designed to reduce contaminants and improve hydrocarbon product consistency."},
{q:"Can FuelMax reduce industrial downtime?",a:"CarbonM targets 20–30% less fuel-related burner and furnace downtime where appropriate. The outcome requires comparative industrial testing and depends on the customer's equipment, maintenance and fuel baseline."},
{q:"Does CarbonM fuel automatically qualify for carbon credits or EU ETS exemptions?",a:"No. Regulatory treatment depends on the applicable scheme, product classification, greenhouse-gas lifecycle accounting, traceability, certification and customer facility."}
];
const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:questions.map(x=>({"@type":"Question",name:x.q,acceptedAnswer:{"@type":"Answer",text:x.a}}))};
export default function CarbonFAQ() {
  return (
    <section className="bg-[#f4f0e7] py-20 text-[#09261c]" aria-label="Frequently asked questions">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto grid gap-10 px-5 md:px-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-800">Frequently asked</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Questions worth answering clearly.</h2>
        </div>
        <div className="border-t border-emerald-950/25">
          {questions.map((item, index) => (
            <article key={item.q} className="grid gap-4 border-b border-emerald-950/20 py-8 md:grid-cols-[3rem_1fr] md:gap-6">
              <span className="text-xs font-black tracking-[0.18em] text-emerald-700">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-black tracking-tight md:text-2xl">{item.q}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#486057] md:text-base">{item.a}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
