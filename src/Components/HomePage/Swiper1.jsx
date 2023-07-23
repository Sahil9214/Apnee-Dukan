import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Image } from "@chakra-ui/react";
import desktop from "../../Images/Desktop.png";
import mobile from "../../Images/Mobile.png";
import cosmetic from "../../Images/Cosmetic.png";
import sale from "../../Images/Sale Clothes.png";
import women from "../../Images/Women Clothes.png";
export default function Swiper1() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{
          zIndex: "1",
          position: "relative",
        }}
      >
        <SwiperSlide>
          <Image
            src={desktop}
            alt="desktop"
            height={"500px"}
            width={"90%"}
            margin={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={mobile}
            alt="mobile"
            height={"500px"}
            width={"90%"}
            margin={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={cosmetic}
            alt=""
            height={"500px"}
            width={"90%"}
            margin={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={sale}
            alt=""
            height={"500px"}
            width={"90%"}
            margin={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={women}
            alt=""
            height={"500px"}
            width={"90%"}
            margin={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://www.reliancedigital.in/medias/Teaser-Banner-18-01-2023-01.jpg?context=bWFzdGVyfGltYWdlc3wxNjAxMzh8aW1hZ2UvanBlZ3xpbWFnZXMvaGNmL2gzMS85OTQ5MzMxMjU5NDIyLmpwZ3wzYzRmZmY5OTBkNzc1NzAxN2FhMDQ4NDYzM2U2MGU3MmNlNDFiNTg3YThiMDNhMjkwNWQwMDA1NWI4YzkyODE2"
            }
            alt=""
            height={"500px"}
            width={"90%"}
            margin={"auto"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
