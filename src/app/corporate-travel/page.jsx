import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import {
  faBriefcase,
  faChartSimple,
  faHandHolding,
  faHandHoldingDollar,
  faMedal,
  faPeopleArrows,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const page = () => {
  return (
    <section className="">
      <div className="container mx-auto mb-10">
        <TopHeader />
        <Header />
        <section className="sm:my-16 my-9 w-full ">
          <h1 className="md:text-64 sm:text-[48px] text-[32px] font-medium text-primary text-center sm:mb-5 mb-3">
            Corporate Travels
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

          <div className="grid lg:grid-cols-3 grid-cols-1 sm:my-16 my-8 lg:gap-16 gap-8">
            <div className="bg-[url('/images/corporate-bgmain.png')] text-white p-8 rounded-[20px]">
              <FontAwesomeIcon icon={faBriefcase} className="w-9 h-9 mb-3" />
              <h2 className="sm:text-24 text-20 font-medium mb-3">
                {" "}
                Business Development
              </h2>
              <p className="sm:text-15 text-12 ">
                Identifying and establishing relationships with corporate
                clients to understand their travel needs and create customized
                travel plans.
              </p>
            </div>
            <div className="bg-[url('/images/corporate-bgmain.png')] text-white p-8 rounded-[20px] lg:col-span-2">
              <FontAwesomeIcon icon={faPeopleArrows} className="w-9 h-9 mb-3" />
              <h2 className="sm:text-24 text-20 font-medium mb-3">
                {" "}
                Account Management
              </h2>
              <p className="sm:text-15 text-12  ">
                Building and maintaining strong partnerships with corporate
                clients, ensuring their unique requirements are met, and
                delivering consistent support throughout their travel programs.
              </p>
            </div>
            <div className="bg-[url('/images/corporate-bgmain.png')] text-white p-8 rounded-[20px] lg:col-span-2">
              <FontAwesomeIcon icon={faReceipt} className="w-9 h-9 mb-3" />
              <h2 className="sm:text-24 text-20 font-medium mb-3">
                {" "}
                Travel Policy Compliance
              </h2>
              <p className="sm:text-15 text-12  ">
                Assisting clients in developing or refining their travel
                policies and ensuring that all arrangements align with their
                internal guidelines.lorunm ipsumajshjk sajj bjbaob jiobdao bjbji
                ji obnoj bojbaobjobaojbaoa
              </p>
            </div>
            <div className="bg-[url('/images/corporate-bgmain.png')] text-white p-8 rounded-[20px]">
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                className="w-9 h-9 mb-3"
              />
              <h2 className="sm:text-24 text-20 font-medium mb-3">
                {" "}
                Cost Optimization
              </h2>
              <p className="sm:text-15 text-12 ">
                Analyzing and optimizing travel spending by negotiating with
                airlines, hotels, and other vendors to secure the best possible
                rates for clients
              </p>
            </div>
            <div className="bg-[url('/images/corporate-bgmain.png')] text-white p-8 rounded-[20px]">
              <FontAwesomeIcon icon={faChartSimple} className="w-9 h-9 mb-3" />
              <h2 className="sm:text-24 text-20 font-medium mb-3">
                {" "}
                Reporting and Analysis
              </h2>
              <p className="sm:text-15 text-12 ">
                Identifying and establishing relationships with corporate
                clients to understand their travel needs and create customized
                travel plans.
              </p>
            </div>
            <div className="bg-[url('/images/corporate-bgmain.png')] text-white p-8 rounded-[20px] lg:col-span-2">
              <FontAwesomeIcon icon={faMedal} className="w-9 h-9 mb-3" />
              <h2 className="sm:text-24 text-20 font-medium mb-3">
                {" "}
                Why Choose Us
              </h2>
              <p className="sm:text-15 text-12  ">
                Our Corporate Sales Department stands out for its focus on
                flexibility, efficiency, and an in-depth understanding of the
                unique challenges that corporate travelers face. We are
                committed to streamlining the business travel experience,
                allowing clients to focus on their business goals while we
                handle all travel logistics
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default page;
