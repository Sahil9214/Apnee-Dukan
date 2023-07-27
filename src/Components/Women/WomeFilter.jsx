import React, { useEffect, useState } from "react";
import { Box, Text, Radio, Stack, Select, Divider } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
const WomeFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categorySearch = searchParams.get("category");

  const [category, setCategory] = useState(categorySearch || "");

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    let params = {
      category,
    };

    setSearchParams(params);
  }, [category, searchParams]);

  return (
    <Box style={{ margin: "auto", width: "90%" }}>
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
        <option value="Dress">Dress</option>
        <option value="Blouse">Blouse</option>
      </Select>
      <br />
      <Divider />
      <br />
    </Box>
  );
};

export default WomeFilter;
