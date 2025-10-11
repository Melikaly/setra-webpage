import { GridItem } from "@chakra-ui/react";
import HeroContent from "./HeroContent";
import HeroInfo from "./HeroInfo";
import { Section, TwoColGrid } from "../ui";


const Hero = () => {
  return (
    <Section variant={"gradientBluePurple50"} section={"hero"} id={"heroSection"}>
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
