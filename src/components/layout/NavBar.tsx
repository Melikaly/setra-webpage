import { useColorModeValue } from "../ui/color-mode";
import TextLogo from "./TextLogo";
import { Section } from "../ui";
import { Flex } from "@chakra-ui/react";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  return (
    <Section
      as="nav"
      id="nav"
      w="100%"
      position="fixed"
      top={0}
      py={3}
      px={{ base: 4, sm: 6, lg: 8 }}
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.900")}
      bg="whiteAlpha.900"
      backdropBlur="8px"
      zIndex="50"
    >
      <Flex justify="space-between" align="center">
        <TextLogo
          fontSize="2xl"
          variant="nav"
          colorFrom="blue.600"
          colorTo="purple.600"
        />
        <NavBarLinks />
      </Flex>
    </Section>
  );
}

export default NavBar;
