"use client";

import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch,useSelector } from "react-redux";
import { authAPIGET } from "../../Redux/Auth/auth.action";
import { useEffect } from "react";
function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Admin1() {

    const dispatch = useDispatch();
    const user = useSelector((store) => store?.authReducer?.authData);
    console.log("user", user);
  
    useEffect(() => {
      dispatch(authAPIGET());
    }, []);



  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Apnee Dukan 
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"We serve"} stat={user.length} />
        <StatsCard title={"In"} stat={"30 different countries"} />
        <StatsCard title={"Who speak"} stat={"100 different languages"} />
      </SimpleGrid>
    </Box>
  );
}
