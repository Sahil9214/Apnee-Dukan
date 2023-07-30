import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useDisclosure,
  useToast,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCartFill, BsFillFilePlusFill, BsFillMicFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { CheckCircleIcon, Search2Icon, WarningIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { Hamburger } from "./Hamburger";
import Dropdown from "./Dropdown";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../Images/Apnee LOgo.png";
import { useSelector } from "react-redux";
import { LuUser } from "react-icons/lu";
import { LuUserCheck } from "react-icons/lu";
export const Navbar = () => {
  const [text, setText] = useState("Login");
  const toast = useToast();
  const { onClose } = useDisclosure();
  const state = useSelector((store) => store.authReducer?.auth);
 
  return (
    <Box
      position={"fixed"}
      top="0"
      left={"0"}
      right="0"
      width="100%"
      zIndex={99}
    >
      <Box display={["none", "none", "none", "block"]}>
        <Box bgColor="#e42529" maxW={"full"}>
          <Flex flexDirection={"row-reverse"} p={2} pr={4}>
            <Flex
              fontWeight={"semibold"}
              color={"white"}
              gap="20px"
              fontSize={"15px"}
            >
              <Text>Find a Store</Text>
              <Text>|</Text>
              <Text>Wishlist</Text>
              <Text>|</Text>
              <Text>Contact Us</Text>
            </Flex>
          </Flex>
        </Box>

        <Box bgColor="#e42529">
          <Flex
            gap="60px"
            alignItems={"center"}
            justifyContent="space-between"
            pl={"30px"}
            pr={"30px"}
          >
            <RouterLink to="/">
              <Text
                style={{
                  fontWeight: "900",
                  fontStyle: "italic",
                  color: "#fff",
                  display: "inlineBlock",
                  transform: "rotate(20deg)",
                }}
              >
                Apnee Dukan
              </Text>

              <Image
                mb={2}
                height={"70px"}
                src={logo}
                alt="logo"
                width={"80px"}
              />
            </RouterLink>
            <InputGroup width={"38%"}>
              <Input
                placeholder="Find your favorite products"
                variant={"none"}
                borderRadius="20px"
                paddingLeft={"20px"}
              />
              <InputRightElement
                children={<Search2Icon color="green.500" />}
                paddingRight={"20px"}
              />
            </InputGroup>
            <Flex
              gap={"30px"}
              color={"white"}
              fontSize={"15px"}
              fontWeight={"semibold"}
              justifyContent={"space-around"}
            >
              <Link to="/login">
                <Flex gap={"5px"} alignItems="center">
                  <LuUser /> {state === true ? "Logout" : "Login"}
                </Flex>
              </Link>
              <Link to="/sign">
                <Text>Signin</Text>
              </Link>
              <Link to="/cart">
                <Flex gap={"5px"} alignItems="center">
                  <BsCartFill /> Cart
                </Flex>
              </Link>
              <Link to="/adminlogin">
                <Flex gap={"5px"} alignItems="center">
                  <LuUserCheck /> Admin
                </Flex>
              </Link>
              {/* {
                  isAuth ? 
                  <Flex gap={"5px"} alignItems="center" onClick={handleLogOut} cursor = "pointer">
                  <MdAccountCircle /> Logout
                </Flex>
                   : 
  
                  <Link to="/login">
                <Flex gap={"5px"} alignItems="center">
                <MdAccountCircle /> Login
              </Flex>
                </Link>
  
                } */}
            </Flex>
          </Flex>
        </Box>
        <Dropdown />
      </Box>

      <Box
        bgColor="#e42529"
        pl={4}
        pr={4}
        pt={3}
        pb={3}
        display={["block", "block", "block", "none"]}
      >
        <Flex
          alignItems={"center"}
          color="white"
          justifyContent={"space-between"}
        >
          <Flex gap={"20px"} alignItems="center" justifyContent={"center"}>
            <Hamburger />
            <RouterLink to="/">
              <Text
                style={{
                  fontWeight: "900",
                  fontStyle: "italic",
                }}
              >
                Apnne Dukan
              </Text>
              <Image
                width={"90px"}
                height={"55px"}
                src={logo}
                objectFit={"cover"}
                alt="logo"
              />
            </RouterLink>
          </Flex>
          <Flex justifyContent="space-between" gap={"20px"}>
            <BsFillFilePlusFill size={"20px"} />
            <Link to="/cart">
              <FaShoppingCart size={"20px"} />
            </Link>
          </Flex>
        </Flex>
        <InputGroup mt={2}>
          <InputLeftElement
            children={<Search2Icon size={"18px"} color={"gray"} />}
          />
          <Input
            placeholder="Search for Products, Brands"
            bgColor={"white"}
            borderRadius="20px"
            variant={"none"}
          />
          <InputRightElement
            children={<BsFillMicFill color="gray" size={"20px"} />}
          />
        </InputGroup>
      </Box>
    </Box>
  );
};
