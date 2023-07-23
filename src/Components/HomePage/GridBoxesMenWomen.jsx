import React from "react";
import "../../CSS/GridBoxesMenWomen.css";
import { Image, Box, Text, Divider } from "@chakra-ui/react";

const GridBoxesMenWomen = () => {
  return (
    <Box className="main_women_women_grid_box">
      {/* //!Main Grid for main box */}
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Text className="heading">Up to 60% off | Styles for Men 👔</Text>
          <br/>
          <Divider/>
          <Box className="menGrid" boxShadow={'md'}>
            <Image
              src="https://images.squarespace-cdn.com/content/v1/547a3834e4b053a861c4874e/1624219205079-2MV5PECBTTNFHIIYC8SX/Sustainably+Chic+%7C+Sustainable+Fashion+Blog+%7C+Sustainable+and+Ethical+Clothing+Brands+for+Men.jpg"
              alt="men cloth"
              className="mengridImage"
            />
            <Image
              src="https://images.meesho.com/images/products/222676467/kldt1_512.webp"
              alt="men footwear"
              className="mengridImage"
            />
            <Image
              src="	https://www.urbanmonkey.com/cdn/shop/products/trucker-monkey-001-right_1024x.jpg?v=1652859969"
              alt="men Accessories"
              className="mengridImage"
            />
            <Image
              src="https://www.gonoise.com/cdn/shop/files/1_d1a0c08d-57c8-4e84-b5ab-124364be90ca_480x.png?v=1689309833"
              alt="men watch"
              className="mengridImage"
            />
          </Box>
        </Box>
        <Box>
          <Text className="heading">Up to 60% off | Styles for Women 👗👗</Text>
          <br/>
          <Divider/>
          <Box className="menGrid" boxShadow={'md'}>
            <Image
              src="https://images.herzindagi.info/image/2019/May/pairs-every-woman-should-have-main.jpg"
              alt="men cloth"
              className="mengridImage"
            />
            <Image
              src="https://ae01.alicdn.com/kf/S9f902ad607d648e7976f83a90a99e19ad.jpg_640x640Q90.jpg_.webp"
              alt="men footwear"
              className="mengridImage"
            />
            <Image
              src="data:image/jpeg;base64,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"
              alt="men Accessories"
              className="mengridImage"
            />
            <Image
              src="https://khwaishh.com/wp-content/uploads/2023/01/img_9550.jpeg.webp"
              alt="men watch"
              className="mengridImage"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GridBoxesMenWomen;
