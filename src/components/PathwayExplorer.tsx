"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { pathways } from "@/data/pathways";
import PathwayVisual from "./PathwayVisual";

export default function PathwayExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const onKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % pathways.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index + pathways.length - 1) % pathways.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = pathways.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };
  return (
    <section id="pathways" className="pathway-section">
      <div className="field-wrap">
        <div className="section-topline">
          <span>04 / The destination</span>
          <span>Four routes. Different requirements.</span>
        </div>
        <div className="section-title-row">
          <h2>
            Choose the
            <br />
            <em>pathway.</em>
          </h2>
          <p>
            Select a destination to explore the product, the processing route
            and what it takes to qualify. <ArrowDown aria-hidden="true" />
          </p>
        </div>
        <div
          className="pathway-tabs"
          role="tablist"
          aria-label="Carbon pathways"
        >
          {pathways.map((p, i) => (
            <button
              key={p.slug}
              id={`pathway-tab-${p.slug}`}
              role="tab"
              aria-selected={i === active}
              aria-controls={`pathway-panel-${p.slug}`}
              tabIndex={i === active ? 0 : -1}
              ref={(node) => {
                tabs.current[i] = node;
              }}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span>0{i + 1}</span>
              <strong>{p.code}</strong>
              <span>{p.name}</span>
              <ArrowUpRight aria-hidden="true" />
            </button>
          ))}
        </div>
        {pathways.map((p, i) => (
          <div
            key={p.slug}
            role="tabpanel"
            id={`pathway-panel-${p.slug}`}
            aria-labelledby={`pathway-tab-${p.slug}`}
            hidden={active !== i}
            tabIndex={0}
            className={`pathway-panel route-${p.slug}`}
          >
            <div className="pathway-media">
              {active === i && <PathwayVisual pathway={p} />}
              <span className="pathway-word" aria-hidden="true">
                {p.word}
              </span>
            </div>
            <div className="pathway-copy">
              <span className="technical-label">{p.category}</span>
              <h3>{p.intro}</h3>
              <p>{p.description}</p>
              <Link href={`/pathways/${p.slug}`} className="field-link">
                Explore {p.code} <ArrowUpRight aria-hidden="true" />
              </Link>
              <span className="pathway-status">
                {p.slug === "p2jet"
                  ? "Precursor research / no jet or SAF certification"
                  : "Application-specific qualification required"}
              </span>
            </div>
          </div>
        ))}
        <div className="pathway-index" aria-label="All pathway pages">
          {pathways.map((p) => (
            <Link key={p.slug} href={`/pathways/${p.slug}`}>
              {p.code} overview <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
