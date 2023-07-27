import React, { useEffect, useState } from "react";
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
import { useSearchParams } from "react-router-dom";
const MobileFilter = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  let brandSearch = searchParam.get("brand");
  let storageSearch = searchParam.get("storage");
  let ramSearch = searchParam.get("ram");

  const [brand, setBrand] = useState(brandSearch || "");
  const [storage, setStore] = useState(storageSearch || "");
  const [ram, setRam] = useState(ramSearch || "");
  const handleFilterBrand = (e) => {
    setBrand(e.target.value);
  };
  const handleFilterStorage = (e) => {
    setStore(e.target.value);
  };

  const handleFilterRam = (e) => {
    setRam(e.target.value);
  };

  useEffect(() => {
    let params = {
      brand,
      storage,
      ram,
    };
    setSearchParam(params);
  }, [brand, storage, ram]);

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
          onChange={handleFilterBrand}
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
        <Box defaultValue="1" style={{ margin: "auto", marginLeft: "50px" }}>
          <Stack spacing={6} direction="column" onChange={handleFilterStorage}>
            <div>
              <input
                type="radio"
                value="512GB"
                name="storage"
                checked={storage === "512GB"}
              />
              <label>512GB</label>
            </div>
            <div>
              <input
                type="radio"
                value="128GB"
                name="storage"
                checked={storage === "128GB"}
              />
              <label>128GB</label>
            </div>
            <div>
              <input
                type="radio"
                value="64GB"
                name="storage"
                checked={storage === "64GB"}
              />
              <label>64GB</label>
            </div>
          </Stack>
        </Box>
        <br />
        <Divider />
        <br />
        <Text className="storageMobile">According to RAM</Text>
        <br />
        <Box defaultValue="1" style={{ margin: "auto", marginLeft: "50px" }}>
          <Stack spacing={6} direction="column" onChange={handleFilterRam}>
            <div>
              <input
                type="radio"
                value="12GB"
                name="ram"
                checked={ram === "12GB"}
              />
              <label>12GB</label>
            </div>
            <div>
              <input
                type="radio"
                value="8GB"
                name="ram"
                checked={ram === "8GB"}
              />
              <label>8GB</label>
            </div>
            <div>
              <input
                type="radio"
                value="6GB"
                name="ram"
                checked={ram === "6GB"}
              />
              <label>6GB</label>
            </div>
            <div>
              <input type="radio" value="4GB" name="ram" />
              <label>4GB</label>
            </div>
          </Stack>
        </Box>
        <br />
        <Divider />
        <br />
      </Box>
    </div>
  );
};

export default MobileFilter;
