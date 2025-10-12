import { Flex, Icon } from "@chakra-ui/react";
import type { ElementType } from "react";
import FooterLink from "./FooterLink";


interface Props {
  icon: ElementType;
  text: string;
  href: string;
}

const FooterContactItem = ({icon,text,href}:Props) => {
  return (
    <Flex alignItems="center" spaceX={2}>
      <Icon as={icon} boxSize={4} />
      <FooterLink href={href}>{text}</FooterLink>
    </Flex>
  );
};

export default FooterContactItem;
