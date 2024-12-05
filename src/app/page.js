import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CoreValues />
      <Testimonial />
      <Footer />
    </>
  );
}
