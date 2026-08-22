/*
  Impact and output data for CarbonM FuelMax.
  Keep these as target/potential values until verified operating data and third-party lab reports are available.
*/

export const impactMetrics = [
  {
    value: 500,
    suffix: "+",
    unit: "tonnes",
    label: "Potential Plastic Diverted",
    description:
      "Potential non-recyclable plastic waste diverted from landfill, dumpsites and low-value disposal routes.",
    qualifier: "Potential / target metric",
  },
  {
    value: 40,
    suffix: "%",
    unit: "",
    label: "Fossil Fuel Displacement Potential",
    description:
      "Potential reduction in conventional fossil fuel demand for partner industrial operations after validation.",
    qualifier: "Under validation",
  },
  {
    value: 100,
    suffix: "%",
    unit: "",
    label: "Traceable Waste-to-Fuel Chain",
    description:
      "Target traceability from feedstock intake through conversion, quality checks and fuel/feedstock delivery.",
    qualifier: "System design target",
  },
  {
    value: 3,
    suffix: "x",
    unit: "",
    label: "Value Recovery vs Landfilling",
    description:
      "Potential value creation from plastic-rich reject streams that currently have low or negative recovery value.",
    qualifier: "Modelled estimate",
  },
];

export const impactStatements = [
  {
    title: "Landfill pressure reduction",
    description:
      "CarbonM targets plastic-rich streams that are difficult to mechanically recycle and frequently move into landfill, dumping or low-value disposal routes.",
  },
  {
    title: "Circular carbon recovery",
    description:
      "The platform recovers useful hydrocarbon value from waste plastics instead of treating that carbon as a disposal liability.",
  },
  {
    title: "Industrial fuel transition",
    description:
      "CarbonM is designed for hard-to-abate sectors where dense liquid energy remains necessary and where circular alternatives can reduce fossil dependence after validation.",
  },
  {
    title: "Traceable operations",
    description:
      "Oleum V1 and Alkanalyze are being built as an integrated hardware-data system so partners can understand feedstock, process and output quality.",
  },
  {
    title: "Waste-sector value creation",
    description:
      "By accepting lower-value plastic-rich streams, the model can create new demand for material that is otherwise economically difficult to recover.",
  },
];

export const fuelSpecs = [
  {
    label: "Flash point",
    value: "62°C",
    note: "FuelMax value from updated oil-spec table; application validation still required.",
  },
  {
    label: "Sulphur",
    value: "0.02%",
    note: "Third-party lab result summary; final limits depend on route and customer specification.",
  },
  {
    label: "Water",
    value: "<0.01%",
    note: "Low measured water content in the supplied oil-spec summary.",
  },
  {
    label: "Ash",
    value: "<0.01%",
    note: "Low ash content supports industrial blending discussions after validation.",
  },
  {
    label: "Acidity / TAN",
    value: "0.47 mg KOH/g",
    note: "Comparable to distillate-fuel tolerance range shown in the updated spec table.",
  },
  {
    label: "Carbon residue",
    value: "0.18%",
    note: "Lower than other pyrolysis oil comparison shown in the supplied table.",
  },
  {
    label: "Metals / contaminants",
    value: "Heavy metals <0.1 mg/L",
    note: "Requires customer-specific fuel-system and emissions validation.",
  },
  {
    label: "NovaNaph distillation",
    value: "IBP 38°C / FBP 140°C",
    note: "ASTM D86 naphtha profile reported by Macana Labs for NovaNaph sample.",
  },
];
