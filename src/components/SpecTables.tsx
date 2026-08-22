import ScrollReveal from "@/components/ui/ScrollReveal";
import { fuelMaxComparisonRows, labSource, novaNaphDistillation, novaNaphHighlights, oleumEfficiencyRows } from "@/data/specs";

export function LabSourceNote({ dark = false }: { dark?: boolean }) {
  return (
    <div className={dark ? "rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5 text-slate-200" : "rounded-2xl border border-emerald-900/10 bg-emerald-50 p-5 text-emerald-950"}>
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Third-party lab source</div>
      <p className="mt-2 text-sm leading-relaxed">
        Selected values are from {labSource.shortName} ({labSource.legalName}), a {labSource.accreditation}. {labSource.note}
      </p>
    </div>
  );
}

export function OleumEfficiencyTable() {
  return (
    <ScrollReveal>
      <div className="overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-white shadow-sm">
        <div className="grid grid-cols-1 bg-emerald-950 text-white md:grid-cols-[1.05fr_1fr_1fr_1fr]">
          {['Parameter', 'Raw Pyrolysis Oil', 'Upgraded Plastic Oil', 'Improvement'].map((header) => (
            <div key={header} className="border-white/10 px-5 py-4 text-sm font-black md:border-r last:border-r-0">
              {header}
            </div>
          ))}
        </div>
        {oleumEfficiencyRows.map((row) => (
          <div key={row.parameter} className="grid grid-cols-1 border-b border-emerald-900/10 last:border-b-0 md:grid-cols-[1.05fr_1fr_1fr_1fr]">
            <div className="bg-emerald-50/70 px-5 py-4 text-sm font-black text-emerald-950">{row.parameter}</div>
            <div className="px-5 py-4 text-sm leading-relaxed text-foreground/80">{row.raw}</div>
            <div className="px-5 py-4 text-sm leading-relaxed text-foreground/80">{row.upgraded}</div>
            <div className="px-5 py-4 text-sm font-semibold leading-relaxed text-emerald-800">{row.improvement}</div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

export function FuelMaxComparisonTable() {
  return (
    <ScrollReveal>
      <div className="overflow-x-auto rounded-[1.75rem] border border-emerald-900/10 bg-white shadow-sm">
        <table className="min-w-[980px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#efe6d0] text-left text-foreground">
              <th className="w-[19%] px-5 py-4 font-black">Parameter</th>
              <th className="w-[20%] px-5 py-4 font-black">LDO / Distillate Fuel</th>
              <th className="w-[20%] bg-[#a7cb55] px-5 py-4 text-center font-black text-emerald-950">FuelMax</th>
              <th className="w-[20%] px-5 py-4 font-black">HFO / Residual Fuel</th>
              <th className="w-[21%] px-5 py-4 font-black">Other Pyrolysis Oil</th>
            </tr>
          </thead>
          <tbody>
            {fuelMaxComparisonRows.map((row) => (
              <tr key={row.parameter} className="border-t border-emerald-900/10 align-middle">
                <td className="px-5 py-5 font-black text-foreground">{row.parameter}</td>
                <td className="px-5 py-5 leading-relaxed text-foreground/75">{row.ldo}</td>
                <td className="bg-[#a7cb55] px-5 py-5 text-center font-black text-emerald-950">{row.fuelmax}</td>
                <td className="px-5 py-5 leading-relaxed text-foreground/75">{row.hfo}</td>
                <td className="px-5 py-5 leading-relaxed text-foreground/75">{row.otherPyOil}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollReveal>
  );
}

export function NovaNaphSpecTable() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <ScrollReveal variant="slideLeft">
        <div className="rounded-[1.75rem] border border-emerald-900/10 bg-white p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">NovaNaph highlights</div>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-foreground">Naphtha-range distillation profile.</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            ASTM D86 profile from Macana Labs for the NovaNaph naphtha oil sample. Final cracker or blending acceptance requires partner-specific qualification.
          </p>
          <div className="mt-6 grid gap-3">
            {novaNaphHighlights.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 rounded-2xl bg-emerald-50 px-4 py-3">
                <span className="text-sm font-semibold text-emerald-950">{item.label}</span>
                <span className="text-sm font-black text-emerald-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal variant="slideRight">
        <div className="overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-white shadow-sm">
          <div className="grid grid-cols-2 bg-emerald-950 text-sm font-black text-white">
            <div className="px-5 py-4">Recovery point</div>
            <div className="px-5 py-4">Temperature</div>
          </div>
          <div className="grid max-h-[520px] grid-cols-2 overflow-y-auto text-sm">
            {novaNaphDistillation.map((point) => (
              <div key={point.label} className="contents">
                <div className="border-b border-emerald-900/10 px-5 py-3 font-semibold text-foreground">{point.label}</div>
                <div className="border-b border-emerald-900/10 px-5 py-3 font-black text-emerald-800">{point.temperature}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
