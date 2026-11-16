"use client";
import { useEffect } from "react";

/** Qualification links begin at the new document's heading, even when the
 * originating selector is several screens down the homepage. */
export default function PathwayArrival({ slug }: { slug: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);
  return null;
}
