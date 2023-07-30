import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddProduct from "../../Components/Admin/AdminAddProduct";

const AddProduct = () => {
  return (
    <div>
      <br />
      <br />
      <Box>
        <Flex>
          <Box
            style={{
              width: "20%",
            }}
          >
            <Box width={"95%"} style={{ margin: "auto" }}>
              <AdminSideBar />
            </Box>
          </Box>
          <Box
            style={{
              width: "80%",
            }}
          >
            <Box style={{ width: "80%", margin: "auto" }}>
              <AdminAddProduct />
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AddProduct;
