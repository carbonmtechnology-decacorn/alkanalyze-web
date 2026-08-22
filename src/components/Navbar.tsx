"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Technology",
    href: "/technology",
    children: [
      { name: "Overview", href: "/technology" },
      { name: "Oleum V1", href: "/technology/oleum-v1" },
      { name: "Alkanalyze", href: "/technology/alkanalyze" },
    ],
  },
  { name: "Applications", href: "/applications" },
  { name: "Outputs", href: "/outputs" },
  { name: "Impact", href: "/impact" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div
        className={cn(
          "liquid-glass mx-auto flex items-center justify-between rounded-full px-3 transition-all duration-300",
          condensed ? "h-16 max-w-6xl" : "h-[4.75rem] max-w-7xl"
        )}
      >
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-emerald-900/10 transition-transform group-hover:scale-105">
            <Image src="/carbonm-logo.png" alt="CarbonM FuelMax Technology logo" fill sizes="44px" className="object-contain p-1" priority />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-black tracking-tight text-emerald-950">CarbonM</span>
            <span className="block truncate text-[11px] font-bold text-emerald-700">FuelMax Technology Pvt Ltd</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            if (item.children) {
              return (
                <div key={item.name} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold text-emerald-950/75 transition-colors hover:bg-emerald-950/10 hover:text-emerald-950",
                      active && "bg-emerald-950/10 text-emerald-950"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full mt-3 w-64 translate-y-2 rounded-3xl border border-emerald-900/10 bg-[#fffdf8] p-2 opacity-0 shadow-2xl shadow-black/20 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-2xl px-4 py-3 text-sm font-bold text-emerald-950 transition-colors hover:bg-emerald-950/5"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold text-emerald-950/75 transition-colors hover:bg-emerald-950/10 hover:text-emerald-950",
                  active && "bg-emerald-950/10 text-emerald-950"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="default" asChild>
            <Link href="/contact">Partner With Us</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/10 text-emerald-950 transition-colors hover:bg-emerald-950/5 lg:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-3 mt-3 rounded-3xl border border-emerald-900/10 bg-[#fffdf8] p-3 shadow-2xl shadow-black/20 lg:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-black text-emerald-950 hover:bg-emerald-950/5"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 grid gap-1 border-l border-emerald-900/10 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-950/5 hover:text-emerald-950"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button variant="default" className="mt-2 w-full" asChild>
              <Link href="/contact" onClick={() => setOpen(false)}>Partner With Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
