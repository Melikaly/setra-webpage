import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";
import RequestDemoLink from "../ui/RequestDemoLink";

const NavBarLinks = () => {
  return (
    <Flex display={{ base: "none", md: "flex" }} spaceX={8} alignItems="center">
      <NavLink href="#AiFeature">AI Features</NavLink>
      <NavLink href="#benefit">Benefits</NavLink>
      <NavLink href="#howItWorks">How it Works</NavLink>
      <RequestDemoLink
        color="white"
        rounded="md"
        px={5}
        py={2}
        bg="linear-gradient(to right, #2563eb, #9333ea)"
        bgHover="linear-gradient(to right, #173da6, #641ba3)"
        fontSize="sm"
      />
    </Flex>
  );
};

export default NavBarLinks;
