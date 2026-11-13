"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Factory,
  Fuel,
  Recycle,
  ShieldCheck,
  Ship,
} from "lucide-react";

const chapters = [
  {
    icon: Recycle,
    kicker: "01 / Recover",
    title: "Difficult plastic. Useful carbon.",
    description: "Prepare polymer-rich waste streams for conversion instead of treating their hydrocarbon content as a disposal liability.",
    image: "/plastic-bales.jpg",
  },
  {
    icon: Factory,
    kicker: "02 / Convert",
    title: "Recover the hydrocarbon value.",
    description: "Thermal conversion transforms prepared plastics into hydrocarbon vapours and other recoverable fractions.",
    image: "/clean-reactor.jpg",
  },
  {
    icon: BrainCircuit,
    kicker: "03 / Optimise",
    title: "YieldBoost makes the process smarter.",
    description: "Physics-informed kinetic modelling, sensors and operating recommendations target a higher C5–C20 fraction of hydrocarbon vapour.",
    image: "/intelligence-ml.jpg",
  },
  {
    icon: ShieldCheck,
    kicker: "04 / Upgrade",
    title: "Magnet sharpens product quality.",
    description: "Our downstream upgrading layer selectively removes problematic contaminants and improves product consistency.",
    image: "/clean-reactor.jpg",
  },
  {
    icon: Fuel,
    kicker: "05 / Industrial fuel",
    title: "FuelMax for industrial heat.",
    description: "Upgraded liquid hydrocarbons intended for boilers, furnaces and other thermal applications, subject to site-specific qualification.",
    image: "/heavy-industry.jpg",
  },
  {
    icon: Ship,
    kicker: "06 / Circular feedstock",
    title: "NovaNaph for new material pathways.",
    description: "Naphtha-range hydrocarbons designed for downstream petrochemical qualification and traceable circular feedstock routes.",
    image: "/circular-economy.jpg",
  },
];

export default function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const chapterRefs = useRef<Array<HTMLElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let scheduled = 0;

    const measure = () => {
      scheduled = 0;
      const section = sectionRef.current;
      if (!section) return;
      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) return;

      // Choose the actual chapter nearest the reader's eye-line.
      // Unlike an IntersectionObserver entry list, this considers ALL chapters
      // on every relevant scroll and cannot remain stuck at the first entry.
      const eyeLine = window.innerHeight * 0.45;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      chapterRefs.current.forEach((chapter, index) => {
        if (!chapter) return;
        const rect = chapter.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - eyeLine);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });
      setActive(current => current === nearestIndex ? current : nearestIndex);
    };

    const onScroll = () => {
      if (scheduled === 0) scheduled = window.requestAnimationFrame(measure);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    measure();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (scheduled !== 0) window.cancelAnimationFrame(scheduled);
    };
  }, []);

  const jumpTo = (index: number) => {
    setActive(index);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    chapterRefs.current[index]?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "center",
    });
  };

  const current = chapters[active];

  return (
    <section
      ref={sectionRef}
      id="process-story"
      className="relative overflow-clip bg-[#081b15] text-white"
      aria-label="CarbonM scroll-driven conversion story"
    >
      <div className="pointer-events-none absolute inset-0 subtle-grid opacity-40" />
      <div className="container relative mx-auto px-5 py-20 md:px-8 lg:py-28">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-white/20 pb-7">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-300">The CarbonM process</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-[-0.035em] md:text-5xl">
              From discarded carbon <span className="font-serif font-normal italic text-emerald-300">to industrial value.</span>
            </h2>
          </div>
          <div className="hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 lg:flex">
            Scroll to explore <ArrowDownRight className="h-5 w-5 text-emerald-300" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div className="hidden lg:block lg:self-stretch">
            <div className="sticky top-28">
              <div className="relative h-[min(65vh,610px)] min-h-[440px] overflow-hidden bg-[#163a2e]">
                <Image
                  key={active}
                  src={current.image}
                  alt={current.title}
                  fill
                  loading="eager"
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover animate-[fadeIn_.45s_ease-out_both]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061710]/90 via-transparent to-[#061710]/10" />
                <div className="absolute left-7 top-7 flex items-baseline gap-2 font-black text-white">
                  <span className="text-6xl tracking-[-0.06em]">0{active + 1}</span>
                  <span className="text-xs tracking-[0.2em] text-emerald-200">/ 06</span>
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">CarbonM / Process intelligence & upgrading</p>
                    <p className="mt-3 text-2xl font-black tracking-tight">YieldBoost <span className="text-emerald-200">+</span> Magnet</p>
                  </div>
                  <div className="h-12 w-12 border-b border-r border-emerald-300/75" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2" aria-label="Process chapter navigation">
                {chapters.map((chapter, index) => (
                  <button
                    key={chapter.kicker}
                    type="button"
                    aria-label={`Go to ${chapter.kicker}: ${chapter.title}`}
                    aria-current={active === index ? "step" : undefined}
                    onClick={() => jumpTo(index)}
                    className={`h-1.5 flex-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 ${active === index ? "bg-emerald-300" : "bg-white/20 hover:bg-white/45"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 lg:border-t-0">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              return (
                <article
                  key={chapter.kicker}
                  ref={node => { chapterRefs.current[index] = node; }}
                  className="relative border-b border-white/20 py-10 lg:flex lg:min-h-[340px] lg:flex-col lg:justify-center lg:py-14"
                >
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-[#163a2e] lg:hidden">
                    <Image src={chapter.image} alt="" fill sizes="100vw" loading="lazy" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a13]/60 to-transparent" />
                    <span className="absolute bottom-4 left-5 text-5xl font-black tracking-tight text-white">0{index + 1}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon className={`h-6 w-6 ${active === index ? "text-emerald-300" : "text-slate-400"}`} strokeWidth={1.5} />
                    <span className="text-xs font-black uppercase tracking-[0.23em] text-emerald-300">{chapter.kicker}</span>
                  </div>
                  <h3 className={`mt-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.04em] md:text-4xl xl:text-5xl ${active === index ? "text-white" : "text-slate-200"}`}>
                    {chapter.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">{chapter.description}</p>
                </article>
              );
            })}
            <Link
              href="/technology"
              className="mt-10 inline-flex items-center gap-3 border-b border-emerald-300 pb-3 text-sm font-black uppercase tracking-[0.14em] text-emerald-300 hover:text-white"
            >
              Understand the technology <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
