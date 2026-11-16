"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const layers = [
  {
    name: "Kinetics",
    label: "01 / Model the chemistry",
    title: "Begin with the molecule.",
    body: "Reaction kinetics connect polymer decomposition, temperature and residence time to the evolving hydrocarbon distribution. The objective is the mass share of C5–C20 in total hydrocarbon vapour.",
    signals: ["Polymer behaviour", "Reaction network", "Vapour distribution"],
  },
  {
    name: "Measurements",
    label: "02 / Observe the process",
    title: "Make variability visible.",
    body: "Measured process signals inform a soft sensor for hydrocarbon distribution. Direct composition analysis provides a validation and model-correction pathway; it complements the soft sensor.",
    signals: [
      "Heating-zone temperatures",
      "Auger speed / residence",
      "Analytical validation",
    ],
  },
  {
    name: "Recommendations",
    label: "03 / Inform the operator",
    title: "Turn insight into decisions.",
    body: "Operating recommendations link the model to heater setpoints and auger speed. Supervisory closed-loop optimisation is a development pathway; no experimentally verified yield-uplift percentage is claimed.",
    signals: [
      "Recommended setpoints",
      "Operator assessment",
      "Measured response",
    ],
  },
];
export default function YieldConsole() {
  const [active, setActive] = useState(0);
  const layer = layers[active];
  return (
    <section id="yieldboost" className="yield-section field-wrap">
      <div className="section-topline">
        <span>02 / Conversion intelligence</span>
        <span>YieldBoost</span>
      </div>
      <div className="yield-layout">
        <div>
          <h2>
            Engineer the
            <br />
            <em>distribution.</em>
          </h2>
          <p className="section-lead">
            More insight into what leaves the reactor.
          </p>
          <p>
            Physics-informed optimisation combines kinetics, sensor data and
            soft sensors to target valuable hydrocarbon vapour fractions.
          </p>
          <Link className="field-link" href="/technology/yieldboost">
            Inside YieldBoost <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="yield-console">
          <div className="console-top">
            <span>YIELDBOOST / SYSTEM LOGIC</span>
            <span>Conceptual / no live telemetry</span>
          </div>
          <div
            className="console-controls"
            aria-label="Explore YieldBoost layers"
          >
            {layers.map((l, i) => (
              <button
                key={l.name}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                {l.name}
              </button>
            ))}
          </div>
          <div
            className="yield-schematic"
            aria-label="Model and measurements inform operating recommendations"
          >
            <span className={active === 0 ? "is-active" : ""}>Kinetics</span>
            <i aria-hidden="true">＋</i>
            <span className={active === 1 ? "is-active" : ""}>Sensor data</span>
            <i aria-hidden="true">→</i>
            <span className={active === 2 ? "is-active" : ""}>
              Recommendations
            </span>
          </div>
          <div className="console-readout" aria-live="polite">
            <span className="technical-label">{layer.label}</span>
            <h3>{layer.title}</h3>
            <p>{layer.body}</p>
            <ul>
              {layer.signals.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="console-bottom">
            <strong>C5–C20</strong>
            <span>
              Hydrocarbon vapour selectivity
              <br />
              Optimisation objective
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
