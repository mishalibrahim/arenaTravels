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
              src="https://res.cloudinary.com/dngfj98eq/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742672657/arena-travels/pexels-blue-bird-7242901_iexce1.jpg"
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
              src="https://res.cloudinary.com/dngfj98eq/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742672663/arena-travels/pexels-ketut-subiyanto-4307884_c7n6xp.jpg"
              alt="test"
              width={100}
              className=""
              height={100}
            />
          </div>
          <p className="text-white text-12 font-normal mt-4">
            Our trip to Georgia with Arena Travels was an absolute delight. The
            scenic beauty, the rich culture, and the seamless travel experience
            made it a trip to remember. Arena Travels took care of every detail,
            ensuring we had a comfortable and enjoyable journey. Highly
            recommended for anyone looking to explore new destinations with ease
            and comfort.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <div className="px-6 py-4">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dngfj98eq/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742672635/arena-travels/pexels-charles-parker-6647477_ickuze.jpg"
              alt="test"
              width={100}
              className=""
              height={100}
            />
          </div>
          <p className="text-white text-12 font-normal mt-4">
            Exploring Dubai with Arena Travels was an unforgettable experience.
            From the towering skyscrapers to the vast deserts, every moment was
            filled with awe and excitement. The professionalism and dedication of
            Arena Travels made our trip smooth and hassle-free. We can't wait to
            plan our next adventure with them!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <div className="px-6 py-4">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dngfj98eq/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742672831/arena-travels/pexels-edmond-dantes-4347368_tfyw52.jpg"
              alt="test"
              width={100}
              className=""
              height={100}
            />
          </div>
          <p className="text-white text-12 font-normal mt-4">
            Our adventure to Azerbaijan with Arena Travels was nothing short of
            spectacular. The rich history, stunning landscapes, and vibrant
            culture left us in awe. Arena Travels ensured that every aspect of our
            trip was perfect, from accommodation to guided tours. We highly
            recommend them for an exceptional travel experience.
          </p>
        </div>
      </SwiperSlide>
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
