import { Box, Container, type ContainerProps } from "@chakra-ui/react";
import type { ElementType, ReactNode } from "react";

interface SectionProps extends ContainerProps {
  children: ReactNode;
  id: string;
  as?: ElementType;
}

const Section = ({ children, id, as = "section", ...rest }: SectionProps) => {
  return (
    <Box as={as} id={id} {...rest}>
      <Container
        maxWidth="7xl"
        mx="auto"
        px={{ base: "4", sm: "6", lg: "8" }}
        position={"relative"}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Section;
