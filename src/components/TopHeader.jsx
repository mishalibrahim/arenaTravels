import {
  faFacebook,
  faInstagram,
  faLinkedin,
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

const TopHeader = () => {
  return (
    <div className="flex  justify-between w-full pt-[20px]">
      <div className="flex sm:flex-row flex-col sm:gap-[9px] gap-[6px]  ">
        <Link
          href="mailto:reservations@arenatravel.ae"
          className="flex  gap-[7px] items-center sm:border-r-2 sm:border-primary pr-[5px]"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-[16px] h-[16px] text-primary"
          />
          <p className="sm:text-16 text-12   text-primary">
           reservations@arenatravel.ae
          </p>
        </Link>
        <Link href="tel:+971501093361" className="flex gap-[7px] items-center ">
          <FontAwesomeIcon
            icon={faPhone}
            className="w-[16px] h-[16px] text-primary"
          />
          <p className="sm:text-16 text-12  text-primary">+971 501 093 361</p>
        </Link>
      </div>
      <div className="flex items-center sm:gap-[40px] gap-[10px]">
        <Link href="/" aria-label="Visit our Facebook page">
          <FontAwesomeIcon
            icon={faFacebook}
            className="h-[20px] text-primary"
          />
        </Link>
        <Link href="/" aria-label="Find our location">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="h-[20px] text-primary"
          />
        </Link>
        <Link href="/" aria-label="Visit our LinkedIn profile">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="h-[20px] text-primary"
          />
        </Link>
        <Link href="/" aria-label="Visit our Instagram profile">
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-[20px] text-primary"
          />
        </Link>
        <Link href="/" aria-label="Visit our YouTube channel">
          <FontAwesomeIcon icon={faYoutube} className="h-[20px] text-primary" />
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
