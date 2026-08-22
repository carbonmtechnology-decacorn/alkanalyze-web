import type { LucideIcon } from "lucide-react";
import { Activity, BrainCircuit, Gauge, Layers3, ScanLine, ShieldCheck, SlidersHorizontal, Workflow, Zap } from "lucide-react";

export interface TechnologySpec {
  label: string;
  value: string;
}

export interface TechnologyData {
  icon: LucideIcon;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specs: TechnologySpec[];
  image: string;
  imageAlt: string;
}

export const technologies: Record<"oleumV1" | "alkanalyze", TechnologyData> = {
  oleumV1: {
    icon: Workflow,
    name: "Oleum V1",
    tagline: "Continuous conversion for difficult mixed plastic streams.",
    shortDescription:
      "Oleum V1 is CarbonM's continuous conversion platform for transforming landfill-bound, non-recyclable plastics into circular fuel/feedstock with industrial reliability.",
    fullDescription:
      "Oleum V1 is designed around the practical reality of Indian and global waste streams: mixed, variable, contaminated and low-value. The platform combines feed preparation, controlled thermal conversion, vapour management and output conditioning so that landfill-bound plastic can be recovered as a usable circular industrial resource.",
    features: [
      "Designed for mixed PE, PP and plastic-rich non-recyclable waste streams",
      "Continuous operating architecture for scale-up beyond lab batches",
      "Integrated vapour handling and pre-condensation control",
      "Built for future third-party validation of fuel/feedstock quality",
      "Modular roadmap from pilot to FOAK commercial operation",
    ],
    specs: [
      { label: "Operating mode", value: "Continuous platform under validation" },
      { label: "Input", value: "Landfill-bound mixed plastic waste" },
      { label: "Output", value: "Circular fuel/feedstock under testing" },
      { label: "Scale roadmap", value: "Pilot -> FOAK -> replicated plants" },
    ],
    image: "/clean-reactor.jpg",
    imageAlt:
      "Real industrial reactor or pilot processing equipment representing Oleum V1 conversion platform",
  },
  alkanalyze: {
    icon: BrainCircuit,
    name: "Alkanalyze",
    tagline: "Process intelligence for consistency, traceability and quality control.",
    shortDescription:
      "Alkanalyze is the intelligence layer that analyzes feedstock, monitors reactor conditions, predicts output quality and helps operators standardize waste-derived production.",
    fullDescription:
      "Alkanalyze turns process variability into measured control. It links feedstock characterization, sensor data, operating conditions and output testing into a digital feedback loop. The goal is to move waste-to-fuel production from reactive operation toward predictive, auditable and increasingly automated control.",
    features: [
      "Feedstock quality mapping and input variability tracking",
      "Sensor-driven monitoring of critical process parameters",
      "Output property prediction and quality-control workflow",
      "Batch and run traceability for partner reporting",
      "Control recommendations for reactor and condensation optimization",
    ],
    specs: [
      { label: "System layer", value: "Analytics + process intelligence" },
      { label: "Inputs", value: "Feedstock, reactor, condenser and output data" },
      { label: "Purpose", value: "Consistency and traceability" },
      { label: "Status", value: "Under active development" },
    ],
    image: "/intelligence-ml.jpg",
    imageAlt:
      "Real industrial monitoring dashboard and sensor data representing Alkanalyze process intelligence",
  },
};

export const integrationPillars = [
  {
    icon: ScanLine,
    title: "Read the feedstock",
    description:
      "Map material variability before it becomes a process problem.",
  },
  {
    icon: Gauge,
    title: "Control the process",
    description:
      "Track temperature, pressure, vapour movement and condensation windows.",
  },
  {
    icon: SlidersHorizontal,
    title: "Tune the output",
    description:
      "Use measured data to improve consistency across runs and feed batches.",
  },
  {
    icon: ShieldCheck,
    title: "Build trust",
    description:
      "Create an auditable data layer from plastic waste to fuel/feedstock output.",
  },
  {
    icon: Layers3,
    title: "Scale repeatably",
    description:
      "Standardize operating learnings before moving from pilot to FOAK plants.",
  },
  {
    icon: Zap,
    title: "Serve hard sectors",
    description:
      "Target industrial and marine fuel/feedstock pathways under validation.",
  },
];
