import { Button, Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

const NavBarLinks = () => {
  return (
    <Flex display={{ base: "none", md: "flex" }} spaceX={8} alignItems="center">
      <NavLink href="#AiFeature">AI Features</NavLink>
      <NavLink href="#benefit">Benefits</NavLink>
      <NavLink href="#howItWorks">How it Works</NavLink>
      <Button
        bgGradient="to-r"
        gradientFrom="blue.600"
        gradientTo="purple.600"
        size="sm"
        rounded="md"
        border="none"
        paddingX={5}
        color="white"
        fontWeight="semibold"
        _hover={{
          transform: "scale(1.03)",
          bgGradient: "to-r",
          gradientFrom: "blue.700",
          gradientTo: "purple.700",
        }}
      >
        Request Demo
      </Button>
    </Flex>
  );
};

export default NavBarLinks;
