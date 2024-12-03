import React from "react";
import SwiperCarousel from "./SwiperCarousal/SwiperCarousel";

const Testimonial = () => {
  return (
    <section className="container mx-auto mb-20 my-20">
      <h3 className="text-40 text-primary text-center">Testimonials </h3>
      <div className="flex items-center justify-center w-full    ">
        {" "}
        <p className="text-12 text-dark text-center mt-3 max-w-[700px]">
          {" "}
          Hear what our valued customers have to say about their experiences
          with us. From exceptional service to unparalleled dedication, their
          words inspire us to keep delivering excellence every step of the way.
        </p>
      </div>
      <div className="mt-20 flex items-center justify-center ">
        <SwiperCarousel />
      </div>
    </section>
  );
};

export default Testimonial;
