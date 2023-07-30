import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Admin2 from "../../Components/Admin/Admin2";
import { MdMargin } from "react-icons/md";

const AdminProduct = () => {
  return (
    <div>
      <br />
      <br />
      <Flex>
        <Box
          style={{
            width: "20%",
          }}
        >
          <AdminSideBar />
        </Box>
        <Box
          style={{
            width: "80%",
          }}
        >
          <Text
            style={{
              fontSize: "32px",
              fontStyle: "italic",
              fontWeight: "800",
              letterSpacing: "1.2px",
            }}
          >
            Product Detail
          </Text>
          <br />
          <Box
            style={{
              width: "90%",
              margin: "auto",
            }}
          >
            <Admin2 />
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default AdminProduct;
