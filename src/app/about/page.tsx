"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RiGroupLine, RiFocus3Line, RiLightbulbFlashLine, RiPlantLine, RiRocketLine } from "react-icons/ri";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero / Story */}
            <section className="py-20 md:py-32 bg-primary relative overflow-hidden text-primary-foreground">
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
                            Our journey as a BITSian startup began with a road trip to over 25 pyrolysis plants across India. Beyond the technical inefficiencies, we witnessed the harsh reality: hazardous working conditions for laborers and toxic emissions affecting nearby communities. We saw firsthand the struggle to produce industrial-grade fuel while maintaining safety and sustainability.
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
                                <RiFocus3Line className="h-6 w-6" />
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
                                <RiRocketLine className="h-6 w-6" />
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

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Left: Content/Bios */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">Meet the Team</h2>
                            <p className="text-muted-foreground text-lg mb-4">
                                Driven by a shared vision to revolutionize industrial sustainability.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-xl text-primary">Mihir Tomar</h3>
                                    <p className="text-sm text-secondary font-medium mb-1">Co-Founder & CEO</p>
                                    <p className="text-muted-foreground">
                                        Specializing in Chemical and Process Engineering, Mihir leads the technical vision and overall direction of CarbonM, ensuring our solutions are grounded in scientific rigor and industrial viability.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl text-primary">Shashwat Sharma</h3>
                                    <p className="text-sm text-secondary font-medium mb-1">Co-Founder & CTO</p>
                                    <p className="text-muted-foreground">
                                        An expert in Machine Learning, IoT, and Business Development, Shashwat drives the intelligent automation behind Alkanalyze and spearheads strategic partnerships to scale our technology.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Team Image */}
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                            <img
                                src="/team.jpeg"
                                alt="Team CarbonM"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Founders */}
                        <Card className="bg-white border text-foreground shadow-sm">
                            <CardHeader>
                                <CardTitle>Mihir Tomar</CardTitle>
                                <p className="text-secondary font-bold text-sm">Co-Founder & CEO</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-medium mb-1">Chemical and Process Engineering and Operations</p>
                                <p className="text-sm text-secondary font-medium mb-1">BITS Pilani, Hyderabad Campus</p>
                                <p className="text-sm text-muted-foreground">+91 9765766430</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border text-foreground shadow-sm">
                            <CardHeader>
                                <CardTitle>Shashwat Sharma</CardTitle>
                                <p className="text-secondary font-bold text-sm">Co-Founder & CTO</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-medium mb-1">ML, IoT and Business Development</p>
                                <p className="text-sm text-secondary font-medium mb-1">BITS Pilani, Hyderabad Campus</p>
                                <p className="text-sm text-muted-foreground">+91 9373059882</p>
                            </CardContent>
                        </Card>

                        {/* Advisors */}
                        <Card className="bg-white border text-foreground shadow-sm">
                            <CardHeader>
                                <CardTitle>Prof. Satyapaul A. Singh</CardTitle>
                                <p className="text-accent font-bold text-sm">Mentor & Advisor</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Assoc. Professor, BITS Pilani (Chem. Engg)</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border text-foreground shadow-sm">
                            <CardHeader>
                                <CardTitle>Prof. Preeti</CardTitle>
                                <p className="text-accent font-bold text-sm">Mentor & Advisor</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Assoc. Professor, JSPM (Physical Chemistry)</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-20 bg-muted/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="bg-background border-primary/20">
                            <CardContent className="pt-6">
                                <div className="h-12 w-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <RiRocketLine className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">SIRE Grant Recipient</h3>
                                <p className="text-muted-foreground">
                                    Student Interdisciplinary Research and Entrepreneurship Grant, BITS Pilani
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-background border-primary/20">
                            <CardContent className="pt-6">
                                <div className="h-12 w-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <RiLightbulbFlashLine className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">TIDE 2.0 Grant</h3>
                                <p className="text-muted-foreground">
                                    Trusted Innovation and Development for Entrepreneurship
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-background border-primary/20">
                            <CardContent className="pt-6">
                                <div className="h-12 w-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <RiGroupLine className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Social Innovator Fellowship</h3>
                                <p className="text-muted-foreground">
                                    Schaeffler India Social Innovator Fellowship
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-20 border-t border-black/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Philosophy</h2>
                    <div className="grid gap-8 md:grid-cols-4">
                        {[
                            { title: "Science-Driven", icon: RiLightbulbFlashLine },
                            { title: "Sustainability First", icon: RiPlantLine },
                            { title: "Accessible Tech", icon: RiGroupLine },
                            { title: "Transparency", icon: RiFocus3Line }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
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
