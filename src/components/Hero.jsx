import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Header from "./Header";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section className="h-screen mx-auto container ">
      <div className=" w-full opacity-0 md:opacity-[1] absolute left-0 top-0 bg-no-repeat  bg-left-top   h-full  z-[-1] bg-[url('/images/Variant3.svg')]"></div>
      <div className=" w-full absolute right-0 bottom-0 bg-no-repeat bg-right-bottom  z-[-1]   h-full      bg-[url('/images/Variant5.svg')]"></div>
      {/* header top  */}
      <div className="flex  justify-between w-full pt-[20px]">
        <div className="flex sm:flex-row flex-col sm:gap-[9px] gap-[6px]  ">
          <Link
            href="mailto:nowhere@mozilla.org"
            className="flex  gap-[7px] items-center sm:border-r-2 sm:border-primary pr-[5px]"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-[16px] h-[16px] text-primary"
            />
            <p className="sm:text-16 text-12   text-primary">
              enquiry@example.com
            </p>
          </Link>
          <Link href="tel:+123456789" className="flex gap-[7px] items-center ">
            <FontAwesomeIcon
              icon={faPhone}
              className="w-[16px] h-[16px] text-primary"
            />
            <p className="sm:text-16 text-12  text-primary">+91 8589 994 459</p>
          </Link>
        </div>
        <div className="flex items-center sm:gap-[40px] gap-[10px]">
          <Link href="/">
            <FontAwesomeIcon
              icon={faFacebook}
              className=" h-[20px] text-primary"
            />
          </Link>
          <Link href="/">
            <FontAwesomeIcon
              icon={faLocationDot}
              className=" h-[20px] text-primary "
            />
          </Link>
          <Link href="/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className=" h-[20px] text-primary"
            />
          </Link>
          <Link href="/">
            <FontAwesomeIcon
              icon={faInstagram}
              className=" h-[20px] text-primary "
            />
          </Link>
          <Link href="/">
            <FontAwesomeIcon
              icon={faYoutube}
              className=" h-[20px] text-primary"
            />
          </Link>
        </div>
      </div>
      {/* headet top end */}
      <Header />
      <section className="flex flex-col w-full relative ">
        <div className="flex md:items-center flex-col w-full lg:pt-[4.5rem] pt-[3.5rem] relative z-10">
          <h1 className="lg:text-[6rem] md:text-[4rem] text-[3rem]  font-medium leading-[120%] md:text-center text-primary">
            {/* <AnimatedText text="Plan. Book. Explore." /> */}
            Plan. Book. Explore.
          </h1>
          <p className="lg:text-[2rem] text-[1rem]   font-medium leading-[140%] md:text-center text-primary">
            {" "}
            {/* <AnimatedText text="The world is yours to discover!" /> */}
            The world is yours to discover!
          </p>
          <button aschild="true">
            <Link
              className="bg-btngradient  cursor-pointer  max-w-[169px] mt-[24px] shadow-btnshadow text-white px-[35px] py-[11px] rounded-[100px] text-16 flex items-center gap-[6px]"
              href="https://api.whatsapp.com/send?phone=15551234567"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className=" text-white  w-[20px] h-[20px] "
              />
              Reach Us
            </Link>
          </button>
        </div>
        <div className="absolute md:top-[60%] w-full md:flex hidden justify-between">
          <Image
            src="/images/hero-left.png"
            width={189}
            height={294}
            alt="hero-left"
            quality={100}
          />
          <Image
            src="/images/hero-right.png"
            width={189}
            height={294}
            alt="hero-left"
            quality={100}
          />
        </div>
        <div className="flex gap-7 flex-wrap items-center justify-center relative mt-[75px]">
          <div className="shadow-innerShadow text-primary bg-white rounded-full px-[25px] flex gap-[5px] items-center py-[12px]">
            <Image
              src="/images/coin3d.svg"
              width={18}
              height={20}
              alt="3dcoin"
              quality={100}
            />
            <p>Best Prices</p>
          </div>
          <div className="shadow-innerShadow text-primary bg-white rounded-full px-[25px] flex gap-[5px] items-center py-[12px]">
            <Image
              src="/images/fire3d.svg"
              width={18}
              height={20}
              alt="3dcoin"
              quality={100}
            />
            <p>Top Places</p>
          </div>
          <div className="shadow-innerShadow text-primary bg-white rounded-full px-[25px] flex gap-[5px] items-center py-[12px]">
            <Image
              src="/images/loc3d.svg"
              width={18}
              height={20}
              alt="3dcoin"
              quality={100}
            />
            <p>Top Hotels</p>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 z-[-1] left-0 right-0 mx-auto  ">
        <Image
          className="mx-auto min-h-[300px]"
          src="/images/earthhero.svg"
          width={688}
          height={300}
          alt="earth"
        />
      </div>
    </section>
  );
};

export default Hero;
