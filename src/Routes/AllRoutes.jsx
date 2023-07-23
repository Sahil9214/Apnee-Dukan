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
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/laptop" element={<Laptop />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/book" element={<Books />} />
      <Route path="/grocery" element={<Grocery />} />
    </Routes>
  );
};

export default AllRoutes;
