import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://carbonmfuel.com"),
  title: {
    default: "CarbonM FuelMax | Circular Fuel from Landfill-Bound Plastic",
    template: "%s | CarbonM FuelMax",
  },
  description:
    "CarbonM FuelMax converts non-recyclable plastic waste into circular fuel/feedstock for ships and heavy industry using Oleum V1 and Alkanalyze.",
  openGraph: {
    title: "CarbonM FuelMax",
    description:
      "Converting landfill-bound plastic waste into circular industrial fuel/feedstock through Oleum V1 and Alkanalyze.",
    url: "https://carbonmfuel.com",
    siteName: "CarbonM FuelMax",
    images: [{ url: "/hero-landfill.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
