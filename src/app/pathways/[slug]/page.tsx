import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { pathways } from "@/data/pathways";
import PathwayVisual from "@/components/PathwayVisual";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return pathways.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = pathways.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    title: `${p.code} — ${p.name}`,
    description: p.description,
    alternates: { canonical: `/pathways/${p.slug}` },
    openGraph: {
      title: `${p.code} — ${p.name} | CarbonM`,
      description: p.description,
      url: `/pathways/${p.slug}`,
      images: [{ url: p.image ?? "/carbonm-pilot.webp" }],
    },
  };
}
export default async function PathwayPage({ params }: Props) {
  const { slug } = await params;
  const p = pathways.find((p) => p.slug === slug);
  if (!p) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${p.code} — ${p.name}`,
    description: p.description,
    url: `https://carbonmfuel.com/pathways/${p.slug}`,
    isPartOf: { "@id": "https://carbonmfuel.com/#website" },
    about: { "@type": "Thing", name: p.name },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://carbonmfuel.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: p.name,
          item: `https://carbonmfuel.com/pathways/${p.slug}`,
        },
      ],
    },
  };
  return (
    <div className={`route-page route-${p.slug}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="route-hero">
        <div className="field-wrap route-hero-layout">
          <div>
            <Link href="/#pathways" className="technical-label">
              ← All carbon pathways
            </Link>
            <h1>
              {p.code}
              <br />
              <em>{p.name}</em>
            </h1>
            <p>{p.description}</p>
            <a
              className="field-button mt-8"
              href={`mailto:shashwatsharma@carbonmfuel.com?subject=${encodeURIComponent(p.cta)}`}
            >
              {p.cta}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="route-hero-media">
            <PathwayVisual pathway={p} priority />
            <span className="pathway-word" aria-hidden="true">
              {p.word}
            </span>
          </div>
        </div>
      </section>
      <section className="route-detail field-wrap">
        <div>
          <span className="technical-label">The technical route</span>
          <h2 className="mt-5">{p.intro}</h2>
        </div>
        <div>
          <p>{p.technical}</p>
          <p className="mt-6 text-sm">Partner focus: {p.related}.</p>
          <Link href="/outputs" className="field-link">
            Explore available product evidence
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section
        className="route-stages field-wrap"
        aria-label="Qualification sequence"
      >
        <div>
          {p.stages.map((stage, i) => (
            <article key={stage}>
              <span>0{i + 1} /</span>
              <h3>{stage}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="route-checks">
        <div className="field-wrap">
          <h2>What needs to be qualified.</h2>
          <ul>
            {p.checks.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="route-boundary">
            <span className="technical-label">
              Current status & evidence boundary
            </span>
            <p className="mt-3">{p.boundary}</p>
          </div>
          <Link href="/contact" className="field-link">
            Arrange a technical discussion <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      <nav className="route-links field-wrap" aria-label="Related pathways">
        {pathways
          .filter((x) => x.slug !== slug)
          .map((x) => (
            <Link
              href={`/pathways/${x.slug}`}
              key={x.slug}
              className="field-link"
            >
              {x.code}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        <Link href="/technology" className="field-link">
          YieldBoost & Magnet <ArrowUpRight aria-hidden="true" />
        </Link>
      </nav>
    </div>
  );
}
