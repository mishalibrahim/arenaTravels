import {
  faCar,
  faGlobe,
  faHandshake,
  faHotel,
  faPassport,
  faPlane,
  faPlaneArrival,
  faRoute,
  faShip,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section id="section" className=" bg-primary  mb-[100px]">
      <div className="container mx-auto py-[50px]">
        <div className="text-center ">
          <h1 className="text-40 text-white font-medium">Our Services</h1>
          <p className="sm:text-16 text-12 mt-[6px] text-white">
            At Arena Travels, We take pride in providing a diverse range of
            services to cater to your travel needs.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[60px] items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-[50px]">
          <ServiceCard title={"Airline Tickets"} icon={faPlaneArrival} />
          <ServiceCard title={"Hotel Bookings"} icon={faHotel} />
          <ServiceCard
            title={"Limousine Service"}
            icon={"/images/limo.svg"}
            img={true}
          />
          <ServiceCard title={"Tours & Excursions "} icon={faGlobe} />
          <ServiceCard title={"Meet And Assist "} icon={faHandshake} />
          <ServiceCard title={"Car Rental"} icon={faCar} />
          <ServiceCard title={"Visa Services"} icon={faPassport} />
          <ServiceCard title={"Travel Insurance"} icon={faRoute} />
          <ServiceCard title={"Train Bookings"} icon={faTrain} />
          <ServiceCard title={"Cruise Bookings"} icon={faShip} />
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ title, icon, img = false }) => {
  return (
    <div className=" flex flex-col gap-[7px] items-center justify-center">
      <div className="w-[70px] h-[70px] rounded-full border-[2px] border-white flex items-center justify-center">
        {img ? (
          <Image
            src={icon}
            width={50}
            height={50}
            alt={icon}
            className="min-h-[30px]"
          />
        ) : (
          <FontAwesomeIcon icon={icon} className="text-white h-[30px]" />
        )}
      </div>
      <p className="text-20 text-white text-center">{title}</p>
    </div>
  );
};
