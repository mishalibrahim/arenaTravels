"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import styles from "./SwiperCarousel.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      in
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Pagination, Navigation]}
      className={` md:${styles.swiper} w-[70%] h-[350px] `}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onInit={() => setInit(true)}
    >
      <SwiperSlide className={styles.swiper_slide}>Slide 1</SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>Slide 4</SwiperSlide>
      <div className="flex gap-5 mt-3 justify-end">
        <button
          className="w-[40px] h-[40px] rounded-full border border-primary"
          ref={prevRef}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-primary" />
        </button>
        <button
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
