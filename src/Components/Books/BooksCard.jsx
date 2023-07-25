"use client";

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Box
} from "@chakra-ui/react";

export default function BooksCard({
  name,
  image,
  description,
  author,
  genre,
  title,
  price,
}) {
  return (
    <Center>
    <Stack
      borderWidth="1px"
      borderRadius="lg"
      w={{ sm: "100%", md: "590px" }}
      height={{ sm: "476px", md: "20rem" }}
      direction={{ base: "column", md: "row" }}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      padding={4}
    >
      <Flex bg="blue.200">
        <Image objectFit="cover" boxSize="100%" src={image} alt="#" />
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
          {name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
          {title}
        </Text>
        <Text
          textAlign={"center"}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {description}
        </Text>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            Genre {genre}
          </Badge>
          <Badge
            px={2}
            py={1}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            Author {author}
          </Badge>
        </Stack>
        <Box style={{display:'flex',justifyContent:"center",gap:"20px"}}>
          <span style={{ color: "blue", fontSize: "24px", fontWeight: "800" }}>
            Price
          </span>
          <Text
            style={{
              fontSize: "24px",
              color: "black",
              fontWeight: "800",
            }}
          >
            {" "}
            ₹{price}
          </Text>
        </Box>
        <Stack
          width={"100%"}
          mt={"2rem"}
          direction={"row"}
          padding={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
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
        </Stack>
      </Stack>
    </Stack>
    </Center>
  );
}
