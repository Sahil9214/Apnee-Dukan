import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Safety Center</Link>
            <Link href={"#"}>Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Law Enforcement</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            <Image
              src="data:image/png;base64,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"
              alt="App Stoere"
            />
            <Image
              src="data:image/png;base64,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"
              alt="google"
            />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Impulsive Cloth. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
