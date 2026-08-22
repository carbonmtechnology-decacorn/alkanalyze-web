import Image from "next/image";
import { Building2, Factory, FlaskConical, Fuel, Mail, MapPin, Phone, Ship, Trash2, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const partnerTypes = [
  { icon: Trash2, title: "Waste suppliers", description: "Plastic-rich streams, MRF rejects, industrial plastic waste and aggregator partnerships." },
  { icon: Fuel, title: "Industrial fuel buyers", description: "Boilers, furnaces and fuel users evaluating circular liquid fuel/feedstock pathways." },
  { icon: Ship, title: "Marine and blending partners", description: "Shipping, bunker fuel, terminal and fuel blending validation discussions." },
  { icon: Factory, title: "Cement and heavy industry", description: "High-heat industrial sites interested in dense circular carbon alternatives." },
  { icon: Building2, title: "Refinery and petrochemical partners", description: "Future upgrading, blending and circular feedstock collaboration pathways." },
  { icon: FlaskConical, title: "Testing and research partners", description: "Labs, universities and validation partners for fuel/feedstock characterization." },
  { icon: Users, title: "Investors", description: "Climate-tech, deep-tech, circular economy and industrial decarbonization investors." },
];

const emails = [
  "shashwatsharma@carbonmfuel.com",
  "mihirtomar@carbonmfuel.com",
  "carbonmtechnology@gmail.com",
];

const phones = ["+91 9373059882", "+91 9765766430"];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pt-28 section-dark">
        <div className="absolute inset-0">
          <Image src="/ship-marine.jpg" alt="Real port and industrial fuel infrastructure" fill priority sizes="100vw" className="object-cover opacity-32" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110d] via-[#07110d]/90 to-[#07110d]/30" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 md:px-6">
          <div className="max-w-4xl">
            <span className="eyebrow border-emerald-300/20 bg-emerald-300/10 text-emerald-300">Partner with us</span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.05]">
              Work with CarbonM to turn landfill-bound plastic into circular industrial fuel.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Reach out directly for waste supply, fuel trials, marine blending, research, testing or investment conversations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-soft py-24 md:py-32">
        <div className="container mx-auto grid gap-14 px-4 md:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              label="Direct contact"
              title="No form. Write or call us directly."
              subtitle="For fastest routing, mention whether you are a waste supplier, fuel buyer, marine partner, investor, testing partner or other industrial partner."
              centered={false}
            />
            <ScrollReveal>
              <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[#07110d] text-white shadow-2xl shadow-emerald-950/10">
                <div className="border-b border-white/10 p-6">
                  <div className="flex items-center gap-3 text-emerald-200">
                    <Mail className="h-5 w-5" strokeWidth={1.7} />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">Email</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {emails.map((email) => (
                      <a key={email} href={`mailto:${email}`} className="block text-lg font-bold tracking-tight text-white transition-colors hover:text-emerald-200">
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="border-b border-white/10 p-6">
                  <div className="flex items-center gap-3 text-emerald-200">
                    <Phone className="h-5 w-5" strokeWidth={1.7} />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">Phone</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block text-lg font-bold tracking-tight text-white transition-colors hover:text-emerald-200">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-emerald-200">
                    <MapPin className="h-5 w-5" strokeWidth={1.7} />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">Address</span>
                  </div>
                  <p className="mt-5 text-base leading-7 text-slate-200">
                    W-54, Rakesh Kapoor Innovation Centre,<br />BITS Pilani, Pilani Campus,<br />Rajasthan - 333031
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <SectionHeader
              label="Who should reach out"
              title="Partnerships across the waste-to-fuel chain."
              subtitle="CarbonM is not looking for generic leads; we are building validation pathways with specific partners."
              centered={false}
            />
            <div className="divide-y divide-emerald-900/10 overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[#fffdf8] shadow-sm">
              {partnerTypes.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={i * 0.03}>
                    <div className="group grid gap-4 p-5 transition-colors hover:bg-emerald-50/70 md:grid-cols-[4rem_1fr] md:p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-900/10 bg-white text-emerald-700 transition-transform group-hover:scale-105">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black tracking-tight text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
