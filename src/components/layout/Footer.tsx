import { Section } from "../ui";
import { VStack, Text, Flex } from "@chakra-ui/react";
import TextLogo from "./TextLogo";
import { Mail, Phone } from "lucide-react";
import FooterHeading from "./FooterHeading";
import FooterContactItem from "./FooterContactItem";

const Footer = () => {
  return (
    <Section bg="gray.900" py={16} id="footer" as="footer">
      <Flex
        direction={{ base: "column", md: "row" }}
        color="white"
        justifyContent="space-between"
        alignItems={{ base: "center", md: "flex-start" }}
        gap={8}
      >
        <VStack maxW={{ md: "500px" }}>
          <TextLogo
            fontSize={"xl"}
            variant={"footer"}
            colorFrom={"blue.400"}
            colorTo={"purple.400"}
          />
          <Text
            color="gray.400"
            textAlign={{ base: "center", md: "left" }}
            mt={4}
          >
            AI-powered Video Management System for next-generation security and
            surveillance.
          </Text>
        </VStack>
        <VStack minW={{ md: "250px" }}>
          <FooterHeading>Contact</FooterHeading>
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <FooterContactItem
              icon={Mail}
              text="info@netixsystem.com"
              href="mailto:info@netixsystem.com"
            />
            <FooterContactItem
              icon={Phone}
              text="021 91694741"
              href="tel:02191694741"
            />
            <FooterContactItem
              icon={Phone}
              text="021 88200244"
              href="tel:2188200244"
            />
          </VStack>
        </VStack>
      </Flex>
      <Text
        textAlign="center"
        color="gray.400"
        borderTopWidth="1px"
        borderTopColor="gray.800"
        mt={8}
        pt={8}
      >
        &copy; 2025 Setra AI. All rights reserved.
      </Text>
    </Section>
  );
};

export default Footer;
