import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="">
      <div className="container mx-auto mb-10">
        <TopHeader />
        <Header />
        <div className=" mt-16 w-full bg-[url('/images/about_pattern.png')]   py-14 px-5 ">
          <h1 className="text-primary text-40 text-center font-semibold">
            Who We Are
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-start mt-8 gap-8">
            <div className="flex w-full flex-1  items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dngfj98eq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1742656721/arena-travels/about_hero_usdwgj.jpg"
                alt="about-image"
                width={500}
                height={500}
                quality={100}
              />
            </div>

            <div className=" text-[#011160c7]  font-medium flex flex-col gap-3 flex-1">
              <p className="sm:text-16 text-12  ">
                <span className="text-primary font-semibold">
                  ARENA TOURS AND TRAVELS
                </span>
                , Established in 2022 in Abu Dhabi, United Arab Emirates, Arena
                Tours & Travels has rapidly grown into a comprehensive travel
                and tourism services firm. Catering to both regional and
                international clients, we pride ourselves on delivering
                exceptional travel management solutions that meet diverse needs.
                Positioned in the heart of the UAE&apos;s flourishing travel
                industry, Arena Tours & Travels has become a trusted partner for
                individuals, corporations, and government entities across the
                region.
              </p>
              <p className="sm:text-16 text-12">
                Arena Tours & Travels offers a wide array of services designed
                to simplify and elevate the travel experience. From meticulous
                travel planning and management to creative corporate travel
                solutions, we ensure seamless journeys for our clients. Our
                offerings also include visa processing, concierge services,
                event logistics, and retail and wholesale travel services. We
                specialize in catering to private, government, and
                semi-government clients, delivering tailored solutions that
                match the highest standards.
              </p>
              <p className=" sm:text-16 text-12">
                Travel management and planning, creative corporate travel
                solutions, visa processing, concierge assistance, event
                logistics, retail and wholesale services, and first luxury and
                VIP services for a variety of private, government, and
                semi-government clients are just a few of the services available
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-10 items-center py-14">
          <div className="text-center active_link relative before:-bottom-8">
            <FontAwesomeIcon
              icon={faBullseye}
              className="sm:w-28 sm:h-28 w-24 h-24 text-primary "
            />
            <h3 className="sm:text-40 text-20 font-medium mt-4 text-[#011160c7]">
              Our Mission
            </h3>
            <p className="mt-4 max-w-[400px] text-balance sm:text-15 text-12 text-dark ">
              To provide exceptional, reliable, and personalized travel
              experiences that inspire and connect people across the globe. We
              aim to make travel easy, enjoyable, and accessible by delivering
              tailored solutions that cater to both individual and corporate
              clients, ensuring every journey is memorable and stress-free.
            </p>
          </div>
          <div className="text-center active_link relative before:-bottom-8">
            <FontAwesomeIcon
              icon={faEye}
              className="sm:w-28 sm:h-28 w-24 h-24 text-primary"
            />
            <h3 className="sm:text-40 text-20 font-medium mt-4 text-[#011160c7]">
              Our Vision
            </h3>
            <p className="mt-4 max-w-[400px] sm:text-15 text-12 text-dark">
              To become a leading travel agency recognized for innovation,
              integrity, and excellence, setting new standards in customer
              satisfaction and global travel management. We aspire to be the top
              choice for travelers, empowering them to explore diverse
              destinations confidently and effortlessly while creating
              unforgettable experiences.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
