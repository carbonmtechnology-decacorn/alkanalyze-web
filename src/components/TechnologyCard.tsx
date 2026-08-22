"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
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
  icon: Icon,
  name,
  tagline,
  description,
  features,
  specs,
  image,
  imageAlt,
  reverse = false,
  href,
}: TechnologyCardProps) {
  const linkHref = href ?? (name.toLowerCase().includes("oleum") ? "/technology/oleum-v1" : "/technology/alkanalyze");

  return (
    <ScrollReveal>
      <article className={cn("grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch", reverse && "lg:grid-cols-[1.05fr_0.95fr]")}> 
        <div className={cn("relative min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-emerald-950/10", reverse && "lg:order-2")}> 
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07110d] via-[#07110d]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-emerald-200 backdrop-blur-xl">
              <Icon className="h-6 w-6" strokeWidth={1.7} />
            </div>
            <h3 className="mt-5 text-4xl font-black tracking-tight text-white md:text-5xl">{name}</h3>
            <p className="mt-3 max-w-xl text-base font-semibold text-emerald-200">{tagline}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center border-y border-emerald-900/10 py-10 lg:py-0">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.26em] text-emerald-700">Technology layer</span>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-foreground md:text-5xl">{name}</h3>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex gap-3 border-t border-emerald-900/10 pt-4">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span className="text-sm leading-7 text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-0 overflow-hidden rounded-[1.7rem] border border-emerald-900/10 bg-[#fffdf8] md:grid-cols-2">
            {specs.map((spec, index) => {
              const isLastRow = index >= specs.length - 2;
              const isLeftColumn = index % 2 === 0;
              return (
                <div
                  key={spec.label}
                  className={cn(
                    "border-b border-emerald-900/10 p-4",
                    isLeftColumn && "md:border-r",
                    isLastRow && "md:border-b-0",
                    index === specs.length - 1 && "border-b-0"
                  )}
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{spec.label}</div>
                  <div className="mt-2 text-sm font-black leading-relaxed text-foreground">{spec.value}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Button variant="default" asChild>
              <Link href={linkHref}>
                Explore {name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
