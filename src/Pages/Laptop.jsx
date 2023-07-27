import React, { useEffect, useState } from "react";
import Swiper1laptop from "../Components/Laptop/Swiper1Laptop";
import { Divider, Box, Text, Select } from "@chakra-ui/react";
import axios from "axios";
import "../CSS/Laptop.css";
import Skeleton from "react-loading-skeleton";
import LaptopCard from "../Components/Laptop/LaptopCard";
import LaptopFilterSort from "../Components/Laptop/LaptopFilterSort";
import { useLocation, useSearchParams } from "react-router-dom";
const Laptop = () => {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  const [num, setNum] = useState(0);
  const [searchParam] = useSearchParams();
const location=useLocation()
  const getData = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/laptop`, {
        params: {
          brand: searchParam.get("brand") || undefined,
          ram: searchParam.get("ram") || undefined,
          storage: searchParam.get("storage") || undefined,
          color: searchParam.get("color") || undefined,
        },
      });
      setData(res.data);
      setNum(res.data.length);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSort = () => {};

  useEffect(() => {
    getData();
  }, [location.search]);

  return (
    <div>
      <br />
      <Divider />
      <br />
      <Box className="mainLaptopBox">
        {/* //Sort and filter the data */}
        <Box className="sort_filter_data_laptop">
          <LaptopFilterSort />
        </Box>
        {/* //Dataa get Append here */}
        <Box className="laptopDatafetch">
          <Box className="laptopDataFetch1">
            <Box>
              <Text className="mbltext">Laptop</Text>
              <p
                style={{
                  textAlign: "center",
                  overflow: "hidden",
                  marginLeft: "7px",
                  fontSize: "14px",
                }}
              >
                (Showing 1-{num && num} results of total Products)
              </p>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
              <Text className="sortText">Sort:</Text>
              <Select
                placeholder="By Price"
                className="sortSelect"
                onChange={handleSort}
              >
                <option value="asc">Low To High</option>
                <option value="desc">High to Low</option>
              </Select>
            </Box>
          </Box>
          <br />
          <br />
          <Box className="DataFetchAPI">
            {<Skeleton count={10} /> &&
              data.map((el) => {
                return <LaptopCard key={el.id} {...el} />;
              })}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Laptop;
