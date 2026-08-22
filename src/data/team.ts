export interface TeamMember {
  name: string;
  role: string;
  education: string;
  bio: string;
  shortBio: string;
  image: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: "Mihir Tomar",
    role: "Co-founder & CEO",
    education: "BITS Pilani, Hyderabad Campus",
    bio: "Mihir leads CarbonM's vision, technology scaling, business development and long-term company direction. With a chemical engineering background from BITS Pilani, Hyderabad Campus, he is building CarbonM around a clear thesis: landfill-bound plastic should become a reliable circular carbon resource for industry, not a disposal liability.",
    shortBio:
      "Leads CarbonM's vision, technology scaling, business development and long-term direction, with a focus on turning landfill-bound plastic into circular fuel/feedstock.",
    image: "/team/mihir-tomar-profile.jpg",
  },
  {
    name: "Shashwat Sharma",
    role: "Co-founder & COO",
    education: "BITS Pilani, Hyderabad Campus",
    bio: "Shashwat leads CarbonM's fundraising, financing, industrial partnerships, operations and execution systems. He works across capital strategy, partner development, plant operations, automation and business execution to help CarbonM move from laboratory validation to scalable industrial deployment.",
    shortBio:
      "Leads fundraising, financing, industrial partnerships, operations and execution systems that help CarbonM move from validation to deployment.",
    image: "/team/shashwat-sharma-profile.jpg",
  },
  {
    name: "Dr. Preeti Tomar",
    role: "CTO — Chief Technical Officer",
    education: "PhD, Shivaji University, Kolhapur",
    bio: "Dr. Preeti Tomar leads CarbonM's technical development across chemistry, process validation, product quality and laboratory workflows. Her research background supports CarbonM's work on converting complex waste-derived hydrocarbon streams into cleaner, more consistent circular fuel/feedstock.",
    shortBio:
      "Leads chemistry, process validation and product-quality development, supporting CarbonM's technical pathway from lab to plant scale.",
    image: "/team/preeti-tomar-profile.jpg",
  },
  {
    name: "Deepak Sharma",
    role: "CSO — Chief Supply Chain Officer",
    education: "Supply Chain, Logistics & International Trade",
    bio: "Deepak leads CarbonM's supply-chain strategy across feedstock sourcing, logistics, vendor development, industrial movement and commercial supply partnerships. His background in logistics, supply-chain systems and international trade helps CarbonM build the operational backbone required to aggregate landfill-bound plastic and deliver circular fuel/feedstock at scale.",
    shortBio:
      "Leads feedstock sourcing, logistics, vendor networks and supply-chain execution, helping CarbonM build the operating backbone for scale.",
    image: "/team/deepak-sharma-profile.jpg",
    linkedin: "https://www.linkedin.com/in/deepak-scm-logistics-international-trade/",
  },
  {
    name: "Sumant Jois",
    role: "Material Engineering Lead",
    education: "ICT Mumbai",
    bio: "Sumant leads material engineering work at CarbonM, focusing on feedstock behavior, material compatibility, polymer-derived streams and product development. His background from ICT Mumbai supports CarbonM's work on understanding how mixed plastic waste behaves across preparation, conversion and output-quality stages.",
    shortBio:
      "Leads material engineering across feedstock behavior, polymer-derived streams and product-quality development.",
    image: "/team/sumant-jois-profile.jpg",
  },
  {
    name: "Diya Agrawal",
    role: "Process Development Lead",
    education: "BITS Pilani, Hyderabad Campus",
    bio: "Diya leads process-development work across experimental design, reactor operation, process documentation and technical validation. She supports CarbonM's scale-up pathway by translating laboratory observations into structured operating windows, process learnings and plant-level development inputs.",
    shortBio:
      "Leads process development across experiments, reactor operation, documentation and technical validation for CarbonM's scale-up pathway.",
    image: "/team/diya-agrawal-profile.jpg",
  },
  {
    name: "Ashwini Choudry",
    role: "Associate Engineer",
    education: "MVJ College of Engineering, Bangalore",
    bio: "Ashwini supports CarbonM's engineering execution across plant documentation, technical coordination, equipment workflows and day-to-day development tasks. Her work helps strengthen CarbonM's operating discipline as the company moves from prototyping toward pilot and FOAK deployment.",
    shortBio:
      "Supports engineering execution, technical coordination, plant documentation and development workflows across CarbonM's pilot-scale work.",
    image: "/team/ashwini-choudry-profile.jpg",
  },
];

export const advisors: TeamMember[] = [
  {
    name: "Dr. Satyapaul Singh",
    role: "Advisor — Process Control & Chemical Engineering",
    education: "BITS Pilani, Hyderabad Campus",
    bio: "Dr. Satyapaul Singh advises CarbonM on chemical engineering, process control, reaction systems, simulation and scale-up thinking. His guidance supports CarbonM's efforts to build reliable operating windows, improve reactor consistency and translate process chemistry into controlled industrial operation.",
    shortBio:
      "Advises CarbonM on process control, chemical engineering, simulation, reaction systems and scale-up.",
    image: "/team/satyapaul-singh-profile.jpg",
    linkedin: "https://www.linkedin.com/in/satyapaul-singh-b4583343/",
  },
  {
    name: "Dr. Gaurav Gupta",
    role: "Advisor — Ionic Liquids & Chemistry",
    education: "North Maharashtra University",
    bio: "Dr. Gaurav Gupta advises CarbonM on chemistry, ionic liquids, green chemistry and chemical-treatment pathways. His academic background supports CarbonM's work on upgrading complex hydrocarbon streams and developing cleaner, more controlled routes for waste-derived fuel/feedstock quality improvement.",
    shortBio:
      "Advises CarbonM on chemistry, ionic liquids, green chemistry and chemical-treatment pathways.",
    image: "/team/gaurav-gupta-profile.jpg",
    linkedin: "https://www.linkedin.com/in/dr-gaurav-gupta-022a4963/",
  },
  {
    name: "Dr. Sandeep Raut",
    role: "Advisor — Business Development",
    education: "COO, FinGlobe",
    bio: "Dr. Sandeep Raut advises CarbonM on business development, market access, institutional partnerships and commercial strategy. His experience helps CarbonM shape customer conversations, build partner networks and move from technical validation toward bankable industrial deployment.",
    shortBio:
      "Advises CarbonM on business development, commercial strategy, partnerships and market access.",
    image: "/team/sandeep-raut-profile.jpg",
    linkedin: "https://www.linkedin.com/in/sandeepraut/",
  },
  {
    name: "Dr. B. V. Venugopal",
    role: "Advisor — Petrochemicals & Polymers",
    education: "IIT Madras",
    bio: "Dr. B. V. Venugopal advises CarbonM on petrochemicals, polymers, olefins and hydrocarbon-processing pathways. His industry and technical background helps CarbonM align its circular fuel/feedstock development with the quality expectations of petrochemical, refining and industrial fuel markets.",
    shortBio:
      "Advises CarbonM on petrochemicals, polymers, olefins and hydrocarbon-processing pathways.",
    image: "/team/venugopal-profile.jpg",
    linkedin: "https://www.linkedin.com/in/bvve1234nu/",
  },
];

export const imageFileMap = [
  ["Mihir Tomar Profile.jpg", "public/team/mihir-tomar-profile.jpg"],
  ["Shashwat Sharma Profile.jpg", "public/team/shashwat-sharma-profile.jpg"],
  ["Preeti Tomar Profile.jpg", "public/team/preeti-tomar-profile.jpg"],
  ["Deepak Sharma Profile.jpg", "public/team/deepak-sharma-profile.jpg"],
  ["Sumant Jois Profile.jpg", "public/team/sumant-jois-profile.jpg"],
  ["Diya Agrawal Profile.jpg", "public/team/diya-agrawal-profile.jpg"],
  ["Ashwini Choudry Profile.jpg", "public/team/ashwini-choudry-profile.jpg"],
  ["Satyapaul Singh Profile.jpg", "public/team/satyapaul-singh-profile.jpg"],
  ["Gaurav Gupta Profile.jpg", "public/team/gaurav-gupta-profile.jpg"],
  ["Sandeep Raut Profile.jpg", "public/team/sandeep-raut-profile.jpg"],
  ["Venugopal Profile.jpg", "public/team/venugopal-profile.jpg"],
];
