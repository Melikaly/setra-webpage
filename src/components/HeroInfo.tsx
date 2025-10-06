import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import CircleDots from "./CircleDots";
import HeroInfoItem from "./HeroInfoItem";
import FeatureItem from "./FeatureItems";

const HeroInfo = () => {
  const heroFeatures = [
    { featureTitle: "24/7", featureName: "Monitoring" },
    { featureTitle: "99.9%", featureName: "Accuacy" },
    { featureTitle: "<1s", featureName: "Response" },
  ];
  return (
    <Box
      bgGradient="to-br"
      gradientFrom="gray.800"
      gradientTo="blue.800"
      padding={8}
      rounded="xl"
      shadow="2xl"
      flexDirection={"column"}
      _hover={{
        transform: "scale(1.05)",
      }}
      transition="transform 0.5s ease-in-out"
    >
      <Box
        bg={"black"}
        position="relative"
        mb={6}
        padding={4}
        rounded="lg"
        overflow="hidden"
      >
        <Flex justifyContent={"space-between"} alignItems={"center"} mb={4}>
          <CircleDots colors={["red.600", "yellow.600", "green.600"]} />
          <Text color="green.400" fontSize="sm" fontFamily="mono">
            LIVE
          </Text>
        </Flex>
        <HeroInfoItem
          color={"green.400"}
          textTitle={"AI Detection: Person Detection"}
          textInfo={"99.7%"}
        />
        <HeroInfoItem
          color={"blue.400"}
          textTitle={"Motion Analysis: Active"}
          textInfo={"Zone 3"}
        />
        <HeroInfoItem
          color={"purple.400"}
          textTitle={"Threat Level: Low"}
          textInfo={"Normal"}
        />

        <Box
          position="absolute"
          top={0}
          right={0}
          width="full"
          height={1}
          bgGradient="to-r"
          gradientFrom="blue.600"
          gradientTo="purple.600"
          animation="pulse"
        ></Box>
      </Box>
      <SimpleGrid columns={3} gap={4}>
        <FeatureItem
          features={heroFeatures}
          fontName="xs"
          fontTitle="2xl"
          padding="3"
          variant="hero"
        />
      </SimpleGrid>
    </Box>
  );
};

export default HeroInfo;
