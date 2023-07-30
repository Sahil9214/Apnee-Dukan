import React, { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Admin1 from "../../Components/Admin/Admin1";
import Admin2 from "../../Components/Admin/Admin2";

const AdminHome = () => {
  return (
    <div>
      <br />
      <br />
      <Flex>
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
            width: "80%",
            border: "2px solid green",
          }}
        >
          <Box>
            <Admin1 />
          </Box>
        </Box>
      </Flex>
      <br />
    </div>
  );
};

export default AdminHome;
