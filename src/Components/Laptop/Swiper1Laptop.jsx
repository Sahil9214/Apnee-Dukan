import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Image } from "@chakra-ui/react";

export default function Swiper1laptop() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image width={'100%'}
            src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/2ba38dc6ce764f8c.png?q=50"
            alt="computer1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={'100%'} src='https://m.media-amazon.com/images/I/41azBTqKhKL._SX300_SY300_QL70_FMwebp_.jpg' />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
