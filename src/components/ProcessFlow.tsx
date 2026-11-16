"use client";
import { Factory, Fuel, Gauge, Recycle, ScanLine, ShieldCheck } from "lucide-react";
const steps=[
{icon:Recycle,title:"Feedstock",text:"Prepare and characterise polymer-rich waste."},
{icon:ScanLine,title:"Conversion",text:"Recover useful hydrocarbon fractions by controlled thermal processing."},
{icon:Gauge,title:"YieldBoost",text:"Optimise process conditions for valuable vapour fractions."},
{icon:Factory,title:"Magnet",text:"Reduce contaminants through downstream oil upgrading."},
{icon:ShieldCheck,title:"Quality control",text:"Verify physical and chemical product specifications."},
{icon:Fuel,title:"Products",text:"FuelMax for industrial heat; NovaNaph for petrochemical feedstock."}
];
export default function ProcessFlow(){return <div className="relative overflow-hidden rounded-[2rem] bg-[#07110d] p-5 text-white md:p-8"><div className="relative grid gap-0 lg:grid-cols-6">{steps.map((step,i)=>{const Icon=step.icon;return <div key={step.title} className="border-b border-white/10 py-6 last:border-b-0 lg:border-b-0 lg:border-r lg:px-5 lg:last:border-r-0"><span className="text-xs font-bold text-emerald-300">0{i+1}</span><Icon className="mt-4 h-7 w-7 text-emerald-200"/><h3 className="mt-4 text-xl font-black text-white">{step.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p></div>})}</div></div>}