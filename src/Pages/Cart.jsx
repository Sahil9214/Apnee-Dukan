import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardDataGet } from "../Redux/Cart/cart.action";

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import "../CSS/Cart.css";
import check from "../Images/check.png";
import Accordance from "../Components/CartComponents/Accordance";
import { Link } from "react-router-dom";
export default function Cart() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  let userId = JSON.parse(localStorage.getItem("id"));
  const dispatch = useDispatch();
  const state = useSelector((store) => store.cartReducer?.cart?.cart);
  console.log("state", state);

  useEffect(() => {
    let val = state?.reduce((acc, el) => {
      return acc + el?.price;
    }, 0);
    setNum(val);
    let val1 = 0;
    for (let i = 0; i < state?.length; i++) {
      val1++;
    }
    setCount(val1);
    dispatch(cardDataGet(userId));
  }, [userId, num, count]);

  return (
    <Box>
      <Text
        style={{
          fontSize: "32px",
          fontWeight: "800",
          fontStyle: "italic",
          textAlign: "left",
        }}
      >
        Shopping Cart
      </Text>
      <br />
      <Divider />
      <Box className="cartDivBox">
        <Box className="cartBox">
          {state &&
            state.map((el) => {
              return (
                <Center py={6}>
                  <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: "100%", md: "540px" }}
                    height={{ sm: "476px", md: "30rem" }}
                    direction={{ base: "column", md: "row" }}
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    bg={useColorModeValue("white", "gray.900")}
                    boxShadow={"2xl"}
                    padding={4}
                  >
                    <Flex flex={1} bg="blue.200">
                      <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={el.image1}
                        alt="#"
                      />
                    </Flex>
                    <Stack
                      flex={1}
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      p={1}
                      pt={2}
                    >
                      <Heading fontSize={"2xl"} fontFamily={"body"}>
                        Lindsey James
                      </Heading>
                      <Text
                        fontWeight={600}
                        color={"gray.500"}
                        size="sm"
                        mb={4}
                      >
                        {el.name}
                      </Text>
                      <Text
                        textAlign={"center"}
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue("gray.700", "gray.400")}
                        px={3}
                      >
                        {el.description}
                      </Text>
                      <Text
                        textAlign={"center"}
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue("gray.700", "gray.400")}
                        px={3}
                      >
                        Eligible for Free shipping
                      </Text>
                      <Stack
                        align={"center"}
                        justify={"center"}
                        direction={"row"}
                        mt={6}
                      >
                        <Badge
                          px={2}
                          py={1}
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          bg={useColorModeValue("gray.50", "gray.800")}
                          fontWeight={"400"}
                        >
                          {el.brand}
                        </Badge>
                        <Badge
                          px={2}
                          py={1}
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          bg={useColorModeValue("gray.50", "gray.800")}
                          fontWeight={"400"}
                        >
                          {el.category}
                        </Badge>
                      </Stack>
                    </Stack>
                  </Stack>
                </Center>
              );
            })}
        </Box>
        <Box>
          <Box
            style={{
              width: "90%",
              margin: "auto",
              marginTop: "60px",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Image src={check} width={"30px"} height={"30px"} />
              <Text
                style={{
                  fontWeight: "18px",
                  fontWeight: "500",
                  fontStyle: "italic",
                  marginTop: "-25px",
                }}
              >
                Your order is eligible for FREE Delivery. Select this option at
                checkout. Details
              </Text>
            </Box>
            <br />
            <Divider />
            <br />
            <Box>
              <Link to="/payment">
                {" "}
                <Button
                  style={{
                    padding: "12px 40px",
                    backgroundColor: "#FAF35C",
                    borderRadius: "10px",
                  }}
                >
                  Proceed To Buy
                </Button>
              </Link>
            </Box>
            <br />
            <Divider />
            <br />
            <Box>
              <Text
                style={{
                  fontSize: "24px",
                  fontWeight: "800",
                }}
              >
                <span
                  style={{
                    fontWeight: "900",
                    fontSize: "26px",
                    fontStyle: "italic",
                    letterSpacing: "1.2px",
                  }}
                >
                  Subtotal ({count === undefined ? 0 : count} items)
                </span>
                :{num === undefined ? 0 : num}
              </Text>
              <br />
              <Divider />
              <Accordance />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
