import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ValueProps />
      <Overview />
    </div>
  );
}
