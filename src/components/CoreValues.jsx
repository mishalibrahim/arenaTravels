import {
  faGlobe,
  faHandshake,
  faLightbulb,
  faMedal,
  faPeopleGroup,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CoreValues = () => {
  return (
    <section className="container mx-auto mb-20">
      <h1 className="text-40 text-secondary text-center font-medium">
        Our Core Values{" "}
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6 mt-10 ">
        <div className="lg:col-span-2 bg-bentograd  rounded-[20px] border border-[#F3D1A0] px-5 py-4">
          <FontAwesomeIcon
            icon={faUsersRays}
            className="w-14 h-14 text-secondary "
          />
          <h2 className="text-24 text-secondary mt-2  font-medium">
            Customer-Centricity
          </h2>
          <p className="text-12 text-dark mt-3">
            Our clients’ needs and satisfaction are at the core of everything we
            do. We go above and beyond to ensure a personalized, seamless, and
            enjoyable experience for every traveler.
          </p>
        </div>
        <div className="lg:col-span-2 bg-bentograd  rounded-[20px] border  border-[#F3D1A0] px-5 py-4">
          <FontAwesomeIcon
            icon={faMedal}
            className="w-12 h-12 text-secondary"
          />
          <h2 className="text-24 text-secondary mt-3 font-medium">
            Excellence in Service
          </h2>
          <p className="text-12 text-dark mt-3">
            We are dedicated to delivering the highest quality of service,
            striving for excellence in every interaction and commitment. Our
            goal is to exceed expectations by fostering trust, ensuring
            reliability, and creating meaningful connections. We continuously
            innovate and improve, placing customer satisfaction at the heart of
            everything we do.
          </p>
        </div>
        <div className=" bg-bentograd  rounded-[20px] border border-[#F3D1A0]  px-3 py-4">
          <FontAwesomeIcon
            icon={faHandshake}
            className="w-14 h-14 text-secondary"
          />
          <h2 className="text-24 text-secondary mt-2 font-medium">
            Integrity and Trust
          </h2>
          <p className="text-12 text-dark mt-3">
            We believe in building lasting relationships with our clients
            through honesty, transparency, and ethical practices.
          </p>
        </div>
        <div className=" bg-bentograd  rounded-[20px] border border-[#F3D1A0]  px-3 py-4">
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="w-14 h-14 text-secondary font-medium"
          />
          <h2 className="text-24 text-secondary ">Teamwork</h2>
          <p className="text-12 text-dark mt-3">
            We believe in building lasting relationships with our clients
            through honesty, transparency, and ethical practices.
          </p>
        </div>
        <div className="lg:col-span-2 bg-bentograd  rounded-[20px] border border-[#F3D1A0] px-5 py-4">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="w-12 h-12 text-secondary"
          />
          <h2 className="text-24 text-secondary mt-2 font-medium">
            Innovation and Adaptability
          </h2>
          <p className="text-12 text-dark mt-3">
            We embrace change and innovation, continually evolving our services
            and utilizing the latest technologies to offer efficient and
            creative travel solutions.
          </p>
        </div>
        <div className="lg:col-span-2 bg-bentograd  rounded-[20px] border  border-[#F3D1A0] px-5 py-4">
          <FontAwesomeIcon
            icon={faGlobe}
            className="w-12 h-12 text-secondary"
          />
          <h2 className="text-24 text-secondary mt-3 font-medium">
            {" "}
            Passion for Travel and Exploration
          </h2>
          <p className="text-12 text-dark mt-3">
            Travel is our passion, and we’re dedicated to sharing that
            enthusiasm with our clients by crafting unique, unforgettable
            journeys
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
