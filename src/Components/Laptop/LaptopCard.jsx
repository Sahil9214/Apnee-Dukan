import React from "react";
import {
  Image,
  Stack,
  Button,
  Badge,
  Text,
  Avatar,
  Box,
  Center,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const LaptopCard = ({
  name,
  brand,
  price,
  description,
  image,
  battery_life,
  storage,
  rating,
  screen_size,
  review_number,
  ram,
  operating_system,
  special,
  warranty,
  id,
}) => {
  return (
    <div
      style={{ height: "900px", boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
    >
      <Box style={{ height: "900px" }}>
        <Center style={{ height: "900px" }}>
          <Box
            maxW={"420px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            p={2}
            textAlign={"center"}
          >
            <Image
              size={"xl"}
              src={image}
              alt={"Avatar Alt"}
              //   mb={4}
              pos={"relative"}
              _after={{
                content: '""',
                w: 4,
                h: 1,
                bg: "green.300",
                border: "2px solid white",
                rounded: "full",
                pos: "absolute",
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {name}
            </Heading>
            <Text fontWeight={600} color={"gray.900"}>
              <span style={{ fontSize: "14px", fontWeight: "400" }}>Brand</span>{" "}
              {brand}
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              {description}
            </Text>

            <Stack align={"center"} justify={"center"} direction={"row"}>
              <Badge
                px={2}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                Ram {ram}
              </Badge>
              <Badge
                px={2}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                Storage {storage}
              </Badge>
            </Stack>
            <Stack align={"center"} justify={"center"} mt={6}>
              <Text fontSize={"26px"} fontWeight={"700"}>
                Special offers
              </Text>
              <Text color={"blue"}>{special}</Text>
            </Stack>
            <Box>
              <Text textAlign={"left"} fontSize={"26px"} fontWeight={"700"}>
                Specification
              </Text>
              <Text textAlign={"left"} color={"grey.400"} fontSize={"15px"}>
                Screen Size :{screen_size}
              </Text>
              <Text textAlign={"left"} color={"grey.400"} fontSize={"15px"}>
                Storage: {storage}
              </Text>
              <Text textAlign={"left"} color={"grey.400"} fontSize={"15px"}>
                Battery : {battery_life}
              </Text>
              <Text textAlign={"left"} color={"grey.400"} fontSize={"15px"}>
                Operating System :{operating_system}
              </Text>
              <Text textAlign={"left"} color={"grey.400"} fontSize={"15px"}>
                Warrenty :{warranty}
              </Text>
            </Box>
            <Stack mt={8} direction={"row"} spacing={4}>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
              >
                Wishlist
              </Button>
              <Link to={`/laptop/${id}`}>
                {" "}
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Add To Cart
                </Button>
              </Link>
            </Stack>
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default LaptopCard;
//
