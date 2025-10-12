
import { Link } from "@chakra-ui/react/link";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NavLink = ({ children }: Props) => {
  return (
    <Link
      href="#"
      _hover={{ color: "blue.600" }}
      textDecoration="none" 
      transition={"colors"}
    >
        {children}
    </Link>
  );
};

export default NavLink;
