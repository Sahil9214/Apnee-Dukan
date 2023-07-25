import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Image } from "@chakra-ui/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function MenSwiper2() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-UHP-D-dailyBU-P6-Pumacampus-flat50.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-UHP-D-dailyBU-P2-ReebokAdidasOriginals-min30.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-UHP-D-dailyBU-P3-IvocAask-min55.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-UHP-D-DailyBU-P4-netplayDNM-under499.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-UHP-D-dailybu-P5-nashermilesTheclownfish-upto80.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/24072023-uhp-d-uhphim-p4-marks&spencer-upto70.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            src="https://assets.ajio.com/cms/AJIO/WEB/01072023-UHP-D-Trends-avaasadnmxnetplay-upto70.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
