import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black py-12 text-sm text-gray-400">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="space-y-4 col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-primary">Alkanalyze</h3>
                        <p className="leading-relaxed">
                            Transforming waste into clean, high-grade industrial fuel with smart sensor technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/product" className="hover:text-primary transition-colors">Product</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/impact" className="hover:text-primary transition-colors">Impact</Link></li>
                        </ul>
                    </div>

                    {/* Legal / More */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Contact Us</h4>
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 text-primary" />
                                <span>
                                    W-54, Rakesh Kapoor Innovation Centre,<br />
                                    Pilani, Rajasthan - 333031
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <a href="mailto:contact@alkanalyze.com" className="hover:text-white">
                                    contact@alkanalyze.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <p>© {new Date().getFullYear()} CarbonM Fuelmax Technology Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
