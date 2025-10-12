import { Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Prop{
    children: ReactNode;
}

const FooterHeading = ({children}:Prop) => {
  return (
    <Heading as="h3" fontWeight="semibold" mb={4}>
      {children}
    </Heading>
  );
};

export default FooterHeading;
