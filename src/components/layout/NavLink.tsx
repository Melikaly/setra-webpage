
import { Link } from "@chakra-ui/react/link";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

const NavLink = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      _hover={{ color: "blue.600" }}
      transition="colors"
    >
        {children}
    </Link>
  );
};

export default NavLink;
