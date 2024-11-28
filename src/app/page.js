"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import ReactLenis from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <ReactLenis root>
      <section className="">
        <Hero />
        <About />
      </section>
    </ReactLenis>
  );
}
