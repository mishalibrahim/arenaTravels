import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section
      className=" container mx-auto lg:my-[100px] my-[50px]"
      id="whoweare"
    >
      <h3 className="text-40 text-primary text-center font-medium">
        Who We are{" "}
      </h3>
      <div className="max-w-[950px] mx-auto">
        <p className=" text-center mt-[50px] text-dark">
          ARENA TOURS AND TRAVELS, a complete travel and tourist services firm
          serving both regional and international clients, was established in
          Abu Dhabi, United Arab Emirates, in 2022.
        </p>

        <p className="text-center mt-[10px] text-dark">
          Arena Tours & Travels is now one of the largest and most trusted
          travel management services in the UAE and the Middle East, positioned
          right at the heart of the UAE&apos;s travel boom.
        </p>
        <p className=" text-center mt-[10px] text-dark">
          Travel management and planning, creative corporate travel solutions,
          visa processing, concierge assistance, event logistics, retail and
          wholesale services, and first luxury and VIP services for a variety of
          private, government, and semi-government clients are just a few of the
          services available.
        </p>
      </div>
      <div className="flex items-end justify-end mt-[40px]">
        <button aschild="true">
          <Link
            className="bg-btngradient max-w-[200px] mt-[24px] shadow-btnshadow text-white px-[35px] py-[11px] rounded-[100px] text-16 flex items-center gap-[6px]"
            href=""
          >
            <Image
              src="/images/arrow-up-right.svg"
              width={20}
              height={20}
              alt="arrow"
              quality={100}
            />
            Explore More
          </Link>
        </button>
      </div>
    </section>
  );
};

export default About;
