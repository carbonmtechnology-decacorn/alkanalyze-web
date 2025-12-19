"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardContent } from "@/components/ui/Card";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission logic
        alert("Thank you for your message! This is a demo form.");
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">

            {/* Header */}
            <section className="py-20 md:py-32 bg-primary/5 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4">
                        Let&apos;s Build the <span className="text-primary">Future</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Whether you&apos;re a pyrolysis plant owner ready to upgrade or an industrial fuel consumer seeking consistency—we&apos;re here to help.
                    </p>
                </motion.div>
            </section>

            {/* Content Grid */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="Your Name" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="you@company.com" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="org" className="text-sm font-medium">Organization</label>
                                <Input id="org" placeholder="Company Name" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" required />
                            </div>

                            <Button type="submit" size="lg" className="w-full sm:w-auto">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </motion.div>

                    {/* Direct Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Direct Contact</h2>
                            <p className="text-muted-foreground mb-8">
                                Prefer to reach out directly? Our team is standing by.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <Card className="bg-muted/50 border-none hover:bg-muted/80 transition-colors">
                                <CardContent className="flex items-start gap-4 p-6">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email Us</h3>
                                        <a href="mailto:contact@alkanalyze.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            contact@alkanalyze.com
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/50 border-none hover:bg-muted/80 transition-colors">
                                <CardContent className="flex items-start gap-4 p-6">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Visit Us</h3>
                                        <address className="text-muted-foreground not-italic whitespace-pre-line">
                                            W-54, Rakesh Kapoor Innovation Centre,{'\n'}
                                            BITS Pilani, Pilani Campus,{'\n'}
                                            Rajasthan - 333031
                                        </address>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/50 border-none hover:bg-muted/80 transition-colors">
                                <CardContent className="flex items-start gap-4 p-6">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Call Us</h3>
                                        <p className="text-muted-foreground">
                                            (Phone number to be added)
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
