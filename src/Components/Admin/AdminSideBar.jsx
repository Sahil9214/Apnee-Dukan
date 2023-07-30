import React from "react";
import { Box, Text, Image, Divider, Flex } from "@chakra-ui/react";
import logo from "../../Images/Apnee LOgo.png";
import { FiHome, FiTrendingUp } from "react-icons/fi";
import { BiSolidCart } from "react-icons/bi";
import { FcAddDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";
const AdminSideBar = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Box
        style={{
          width: "95%",
          margin: "auto",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        }}
      >
        <Box style={{
          display:'flex',
          justifyContent:"space-evenly"
        }}>
        <Image src={logo} width="120px" height="100px" />
        <Text
        style={{
          fontSize:"23px",
          fontStyle:"italic",
          fontWeight:'700',
          marginTop:"23px"
        }}
        >Apnee Dukan</Text>
        </Box>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Flex justifyContent={"center"} gap={"10px"} alignContent={"center"}>
          {" "}
          <Box marginTop={"5px"}>
            <FiHome />
          </Box>
          <Link to="/adminhome">
            {" "}
            <Box>
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
                _groupHover={{
                  color: "white",
                }}
              >
                Home
              </Text>
            </Box>
          </Link>
        </Flex>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Flex justifyContent={"center"} gap={"10px"} alignContent={"center"}>
          <Box marginTop={"5px"}>
            <FiTrendingUp height="20px" />
          </Box>{" "}
          <Box>
            <Link to="/adminstatics">
              {" "}
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
                _groupHover={{
                  color: "white",
                }}
              >
                Statistics
              </Text>
            </Link>
          </Box>
        </Flex>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Flex justifyContent={"center"} gap={"10px"} alignContent={"center"}>
          <Box marginTop={"5px"}>
            <FcAddDatabase height="20px" />
          </Box>
          <Box>
            <Link to="/adminaddproduct">
              {" "}
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
                _groupHover={{
                  color: "white",
                }}
              >
                Add Product
              </Text>
            </Link>
          </Box>
        </Flex>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Flex justifyContent={"center"} gap={"10px"} alignContent={"center"}>
          <Box marginTop={"5px"}>
            <BiSolidCart height="20px" />
          </Box>
          <Box>
            <Link to="/adminproduct">
              {" "}
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
                _groupHover={{
                  color: "white",
                }}
              >
                Product
              </Text>
            </Link>
          </Box>
        </Flex>
        <br />
        <br />
      </Box>
    </>
  );
};

export default AdminSideBar;
