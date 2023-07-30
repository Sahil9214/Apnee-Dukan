"use client";
import axios from "axios";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function SingleMobile() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getData = async () => {
    try {
      let res = await axios.get(`https://e-commercebackend-h0ag.onrender.com/mobiles/${id}`);

      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  let userId = JSON.parse(localStorage.getItem("id"));
  const handleCart = async () => {
    try {
      let res = await axios.get(`https://e-commercebackend-h0ag.onrender.com/users/${userId}`);
      let userData = res.data;
      userData.cart.push(data);
      let updateRes = await axios.put(
        `https://e-commercebackend-h0ag.onrender.com/users/${userId}`,
        userData
      );
      let updatedUserData = updateRes.data;
      console.log("User data after adding to cart:", updatedUserData);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={data.image1}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data.brand}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              Price ₹{data.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {data.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Battery {data.Battery}</ListItem>
                  <ListItem>Storage{data.storage}</ListItem>{" "}
                </List>
                <List spacing={2}>
                  <ListItem>Ram {data.ram}</ListItem>
                  <ListItem>Cellular Technology 5G</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>
              <Text>
                <Text style={{textWrap:"text",overflow:"hidden"}}>
                  15.40 cm (6.1-inch) Super Retina XDR display Advanced camera
                  system for better photos in any light Cinematic mode now in 4K
                  Dolby Vision up to 30 fps Action mode for smooth, steady,
                  handheld videos Vital safety technology — Crash Detection
                  calls for help when you can’t All-day battery life and up to
                  20 hours of video playback Industry-leading durability
                  features with Ceramic Shield and water resistance
                </Text>
              </Text>
            </Box>
          </Stack>

          <Link to="/cart">
            <Button
              onClick={handleCart}
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>
          </Link>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
