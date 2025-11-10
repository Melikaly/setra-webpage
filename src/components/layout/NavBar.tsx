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
      borderColor="gray.muted"
      bg={{ _light: "whiteAlpha.900", _dark: "blackAlpha.900" }}
      backdropBlur="8px"
      zIndex="50"
    >
      <Flex justify="space-between" align="center">
        <TextLogo
          fontSize="2xl"
          variant="nav"
          colorFrom="blue.solid"
          colorTo="purple.solid"
        />
        <NavBarLinks />
      </Flex>
    </Section>
  );
}

export default NavBar;
