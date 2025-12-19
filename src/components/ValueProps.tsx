"use client";

import { motion } from "framer-motion";
import { Gauge, TrendingUp, Leaf, Recycle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const values = [
    {
        icon: Gauge,
        title: "Consistent Fuel Quality",
        description: "Real-time monitoring ensures industrial-grade output that meets strict standards.",
    },
    {
        icon: TrendingUp,
        title: "More Profit for MSMEs",
        description: "Sell at higher prices with standardized, certified fuel.",
    },
    {
        icon: Leaf,
        title: "Clean Energy for Industry",
        description: "A greener, lower-emission alternative to diesel and furnace oil.",
    },
    {
        icon: Recycle,
        title: "Less Waste in Landfills",
        description: "Turning plastic and rubber waste into value instead of pollution.",
    },
];

export default function ValueProps() {
    return (
        <section className="bg-muted/50 py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Why Choose Alkanalyze?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Empowering the circular economy with precision technology.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-primary/10 bg-background/50 backdrop-blur hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <value.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
