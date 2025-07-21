import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import eyeGlass1 from "@/assets/eyeGlass1.jpg";
import eyeGlass2 from "@/assets/eyeGlass2.jpg";
import eyeGlass3 from "@/assets/eyeGlass3.jpg";
import eyeGlass4 from "@/assets/eyeGlass4.jpg";
import eyeGlass5 from "@/assets/eyeGlass5.jpg";
// import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const CardCaraousal = () => {
  const swiperRef = useRef(null);
  const c1 = "green-400",
    c2 = "blue-400";

  const products = [
    {
      image: eyeGlass1,
      text: "Tecla",
      price: "₹ 5000",
    },
    {
      image: eyeGlass2,
      text: "Botón",
      price: "₹ 4000",
    },
    {
      image: eyeGlass3,
      text: "Interruptor",
      price: "₹ 3500",
    },
    {
      image: eyeGlass4,
      text: "Control remoto",
      price: "₹ 4400",
    },
    {
      image: eyeGlass5,
      text: "Cargador",
      price: "₹ 5000",
    },
    {
      image: eyeGlass3,
      text: "Interruptor",
      price: "₹ 5200",
    },
  ];
  return (
    <div>
      <div className="text-5xl font-bold text-center mb-24">
        Similiar Products
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onNavigationNext={() => {
          swiperRef.current.autoplay.stop();
          swiperRef.current.params.speed = 200;
        }}
        onNavigationPrev={() => {
          swiperRef.current.autoplay.stop();
          swiperRef.current.params.speed = 200;
        }}
        spaceBetween={10}
        centeredSlides={false}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Navigation]}
        slidesPerView={5}
        loop={true}
        className=" w-full h-fit"
      >
        {products.map((product) => (
          <SwiperSlide>
            <div className="h-[400px] w-[260px] p-6 flex flex-col justify-between items-center border-zinc-300 rounded-md border-4">
              <div className="">
                <img
                  src={product.image}
                  alt="glassImage"
                  className="w-44 h-44"
                />
              </div>
              <div className="text-2xl text-center">
                <div className="">{product.text}</div>
                <div className="">{product.price}</div>
              </div>
              <div className="flex gap-8">
                <div
                  className={`h-8 w-8 rounded-full bg-${c1} ring-1 ring-offset-2`}
                ></div>
                <div
                  className={`h-8 w-8 rounded-full bg-${c2} ring-1 ring-offset-2`}
                ></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCaraousal;
