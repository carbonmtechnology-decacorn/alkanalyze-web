import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ScrollStory from "@/components/ScrollStory";
import PathwayExplorer from "@/components/PathwayExplorer";
import YieldConsole from "@/components/YieldConsole";
import MagnetEvidence from "@/components/MagnetEvidence";
import { team } from "@/data/team";
export const metadata: Metadata = {
  title: { absolute: "CarbonM | Engineering the Next Life of Carbon" },
  description:
    "CarbonM develops FuelMax industrial fuel and NovaNaph circular feedstocks from difficult plastics. Explore YieldBoost, Magnet and four qualification pathways.",
  alternates: { canonical: "/" },
};
const entities = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://carbonmfuel.com/#website",
      url: "https://carbonmfuel.com",
      name: "CarbonM",
      publisher: { "@id": "https://carbonmfuel.com/#organization" },
    },
    ...[
      {
        name: "YieldBoost",
        description:
          "Physics-informed conversion optimisation targeting C5–C20 hydrocarbon vapour selectivity.",
        url: "/technology/yieldboost",
      },
      {
        name: "Magnet",
        description:
          "Proprietary downstream pyrolysis-oil upgrading for contaminant reduction and consistent product quality.",
        url: "/technology/magnet",
      },
      {
        name: "FuelMax",
        description:
          "Plastic-derived industrial liquid fuel candidate, subject to equipment and site qualification.",
        url: "/outputs",
      },
      {
        name: "NovaNaph",
        description:
          "Naphtha-range hydrocarbon feedstock candidate for petrochemical qualification and refinery coprocessing.",
        url: "/pathways/p2naphtha",
      },
    ].map((p) => ({
      "@type": "DefinedTerm",
      name: p.name,
      description: p.description,
      url: "https://carbonmfuel.com" + p.url,
      inDefinedTermSet: "https://carbonmfuel.com/technology",
    })),
  ],
};
export default function Home() {
  return (
    <div className="cinematic-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entities) }}
      />
      <section id="hero" className="field-hero">
        <div className="hero-meta field-wrap">
          <span>CarbonM / FuelMax Technology</span>
          <span>Industrial circular carbon · India</span>
        </div>
        <div className="hero-layout field-wrap">
          <div className="hero-copy">
            <p className="technical-label">
              Engineering the next life of carbon
            </p>
            <h1>
              Carbon.
              <br />
              Back in
              <br />
              <em>circulation.</em>
            </h1>
            <p className="hero-intro">
              Difficult plastics. Valuable hydrocarbons.
              <br />
              Built around chemistry. Refined for industry.
            </p>
            <a className="field-button" href="#pathways">
              Choose your pathway <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <figure className="hero-photo">
            <Image
              src="/carbonm-pilot.webp"
              alt="Original photograph of CarbonM's branded container pilot facility outdoors"
              fill
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="photo-cross cross-top" aria-hidden="true">
              +
            </div>
            <div className="photo-cross cross-bottom" aria-hidden="true">
              +
            </div>
            <figcaption>
              <span>
                From chemistry
                <br />
                to the plant floor.
              </span>
              <span>
                CarbonM pilot facility
                <br />
                Development & validation
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="hero-footer field-wrap">
          <span>01 — Recover</span>
          <span>02 — Optimise</span>
          <span>03 — Upgrade</span>
          <span>04 — Qualify</span>
          <a href="#problem" aria-label="Explore the carbon problem">
            <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>
      <section id="problem" className="problem-section field-wrap">
        <div className="section-topline">
          <span>01 / Carbon in the wrong place</span>
          <span>The starting point</span>
        </div>
        <div className="problem-layout">
          <h2>
            The end of a product.
            <br />
            <em>Not the end of carbon.</em>
          </h2>
          <div>
            <p className="section-lead">
              Mixed, low-value plastics are difficult to recycle mechanically.
              Their chemistry still holds value.
            </p>
            <p>
              CarbonM works on suitable polymer-rich streams to recover
              hydrocarbons for industrial fuel and circular chemical-feedstock
              routes. Feedstock selection, product testing and the final use
              determine the pathway.
            </p>
            <Link href="/technology" className="field-link">
              Follow the carbon <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="feedstock-strip">
          <span>Complex inputs</span>
          <span>PE / PP / PS-rich streams</span>
          <span>Characterisation before conversion</span>
          <span>Application-specific outputs ↗</span>
        </div>
      </section>
      <ScrollStory />
      <YieldConsole />
      <MagnetEvidence />
      <PathwayExplorer />
      <section className="value-section field-wrap" id="industrial-value">
        <div className="section-topline">
          <span>05 / Why CarbonM</span>
          <Link href="/why-us">The industrial case ↗</Link>
        </div>
        <div className="value-layout">
          <h2>
            Quality is an
            <br />
            <em>operating advantage.</em>
          </h2>
          <div className="target-callout">
            <strong>
              20–30<span>%</span>
            </strong>
            <p>
              Target reduction in fuel-related burner/furnace downtime.
              <br />
              <b>Pending customer-specific validation.</b>
            </p>
          </div>
        </div>
        <div className="value-lines">
          {[
            {
              title: "More available hours.",
              body: "When fuel-related downtime limits production, improved equipment availability may support additional output and sales.",
            },
            {
              title: "Economics that can adapt.",
              body: "Domestic feedstock sourcing and process efficiency aim to improve resilience to fossil-price variation. Delivered economics remain site-specific.",
            },
            {
              title: "A route that fits the rules.",
              body: "EPR, packaging regulation and carbon policy create different qualification questions for fuel and chemical-feedstock routes.",
            },
          ].map((v, i) => (
            <article key={v.title}>
              <span>0{i + 1}</span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="industrial-focus">
        <div className="field-wrap">
          <div className="section-topline">
            <span>06 / Intended applications</span>
            <span>Technical qualification comes first</span>
          </div>
          <div className="focus-layout">
            <div className="focus-photo">
              <Image
                src="/heavy-industry.jpg"
                alt="Illustrative industrial processing site, not a CarbonM installation or customer"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
              <span>Industry context / illustrative photograph</span>
            </div>
            <div>
              <h2>
                Built for the
                <br />
                <em>industrial world.</em>
              </h2>
              <div className="focus-list">
                {[
                  [
                    "Industrial heat",
                    "FuelMax / boilers, furnaces & thermal equipment",
                  ],
                  [
                    "Marine supply chains",
                    "Blend compatibility & fuel qualification",
                  ],
                  [
                    "Refineries & petrochemicals",
                    "NovaNaph / receiving-unit specifications",
                  ],
                  [
                    "Aviation research",
                    "Precursors / further processing & approval",
                  ],
                ].map(([t, d]) => (
                  <div key={t}>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                ))}
              </div>
              <Link href="/applications" className="field-link">
                Explore applications <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="facility-section field-wrap" id="facility">
        <div className="section-topline">
          <span>07 / People behind the process</span>
          <span>CarbonM / India</span>
        </div>
        <div className="facility-title">
          <h2>
            Real chemistry.
            <br />
            <em>Real people.</em>
          </h2>
          <p>
            From laboratory samples to pilot engineering, our work is grounded
            in experiments, measurement and industrial qualification.
          </p>
        </div>
        <div className="facility-layout">
          <figure>
            <div className="facility-photo">
              <Image
                src="/carbonm-pilot.webp"
                alt="CarbonM-branded shipping-container pilot facility, photographed outdoors"
                fill
                sizes="(min-width:1024px) 65vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption>
              CarbonM pilot facility / development and validation. Commercial
              operating status is not asserted.
            </figcaption>
            <Link href="/pilot" className="field-link">
              Facility & appointments <ArrowUpRight aria-hidden="true" />
            </Link>
          </figure>
          <div className="people-list">
            {team.slice(0, 3).map((person) => (
              <div key={person.name}>
                <Image
                  src={person.image}
                  alt={person.name}
                  width={64}
                  height={76}
                />
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </div>
            ))}
            <Link href="/about" className="field-link">
              Meet the team & advisors <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="contact-finale">
        <div className="field-wrap">
          <div className="section-topline">
            <span>The next conversation</span>
            <span>Fuel · Feedstock · Technology</span>
          </div>
          <h2>
            Where does
            <br />
            your carbon
            <br />
            <em>go next?</em>
          </h2>
          <div className="contact-finale-bottom">
            <Link href="/contact" className="field-button">
              Build a qualification pathway <ArrowUpRight aria-hidden="true" />
            </Link>
            <a href="mailto:shashwatsharma@carbonmfuel.com">
              shashwatsharma@carbonmfuel.com{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
