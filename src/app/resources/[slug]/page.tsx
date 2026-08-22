import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image }],
    },
  };
}

function renderContent(content: string) {
  return content
    .split("\n\n")
    .map((section) => section.trim())
    .filter(Boolean)
    .map((section, index) => {
      if (section.startsWith("## ")) {
        return (
          <h2 key={index} className="mt-12 text-3xl font-bold tracking-tight text-foreground">
            {section.replace("## ", "")}
          </h2>
        );
      }
      if (section.startsWith("### ")) {
        return (
          <h3 key={index} className="mt-10 text-2xl font-bold tracking-tight text-foreground">
            {section.replace("### ", "")}
          </h3>
        );
      }
      return (
        <p key={index} className="mt-6 text-lg leading-8 text-foreground/80">
          {section}
        </p>
      );
    });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pt-28 section-dark">
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" className="object-cover opacity-28" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07110d]/75 via-[#07110d]/95 to-[#07110d]" />
        </div>
        <div className="container relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-6">
          <div className="mb-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              {post.category}
            </span>
          </div>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.06]">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-3 text-sm font-medium text-slate-400">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-14 px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-emerald-900/10 md:p-10">
            <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-[1.5rem]">
              <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover" />
            </div>
            {renderContent(post.content)}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.5rem] border border-emerald-900/10 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-foreground">Related articles</h2>
              <div className="mt-5 grid gap-5">
                {related.map((item) => (
                  <BlogCard key={item.slug} post={item} />
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-emerald-950 p-6 text-white">
              <h2 className="text-lg font-bold">Interested in validation?</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Talk to CarbonM about waste streams, fuel requirements, testing or investor discussions.
              </p>
              <Link href="/contact" className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-950 hover:bg-emerald-50">
                Partner With Us
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        headline="Explore how circular fuel could work for your operation."
        description="CarbonM is open to waste supply, industrial fuel, marine blending, testing and investment conversations."
        primaryCTA={{ label: "Partner With Us", href: "/contact" }}
        secondaryCTA={{ label: "Back to Resources", href: "/resources" }}
      />
    </div>
  );
}
