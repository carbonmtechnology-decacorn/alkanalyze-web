export const labSource = {
  shortName: "Macana Labs",
  legalName: "Macana Analytical Laboratory Private Limited",
  accreditation: "NABL accredited laboratory",
  note: "Selected results are based on third-party testing shared by CarbonM. Application approval still requires partner-specific validation, blending trials and regulatory review.",
};

export interface OleumEfficiencyRow {
  parameter: string;
  raw: string;
  upgraded: string;
  improvement: string;
}

export const oleumEfficiencyRows: OleumEfficiencyRow[] = [
  {
    parameter: "Colour",
    raw: "Dark brown / black",
    upgraded: "Light yellow (visual observation)",
    improvement: "Significant decolourization",
  },
  {
    parameter: "Chloride content",
    raw: "147 mg/kg",
    upgraded: "35 mg/kg",
    improvement: "76.2% reduction",
  },
  {
    parameter: "Sulphur content",
    raw: "0.028 wt%",
    upgraded: "0.016 wt%",
    improvement: "42.9% reduction",
  },
  {
    parameter: "Micro carbon residue",
    raw: "0.67 wt%",
    upgraded: "0.22 wt%",
    improvement: "67.2% reduction",
  },
  {
    parameter: "Acidity (TAN)",
    raw: "0.62 mg KOH/g",
    upgraded: "0.29 mg KOH/g",
    improvement: "53.2% reduction",
  },
  {
    parameter: "Density @ 15°C",
    raw: "0.8249 kg/L",
    upgraded: "0.8568 kg/L",
    improvement: "Within fuel range",
  },
  {
    parameter: "Gross calorific value",
    raw: "10,949 kcal/kg",
    upgraded: "10,870 kcal/kg",
    improvement: "Essentially maintained",
  },
  {
    parameter: "Oil recovery @ 400°C distillation",
    raw: "98 vol%",
    upgraded: "95 vol%",
    improvement: "High liquid recovery maintained",
  },
];

export interface FuelMaxComparisonRow {
  parameter: string;
  ldo: string;
  fuelmax: string;
  hfo: string;
  otherPyOil: string;
}

export const fuelMaxComparisonRows: FuelMaxComparisonRow[] = [
  {
    parameter: "Flash point",
    ldo: "Typically >=60°C",
    fuelmax: "62°C",
    hfo: "Typically >=60°C",
    otherPyOil: "<40°C",
  },
  {
    parameter: "Sulphur",
    ldo: "Statutory / fuel-spec controlled",
    fuelmax: "0.02%",
    hfo: "Statutory; commonly 0.5% max for non-scrubber marine fuel",
    otherPyOil: "0.5% mass",
  },
  {
    parameter: "Water",
    ldo: "Low / controlled",
    fuelmax: "<0.01%",
    hfo: "Higher tolerance than distillate",
    otherPyOil: "0.3346 mg/kg",
  },
  {
    parameter: "Ash",
    ldo: "Very low",
    fuelmax: "<0.01%",
    hfo: "Max around 0.10% for RMG 380",
    otherPyOil: "0.02%",
  },
  {
    parameter: "Acidity / TAN",
    ldo: "Max around 0.5 mg KOH/g",
    fuelmax: "0.47 mg KOH/g",
    hfo: "Max around 2.5 mg KOH/g",
    otherPyOil: "1.41 mg KOH/g",
  },
  {
    parameter: "Carbon residue",
    ldo: "Low",
    fuelmax: "0.18%",
    hfo: "Much higher tolerance; RMG 380 max around 18%",
    otherPyOil: "0.33%",
  },
  {
    parameter: "Metals / contaminants",
    ldo: "Should be low",
    fuelmax: "Heavy metals <0.1 mg/L",
    hfo: "Metals allowed but controlled",
    otherPyOil: "Fe 4.3, Al 2.1, Ca 15.4, Na 1.2, Si 11.3 mg/kg",
  },
];

export interface NovaNaphDistillationPoint {
  label: string;
  temperature: string;
}

export const novaNaphHighlights = [
  { label: "Initial boiling point", value: "38°C" },
  { label: "50% recovery", value: "94°C" },
  { label: "95% recovery", value: "135°C" },
  { label: "Final boiling point", value: "140°C" },
  { label: "Test method", value: "ASTM D86" },
];

export const novaNaphDistillation: NovaNaphDistillationPoint[] = [
  { label: "IBP", temperature: "38°C" },
  { label: "5%", temperature: "52°C" },
  { label: "10%", temperature: "58°C" },
  { label: "15%", temperature: "63°C" },
  { label: "20%", temperature: "68°C" },
  { label: "25%", temperature: "73°C" },
  { label: "30%", temperature: "78°C" },
  { label: "35%", temperature: "82°C" },
  { label: "40%", temperature: "86°C" },
  { label: "45%", temperature: "90°C" },
  { label: "50%", temperature: "94°C" },
  { label: "55%", temperature: "98°C" },
  { label: "60%", temperature: "102°C" },
  { label: "65%", temperature: "106°C" },
  { label: "70%", temperature: "110°C" },
  { label: "75%", temperature: "115°C" },
  { label: "80%", temperature: "120°C" },
  { label: "85%", temperature: "125°C" },
  { label: "90%", temperature: "130°C" },
  { label: "95%", temperature: "135°C" },
  { label: "FBP", temperature: "140°C" },
];

export const outputHighlights = [
  {
    title: "Oleum V1 efficiency",
    metric: "76.2%",
    label: "chloride reduction",
    description: "From 147 mg/kg to 35 mg/kg in third-party testing shared by CarbonM.",
  },
  {
    title: "FuelMax",
    metric: "10,870",
    label: "kcal/kg GCV",
    description: "Calorific value essentially maintained after upgrading in the supplied lab summary.",
  },
  {
    title: "NovaNaph",
    metric: "140°C",
    label: "final boiling point",
    description: "ASTM D86 naphtha distillation profile from Macana Labs report.",
  },
];
