import { Box } from "@chakra-ui/react";
import { Hero } from "../hero";
import { Stats } from "../stats";
import { AiFeature } from "../ai-feature";
import { HowItWorks } from "../how-it-works";
import { Benifit } from "../benifit";
import { CTA } from "../cta";





const Home = () => {
  return (
    <Box as={"main"} position={"relative"}>
      <Hero />
      <Stats />
      <AiFeature />
      <HowItWorks />
      <Benifit />
      <CTA />
      <Box backgroundColor={"gray"}>footer</Box>
    </Box>
  );
};

export default Home;
