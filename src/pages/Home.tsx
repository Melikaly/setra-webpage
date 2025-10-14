import { AiFeature } from "@/components/ai-feature";
import { Benefit } from "@/components/benefit";
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Stats } from "@/components/stats";
import { Box } from "@chakra-ui/react";






const Home = () => {
  return (
    <Box as={"main"} position={"relative"}>
      <Hero />
      <Stats />
      <AiFeature />
      <HowItWorks />
      <Benefit />
      <CTA />
    </Box>
  );
};

export default Home;
