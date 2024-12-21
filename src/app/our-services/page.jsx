import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import { ServiceCards } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="">
      <div className="container mx-auto mb-10">
        <TopHeader />
        <Header />
        <section className="sm:my-16 my-9 w-full ">
          <h1 className="md:text-64 sm:text-[48px] text-[32px] font-medium text-primary text-center sm:mb-5 mb-3">
            Our Services
          </h1>
          <div className="flex items-center w-full justify-center">
            <p className="sm:text-15 text-12 text-dark text-center max-w-[960px]">
              {" "}
              The Corporate Sales Department at Arena Tours and Travels LLC is
              dedicated to providing tailored travel solutions to businesses of
              all sizes. Our team specializes in creating and managing
              comprehensive travel programs that align with our clients’
              business objectives, optimizing travel arrangements for
              efficiency, convenience, and cost savings.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-14 my-16">
            {ServiceCards.map((item, index) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default Services;

const ServiceCard = ({ title, desc, img }) => {
  return (
    <div className="flex flex-col max-w-[400px] justify-center items-center shadow-btnshadow bg-white rounded-[20px] ">
      <div className="relative w-full">
        <Image
          src={img}
          width={400}
          height={200}
          quality={100}
          alt={title}
          className="rounded-[20px] w-full aspect-[4/2] object-cover"
        />
      </div>
      <div className="px-6  py-5">
        <h2 className="text-24 font-semibold text-primary">{title}</h2>
        <p className="text-12 mt-2 ">{desc}</p>
      </div>
    </div>
  );
};
