import {
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import HeroContent from "./HeroContent";
import Section from "./Section";
import HeroInfo from "./HeroInfo";

const Hero = () => {
  return (
    <Section variant={"gradientBluePurple"} section={"hero"} id={"heroSection"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
        <GridItem key="hero-content">
          <HeroContent />
        </GridItem>
        <GridItem key="hero-Info" position="relative">
         <HeroInfo /> 
        </GridItem>
      </SimpleGrid>
    </Section>
  );
};

export default Hero;
