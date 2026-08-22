import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/CTASection";
import { blogCategories, blogPosts } from "@/data/blog";

export default function ResourcesPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pt-28 section-dark">
        <div className="absolute inset-0">
          <Image src="/circular-economy.jpg" alt="Real industrial circular economy visual" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110d] via-[#07110d]/90 to-[#07110d]/30" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 md:px-6">
          <div className="max-w-4xl">
            <span className="eyebrow border-emerald-300/20 bg-emerald-300/10 text-emerald-300">Resources</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.05]">
              Insights on plastic waste, circular fuels and industrial decarbonization.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              A cleaner knowledge hub for CarbonM's technical updates, market thinking and validation journey.
            </p>
          </div>
        </div>
      </section>

      <section className="section-soft py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <span key={category} className="rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-xs font-semibold text-emerald-800 shadow-sm">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            label="Latest"
            title="Read the current CarbonM thinking."
            subtitle="Replace these sample posts with founder updates, validation notes, technical articles and market commentary."
          />
          <div className="space-y-8">
            {featured && <BlogCard post={featured} featured />}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Have a technical question or partnership idea?"
        description="Reach out to discuss waste streams, testing, blending pathways or investment."
        primaryCTA={{ label: "Partner With Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Technology", href: "/technology" }}
      />
    </div>
  );
}
