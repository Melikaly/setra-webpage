import { Button, Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

const NavBarLinks = () => {
  return (
    <Flex display={{ base: "none", md: "flex" }} spaceX={8} alignItems="center">
      <NavLink href="#AiFeature">AI Features</NavLink>
      <NavLink href="#benefit">Benefits</NavLink>
      <NavLink href="#howItWorks">How it Works</NavLink>
      <Button
        bgImage="gradientBluePurple_toR_600"
        size="sm"
        rounded="md"
        border="none"
        paddingX={5}
        color="white"
        fontWeight="semibold"
        _hover={{
          transform: "scale(1.03)",
          bgImage: "gradientBluePurple_toR_700"
        }}
      >
        Request Demo
      </Button>
    </Flex>
  );
};

export default NavBarLinks;
