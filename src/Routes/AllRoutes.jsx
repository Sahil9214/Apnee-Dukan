import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Mobile from "../Pages/Mobile";
import Laptop from "../Pages/Laptop";
import Books from "../Pages/Books";
import Grocery from "../Pages/Grocery";
import SingleGrocery from "../Pages/SingleGrocery";
import SingleMobile from "../Pages/SingleMobile";
import SingleWomenPage from "../Pages/SingleWomenPage";
import SingleLaptop from "../Pages/SingleLaptop";
import SingleMenPage from "../Pages/SingleMenPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/men" element={<Men />} />
      <Route path="/men/:id" element={<SingleMenPage />} />

      <Route path="/women" element={<Women />} />
      <Route path="/women/:id" element={<SingleWomenPage />} />

      <Route path="/laptop" element={<Laptop />} />
      <Route path="/laptop/:id" element={<SingleLaptop />} />

      <Route path="/mobile" element={<Mobile />} />
      <Route path="/mobile/:id" element={<SingleMobile />} />

      <Route path="/book" element={<Books />} />
      <Route path="/book/:id" element={<SingleBooksPage />} />

      <Route path="/grocery" element={<Grocery />} />
      <Route path="/grocery/:id" element={<SingleGrocery />} />
    </Routes>
  );
};

export default AllRoutes;
