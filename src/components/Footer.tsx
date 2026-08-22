import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  technology: [
    { name: "Technology Overview", href: "/technology" },
    { name: "Oleum V1", href: "/technology/oleum-v1" },
    { name: "Alkanalyze", href: "/technology/alkanalyze" },
    { name: "Outputs and Lab Data", href: "/outputs" },
  ],
  company: [
    { name: "Applications", href: "/applications" },
    { name: "Impact", href: "/impact" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
  ],
  partners: [
    { name: "Partner With Us", href: "/contact" },
    { name: "Waste Suppliers", href: "/contact" },
    { name: "Marine & Industrial", href: "/contact" },
    { name: "Investors", href: "/contact" },
  ],
};

const emails = ["shashwatsharma@carbonmfuel.com", "mihirtomar@carbonmfuel.com", "carbonmtechnology@gmail.com"];
const phones = ["+91 9373059882", "+91 9765766430"];

export default function Footer() {
  return (
    <footer className="bg-[#07110d] text-sm text-slate-400">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative flex h-12 w-12 overflow-hidden rounded-2xl bg-white ring-1 ring-white/20">
                <Image src="/carbonm-logo.png" alt="CarbonM FuelMax Technology logo" fill sizes="48px" className="object-contain p-1" />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-black text-white">CarbonM</span>
                <span className="block text-xs font-semibold text-emerald-300">FuelMax Technology Pvt Ltd</span>
              </span>
            </Link>
            <p className="max-w-sm leading-relaxed">
              Converting non-recyclable plastic waste into circular fuel/feedstock for ships and heavy industry through Oleum V1 and Alkanalyze.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>
                  W-54, Rakesh Kapoor Innovation Centre,
                  <br /> BITS Pilani, Pilani Campus,
                  <br /> Rajasthan - 333031
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <div className="space-y-1">
                  {emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="block hover:text-white">
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <div className="space-y-1">
                  {phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-white">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-white">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="transition-colors hover:text-emerald-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} CarbonM FuelMax Technology Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/resources" className="hover:text-emerald-300">Resources</Link>
            <Link href="/contact" className="hover:text-emerald-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
