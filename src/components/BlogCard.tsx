import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/resources/${post.slug}`} className="group block h-full">
      <article className={`h-full overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-white shadow-sm card-hover ${featured ? "md:grid md:grid-cols-2" : ""}`}>
        <div className={`relative overflow-hidden ${featured ? "min-h-[280px]" : "aspect-[16/10]"}`}>
          <Image src={post.image} alt={post.imageAlt} fill sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
              {post.category}
            </span>
            <ArrowUpRight className="h-5 w-5 text-emerald-700 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-emerald-700">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center gap-3 pt-6 text-xs font-medium text-muted-foreground">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
