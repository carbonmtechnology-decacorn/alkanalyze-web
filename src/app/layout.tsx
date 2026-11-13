import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
const origin="https://carbonmfuel.com";
export const metadata: Metadata = {
 metadataBase:new URL(origin),
 title:{default:"CarbonM | FuelMax Industrial Fuel & NovaNaph Circular Naphtha",template:"%s | CarbonM"},
 description:"CarbonM transforms difficult plastic waste into FuelMax industrial fuel and NovaNaph circular petrochemical feedstock through YieldBoost process optimisation and Magnet oil upgrading.",
 keywords:["CarbonM","CarbonM FuelMax","FuelMax","NovaNaph","YieldBoost","Magnet","plastic pyrolysis oil upgrading","industrial light diesel oil alternative","circular naphtha","chemical recycling India","industrial fuel Hyderabad"],
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
 openGraph:{type:"website",locale:"en_IN",url:origin,siteName:"CarbonM",title:"CarbonM | Industrial Fuel & Circular Naphtha",description:"FuelMax and NovaNaph: industrial hydrocarbons improved by YieldBoost and Magnet.",images:[{url:"/hero-landfill.jpg",width:1200,height:630}]},
 twitter:{card:"summary_large_image",title:"CarbonM | FuelMax & NovaNaph",description:"Industrial fuel and circular feedstocks from challenging plastic waste.",images:["/hero-landfill.jpg"]}
};
const organization={"@context":"https://schema.org","@type":"Organization","name":"CarbonM FuelMax Technology Private Limited","alternateName":"CarbonM","url":"https://carbonmfuel.com","logo":"https://carbonmfuel.com/carbonm-logo.png","description":"Industrial hydrocarbon technology developing FuelMax industrial fuel and NovaNaph circular naphtha through YieldBoost process optimisation and Magnet oil upgrading.","address":{"@type":"PostalAddress","streetAddress":"W-54, Rakesh Kapoor Innovation Centre, BITS Pilani, Pilani Campus","addressLocality":"Pilani","addressRegion":"Rajasthan","postalCode":"333031","addressCountry":"IN"},"areaServed":"IN","knowsAbout":["Plastic pyrolysis oil upgrading","Circular naphtha","Industrial liquid fuels","Plastic chemical recycling","Physics-informed process optimisation"]};
export default function RootLayout({children}:Readonly<{children:ReactNode}>){return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/><SmoothScroll/><Navbar/><main className="min-h-screen">{children}</main><Footer/></body></html>;}
