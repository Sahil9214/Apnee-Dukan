import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Image } from "@chakra-ui/react";
export default function MenSwiper1() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        // effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-UHP-D-main-P7-GapSuperdry-upto50.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-UHP-D-main-P2-KennethhColeTrendyol-upto70.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-UHP-D-main-P5-CampusustraFashor-under499.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-UHP-D-main-P3-trendsNetplayDNMX-under599.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
