"use client";

import { motion } from "framer-motion";
import { TreePine, Users, Globe2, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ImpactPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Intro */}
            <section className="py-20 md:py-32 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                        Impact Beyond <span className="text-primary">Profit</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We aren&apos;t just improving industrial efficiency. We&apos;re diverting reduced plastic from landfills, cleaning the air, and empowering local communities.
                    </p>
                </div>
            </section>

            {/* Metrics Grid */}
            <section className="py-12 bg-background -mt-10 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-card border rounded-2xl p-8 shadow-lg">
                        {[
                            { label: "Waste Diverted", value: "1000+", unit: "Tons", icon: TreePine },
                            { label: "Emissions Reduced", value: "500+", unit: "Tons CO₂e", icon: Globe2 },
                            { label: "Jobs Supported", value: "50+", unit: "Direct/Indirect", icon: Users },
                            { label: "Plants Onboarded", value: "25+", unit: "Analyzed", icon: BarChart },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-center text-primary mb-2">
                                    <stat.icon className="h-6 w-6" />
                                </div>
                                <div className="text-3xl font-bold">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                                <div className="text-xs text-primary/70 font-medium">{stat.unit}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Impact Sections */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 space-y-24">

                    {/* Environmental */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative h-[300px] bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl overflow-hidden flex items-center justify-center">
                            <TreePine className="h-32 w-32 text-green-700/50" />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Globe2 className="text-primary" /> Environmental Stewardship
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                By optimizing pyrolysis, we ensure complete combustion and higher efficiency. This means:
                            </p>
                            <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                                <li>Thousands of tonnes of plastic diverted from landfills.</li>
                                <li>Significant reduction in landfill fires and toxic fumes.</li>
                                <li>Better air quality in industrial clusters.</li>
                                <li>Lower carbon footprint for industrial fuel consumers.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Users className="text-accent" /> Social Empowerment
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Technology should lift everyone. Our model creates:
                            </p>
                            <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                                <li>Improved livelihoods for MSME operators through higher margins.</li>
                                <li>Safer living conditions for communities near landfills.</li>
                                <li>New jobs in waste collection, logistics, and plant operations.</li>
                                <li>Support for local green entrepreneurs.</li>
                            </ul>
                        </div>
                        <div className="relative h-[300px] bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl overflow-hidden flex items-center justify-center">
                            <Users className="h-32 w-32 text-blue-700/50" />
                        </div>
                    </div>

                </div>
            </section>

            {/* Scale Goal */}
            <section className="py-20 bg-black text-center text-white">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6">Our 2030 Vision</h2>
                    <p className="text-xl text-gray-400 mb-12">
                        At 500 plants, we aim to transform 10+ million lives through cleaner air, waste reduction, and economic growth.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                            <div className="text-4xl font-bold text-primary mb-2">15k+</div>
                            <div className="text-sm">Jobs Created</div>
                        </div>
                        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                            <div className="text-4xl font-bold text-accent mb-2">5M+</div>
                            <div className="text-sm">People with Cleaner Air</div>
                        </div>
                        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                            <div className="text-4xl font-bold text-secondary mb-2">8M+</div>
                            <div className="text-sm">People with Less Waste</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
