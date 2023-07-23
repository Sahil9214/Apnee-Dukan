import React from "react";
import Swiper1 from "../Components/HomePage/Swiper1";
import Swiper2 from "../Components/HomePage/Swiper2";
import Swiper3 from "../Components/HomePage/Swiper3";
import GridBoxesMenWomen from "../Components/HomePage/GridBoxesMenWomen";
import Footer from "../Components/Footer";
import BooksSwiper4 from "../Components/HomePage/BooksSwiper4";
import { Divider } from "@chakra-ui/react";
import GrocerySwiper5 from "../Components/HomePage/GrocerySwiper5";
const Home = () => {
  return (
    <div>
      <br />
      <Swiper1 />
      <br />
      <Divider />
      <Swiper2 />
      <br />
      <Divider />
      <Swiper3 />
      <br />
      <Divider />
      <GridBoxesMenWomen />
      <br />

      <Divider />
      <BooksSwiper4 />

      <br />
      <Divider />
      <br />
      <br />
      <GrocerySwiper5 />
      <Divider />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
