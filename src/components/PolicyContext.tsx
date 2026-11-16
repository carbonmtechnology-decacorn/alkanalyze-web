import Link from "next/link";
const policies = [
  {
    name: "India / EPR",
    body: "Waste-to-oil for energy recovery and conversion into feedstock chemicals or new plastics follow different classifications. Processor registration, the actual end use and applicable rules determine recognition.",
    source:
      "https://eprplastic.cpcb.gov.in/plastic/downloads/Plastic_Waste_Management_2026.pdf",
    label: "CPCB / 2026 amendment",
  },
  {
    name: "Europe / packaging",
    body: "The Packaging and Packaging Waste Regulation creates demand for qualifying recycled content. Fuel combustion does not create recycled plastic content; feedstock routes require accepted accounting and traceability.",
    source:
      "https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en",
    label: "European Commission / PPWR",
  },
  {
    name: "India / CCTS",
    body: "The compliance mechanism sets greenhouse-gas emission-intensity obligations for notified entities. Fuel switching is not an automatic carbon-credit entitlement; verified accounting and the receiving site's rules matter.",
    source:
      "https://beeindia.gov.in/show_content.php?level=1&lid=294&ls_id=189",
    label: "BEE / Indian carbon market",
  },
  {
    name: "Europe / CBAM",
    body: "CBAM concerns embedded emissions in covered imported goods. It is not a blanket mandate on industrial liquid fuels, and any benefit depends on the product, facility and recognised emissions methodology.",
    source:
      "https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en",
    label: "European Commission / CBAM",
  },
  {
    name: "Recycled-carbon fuels",
    body: "CarbonM's internal LCA and third-party assessment support its RCF position in principle. Official certification and scheme-specific recognition are pending. The EU methodology requires at least 70% lifecycle GHG savings for RCFs; this is a regulatory threshold, not a certified CarbonM result.",
    source: "https://eur-lex.europa.eu/eli/reg_del/2023/1185/oj/eng",
    label: "EU / Regulation 2023/1185",
  },
];
export default function PolicyContext() {
  return (
    <section className="bg-[#dfdfd2] py-16" id="policy">
      <div className="field-wrap">
        <div className="section-topline">
          <span>Policy & qualification</span>
          <span>Reviewed 16 November 2026</span>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          The final use determines the claim.
        </h2>
        <p className="mt-6 max-w-3xl leading-8 text-[#476255]">
          Energy recovery and circular chemical feedstocks serve different
          purposes. Regulatory recognition must follow the relevant product
          route, lifecycle evidence and scheme.
        </p>
        <div className="mt-10">
          {policies.map((p) => (
            <article
              key={p.name}
              className="grid gap-5 border-t border-[#123b2a40] py-7 md:grid-cols-[.5fr_1fr_.45fr]"
            >
              <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
              <p className="text-sm leading-7 text-[#476255]">{p.body}</p>
              <a
                href={p.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-start text-xs font-semibold leading-6 underline underline-offset-4"
              >
                {p.label} ↗
              </a>
            </article>
          ))}
        </div>
        <Link className="field-link" href="/contact">
          Discuss your qualification requirements ↗
        </Link>
      </div>
    </section>
  );
}
