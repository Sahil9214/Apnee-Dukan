import React from "react";
import { Text, Box, Select, Divider } from "@chakra-ui/react";
const LaptopFilterSort = () => {
  return (
    <div>
      <Box style={{ width: "90%", margin: "auto" }}>
        <Text
          style={{
            fontSize: "32px",
            fontStyle: "italic",
          }}
        >
          Filter
        </Text>
        <br />
        <Select placeholder="Select Brand">
          <option value="Dell">Dell</option>
          <option value="HP">HP</option>
          <option value="Apple">Apple</option>
          <option value="Asus">Asus</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Acer">Acer</option>
          <option value="Microsoft">Microsoft</option>
          <option value="LG">LG</option>
        </Select>
        <br/>
        <Divider/>
        <br/>

      </Box>
    </div>
  );
};

export default LaptopFilterSort;
