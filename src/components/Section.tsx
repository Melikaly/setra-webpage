import { Box, Container } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant: "white" | "gradientBluePurple" | "gray" | "gardientGray";
  section: "hero" | "stat" | "simple";
  id: string;
}

const Section = ({
  children,
  variant = "white",
  section = "simple",
  id,
}: Props) => {
  const variantStyle =
    variant === "gradientBluePurple"
      ? {
          bgGradient: "to-br",
          gradientFrom: "blue.50",
          gradientTo: "purple.50",
        }
      : variant === "gray"
      ? { bg: "gray.900" }
      : variant === "gardientGray"
      ? { bgGradient: "to-br", gradientFrom: "gray.50", gradientTo: "white" }
      : { bg: "white" };
  const sectionType =
    section === "hero"
      ? { position: "relative", overflow: "hidden", pt: "24", pb: "16" }
      : section === "stat"
      ? { py: "16" }
      : { py: "20" };
  return (
    <Box as="section" id={id} {...variantStyle} {...sectionType}>
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
