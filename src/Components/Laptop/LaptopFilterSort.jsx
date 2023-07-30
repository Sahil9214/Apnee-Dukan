import React, { useEffect, useState } from "react";
import { Text, Box, Select, Divider, Stack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
const LaptopFilterSort = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const brandSearch = searchParam.get("brand");
  const ramSearch = searchParam.get("ram");
  const storageSearch = searchParam.get("storage");
  const colorSearch = searchParam.get("color");

  const [brand, setBrand] = useState(brandSearch || "");
  const [ram, setRam] = useState(ramSearch || "");
  const [storage, setStorage] = useState(storageSearch || "");
  const [color, setColor] = useState(colorSearch || "");

  const handleBrand = (e) => {
    setBrand(e.target.value);
  };
  const handleFilterRam = (e) => {
    setRam(e.target.value);
  };
  const handleFilterStorage = (e) => {
    setStorage(e.target.value);
  };
  const handleFilterColor = (e) => {
    setColor(e.target.value);
  };

  useEffect(() => {
    let params = {
      brand,
      ram,
      storage,
      color,
    };
    setSearchParam(params);
  }, [brand, ram, storage, color, searchParam]);

  return (
    <div>
      <Box style={{ width: "90%", margin: "auto" }}>
        <Text
          style={{
            fontSize: "32px",
            fontStyle: "italic",
            textAlign:"left",
            fontWeight:"800",
            letterSpacing:"1.2px"
          }}
        >
          Filter
        </Text>
        <br />
        <Select placeholder="Select Brand" onChange={handleBrand}>
          <option value="Dell">Dell</option>
          <option value="HP">HP</option>
          <option value="Apple">Apple</option>
          <option value="Asus">Asus</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Acer">Acer</option>
          <option value="Microsoft">Microsoft</option>
          <option value="LG">LG</option>
        </Select>
        <br />
        <Divider />
        <br />
        <Text className="storageMobile">According to Storage</Text>
        <br />
        <Box style={{ margin: "auto", marginLeft: "50px" }}>
          <Stack spacing={6} direction="column" onChange={handleFilterStorage}>
            <div>
              <input
                type="radio"
                value="1TB SSD"
                name="storage"
                checked={storage === "1TB SSD"}
              />
              <label>1TB SSD</label>
            </div>
            <div>
              <input
                type="radio"
                value="512GB SSD"
                name="storage"
                checked={storage === "512GB SSD"}
              />
              <label>512GB SSD</label>
            </div>
          </Stack>
        </Box>
        <br />
        <Divider />
        <br />
        <Text className="storageMobile">According to RAM</Text>
        <br />
        <Box style={{ margin: "auto", marginLeft: "50px" }}>
          <Stack spacing={6} direction="column" onChange={handleFilterRam}>
          <div>
              <input
                type="radio"
                value="16GB"
                name="ram"
                checked={ram === "16GB"}
              />
              <label>16GB</label>
            </div>
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
        <Text className="storageMobile">According to Color</Text>
        <br />
        <Box style={{ margin: "auto", marginLeft: "50px" }}>
          <Stack spacing={6} direction="column" onChange={handleFilterColor}>
            <div>
              <input
                type="radio"
                value="Silver"
                name="ram"
                checked={color === "Silver"}
              />
              <label>Silver</label>
            </div>
            <div>
              <input
                type="radio"
                value="Black"
                name="ram"
                checked={color === "Black"}
              />
              <label>Black</label>
            </div>
            <div>
              <input
                type="radio"
                value="purple"
                name="ram"
                checked={color === "purple"}
              />
              <label>Purple</label>
            </div>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default LaptopFilterSort;
