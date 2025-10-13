import { GridItem } from "@chakra-ui/react";
import HeroContent from "./HeroContent";
import HeroInfo from "./HeroInfo";
import { Section, TwoColGrid } from "../ui";

const Hero = () => {
  return (
    <Section
      bgGradient="to-br"
      gradientFrom="blue.50"
      gradientTo="purple.50"
      id={"heroSection"}
      overflow="hidden"
      pt="24" 
      pb="16"
    >
      <TwoColGrid>
        <GridItem key="hero-content">
          <HeroContent />
        </GridItem>
        <GridItem key="hero-Info" position="relative">
          <HeroInfo />
        </GridItem>
      </TwoColGrid>
    </Section>
  );
};

export default Hero;
