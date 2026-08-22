"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CTASectionProps {
  headline: string;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  dark?: boolean;
}

export default function CTASection({
  headline,
  description,
  primaryCTA = { label: "Partner With Us", href: "/contact" },
  secondaryCTA,
  dark = true,
}: CTASectionProps) {
  return (
    <section className={`relative overflow-hidden py-24 ${dark ? "section-dark" : "section-soft"}`}>
      {dark && (
        <>
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-teal-300/10 blur-[100px]" />
        </>
      )}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className={`eyebrow mb-5 ${dark ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-300" : "border-emerald-900/10 bg-emerald-900/5 text-emerald-700"}`}>
              Build with us
            </span>
            <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${dark ? "text-white" : "text-foreground"}`}>
              {headline}
            </h2>
            <p className={`mx-auto mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-slate-300" : "text-muted-foreground"}`}>
              {description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant={dark ? "secondary" : "default"} asChild>
                <Link href={primaryCTA.href}>
                  {primaryCTA.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {secondaryCTA && (
                <Button size="lg" variant={dark ? "light" : "outline"} asChild>
                  <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                </Button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
