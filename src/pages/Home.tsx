

import Hero from "@/components/hero/Hero";


import { Box, Center, Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

 const AiFeature = lazy(()=>import("@/components/ai-feature/AiFeature"));
 const Benefit = lazy(()=>import("@/components/benefit/Benefit"));
 const CTA = lazy(()=>import("@/components/cta/CTA"));
 const HowItWorks = lazy(()=>import("@/components/how-it-works/HowItWorks"));
 const Stats = lazy(()=>import("@/components/stats/Stats"));



const Home = () => {
  return (
    <Box as={"main"} position={"relative"}>
      <Hero />
      <Suspense
        fallback={
          <Center h="100vh">
            <Spinner size="xl" color="blue.500" />
          </Center>
        }
      >
      <Stats />
      <AiFeature />
      <HowItWorks />
      <Benefit />
      <CTA />
      </Suspense>
    </Box>
  );
};

export default Home;
