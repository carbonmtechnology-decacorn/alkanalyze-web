"use client";

import { motion } from "framer-motion";
import { TreePine, Users, Globe2, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ImpactPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Intro */}
            <section className="py-20 md:py-32 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                        Impact Beyond <span className="text-secondary">Profit</span>
                    </h1>
                    <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                        We aren&apos;t just improving industrial efficiency. We&apos;re diverting reduced plastic from landfills, cleaning the air, and empowering local communities.
                    </p>
                </div>
            </section>

            {/* Metrics Grid */}
            <section className="py-12 bg-background -mt-10 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center bg-card border rounded-2xl p-8 shadow-lg">
                        {[
                            { label: "Plant Workers Benefited", value: "20,000+", unit: "Lives Impacted", icon: Users },
                            { label: "Cleaner Air for", value: "8M+", unit: "People near Landfills", icon: Globe2 },
                            { label: "Industrial Air Quality", value: "5M+", unit: "People Benefited", icon: TreePine },
                            { label: "Plants Scaled", value: "500", unit: "Target Pyrolysis Plants", icon: BarChart },
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

                    {/* Worker Impact */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative h-[300px] bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl overflow-hidden flex items-center justify-center">
                            <Users className="h-32 w-32 text-green-700/50" />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Users className="text-primary" /> Empowering the Workforce
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                By scaling-up to 500 pyrolysis plants, our innovation will directly benefit an estimated <strong>15,000–20,000 workers</strong> involved in plant operations, waste collection, logistics, and fuel processing.
                            </p>
                            <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                                <li>Safer working environments through automated monitoring.</li>
                                <li>Higher skill development for plant operators.</li>
                                <li>Stable livelihoods in the green energy sector.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Community Impact */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Globe2 className="text-accent" /> Healthier Communities
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Our technology directly improves air quality, soil safety, and living conditions for the <strong>6–8 million people</strong> who reside near India’s major landfills and dumping grounds.
                            </p>
                            <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                                <li>Reduction in toxic emissions and landfill fires.</li>
                                <li>Prevention of groundwater contamination.</li>
                                <li>Lower incidence of respiratory illnesses in nearby communities.</li>
                            </ul>
                        </div>
                        <div className="relative h-[300px] bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl overflow-hidden flex items-center justify-center">
                            <Globe2 className="h-32 w-32 text-blue-700/50" />
                        </div>
                    </div>

                    {/* Industrial Impact */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative h-[300px] bg-gradient-to-br from-orange-900/20 to-amber-900/20 rounded-2xl overflow-hidden flex items-center justify-center">
                            <TreePine className="h-32 w-32 text-orange-700/50" />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <TreePine className="text-secondary" /> Bio-energy Transition
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                By replacing diesel and furnace oil with cleaner pyrolysis-based fuel, we improve air quality in industrial regions, benefiting an additional <strong>3–5 million people</strong> living near manufacturing clusters.
                            </p>
                            <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                                <li>Cleaner industrial emissions.</li>
                                <li>Reduced dependence on imported fossil fuels.</li>
                                <li>Promotion of a circular economy.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
