import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAPIGET, authTrue } from "../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = useSelector((store) => store.authReducer?.authData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    let obj = {
      email,
      password,
    };

    let loginSuccessfull = false;
    state.forEach((el) => {
      if (el.email === obj.email && el.password === obj.password) {
        alert("login Successfull");
        localStorage.setItem("id", JSON.stringify(el.id));
        loginSuccessfull = true;
        dispatch(authTrue());
      }
    });
    if (!loginSuccessfull) {
      alert("Login fail");
    } else {
      return navigate("/");
    }
    setEmail("");
    setPassword("");
  };
 
  useEffect(() => {
    dispatch(authAPIGET());
  }, []);
  return (
    <>
      <br />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleSubmit}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>{" "}
               
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
