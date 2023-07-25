import { Image, Text, Box } from "@chakra-ui/react";
import React from "react";

const Books2 = () => {
  return (
    <div>
      <Box
        style={{
         
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box width="40%">
          <Image
            justifyContent={"center"}
            alignItems={"center"}
            
            style={{marginTop:"80px",width:"300px"}}
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b6374268-65b3-4027-9dac-32968e953032._CR0,0,1714,1714_AC_SX195_SY90_QL70_.jpg"
            alt="image1"
          />
        </Box>
        <Box width={"60%"}>
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "700",
              fontFamily: "sans-serif",
              textAlign: "left",
            }}
          >
            Curated List of Books for Young Readers
          </Text>
          <Text style={{ textAlign: "left" }}>Shop Now </Text>
          <br />
          <br />
          <Box
            style={{
              display: "flex",
              gap: "40px",
            }}
          >
            <Box>
              <Image
                width={"200px"}
                src="https://m.media-amazon.com/images/I/6148MJsyWYL._AC_SR270,180_QL70_.jpg"
              />
              <p style={{}}>
                Anne of Green Gables Complete 8 Books Box set Collection
              </p>
            </Box>
            <Box>
              <Image
                width={"200px"}
                src="https://m.media-amazon.com/images/I/61KmU71nN2L._AC_SR270,180_QL70_.jpg"
              />
              <p style={{}}>Bob Books -Set :Beginning Readers Box setPhonic</p>
            </Box>
            <Box>
              <Image
                width={"200px"}
                src="https://m.media-amazon.com/images/I/91NAlg+phmL._AC_SR270,180_QL70_.jpg"
              />
              <p style={{}}>
                Anne of Green Gables Complete 8 Books Box set Collection
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Books2;
