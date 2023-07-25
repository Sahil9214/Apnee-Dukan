import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Image,
  Select,
  Button,
  Stack,
  Divider,
  Input,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";

import Books1 from "../Components/Books/Books1";
import "../CSS/Books.css";
import Skeleton from "react-loading-skeleton";
import BooksCard from "../Components/Books/BooksCard";
import Books2 from "../Components/Books/Books2";
const Books = () => {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8080/Bookes?_page=${page}&_limit=5`
      );

      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleFilter = async (e) => {
    try {
      let res = await axios.get(
        `http://localhost:8080/Bookes?_page=${page}&_limit=5&genre=${e.target.value}`
      );

      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleSort = async (e) => {
    try {
      let res = await axios.get(
        `http://localhost:8080/Bookes?_page=${page}&_limit=5&_sort=price&_order=${e.target.value}`
      );

      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleRating = async (e) => {
    try {
      let res = await axios.get(
        `http://localhost:8080/Bookes?_page=${page}&_limit=5&rating=${e.target.value}`
      );

      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  // Search by Author
  const handleSearch = async (e) => {
    try {
      let res = await axios.get(
        `http://localhost:8080/Bookes?_page=${page}&_limit=5&author=${e.target.value}`
      );

      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  //Search by Title;
  const handleTitle = async (e) => {
    try {
      let res = await axios.get(
        `http://localhost:8080/Bookes?_page=${page}&_limit=5&title=${e.target.value}`
      );

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
      <Box
        style={{
          justifyContent: "space-around",
          display: "flex",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          padding: "15px 30px",
        }}
      >
        <Box>
          <Books1 />{" "}
        </Box>
        <Box>
          <Select
            onChange={handleSort}
            placeholder="Sort By Price"
            style={{ padding: "0px 120px", marginTop: "0px" }}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
        </Box>
        <Box></Box>
      </Box>
      <br />
      <Box>
        <Books2 />
      </Box>
      {/* //!Search and functionality */}
      <br />
     
      {/* //Some beautiful Design */}

      <Box className="booksmainPage">
        <Box className="filter_search_method">
          <Box>
            <Box style={{ margin: "auto", width: "90%" }}>
              <Box>
                <Text
                  style={{
                    fontSize: "30px",
                    fontStyle: "italic",
                    fontWeight: "800",
                    textAlign: "left",
                  }}
                >
                  Search By Author
                </Text>
                <br />
                <Input
                  type="text"
                  placeholder="Search by author"
                  onChange={handleSearch}
                />
              </Box>
              <br />
              <Divider />
              <br />
              <Box>
                <Text
                  style={{
                    fontSize: "30px",
                    fontStyle: "italic",
                    fontWeight: "800",
                    textAlign: "left",
                  }}
                >
                  Search By Title
                </Text>
                <br />
                <Input
                  placeholder="Search By Title"
                  type="text"
                  onChange={handleTitle}
                />
              </Box>
              <br />
              <Divider />
              <br />
              <Text
                style={{
                  fontSize: "32px",
                  fontStyle: "italic",
                  textAlign: "left",
                  fontWeight: "800",
                  letterSpacing: "1.2px",
                }}
              >
                Filter
              </Text>
              <br />
              <Select placeholder="Select Genre" onChange={handleFilter}>
                <option value="Mystery">Mystery</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Adventure">Adventure</option>
                <option value="Romance">Romance</option>
                <option value="Thriller">Thriller</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Suspense">Suspense</option>
              </Select>
              <br />
              <Text
                style={{
                  fontSize: "32px",
                  fontStyle: "italic",
                  textAlign: "left",
                  fontWeight: "800",
                  letterSpacing: "1.2px",
                }}
              >
                Ratings
              </Text>

              <br />
              <Box>
                <Stack onChange={handleRating}>
                  <input type="radio" name="rate" value="1" />
                  <label>⭐</label>
                  <br />
                  <input type="radio" name="rate" value="2" />
                  <label>⭐⭐</label>
                  <br />
                  <input type="radio" name="rate" value="3" />
                  <label>⭐⭐⭐</label>
                  <br />
                  <input type="radio" name="rate" value="4" />
                  <label>⭐⭐⭐⭐</label>
                  <br />
                  <input type="radio" name="rate" value="5" />
                  <label>⭐⭐⭐⭐⭐</label>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* //*Bookes Data */}
        <Box className="booksdata">
          <Box>
            <Box className="gridData">
              {<Skeleton count={10} /> &&
                data.map((el) => {
                  return <BooksCard key={el.id} {...el} />;
                })}
            </Box>
            <br />
            <Box style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                style={{ backgroundColor: "pink", padding: "12px 30px" }}
                onClick={() => setPage(page - 1)}
              >
                Prev
              </Button>
              <Button style={{ backgroundColor: "pink", padding: "12px 30px" }}>
                {page}
              </Button>
              <Button
                style={{ backgroundColor: "pink", padding: "12px 30px" }}
                onClick={() => setPage(page + 1)}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Books;
