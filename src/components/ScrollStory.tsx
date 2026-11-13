"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, BrainCircuit, Factory, Fuel, Recycle, ShieldCheck, Ship } from "lucide-react";

const steps = [
 { icon:Recycle,title:"Difficult plastic, useful carbon",description:"Polymer-rich waste streams are characterised and prepared as a source of recoverable hydrocarbons.",image:"/plastic-bales.jpg" },
 { icon:Factory,title:"Controlled hydrocarbon conversion",description:"Prepared plastic is thermally converted into vapours, liquid hydrocarbon fractions and other recovered streams.",image:"/clean-reactor.jpg" },
 { icon:BrainCircuit,title:"YieldBoost optimises the process",description:"Physics-informed kinetic models and sensor data inform operating recommendations targeting a higher C5–C20 share of hydrocarbon vapour.",image:"/intelligence-ml.jpg" },
 { icon:ShieldCheck,title:"Magnet upgrades the oil",description:"Selective downstream treatment and separation reduce undesirable contaminants while preserving useful hydrocarbon value.",image:"/clean-reactor.jpg" },
 { icon:Fuel,title:"FuelMax for industrial heat",description:"Upgraded liquid fuel is assessed for boilers, furnaces and other thermal equipment against application-specific needs.",image:"/heavy-industry.jpg" },
 { icon:Ship,title:"NovaNaph and circular feedstocks",description:"Naphtha-range hydrocarbon products target petrochemical qualification and certified circular material pathways.",image:"/circular-economy.jpg" }
];

export default function ScrollStory(){
 const [active,setActive]=useState(0);
 const nodes=useRef<Array<HTMLElement|null>>([]);
 useEffect(()=>{
  const observer=new IntersectionObserver(entries=>{
   const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
   if(visible.length){const index=Number((visible[0].target as HTMLElement).dataset.index);if(Number.isInteger(index))setActive(index);}
  },{rootMargin:"-28% 0px -28% 0px",threshold:[0,.25,.5,.75]});
  nodes.current.forEach(el=>{if(el)observer.observe(el);});
  return ()=>observer.disconnect();
 },[]);
 const current=steps[active];
 return <section className="relative mesh-industrial text-white" id="process-story" aria-label="CarbonM visual process story">
  <div className="absolute inset-0 subtle-grid pointer-events-none" />
  <div className="container relative mx-auto px-4 md:px-6">
   <div className="grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-28">
    <div className="lg:sticky lg:top-28 lg:self-start">
     <div className="relative h-[400px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0c1914] shadow-2xl shadow-black/30 sm:h-[510px]">
      <Image key={current.image+"-"+active} src={current.image} alt={current.title} fill sizes="(min-width:1024px) 44vw, 100vw" className="object-cover animate-[fadeIn_.45s_ease-out_both]" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07110d] via-[#07110d]/20 to-transparent" />
      <div className="absolute right-6 top-6 rounded-full border border-emerald-300/30 bg-emerald-950/80 px-4 py-2 text-xs font-black tracking-[.14em] text-emerald-200">0{active+1} / 06</div>
      <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
       <span className="text-xs font-black uppercase tracking-[.2em] text-emerald-300">The CarbonM process</span>
       <h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight md:text-5xl">{current.title}</h2>
       <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">{current.description}</p>
       <div className="mt-6 flex items-center gap-2 text-xs text-emerald-200"><ArrowDown className="h-4 w-4" /> Scroll to explore</div>
      </div>
     </div>
     <div className="mt-4 flex gap-2" role="group" aria-label="Story chapter navigation">
      {steps.map((step,i)=><button key={step.title} type="button" aria-label={`Show step ${i+1}: ${step.title}`} aria-current={active===i?"step":undefined} onClick={()=>{setActive(i);nodes.current[i]?.scrollIntoView({behavior:"smooth",block:"center"});}} className={`h-1.5 flex-1 rounded-full transition-colors ${active===i?"bg-emerald-300":"bg-white/20 hover:bg-white/40"}`} />)}
     </div>
    </div>
    <div className="relative">
     <div className="absolute bottom-10 left-5 top-6 w-px bg-white/15" />
     <div className="absolute left-5 top-6 w-px bg-emerald-300" style={{height:`${(active+1)/steps.length*100}%`,maxHeight:"calc(100% - 5rem)",transition:"height 350ms ease"}} />
     {steps.map((step,i)=>{const Icon=step.icon;return <article key={step.title} data-index={i} ref={el=>{nodes.current[i]=el;}} className="relative ml-14 flex min-h-[215px] flex-col justify-center border-b border-white/10 py-11 last:border-b-0 lg:min-h-[295px]">
      <div className={`absolute -left-[3.75rem] top-12 flex h-10 w-10 items-center justify-center rounded-full border bg-[#07110d] transition-colors ${active===i?"border-emerald-300 text-emerald-300":"border-white/20 text-slate-500"}`}><Icon className="h-5 w-5"/></div>
      <span className="text-xs font-black tracking-[.23em] text-emerald-300">0{i+1}</span>
      <h3 className={`mt-3 text-2xl font-black tracking-tight transition-colors md:text-4xl ${active===i?"text-white":"text-slate-300"}`}>{step.title}</h3>
      <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">{step.description}</p>
     </article>})}
     <Link href="/technology" className="ml-14 mt-8 inline-flex items-center gap-2 font-bold text-emerald-300 hover:text-white">Explore YieldBoost and Magnet <ArrowRight className="h-4 w-4" /></Link>
    </div>
   </div>
  </div>
 </section>
}
