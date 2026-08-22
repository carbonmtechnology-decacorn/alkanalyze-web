export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: string;
}

export const blogCategories = [
  "All",
  "Plastic Waste",
  "Circular Fuels",
  "Marine Decarbonization",
  "Industrial Fuel Transition",
  "Oleum V1 Updates",
  "Alkanalyze / ML",
  "Policy & Compliance",
  "Company News",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "landfill-bound-plastic-untapped-carbon-resource",
    title: "Why landfill-bound plastic is an untapped carbon resource",
    excerpt:
      "Mixed, non-recyclable plastic is usually treated as a disposal problem. CarbonM sees it as misplaced circular carbon for industrial use.",
    category: "Plastic Waste",
    date: "2026-08-01",
    readTime: "4 min read",
    image: "/plastic-bales.jpg",
    imageAlt: "Real bales of mixed plastic waste before recovery",
    content: `## The carbon is already there

Landfill-bound plastic is often seen only as waste. But chemically, much of it is a hydrocarbon resource that has already been extracted, refined, polymerized, transported and consumed.

The challenge is not that the material has no value. The challenge is that mixed plastic waste is variable, contaminated and operationally difficult. Mechanical recycling works for clean streams, but many real-world waste streams are too complex for that route.

## Why this matters for industry

Ships, boilers, furnaces and heavy industrial systems still need dense liquid energy. A circular fuel/feedstock pathway can recover carbon from waste streams while reducing dependence on virgin fossil inputs, subject to quality validation and partner-specific blending requirements.

## CarbonM's approach

CarbonM combines Oleum V1 conversion with Alkanalyze process intelligence. The goal is not only to make a fuel-like output, but to make the process measurable, traceable and repeatable enough for industrial partners.` ,
  },
  {
    slug: "circular-fuel-marine-industrial-decarbonization",
    title: "How circular fuel can support marine and industrial decarbonization",
    excerpt:
      "Hard-to-abate sectors need practical transition fuels. Circular hydrocarbon streams can become one part of that bridge.",
    category: "Circular Fuels",
    date: "2026-08-05",
    readTime: "5 min read",
    image: "/ship-marine.jpg",
    imageAlt: "Real cargo ship representing marine fuel applications",
    content: `## Dense liquid energy is still needed

Electrification is moving quickly, but many industrial and marine applications remain difficult to electrify in the near term. They need high energy density, existing infrastructure compatibility and reliable supply chains.

## Circular fuel is a transition pathway

Waste-derived circular fuel/feedstock can help reduce fossil dependence when it meets safety, quality and compliance requirements. The key is validation: sulphur, chlorine, flash point, viscosity, stability and blending behaviour all matter.

## What CarbonM is building

CarbonM is building a controlled route from landfill-bound plastic to circular fuel/feedstock, supported by output testing and an operating data layer. This makes partner validation more systematic.` ,
  },
  {
    slug: "consistency-missing-layer-waste-to-fuel",
    title: "Why consistency is the missing layer in waste-to-fuel systems",
    excerpt:
      "The technology problem is not only conversion. It is variability. Alkanalyze is built around that gap.",
    category: "Alkanalyze / ML",
    date: "2026-08-10",
    readTime: "4 min read",
    image: "/intelligence-ml.jpg",
    imageAlt: "Real process monitoring dashboard and industrial sensors",
    content: `## Variability is the core operating problem

Plastic waste does not arrive as a clean, uniform chemical feedstock. It varies by polymer type, additives, contamination, moisture, fillers and sorting quality. That variability moves through the reactor and appears in output quality.

## Why software matters

A process-data layer can help operators move from reactive operation to measured control. Feedstock data, reactor conditions, condenser behaviour and output tests should not sit in separate notebooks. They should form one feedback loop.

## Alkanalyze's role

Alkanalyze is CarbonM's process intelligence layer. It is designed to help characterize feedstock, monitor key variables, predict output properties and standardize operating response over time.` ,
  },
];
