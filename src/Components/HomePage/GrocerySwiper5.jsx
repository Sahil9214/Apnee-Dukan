import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Box, Text, Divider, Button } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import axios from "axios";
import "../../CSS/GrocerySwiper5.css";
import { Link } from "react-router-dom";
export default function GrocerySwiper5() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let res = await axios(`http://localhost:8080/groceries`);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box className="GrocerySwiper5Main">
        <Box>
          <Text className="swiper5heading">
            Buy Grocery and get early delivery with in 2 days{" "} 🛒🛒
          </Text>
        </Box>
        <br />
        <br />
        <Box>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {data &&
              data.map((el) => {
                return (
                  <SwiperSlide className="swiperslideBox">
                    <Box>
                      <Image
                        className="GrocerySwiper5Image"
                        src={el.image1}
                        alt={el.name}
                      />
                    </Box>
                    <Box style={{ marginRight: "30px" }}>
                      <br />
                      <br />
                      <br />
                      <br />
                      <Text className="swiper5name">{el.name}</Text>
                      <br />
                      <Divider />
                      <Text className="swiper5description">
                        {el.description}
                      </Text>
                      <Divider />
                      <br />
                      <p className="swiper5price">Price ₹{el.price}</p>
                      <Divider />
                      <br />
                      <Link to="/grocery">
                        <Button bg={"pink"} className="btnSwiper5"  _hover={{
                          backgroundColor:"blue.500"
                        }}    >
                          View All
                        </Button>
                      </Link>
                    </Box>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Box>
      </Box>
    </div>
  );
}
