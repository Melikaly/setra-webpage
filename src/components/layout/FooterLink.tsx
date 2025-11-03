import { Link } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  href: string;
}

const FooterLink = ({ children, href }: Prop) => {
  return (
    <Link color="gray.400" _hover={{ color: "white" }} href={href}>
      {children}
    </Link>
  );
};

export default FooterLink;
