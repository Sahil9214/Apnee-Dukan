import React, { useEffect, useState } from "react";
import "../../CSS/Mobile.css";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import axios from "axios";

import UserMobileCard from "./UserMobileCard";
import MobileFilter from "./MobileFilter";
import { useLocation, useSearchParams } from "react-router-dom";


const Box1Mobile = () => {
  const [num, setNum] = useState(0);
  const [val, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  //!simple Fetch Data

  //Filter the Data
  const getData = async () => {
    try {
      const res = await axios.get("https://e-commercebackend-h0ag.onrender.com/mobiles", {
        params: {
          brand: searchParams.get("brand")||undefined,
          ram: searchParams.get("ram")||undefined,
          storage: searchParams.get("storage")||undefined,
        },
      });

      setNum(res.data.length);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  // !Sorting Meathod
  const handleSort = async (e) => {
    try {
      let res = await axios.get(
        `https://e-commercebackend-h0ag.onrender.com/mobiles?_sort=price&_order=${e.target.value}`
      );
      console.log(res.data);
      setNum(res.data.length);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getData();
  }, [location.search]);

  return (
    <div>
      <br />
      <br />
      <Box className="mobileMainPage">
        <Box className="filter_sort">
          <MobileFilter />
        </Box>
        <Box className="mobileData">
          <Box className="mblFlex">
            <Box className="topBoxMbl">
              <Text className="mbltext">Mobiles</Text>
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
          <Box className="printData">
            {<dataSkeleton /> &&
              val.map((el) => {
                return <UserMobileCard {...el} key={el.id} />;
              })}
          </Box>
          <Box style={{ justifyContent: "space-around", display: "flex" }}>
            <Button
              onClick={() => setPage(page - 1)}
              className="paginationMobile"
              padding={"15px 40px"}
              backgroundColor={"pink"}
            >
              Prev
            </Button>
            {page < 1 ? (
              <Button padding={"15px 40px"} backgroundColor={"pink"}>
                1
              </Button>
            ) : (
              <Button padding={"15px 40px"} backgroundColor={"pink"}>
                {page}
              </Button>
            )}

            <Button
              onClick={() => setPage(page + 1)}
              className="paginationMobile"
              padding={"15px 40px"}
              backgroundColor={"pink"}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Box1Mobile;
