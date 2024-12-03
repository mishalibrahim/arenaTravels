"use client";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import ReactLenis from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <About />
      <Services />
      <CoreValues />
      <Testimonial />
    </ReactLenis>
  );
}
