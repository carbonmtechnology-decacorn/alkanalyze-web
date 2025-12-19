"use client";

import { motion } from "framer-motion";

export default function Overview() {
    return (
        <section className="py-20 bg-background border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        What We Do
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We retrofit existing pyrolysis plants with automated, <span className="text-primary font-medium">AI-driven process control</span>.
                        This helps operators produce uniform, high-value fuel that industries can trust—transforming waste processing into a precision science.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
