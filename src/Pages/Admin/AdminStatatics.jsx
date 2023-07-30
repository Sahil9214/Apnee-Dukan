import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Barchart1 from "../../Components/Admin/Barchart1";

const AdminStatatics = () => {
  return (
    <div>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          style={{
            width: "20%",
            border: "2px solid red",
          }}
        >
          <AdminSideBar />
        </Box>
        <Box
          style={{
            border: "3px solid brown",
            width: "90%",
          }}
        >
          <br/>
          <br/>
          <Flex>
            <Barchart1/>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default AdminStatatics;
