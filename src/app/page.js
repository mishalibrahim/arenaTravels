"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ReactLenis from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <About />
      <Services />
    </ReactLenis>
  );
}
