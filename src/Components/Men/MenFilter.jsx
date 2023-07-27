import React, { useEffect, useState } from "react";
import { Text, Select, Box, Divider } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
const MenFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const brandSearch = searchParams.get("brand");
  const categorySearch = searchParams.get("category");
  const [brand, setBrand] = useState(brandSearch||"");
  const [category, setCategory] = useState(categorySearch||"");

  const handleBrand = (e) => {
    setBrand(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    let params = {
      brand,
      category,
    };
    setSearchParams(params);
  }, [brand, category, searchParams]);

  return (
    <div>
      <Box style={{ margin: "auto", width: "90%" }}>
        <Text className="filterHeadingMen"> Filter</Text>
        <br />

        <Select placeholder="Select Category" onChange={handleBrand}>
          <option value="H&M">H&M</option>
          <option value="Adidas">Adidas</option>
          <option value="Gucci">Gucci</option>
          <option value="Gucci">Gucci</option>
          <option value="Versace">Versace</option>
          <option value="Tommy Hilfiger">Tommy Hilfiger</option>
          <option value="Lacoste">Lacoste</option>
          <option value="Levi's">Levi's</option>
        </Select>
        <br />
        <Divider />
        <br />
        <Text className="filterHeadingMen">Select Categories</Text>
        <Select placeholder="Select Category" onChange={handleCategory}>
          <option value="Shirts">Shirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Sweatshirts">Sweatshirts</option>
          <option value="Pants">Pants</option>
          <option value="Shorts">Shorts</option>
          <option value="Jackets">Jackets</option>
          <option value="Athletic Wear">Athletic Wear</option>
          <option value="Suits">Suits</option>
          <option value="Sweaters">Sweaters</option>
        </Select>
        <br />
        <Divider />
        <br />
      </Box>
    </div>
  );
};

export default MenFilter;
