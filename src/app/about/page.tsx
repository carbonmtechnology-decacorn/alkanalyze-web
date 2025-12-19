"use client";

import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero / Story */}
            <section className="py-20 md:py-32 bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-8">
                            Born from <span className="text-primary">Discovery</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            Our journey began with a road trip to over 25 pyrolysis plants across India. We saw firsthand the challenges operators faced: inconsistent output, lack of real-time data, and the struggle to produce industrial-grade fuel.
                        </p>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We realized the solution wasn't just better hardware—it was intelligence. By combining chemical engineering principles with machine learning, we built Alkanalyze to bridge the gap between waste and reliable energy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                                <Target className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold">Our Mission</h2>
                            <p className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                                "To make waste-to-fuel reliable, profitable, and environmentally sustainable for every pyrolysis plant."
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                                <Rocket className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold">Our Vision</h2>
                            <p className="text-lg text-muted-foreground italic border-l-4 border-accent pl-4">
                                "To build India&apos;s largest decentralized green fuel network and set global standards for clean industrial energy."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Meet the Team</h2>
                        <p className="text-muted-foreground text-lg">
                            A blend of chemical engineers, combustion researchers, and ML developers.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Founders */}
                        <Card className="bg-muted/50 border-none">
                            <CardHeader>
                                <CardTitle>Mihir Tomar</CardTitle>
                                <p className="text-primary text-sm font-medium">Founder</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Chemical Engineering & Tech Lead</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/50 border-none">
                            <CardHeader>
                                <CardTitle>Shashwat Sharma</CardTitle>
                                <p className="text-primary text-sm font-medium">Co-Founder</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Business & Strategy</p>
                            </CardContent>
                        </Card>

                        {/* Advisors */}
                        <Card className="bg-muted/50 border-none">
                            <CardHeader>
                                <CardTitle>Prof. Satyapaul A. Singh</CardTitle>
                                <p className="text-accent text-sm font-medium">Mentor & Advisor</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Assoc. Professor, BITS Pilani (Chem. Engg)</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/50 border-none">
                            <CardHeader>
                                <CardTitle>Prof. Preeti</CardTitle>
                                <p className="text-accent text-sm font-medium">Mentor & Advisor</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Assoc. Professor, JSPM (Physical Chemistry)</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-20 border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Philosophy</h2>
                    <div className="grid gap-8 md:grid-cols-4">
                        {[
                            { title: "Science-Driven", icon: Lightbulb },
                            { title: "Sustainability First", icon: Rocket }, // Reusing Rocket/Leaf metaphor
                            { title: "Accessible Tech", icon: Users },
                            { title: "Transparency", icon: Target }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
