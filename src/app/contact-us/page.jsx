import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import React from "react";
import ContactForm from "@/components/ContactForm";

const ContactUs = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <TopHeader />
        <Header />
        <section className="sm:my-16 my-9 w-full ">
          <h1 className="md:text-64 sm:text-[48px] text-[32px] font-medium text-primary text-center sm:mb-5 mb-3">
            Contact Us
          </h1>
          <div className="flex items-center w-full justify-center">
            <p className="sm:text-15 text-12 text-dark text-center max-w-[960px]">
              {" "}
              Join the team at Arena Travels and help redefine the travel
              experience! We offer exciting career opportunities, a supportive
              and innovative workplace, and perks like travel discounts and
              professional growth programs. Be part of a passionate team shaping
              unforgettable journeys—your adventure starts here!
            </p>
          </div>
          <div className="flex justify-between items-start my-16 gap-10">
            <div className=" lg:flex-1 hidden lg:block">
              <Image
                className="w-full rounded-lg"
                src="https://res.cloudinary.com/dngfj98eq/image/upload/v1742656723/arena-travels/careers_jox54z.jpg"
                alt="career-form"
                width={6000}
                quality={100}
                height={500}
              />
            </div>
            <div className="flex-1">
              <ContactForm type={"contact"} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default ContactUs;
