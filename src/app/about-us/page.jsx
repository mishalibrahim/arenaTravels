import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="container mx-auto">
      <TopHeader />
      <Header />
      <div className=" mt-16 w-full bg-[url('/images/about_pattern.png')]  pt-5 pb-14 px-5 ">
        <h1 className="text-primary text-40 text-center">Who We Are</h1>
        <div className="flex justify-between items-start mt-8 gap-8">
          <Image
            src="/images/about_hero.jpg"
            alt="about-image"
            width={500}
            height={500}
            quality={100}
          />
          <div className=" text-primary_light flex flex-col gap-3">
            <p className="text-16">
              <span className="text-primary">ARENA TOURS AND TRAVELS</span>, a
              Established in 2022 in Abu Dhabi, United Arab Emirates, Arena
              Tours & Travels has rapidly grown into a comprehensive travel and
              tourism services firm. Catering to both regional and international
              clients, we pride ourselves on delivering exceptional travel
              management solutions that meet diverse needs. Positioned in the
              heart of the UAE&apos;s flourishing travel industry, Arena Tours &
              Travels has become a trusted partner for individuals,
              corporations, and government entities across the region.
            </p>
            <p className="text-16">
              Arena Tours & Travels offers a wide array of services designed to
              simplify and elevate the travel experience. From meticulous travel
              planning and management to creative corporate travel solutions, we
              ensure seamless journeys for our clients. Our offerings also
              include visa processing, concierge services, event logistics, and
              retail and wholesale travel services. We specialize in catering to
              private, government, and semi-government clients, delivering
              tailored solutions that match the highest standards.
            </p>
            <p className=" text-16">
              Travel management and planning, creative corporate travel
              solutions, visa processing, concierge assistance, event logistics,
              retail and wholesale services, and first luxury and VIP services
              for a variety of private, government, and semi-government clients
              are just a few of the services available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
