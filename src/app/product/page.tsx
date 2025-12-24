"use client";

import { motion } from "framer-motion";
import HowItWorks from "@/components/HowItWorks";
import { CheckCircle2, Factory, TrendingUp, ShieldCheck, Zap, BarChart3, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ProductPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Intro Section */}
            <section className="py-20 md:py-32 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            What is <span className="text-secondary">Alkanalyze?</span>
                        </h1>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed">
                            Alkanalyze is a real-time combustion sensor paired with a machine learning model that measures vapor quality inside pyrolysis reactors and automatically adjusts process parameters to ensure perfection.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <HowItWorks />

            {/* Key Features */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: "Real-time Monitoring", icon: BarChart3, desc: "Instant feedback on fuel quality during production." },
                            { title: "Closed-loop Control", icon: Settings2, desc: "Automated parameter adjustment for optimal yield." },
                            { title: "Modular Design", icon: Factory, desc: "Easily retrofittable into any existing plant setup." },
                            { title: "Cloud Analytics", icon: Zap, desc: "Remote dashboard for tracking performance and history." },
                            { title: "Industrial Robustness", icon: ShieldCheck, desc: "Built to withstand harsh industrial environments." },
                            { title: "AI-Driven Accuracy", icon: TrendingUp, desc: "Physics-driven ML model for precise predictions." },
                        ].map((feature, i) => (
                            <Card key={i} className="border-white/10 hover:border-primary/50 transition-colors bg-white/5">
                                <CardHeader>
                                    <feature.icon className="h-8 w-8 text-primary mb-2" />
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                        {/* For Plant Owners */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                                <Factory className="h-6 w-6" /> For Pyrolysis Plant Owners
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Higher selling price per liter",
                                    "Consistent yield across batches",
                                    "Eliminate operational guesswork",
                                    "Certification-ready output",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* For Consumers */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-accent flex items-center gap-2">
                                <TrendingUp className="h-6 w-6" /> For Industrial Consumers
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Cleaner combustion & lower emissions",
                                    "Reliable, standardized quality",
                                    "Reduced cost compared to pure diesel",
                                    "Stable supply chain",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Pilot Placeholder */}
            <section className="py-20 bg-primary/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Plant?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join the pilot program and see the difference in quality and profitability.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
