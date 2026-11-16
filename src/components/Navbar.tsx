"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
const links = [
  { name: "Technology", href: "/technology" },
  { name: "Pathways", href: "/#pathways" },
  { name: "Applications", href: "/applications" },
  { name: "Evidence", href: "/outputs" },
  { name: "Why CarbonM", href: "/why-us" },
  { name: "Company", href: "/about" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <div className="site-nav">
        <Link className="site-brand" href="/" onClick={() => setOpen(false)}>
          <Image
            src="/carbonm-logo.png"
            alt=""
            width={42}
            height={42}
            priority
          />
          <span>
            CarbonM<small>FuelMax Technology</small>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((l) =>
            l.name === "Technology" ? (
              <div className="tech-menu" key={l.name}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                >
                  {l.name}
                  <ChevronDown size={12} aria-hidden="true" />
                </Link>
                <div className="tech-submenu">
                  <Link href="/technology">Overview</Link>
                  <Link href="/technology/yieldboost">YieldBoost</Link>
                  <Link href="/technology/magnet">Magnet</Link>
                </div>
              </div>
            ) : (
              <Link
                key={l.name}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
              >
                {l.name}
              </Link>
            ),
          )}
        </nav>
        <Link href="/contact" className="nav-contact">
          Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <button
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          className="mobile-navigation"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {links.map((l) => (
            <Link key={l.name} href={l.href} onClick={() => setOpen(false)}>
              {l.name}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ))}
          <div className="mobile-tech">
            <Link href="/technology/yieldboost" onClick={() => setOpen(false)}>
              YieldBoost
            </Link>
            <Link href="/technology/magnet" onClick={() => setOpen(false)}>
              Magnet
            </Link>
          </div>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact CarbonM ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
