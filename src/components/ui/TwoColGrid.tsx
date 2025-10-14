import { SimpleGrid } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const TwoColGrid = ({ children }: Prop) => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
      {children}
    </SimpleGrid>
  );
};

export default TwoColGrid;
