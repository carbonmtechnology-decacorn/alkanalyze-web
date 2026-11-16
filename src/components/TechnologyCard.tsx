"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechnologyCardProps {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  href?: string;
}

export default function TechnologyCard({
  icon: Icon, name, tagline, description, features, specs,
  image, imageAlt, reverse = false, href,
}: TechnologyCardProps) {
  const destination = href ?? (name === "Magnet" ? "/technology/magnet" : "/technology/yieldboost");
  return (
    <article className="border-t border-emerald-950/25 pt-7">
      <div className={cn("grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14", reverse && "lg:grid-cols-[1.1fr_0.9fr]")}>
        <div className={cn("relative min-h-[360px] overflow-hidden bg-[#0b2821] md:min-h-[500px]", reverse && "lg:order-2")}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            loading="lazy"
            sizes="(min-width:1024px) 47vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081b15]/85 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <Icon className="h-8 w-8 text-emerald-300" strokeWidth={1.3} />
            <p className="mt-5 max-w-xl text-2xl font-black leading-tight tracking-tight text-white md:text-3xl">{tagline}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center pb-5 lg:py-7">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">
            CarbonM / {name === "YieldBoost" ? "Conversion intelligence" : "Oil upgrading"}
          </p>
          <h3 className="mt-6 text-5xl font-black tracking-[-0.055em] text-[#08251b] md:text-7xl">{name}</h3>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#43574e]">{description}</p>
          <div className="mt-8 border-t border-emerald-950/20">
            {features.slice(0, 3).map((feature, i) => (
              <div key={feature} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-emerald-950/15 py-4">
                <span className="text-xs font-bold text-emerald-700">0{i + 1}</span>
                <span className="text-sm leading-7 text-[#293e34]">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-9 gap-y-4">
            {specs.slice(0, 2).map(spec => (
              <div key={spec.label}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">{spec.label}</p>
                <p className="mt-2 max-w-[200px] text-sm font-semibold leading-6 text-[#102c21]">{spec.value}</p>
              </div>
            ))}
          </div>
          <Link href={destination} className="mt-9 inline-flex w-fit items-center gap-3 border-b border-emerald-900 pb-2 text-sm font-black uppercase tracking-[0.12em] text-emerald-900 hover:text-emerald-600">
            Explore {name} <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
