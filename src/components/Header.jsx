"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const pathName = usePathname();
  useEffect(() => {
    if (openNav) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }

    return () => document.body.classList.remove("scroll-lock");
  }, [openNav]);
  return (
    <>
      <header className="flex justify-between mt-[20px] gap-[20px] items-center">
        <Link href="/">
          <Image
            className="xl:block hidden min-h-[65px] min-w-[358px] aspect-[358/65]"
            src="/images/main_logo.svg"
            width={358}
            height={65}
            alt="company logo"
          />
          <Image
            className="xl:hidden block"
            src="/images/mobile_mainlogo.svg"
            width={200}
            height={45}
            alt="company logo"
          />
        </Link>
        <nav className="lg:flex gap-[26.9px] hidden">
          <Link
            href="/"
            className={`text-primary relative text-nowrap text-16 ${pathName === "/" ? "text-primary active_link" : "text-primary_light"}`}
          >
            <p>Home</p>
          </Link>
          <Link
            href="/about-us"
            className={`  text-nowrap text-16 relative ${pathName === "/about-us" ? "text-primary active_link" : "text-primary_light"}`}
          >
            <p>Who We Are </p>
          </Link>
          <Link
            href="/corporate-travel"
            className={`text-primary text-nowrap relative text-16 ${pathName === "/corporate-travel" ? "text-primary active_link" : "text-primary_light"}`}
          >
            <p>Corporate Travel</p>
          </Link>
          <Link
            href="/our-services"
            className={`text-primary text-nowrap relative text-16 ${pathName === "/our-services" ? "text-primary active_link" : "text-primary_light"}`}
          >
            <p>Our Services</p>
          </Link>
          <Link
            href="/careers"
            className={`text-primary text-nowrap relative text-16 ${pathName === "/careers" ? "text-primary active_link" : "text-primary_light"}`}
          >
            <p>Careers</p>
          </Link>
          <Link
            href="/contact-us"
            className={`text-primary text-nowrap relative text-16 ${pathName === "/contact-us" ? "text-primary active_link" : "text-primary_light"}`}
          >
            <p>Contact Us</p>
          </Link>
        </nav>
        <motion.div
          onClick={() => setOpenNav((prev) => !prev)}
          className="lg:hidden flex flex-col justify-around w-[55px] items-end h-[45px] relative z-[30]"
        >
          <motion.span
            animate={
              openNav
                ? { transform: "rotate(45deg)", top: "30%", left: 0 }
                : { transform: "rotate(0deg)" }
            }
            className="w-full h-[3px] bg-primary relative"
          ></motion.span>
          <motion.span
            animate={openNav ? { opacity: 0 } : { opacity: 1 }}
            className="w-[60%] h-[3px] bg-primary "
          ></motion.span>
          <motion.span
            animate={
              openNav
                ? {
                    transform: "rotate(-45deg)",
                    top: "-36%",
                    left: 0,
                    width: "100%",
                  }
                : { transform: "rotate(0deg)" }
            }
            className="w-[28%] h-[3px] bg-primary relative"
          ></motion.span>
        </motion.div>
      </header>
      <AnimatePresence>
        {openNav && (
          <motion.aside
            initial={{ opacity: 0, transform: "translateY(-100vh)" }}
            animate={openNav && { opacity: 1, transform: "translateY(0vh)" }}
            exit={{ opacity: 0, transform: "translateY(-100vh)" }}
            className="fixed z-20 top-0 left-0 w-full h-[100dvh] bg-white overflow-y-hidden"
          >
            <nav className="flex flex-col h-full items-center justify-center gap-[10px]">
              <Link href="/" className="text-primary text-nowrap text-16 p-4">
                <p>Home</p>
              </Link>
              <Link
                href="/about-us"
                className="text-primary text-nowrap text-16 p-4"
              >
                <p>Who We Are</p>
              </Link>
              <Link
                href="/corporate-travel"
                className="text-primary text-nowrap text-16  p-4"
              >
                <p>Corporate Travel</p>
              </Link>
              <Link
                href="/our-services"
                className="text-primary text-nowrap text-16  p-4"
              >
                <p>Our Services</p>
              </Link>
              <Link
                href="/careers"
                className="text-primary text-nowrap text-16 p-4"
              >
                <p>Careers</p>
              </Link>
              <Link
                href="/contact-us"
                className="text-primary text-nowrap text-16 p-4"
              >
                <p>Contact Us</p>
              </Link>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
