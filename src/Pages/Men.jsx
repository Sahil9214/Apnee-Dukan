import React, { useEffect, useState } from "react";
import MenSwiper1 from "../Components/Men/MenSwiper1";
import { Box, Divider, Button, Select } from "@chakra-ui/react";
import men from "../Images/mensRedme.png";
import { Image, Text } from "@chakra-ui/react";
import "../CSS/Men.css";
import MenSwiper2 from "../Components/Men/MenSwiper2";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import UserMenData from "../Components/Men/UserMenData";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import MenSwiper3 from "../Components/Men/MenSwiper3";
import MenFilter from "../Components/Men/MenFilter";
import { useLocation, useSearchParams } from "react-router-dom";
const Men = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  // Sort meathod

  const handleSort = async (e) => {
    try {
      let res = await axios.get(
        `  http://localhost:8080/men?_page=${page}&_limit=5&_sort=price&_order=${e.target.value}`
      );
      setNum(res.data.length);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  //Filter Part

  const getData = async () => {
    try {
      let res = await axios.get(
        `  http://localhost:8080/men?_page=${page}&_limit=5`,
        {
          params: {
            brand: searchParams.get("brand") || undefined,
            category: searchParams.get("category")||undefined,
          },
        }
      );
      setNum(res.data.length);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getData();
  }, [page, location.search]);

  return (
    <div>
      <br/>
      <br/>
      
      <Box>
        <MenSwiper1 />
      </Box>
      <Box className="readmeBox">
        <Image className="ReadmMe" src={men} alt="menReadme" />
      </Box>
      {/* //Trending Today */}
      <Box>
        <Image
          className="trending_today_Image"
          src="https://assets.ajio.com/cms/AJIO/WEB/01072023-UHP-D-DailyBanne-Header-1.jpg"
          alt="trending_today_image"
        />
        <MenSwiper2 />
      </Box>
      {/* //Get MEn Data */}
      <Box className="mainMenDataFetch">
        <Box className="menSort">
          <MenFilter />
        </Box>
        <Box>
          <Box className="menData1">
            <Box>
              <Text className="menHeadingResult">Men Cloth Data</Text>
              <p
                style={{
                  textAlign: "center",
                  overflow: "hidden",
                  marginLeft: "7px",
                  fontSize: "16px",
                }}
              >
                (Showing 1-{num && num} results of total Products)
              </p>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "14px 40px",
              }}
            >
              <Text style={{ fontSize: "26px", fontWeight: "700" }}>Sort </Text>
              <br />
              <br />
              <Select
                onChange={handleSort}
                placeholder="By price :"
                style={{ padding: "0px 40px", marginLeft: "10px" }}
              >
                <option value="asc">Low to high</option>
                <option value="desc">High to Low</option>
              </Select>
            </Box>
          </Box>
          <Divider />
          <Box className="menData2">
            {<Skeleton count={10} /> &&
              data.map((el) => {
                return <UserMenData {...el} key={el.id} />;
              })}
          </Box>
          <Box style={{ display: "flex", justifyContent: "space-around" }}>
            {page < 1 ? (
              <Button style={{ backgroundColor: "pink" }}>1</Button>
            ) : (
              <Button
                style={{ backgroundColor: "pink" }}
                onClick={() => setPage(page - 1)}
              >
                Prev
              </Button>
            )}

            <Button style={{ backgroundColor: "pink" }}>{page}</Button>

            <Button
              style={{ backgroundColor: "pink" }}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Men;
