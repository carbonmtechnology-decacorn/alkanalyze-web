export type ApplicationIconName = "ship" | "flame" | "factory" | "fuel" | "landmark" | "warehouse" | "truck" | "anchor";

export interface ApplicationData {
  iconName: ApplicationIconName;
  title: string;
  description: string;
  status: string;
  image: string;
  imageAlt: string;
}

export const applications: ApplicationData[] = [
  {
    iconName: "ship",
    title: "Marine fuel blending",
    description:
      "Circular fuel/feedstock pathway designed for validation with marine fuel blenders and operators seeking lower-fossil blends.",
    status: "Blending pathway under validation",
    image: "/ship-marine.jpg",
    imageAlt: "Real commercial ship representing marine fuel blending applications",
  },
  {
    iconName: "flame",
    title: "Industrial boilers and furnaces",
    description:
      "Dense liquid energy route for facilities that still depend on LDO, furnace oil or other industrial fuels.",
    status: "Industrial trials targeted",
    image: "/heavy-industry.jpg",
    imageAlt: "Real industrial boiler or furnace facility",
  },
  {
    iconName: "factory",
    title: "Cement and heavy industry",
    description:
      "Potential fuel and feedstock route for energy-intensive sites where electrification is difficult in the near term.",
    status: "Partner discussions targeted",
    image: "/heavy-industry.jpg",
    imageAlt: "Real cement plant or heavy industrial facility",
  },
  {
    iconName: "fuel",
    title: "Refinery and blending partners",
    description:
      "A circular hydrocarbon stream designed for future blending, upgrading and specification validation with downstream partners.",
    status: "Under technical validation",
    image: "/clean-reactor.jpg",
    imageAlt: "Real refinery or fuel storage terminal",
  },
  {
    iconName: "landmark",
    title: "Petrochemical circular feedstock",
    description:
      "Longer-term circular naphtha/feedstock pathway for petrochemical value chains after quality and traceability validation.",
    status: "Certification roadmap",
    image: "/clean-reactor.jpg",
    imageAlt: "Real petrochemical plant infrastructure",
  },
  {
    iconName: "warehouse",
    title: "Waste suppliers and aggregators",
    description:
      "A higher-value destination for plastic streams that are too mixed or contaminated for mechanical recycling.",
    status: "Supply partnerships open",
    image: "/plastic-bales.jpg",
    imageAlt: "Real bales of mixed plastic waste at a material recovery facility",
  },
  {
    iconName: "truck",
    title: "Municipal and industrial waste networks",
    description:
      "Potential recovery route for plastic-rich reject streams currently moving toward landfill, dumpsites or low-value disposal.",
    status: "Feedstock mapping open",
    image: "/plastic-bales.jpg",
    imageAlt: "Real waste logistics and material handling operation",
  },
  {
    iconName: "anchor",
    title: "Port and fuel supply chains",
    description:
      "Future pathway for traceable circular liquid fuel streams near marine and industrial fuel demand centres.",
    status: "Future deployment pathway",
    image: "/ship-marine.jpg",
    imageAlt: "Real port fuel supply infrastructure",
  },
];
