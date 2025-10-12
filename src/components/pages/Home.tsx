import { Box } from "@chakra-ui/react";
import { Hero } from "../hero";
import { Stats } from "../stats";
import { AiFeature } from "../ai-feature";
import { HowItWorks } from "../how-it-works";
import { Benifit } from "../benifit";
import { CTA } from "../cta";
import { Footer } from "../layout";





const Home = () => {
  return (
    <Box as={"main"} position={"relative"}>
      <Hero />
      <Stats />
      <AiFeature />
      <HowItWorks />
      <Benifit />
      <CTA />
      <Footer />
    </Box>
  );
};

export default Home;
