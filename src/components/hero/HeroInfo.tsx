import { Box, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import HeroInfoItem from "./HeroInfoItem";
import { CircleDot, FeatureItem } from "../ui";
import { heroFeatures, heroInfoItem, InoDotscolors } from "./heroData";

const HeroInfo = () => {
  return (
    <Box
      bgImage="gradientGray_toBr_blue"
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
          <HStack>
            {InoDotscolors.map((color) => (
              <CircleDot color={color} />
            ))}
          </HStack>

          <Text color="green.400" fontSize="sm" fontFamily="mono">
            LIVE
          </Text>
        </Flex>
        {heroInfoItem.map((info) => (
          <HeroInfoItem
            title={info.title}
            text={info.text}
            color={info.color}
          />
        ))}
        <Box
          position="absolute"
          top={0}
          right={0}
          width="full"
          height={1}
          bgImage="gradientBluePurple_toR_600"
          animation="pulse"
        ></Box>
      </Box>
      <SimpleGrid columns={3} gap={4}>
        {heroFeatures.map((feature) => (
          <FeatureItem
            feature={feature}
            fontName="xs"
            fontTitle="2xl"
            padding="3"
            rounded="lg"
            bg="whiteAlpha.100"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeroInfo;
