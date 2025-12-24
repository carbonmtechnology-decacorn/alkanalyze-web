"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Activity, Zap, ShieldCheck } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32 lg:py-40">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 -translate-x-[20%] -translate-y-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50" />
            <div className="absolute bottom-0 right-0 translate-x-[20%] translate-y-[20%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-50" />

            <div className="container relative mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                            <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                            Real-time Pyrolysis Monitoring
                        </div>

                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Transforming Waste Into <span className="text-primary">High-Grade</span> Industrial Fuel
                        </h1>

                        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                            Alkanalyze is a smart sensor + ML system that upgrades pyrolysis plants to produce consistent, certified, diesel-grade fuel—unlocking clean energy and better economics.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                                <Link href="/contact">
                                    Partner With Us <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                                <Link href="/product">Explore Our Technology</Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Visual / Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[500px] flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                            <img
                                src="/oil.jpg"
                                alt="Golden Yellow Pyrolysis Oil"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
