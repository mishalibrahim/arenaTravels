import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t  bg-bentograd py-6">
      <div className="flex justify-between flex-wrap gap-6   container mx-auto py-10 overflow-hidden">
        <div className="">
          <Image
            className="block min-h-[65px] sm:min-w-[358px] aspect-[358/65]"
            src="/images/main_logo.svg"
            width={358}
            height={65}
            alt="company logo"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-20 text-primary">Quick Access</h3>
          <div className="flex flex-col gap-2">
            <Link href="" className="text-primary text-nowrap text-16">
              <p className="text-15 text-dark">Who We Are</p>
            </Link>
            <Link href="" className="text-primary text-nowrap text-16">
              <p className="text-15 text-dark">Corporate Travel</p>
            </Link>
            <Link href="" className="text-primary text-nowrap text-16">
              <p className="text-15 text-dark">Our Services</p>
            </Link>
            <Link href="" className="text-primary text-nowrap text-16">
              <p className="text-15 text-dark">Careers</p>
            </Link>
            <Link href="" className="text-primary text-nowrap text-16">
              <p className="text-15 text-dark">Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-20 text-primary">Get To Us</h3>
          <div className="flex flex-col gap-2">
            <Link
              href=""
              className="text-primary flex items-center gap-1 text-nowrap text-16"
            >
              <FontAwesomeIcon icon={faWhatsapp} />{" "}
              <p className="text-15 text-dark">971 50 109 3361</p>
            </Link>
            <Link
              href=""
              className="text-primary flex items-center gap-1 text-nowrap text-16"
            >
              <FontAwesomeIcon icon={faPhone} />
              <p className="text-15 text-dark">971 50 109 3315</p>
            </Link>
            <Link
              href=""
              className="text-primary flex items-center gap-1 text-nowrap text-16"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="text-15 text-dark">sales@arenatravels.ae</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
