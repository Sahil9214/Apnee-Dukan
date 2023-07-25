import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "@chakra-ui/react";

// import required modules
import { Pagination } from "swiper/modules";

export default function MenSwiper3() {
  return (
    <>
      <p
        style={{ fontSize: "35px", fontWeight: "900", letterSpacing: "1.2px" }}
      >
        Trending Brand Clothes and 40% off on each cloth
      </p>
      <br/>
      <br/>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-WHP-D-topbanner-p2-only-upto65.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-WHP-D-topbanner-p3-veromoda-upto65.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-WHP-D-topbanner-p4-berrylicious-min55.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-WHP-D-topbanner-p6-na-kd-trendyol-flat50.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-WHP-D-topbanner-p7-karigari-imaara-min50.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-WHP-D-dailybanner-bu-p4-draax-thedrystate-min50.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
