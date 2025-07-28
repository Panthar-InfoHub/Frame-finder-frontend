import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HeroImage1 from "@/assets/HeroImage1.jpg";
import HeroImage2 from "@/assets/HeroImage2.jpg";
import HeroImage3 from "@/assets/HeroImage3.jpg";
import HeroImage4 from "@/assets/HeroImage4.jpg";
import HeroImage5 from "@/assets/HeroImage5.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Caraousal() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay]}
        loop={true}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide><img src={HeroImage1} className="w-full h-full" alt="" /></SwiperSlide>
        <SwiperSlide><img src={HeroImage2} className="w-full h-full" alt="" /></SwiperSlide>
        <SwiperSlide><img src={HeroImage3} className="w-full h-full" alt="" /></SwiperSlide>
        <SwiperSlide><img src={HeroImage4} className="w-full h-full" alt="" /></SwiperSlide>
        <SwiperSlide><img src={HeroImage5} className="w-full h-full" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
