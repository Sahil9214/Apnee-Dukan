"use client";

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
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MdLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";
export default function SingleLaptop() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getData = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/laptop/${id}`);

      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  let userId = JSON.parse(localStorage.getItem("id"));
  const handleCart = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/users/${userId}`);
      let userData = res.data;
      userData.cart.push(data);
      let updateRes = await axios.put(
        `http://localhost:8080/users/${userId}`,
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
              {data.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              Pirce ₹{data.price}
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
              <Text fontSize={"lg"}>
                All-Day Battery Life – Go longer than ever with up to 18 hours
                of battery life. Powerful Performance – Take on everything from
                professional-quality editing to action-packed gaming with ease.
                The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster
                performance than the previous generation while using way less
                power. Superfast Memory – 8GB of unified memory makes your
                entire system speedy and responsive. That way it can support
                tasks like memory-hogging multitab browsing and opening a huge
                graphic file quickly and easily. Stunning Display – With a
                13.3-inch/33.74 cm Retina display, images come alive with new
                levels of realism. Text is sharp and clear, and colors are more
                vibrant. Why Mac – Easy to learn. Easy to set up. Astoundingly
                powerful. Intuitive. Packed with apps to use right out of the
                box. Mac is designed to let you work, play, and create like
                never before. Simply Compatible – All your existing apps work,
                including Adobe Creative Cloud, Microsoft 365, and Google Drive.
                Plus you can use your favorite iPhone and iPad apps directly on
                macOS. Altogether you’ll have access to the biggest collection
                of apps ever for Mac. All available on the App Store. Easy to
                Learn – If you already have an iPhone, MacBook Air feels
                familiar from the moment you turn it on. And it works perfectly
                with all your Apple devices. Use your iPad to extend the
                workspace of your Mac, answer texts and phone calls directly on
                your Mac, and more. Fanless Design – Your MacBook Air stays cool
                and runs quietly even while tackling intense workloads.
                AppleCare – Every Mac comes with a one-year limited warranty and
                up to 90 days of complimentary technical support. Get AppleCare+
                to extend your coverage and reduce the stress and cost of
                unexpected repairs. Environmentally Friendly – MacBook Air is
                made with a 100% recycled aluminum enclosure and uses less
                energy for a smaller carbon footprint
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
                  <ListItem>Ram {data.ram}</ListItem>
                  <ListItem>Storage {data.storage}</ListItem>{" "}
                  <ListItem>Brand {data.brand}</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Operating System {data.operating_system}</ListItem>
                  <ListItem>warrenty {data.warranty}</ListItem>
                  <ListItem>Screen Size {data.screen_size}</ListItem>
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
                {data.special}
              </Text>
            </Box>
          </Stack>

          <Link to={"/cart"}>
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
