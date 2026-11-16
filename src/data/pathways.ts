export const pathways = [
  {
    slug: "p2p",
    code: "P2P",
    name: "Plastic to Plastic",
    word: "Material.",
    category: "Circular chemical feedstock",
    image: "/circular-economy.jpg",
    alt: "Recovered plastic materials illustrating a potential return to polymer production",
    intro: "Give recovered carbon another material life.",
    description:
      "A route from difficult plastic streams to qualified petrochemical feedstocks, then back into polymers through downstream partners.",
    technical:
      "Plastic-derived hydrocarbons need contaminant control, an accepted boiling range and downstream conversion before they can become new polymer raw materials. This is a chemical-feedstock route; burning the output for energy does not produce recycled plastic content.",
    stages: [
      "Characterise recovered hydrocarbons",
      "Meet the petrochemical partner's feedstock envelope",
      "Convert through accepted chemical processing",
      "Verify traceability and recycled-content accounting",
    ],
    checks: [
      "Halogens, metals and other catalyst poisons",
      "Boiling distribution and hydrocarbon composition",
      "Partner acceptance and chain of custody",
    ],
    boundary:
      "Technical acceptance, regulatory classification and recognised chain-of-custody accounting are required. CarbonM does not claim certified recycled content today.",
    cta: "Discuss circular feedstock",
    accent: "mint",
    related: "NovaNaph / petrochemical partners",
  },
  {
    slug: "p2jet",
    code: "P2Jet",
    name: "Plastic to Jet",
    word: "Flight.",
    category: "Aviation precursor research",
    image: null,
    alt: "Engineering illustration of an aviation precursor pathway",
    intro: "The ambition is flight. The work starts upstream.",
    description:
      "Exploring plastic-derived hydrocarbon precursors for further refinery processing and aviation-fuel qualification.",
    technical:
      "A jet-range boiling cut is not automatically jet fuel. Further upgrading, fractionation and composition control would be needed, followed by an accepted production route and finished-fuel testing. Fossil-derived waste plastic is not inherently renewable, and any recycled-carbon fuel recognition is scheme-specific.",
    stages: [
      "Characterise a potential precursor stream",
      "Evaluate further refinery upgrading",
      "Assess applicable aviation production-route requirements",
      "Test and qualify the finished fuel with partners",
    ],
    checks: [
      "Freezing point, flash point and thermal stability",
      "Aromatics, composition and contaminants",
      "Accepted production route and lifecycle eligibility",
    ],
    boundary:
      "Development pathway only. CarbonM is not offering certified jet fuel or SAF. Internal LCA and third-party assessment support an RCF position in principle; official certification and scheme-specific recognition remain pending.",
    cta: "Discuss aviation precursor R&D",
    accent: "sky",
    related: "Refinery / aviation research partners",
  },
  {
    slug: "p2marine",
    code: "P2Marine",
    name: "Plastic to Marine",
    word: "Voyage.",
    category: "Marine fuel qualification",
    image: "/ship-marine.jpg",
    alt: "Commercial tanker and port infrastructure illustrating marine fuel supply chains",
    intro: "A new carbon route. A demanding operating environment.",
    description:
      "Hydrocarbon fractions for potential marine blending and supply-chain qualification with fuel partners.",
    technical:
      "Marine qualification must consider the complete blend: stability, compatibility, ignition and combustion behaviour, contaminants and safe handling. A promising individual sample does not demonstrate that a finished bunker fuel meets all applicable specification and operator requirements.",
    stages: [
      "Characterise the candidate fraction",
      "Evaluate blend stability and compatibility",
      "Confirm applicable marine fuel requirements",
      "Complete partner testing and supply-chain acceptance",
    ],
    checks: [
      "Flash point, sulphur and handling properties",
      "Stability, sediment and blend compatibility",
      "Engine, operator and supply-chain acceptance",
    ],
    boundary:
      "Marine fuel use remains subject to the relevant specification, equipment approval and partner trials. No bunker-fuel approval or automatic emissions exemption is asserted.",
    cta: "Discuss marine qualification",
    accent: "sky",
    related: "FuelMax / marine blending partners",
  },
  {
    slug: "p2naphtha",
    code: "P2Naphtha",
    name: "Plastic to Naphtha",
    word: "Molecule.",
    category: "NovaNaph / naphtha-range feedstock",
    image: "/clean-reactor.jpg",
    alt: "Petrochemical processing infrastructure illustrating downstream NovaNaph qualification",
    intro: "A measured cut. A route into chemical value chains.",
    description:
      "NovaNaph is CarbonM's naphtha-range hydrocarbon stream for petrochemical qualification and potential refinery coprocessing.",
    technical:
      "Boiling-range data establish one part of a feedstock profile. Cracker or refinery acceptance also depends on hydrocarbon composition, olefins, halogens, metals and other contaminants. Refinery coprocessing requires partner-specific studies; naphtha-range distillation alone does not establish a drop-in feedstock.",
    stages: [
      "Measure distillation and composition",
      "Upgrade toward the receiving specification",
      "Evaluate refinery coprocessing or cracker intake",
      "Agree traceability and downstream product accounting",
    ],
    checks: [
      "Distillation profile and hydrocarbon composition",
      "Halogens, silicon, metals and stability",
      "Receiving-unit specification and trial protocol",
    ],
    boundary:
      "NovaNaph is a feedstock candidate, subject to technical and regulatory qualification. Circular-content recognition is separate from fuel or energy recovery.",
    cta: "Discuss NovaNaph qualification",
    accent: "amber",
    related: "NovaNaph / refinery and petrochemical partners",
  },
] as const;
export type Pathway = (typeof pathways)[number];
