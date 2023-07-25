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
const Men = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      let res = await axios.get(
        `  http://localhost:8080/men?_page=${page}&_limit=5`
      );
      setNum(res.data.length);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

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

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
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
          <Box style={{ margin: "auto", width: "90%" }}>
            <Text className="filterHeadingMen"> Filter</Text>
            <br />

            <Select placeholder="Select Category">
              <option value="H&M">H&M</option>
              <option value="Adidas">Adidas</option>
              <option value="Gucci">Gucci</option>
              <option value="Gucci">Gucci</option>
              <option value="Versace">Versace</option>
              <option value="Tommy Hilfiger">Tommy Hilfiger</option>
              <option value="Lacoste">Lacoste</option>
              <option value="Levi's">Levi's</option>
            </Select>
            <br />
            <Divider />
            <br />
            <Text className="filterHeadingMen">Select Categories</Text>
            <Select placeholder="Select Category">
              <option value="Shirts">Shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="Sweatshirts">Sweatshirts</option>
              <option value="Pants">Pants</option>
              <option value="Shorts">Shorts</option>
              <option value="Jackets">Jackets</option>
              <option value="Athletic Wear">Athletic Wear</option>
              <option value="Suits">Suits</option>
              <option value="Sweaters">Sweaters</option>
            </Select>
            <br />
            <Divider />
            <br />
            <Text className="filterHeadingMen">Price</Text>
            <Stack>
              <Radio size="lg">2000 to 3000</Radio>
              <Radio size="lg">3000 to 4000</Radio>
              <Radio size="lg">4000 to 5000</Radio>
              <Radio size="lg">4000 to 5000</Radio>
              <Radio size="lg">5000 to 6000</Radio>
              <Radio size="lg">6000 to 7000</Radio>
              <Radio size="lg">7000 to 8000</Radio>
              <Radio size="lg">8000 to 9000</Radio>
            </Stack>
          </Box>
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
                return <UserMenData {...el} />;
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

            <Button style={{backgroundColor:"pink"}}>{page}</Button>

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
