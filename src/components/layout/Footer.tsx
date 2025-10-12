import { Section } from "../ui";
import {
  Box,
  SimpleGrid,
  VStack,
  Text,
} from "@chakra-ui/react";
import TextLogo from "./TextLogo";
import { Mail, Phone } from "lucide-react";
import FooterHeading from "./FooterHeading";
import FooterLink from "./FooterLink";
import FooterContactItem from "./FooterContactItem";

const Footer = () => {
  return (
    <Section variant="gray" section="stat" id="footer" as="footer">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        color="white"
        justifyItems="center"
        alignItems="start"
        gap={8}
      >
        <Box textAlign={{base:"center",lg:"left"}}>
          <TextLogo
            fontSize={"xl"}
            variant={"footer"}
            colorFrom={"blue.400"}
            colorTo={"purple.400"}
          />
          <Text color="gray.400" mt={4}>
            AI-powered Video Management System for next-generation security and
            surveillance.
          </Text>
        </Box>
        <Box>
          <FooterHeading>Product</FooterHeading>
          <VStack alignItems="start">
            <FooterLink href="#">AI Features</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Security</FooterLink>
            <FooterLink href="#">Integration</FooterLink>
          </VStack>
        </Box>
        <Box>
          <FooterHeading>Company</FooterHeading>
          <VStack alignItems="start">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </VStack>
        </Box>
        <Box>
          <FooterHeading>Contact</FooterHeading>
          <VStack alignItems="start">
            <FooterContactItem icon={Mail} text="info@netixsystem.com" href="mailto:info@netixsystem.com" />
            <FooterContactItem icon={Phone} text="021 91694741" href="tel:02191694741" />
            <FooterContactItem icon={Phone} text="021 88200244" href="tel:2188200244" />
          </VStack>
        </Box>
      </SimpleGrid>
      <Text textAlign="center" color="gray.400" borderTopWidth="1px" borderTopColor="gray.800" mt={8} pt={8}>
        &copy; 2025 Setra AI. All rights reserved.
      </Text>
    </Section>
  );
};

export default Footer;
