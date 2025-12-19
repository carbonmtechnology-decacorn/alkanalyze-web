
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Thermometer, Brain, Sliders, Droplet } from "lucide-react";

const steps = [
    {
        icon: Thermometer,
        title: "1. Vapor Analysis",
        description: "Sensor continuously analyzes pyrolysis vapors inside the reactor in real-time.",
    },
    {
        icon: Brain,
        title: "2. Intelligent Prediction",
        description: "ML model predicts oil quality parameters (viscosity, calorific value) instantly.",
    },
    {
        icon: Sliders,
        title: "3. Auto-Correction",
        description: "System recommends or automatically adjusts process parameters (temp, pressure).",
    },
    {
        icon: Droplet,
        title: "4. Certified Output",
        description: "Production yields consistent, high-grade fuel ready for industrial use.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-background overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        From raw vapor to certified fuel in 4 intelligent steps.
                    </p>
                </div>

                <div className="relative grid gap-8 md:grid-cols-4">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />

                    {steps.map((step, index) => {
                        const Icon = step.title.includes("Output") ? Droplet : step.icon; // Fix icon usage

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative flex flex-col items-center text-center space-y-4"
                            >
                                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-background border-4 border-primary/20 shadow-xl shadow-primary/5">
                                    <Icon className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>

                                {index < steps.length - 1 && (
                                    <div className="md:hidden flex justify-center py-4">
                                        <ArrowRight className="text-muted-foreground" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
