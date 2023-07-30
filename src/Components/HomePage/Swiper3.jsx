import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../CSS/Swiper3.css";
import { Image, Text } from "@chakra-ui/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import axios from "axios";

export default function Swiper3() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let res = await axios.get(`  https://e-commercebackend-h0ag.onrender.com/laptop`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Text className="swiper3Heading">Buy New Laptop at 20% Discount💻💻</Text>
      <Swiper
        style={{
          "--swiper-navigation-color": "blue",
          "--swiper-pagination-color": "blue",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data &&
          data.map((el) => {
            return (
              <SwiperSlide>
                <Image src={el.image1} alt={el.name} className="swiper3Image" />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data &&
          data.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <Image src={el.image1} alt={el.name} className="swiper3ImageSmall" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
