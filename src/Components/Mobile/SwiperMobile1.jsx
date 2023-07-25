import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Image } from "@chakra-ui/react";
import product from "../../Images/Product.jpg";
import laptop from "../../Images/laptopMobile.jpg";
import watch from "../../Images/watch.jpg";
import mobile from "../../Images/mobilesmobile.jpg";
import loan from "../../Images/loan.jpg";
import shoe from "../../Images/shoes.jpg";
// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function SwiperMobile() {
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        objectFit: "contain",
      }}
    >
      <Swiper
        effect={"flip"}
        grabCursor={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={watch} margin="auto" width={"100%"} height="400px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={loan} margin="auto" width={"100%"} height="400px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={mobile} margin="auto" width={"100%"} height="400px" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={laptop} margin="auto" width={"100%"} height="400px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={product} margin="auto" width={"100%"} height="400px" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
