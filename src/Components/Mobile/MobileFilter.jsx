import React from "react";
import "../../CSS/Mobile.css";
import { Box, Divider, Select, Text, option } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import "../../CSS/MobileFilter.css";
const MobileFilter = () => {
  const handleFilter = (e) => {};

  return (
    <div
      style={{
        boxShadow:
          " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
    >
      <Box
        style={{
          width: "90%",
          margin: "auto",
        }}
      >
        <Text className="filterHeading">Filters</Text>
        <br />
        <Select
          placeholder="Select Mobile"
          width={"90%"}
          margin={"auto"}
          textAlign={"left"}
          onChange={handleFilter}
        >
          <option value="Apple">Apple</option>
          <option value="Oppo">oppo</option>
          <option value="Nokia">Nokia</option>
          <option value="Samsung">Samsung</option>
          <option value="Xiomi">Xiomi</option>
          <option value="Vivo">Vivo</option>
          <option value="Oneplus">Oneplus</option>
        </Select>
        <br />
        {/* //Storage Area */}
        <Divider />
        <br />

        <Text className="storageMobile">According to Storage</Text>
        <br />
        <RadioGroup
          defaultValue="1"
          style={{ margin: "auto", marginLeft: "50px" }}
        >
          <Stack spacing={6} direction="column">
            <Radio size={"lg"} value="512GB">
              512GB
            </Radio>
            <Radio size={"lg"} value="256GB">
              256GB
            </Radio>
            <Radio size={"lg"} value="128GB">
              128GB
            </Radio>
          </Stack>
        </RadioGroup>
        <br />
        <Divider />
        <br />
        <Text className="storageMobile">According to RAM</Text>
        <br />
        <RadioGroup
          defaultValue="1"
          style={{ margin: "auto", marginLeft: "50px" }}
        >
          <Stack spacing={6} direction="column">
            <Radio size={"lg"} value="12GB">
              12GB
            </Radio>
            <Radio size={"lg"} value="8GB">
              8GB
            </Radio>
            <Radio size={"lg"} value="6GB">
              6GB
            </Radio>
            <Radio size={"lg"} value="4GB">
              4GB
            </Radio>
          </Stack>
        </RadioGroup>
        <br />
        <Divider />
        <br />
      </Box>
    </div>
  );
};

export default MobileFilter;
