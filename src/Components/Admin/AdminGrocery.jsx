import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminGetGrocery,
  deleteGrocery,
  editGrocery,
} from "../../Redux/Admin/AdminGrocery/action.grocery";
import SkeletonLoading from "../SkeletonLoading";

import {
  Badge,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Box,
  Stack,
  Input,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const AdminGrocery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [page, setPage] = useState(1);
  const grocery = useSelector((store) => store?.groceryReducer);

  const dispatch = useDispatch();

  const handleSubmit = (id) => {
    console.log("idLikhe", id);
    let obj = {
      name,
      price,
    };
    dispatch(editGrocery(id, obj));
  };

  const handeleDelete = (id) => {
    dispatch(deleteGrocery(id));
  };

  useEffect(() => {
    dispatch(adminGetGrocery(page));
  }, [page]);

  return (
    <div>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "30px",
        }}
      >
        {grocery?.isLoading ? (
          <SkeletonLoading />
        ) : (
          grocery?.grocery.map((el) => {
            return (
              <Box key={el.id}>
                <Center py={6}>
                  <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: "100%", md: "540px" }}
                    height={{ sm: "476px", md: "20rem" }}
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
                        {el.name}
                      </Heading>
                      <Text
                        fontWeight={600}
                        color={"gray.500"}
                        size="sm"
                        mb={4}
                      >
                        {el.brand}
                      </Text>
                      <Text
                        textAlign={"center"}
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue("gray.700", "gray.400")}
                        px={3}
                      >
                        {el.description}
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
                          {el.category}
                        </Badge>
                        <Badge
                          px={2}
                          py={1}
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          bg={useColorModeValue("gray.50", "gray.800")}
                          fontWeight={"400"}
                        >
                          Price ₹{el.price}
                        </Badge>
                      </Stack>

                      <Stack
                        width={"100%"}
                        mt={"2rem"}
                        direction={"row"}
                        padding={2}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Button
                          onClick={onOpen}
                          flex={1}
                          fontSize={"sm"}
                          rounded={"full"}
                          _focus={{
                            bg: "gray.200",
                          }}
                        >
                          Edit
                        </Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalCloseButton />
                            <ModalBody>
                              <Text>Enter the Name</Text>
                              <Input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                              />
                              <br />
                              <Text>Enter the Price</Text>
                              <Input
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                              />
                              <br />
                              <Button
                            
                                onClick={() => {
                                  handleSubmit(el.id); // Store the selected grocery item
                                  onOpen(); // Open the modal
                                }}
                                flex={1}
                                fontSize={"sm"}
                                rounded={"full"}
                                _focus={{
                                  bg: "gray.200",
                                }}
                              >
                                Submit
                              </Button>
                            </ModalBody>
                            <ModalFooter>
                              <Button onClick={onClose}>Close</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                        <Button
                          onClick={() => handeleDelete(el.id)}
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
                          Delete
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </Center>
              </Box>
            );
          })
        )}
      </Box>
      <Box display={"flex"} justifyContent={"space-around"}>
        <Button onClick={() => setPage(page - 1)}>Prev</Button>
        <Button>{page}</Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Box>
    </div>
  );
};

export default AdminGrocery;
