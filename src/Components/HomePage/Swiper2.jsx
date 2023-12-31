import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Image,
  Box,
  Text,
  Divider,
  Button,
  background,
} from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../CSS/Swiper2.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Swiper2() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await axios(`https://e-commercebackend-h0ag.onrender.com/mobiles`);

      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Text className="swiper2MainHeading">Buying New Mobile Phone 📲📲</Text>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data &&
          data.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <Box
                  style={{ justifyContent: "space-around", display: "flex" }}
                >
                  <Box>
                    <Image src={el.image1} alt={el.name} height={"400px"} />
                  </Box>
                  <Box style={{ marginTop: "80px" }}>
                    <Text className="swiper2Name">{el.name}</Text>
                    <br />
                    <Divider />

                    <Text className="swiper2Price">{el.price}</Text>
                    <br />
                    <Divider />

                    <Text className="swiper2Description">{el.description}</Text>
                    <br />
                    <Link to='/mobile'>
                    <Button
                      bg={"pink"}
                      className="swiper2Btn"
                      _hover={{
                        backgroundColor: "rgb(243, 63, 63)",
                      }}
                    >
                      View All
                    </Button></Link>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
