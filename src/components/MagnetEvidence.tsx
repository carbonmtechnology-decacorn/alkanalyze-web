"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function MagnetEvidence() {
  const [view, setView] = useState("together");
  return (
    <section id="magnet-evidence" className="magnet-section">
      <div className="field-wrap">
        <div className="section-topline">
          <span>03 / Downstream upgrading</span>
          <span>Magnet</span>
        </div>
        <div className="section-title-row">
          <h2>
            Same origin.
            <br />
            <em>New possibilities.</em>
          </h2>
          <div>
            <p>
              Proprietary upgrading. A visible transformation. Product quality
              established by analytical testing.
            </p>
            <Link href="/technology/magnet" className="field-link">
              The Magnet process <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div
          className="sample-toolbar"
          aria-label="Inspect the original sample photograph"
        >
          {[
            ["together", "Compare both"],
            ["raw", "Inspect untreated"],
            ["upgraded", "Inspect upgraded"],
          ].map(([key, label]) => (
            <button
              key={key}
              aria-pressed={view === key}
              onClick={() => setView(key)}
            >
              {label}
            </button>
          ))}
          <span>CarbonM / Original laboratory photograph</span>
        </div>
        <figure>
          <div className={`sample-frame sample-${view}`}>
            <Image
              src="/magnet-comparison.webp"
              alt="CarbonM laboratory comparison: dark untreated pyrolysis oil in the left bottle and transparent amber-yellow Magnet-upgraded oil in the right bottle"
              width={1280}
              height={882}
              sizes="(min-width:1440px) 1280px, 100vw"
              className="sample-image"
            />
            <div className="sample-labels">
              <span>01 / Untreated oil</span>
              <span>02 / After Magnet</span>
            </div>
          </div>
          <figcaption>
            Same source oil, before and after Magnet upgrading. Colour is a
            visual observation, not a contaminant measurement. The photograph
            has not been matched to a specific laboratory test batch.
          </figcaption>
        </figure>
        <div className="evidence-caption">
          <span>Measure what matters.</span>
          <p>
            Contaminants, acidity, carbon residue and application-specific
            properties require analytical evidence. The supplied laboratory
            results are reported separately.
          </p>
          <Link href="/outputs#magnet-results" className="field-link">
            Read the lab evidence <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
