import { Box, Text, Select, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GroceryCard from "./GroceryCard";

const Grocery1 = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);
  const [page, setPage] = useState(1);
  const getData = async () => {
    try {
      let res = await axios.get(
        `https://e-commercebackend-h0ag.onrender.com/groceries?_page=${page}&_limit=10`
      );
      setData(res.data);
      setNum(res.data.length);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSort = async (e) => {
    try {
      let res = await axios.get(
        `https://e-commercebackend-h0ag.onrender.com/groceries?_sort=price&_order=${e.target.value}`
      );
      setData(res.data);
      setNum(res.data.length);
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
          display: "flex",
          justifyContent: "space-around",
          padding: "20px 30px",
        }}
      >
        <Box>
          <Text
            style={{
              fontSize: "23px",
              fontStyle: "italic",
              fontWeight: "700",
            }}
          >
            Total Number of Books
          </Text>
          <p
            style={{
              fontStyle: "italic",
            }}
          >
            {" "}
            (Showing 1-{num && num} results of total Products)
          </p>
        </Box>
        <Box>
          <Select
            onChange={handleSort}
            placeholder="Sort By Price"
            style={{ padding: "0px 120px", marginTop: "0px" }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box className="groceryData" style={{ width: "80%" }}>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "10px",
            }}
          >
            {data.map((el) => {
              return <GroceryCard key={el.id} {...el} />;
            })}
          </Box>
          <Box style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              style={{
                padding: "14px 30px",
                backgroundColor: "pink",
              }}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </Button>
            <Button
              style={{
                padding: "14px 30px",
                backgroundColor: "pink",
              }}
            >
              {page}
            </Button>
            <Button
              style={{
                padding: "14px 30px",
                backgroundColor: "pink",
              }}
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

export default Grocery1;
