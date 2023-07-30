import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
export default function SingleMenPage() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getData = async () => {
    try {
      let res = await axios.get(`https://e-commercebackend-h0ag.onrender.com/men/${id}`);
      console.log("men", res.data);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  const userId=JSON.parse(localStorage.getItem("id"))
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
  // console.log("image", data.image[0]);
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Box>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data.image1}
              align={"center"}
              style={{
                height: "400px",
                width: "500px",
                objectFit: "contain",
              }}
            />
            <Image
              rounded={"md"}
              marginTop={"20px"}
              alt={"product image"}
              src={data.image2}
              align={"center"}
              style={{
                height: "400px",
                width: "500px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data.image3}
              align={"center"}
              style={{
                height: "400px",
                width: "500px",
                objectFit: "contain",
              }}
            />
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data.image4}
              marginTop={"20px"}
              align={"center"}
              style={{
                height: "400px",
                width: "500px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data?.category}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              Price ₹{data?.price}
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
                {data?.description}
              </Text>
            </VStack>
          </Stack>
          <Box
            style={{
              padding: "18px 50px",
              border: "1px solid black",
              borderRadius: "14px",
            }}
          >
            <Text
              style={{
                fontSize: "28px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Select size
            </Text>
            <br />

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  padding: "0px 20px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  border: "1px solid black",
                }}
              >
                S
              </Button>
              <Button
                style={{
                  padding: "0px 20px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  border: "1px solid black",
                }}
              >
                M
              </Button>
              <Button
                style={{
                  padding: "0px 20px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  border: "1px solid black",
                }}
              >
                L
              </Button>
              <Button
                style={{
                  padding: "0px 20px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  border: "1px solid black",
                }}
              >
                XL
              </Button>
              <Button
                style={{
                  padding: "0px 20px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  border: "1px solid black",
                }}
              >
                XXL
              </Button>
            </Box>
          </Box>
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
          <Button
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
            Buy Now
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
