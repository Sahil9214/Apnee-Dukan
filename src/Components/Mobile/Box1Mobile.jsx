import React, { useEffect, useState } from "react";
import "../../CSS/Mobile.css";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import dataSkeleton from "../Skeleton";
import UserMobileCard from "./UserMobileCard";
import MobileFilter from "./MobileFilter";
const Box1Mobile = () => {
  const [num, setNum] = useState(0);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  //!simple Fetch Data
  const getData = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8080/mobiles?_page=${page}&_limit=5`
      );
      console.log(res.data);
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
        `http://localhost:8080/mobiles?_sort=price&_order=${e.target.value}`
      );
      console.log(res.data);
      setNum(res.data.length);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  //Filter the Data

  useEffect(() => {
    getData();
  }, [page]);

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
                  fontSize:"14px"
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
              data.map((el) => {
                return <UserMobileCard {...el} />;
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
