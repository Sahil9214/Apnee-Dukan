"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Accordance() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" bg="white" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: "gray.100" }}
            >
              <Text fontSize="md" color="gray.800">
                EMI Available
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Your order qualifies for EMI with valid credit cards (not
                available on purchase of Gold, Jewelry, Gift cards and Amazon
                pay balance top up).  <span style={{fontColor:"blue",fontWeight:"600",cursor:"pointer"}}>Learn More</span>
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}
