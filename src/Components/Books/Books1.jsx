import { Box,Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Books1 = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);
  const [page, setPage] = useState(1);
  const getData = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/Books`);
      setData(res.data);
      setNum(res.data.length);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box
       
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
        <Box></Box>
      </Box>
    </div>
  );
};

export default Books1;
