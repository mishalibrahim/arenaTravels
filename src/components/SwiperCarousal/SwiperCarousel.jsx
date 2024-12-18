"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import styles from "./SwiperCarousel.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const SwiperCarousel = () => {
  const [_, setInit] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Swiper
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      autoplay
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Pagination, Navigation, Autoplay]}
      className={` ${styles.swiper} `}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onInit={() => setInit(true)}
    >
      <SwiperSlide className={styles.swiper_slide}>
        <div className="px-6 py-4">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src="https://i.postimg.cc/MTpsYD76/pexels-edmond-dantes-4347368.jpg"
              alt="test"
              width={100}
              className=""
              height={100}
            />
          </div>
          <p className="text-white text-12 font-normal mt-4">
            My recent journey to the mesmerizing Lakshadweep Islands with Arena
            Travels was nothing short of extraordinary. From start to finish, it
            was a fun-filled adventure that left me with unforgettable memories.
            The comfort and convenience they provided throughout the trip were
            truly exceptional. Arena Travels trips not only met but exceeded our
            requirements, making this trip truly unforgettable. I can&apos;t
            recommend them enough for their outstanding service and the way they
            make every moment count. Thank you, Arena Travels, for a remarkable
            journey!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <div className="px-6 py-4">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src="https://i.postimg.cc/MTpsYD76/pexels-edmond-dantes-4347368.jpg"
              alt="test"
              width={100}
              className=""
              height={100}
            />
          </div>
          <p className="text-white text-12 font-normal mt-4">
            My recent journey to the mesmerizing Lakshadweep Islands with Arena
            Travels was nothing short of extraordinary. From start to finish, it
            was a fun-filled adventure that left me with unforgettable memories.
            The comfort and convenience they provided throughout the trip were
            truly exceptional. Arena Travels trips not only met but exceeded our
            requirements, making this trip truly unforgettable. I can&apos;t
            recommend them enough for their outstanding service and the way they
            make every moment count. Thank you, Arena Travels, for a remarkable
            journey!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <div className="px-6 py-4">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src="https://i.postimg.cc/MTpsYD76/pexels-edmond-dantes-4347368.jpg"
              alt="test"
              width={100}
              className=""
              height={100}
            />
          </div>
          <p className="text-white text-12 font-normal mt-4">
            My recent journey to the mesmerizing Lakshadweep Islands with Arena
            Travels was nothing short of extraordinary. From start to finish, it
            was a fun-filled adventure that left me with unforgettable memories.
            The comfort and convenience they provided throughout the trip were
            truly exceptional. Arena Travels trips not only met but exceeded our
            requirements, making this trip truly unforgettable. I can&apos;t
            recommend them enough for their outstanding service and the way they
            make every moment count. Thank you, Arena Travels, for a remarkable
            journey!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <div className="px-6 py-4">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src="https://i.postimg.cc/MTpsYD76/pexels-edmond-dantes-4347368.jpg"
              alt="test"
              width={100}
              className=""
              height={100}
            />
          </div>
          <p className="text-white text-12 font-normal mt-4">
            My recent journey to the mesmerizing Lakshadweep Islands with Arena
            Travels was nothing short of extraordinary. From start to finish, it
            was a fun-filled adventure that left me with unforgettable memories.
            The comfort and convenience they provided throughout the trip were
            truly exceptional. Arena Travels trips not only met but exceeded our
            requirements, making this trip truly unforgettable. I can&apos;t
            recommend them enough for their outstanding service and the way they
            make every moment count. Thank you, Arena Travels, for a remarkable
            journey!
          </p>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide className={styles.swiper_slide}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>Slide 4</SwiperSlide> */}
      <div className=" absolute -bottom-[50px] right-0 z-50 flex gap-5 mt-3 justify-end">
        <button
          aria-label="Prev slide"
          className="w-[40px] h-[40px] rounded-full border border-primary"
          ref={prevRef}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-primary" />
        </button>
        <button
          aria-label="Next slide"
          className="w-[40px] h-[40px] rounded-full border border-primary"
          ref={nextRef}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-primary" />
        </button>
      </div>
    </Swiper>
  );
};

export default SwiperCarousel;
