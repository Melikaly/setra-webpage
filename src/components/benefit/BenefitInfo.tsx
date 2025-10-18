import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { CirclePulse, FeatureItem, InfoBadge } from "../ui";
import { benefitFeatures, benefitInfoItems } from "./BenefitData";
import BenefitInfoItem from "./BenefitInfoItem";


const BenefitInfo = () => {
  return (
    <Box
      bgImage="gradientBluePurple_toBr_50"
      padding={8}
      rounded="xl"
    >
      <Box
        bg={"white"}
        position="relative"
        mb={6}
        padding={4}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Flex justifyContent={"space-between"} alignItems={"center"} mb={4}>
          <Heading as="h4" fontWeight="semibold" color="gray.900">
            AI Detection Dashboard
          </Heading>
          <InfoBadge fontSize={"sm"} color={"green"}>
            <CirclePulse size={2} bg={"green.500"} />
            Live
          </InfoBadge>
        </Flex>
        <Box divideY="1px">
          {benefitInfoItems.map((item) => (
            <BenefitInfoItem
              type={item.type}
              confidence={item.confidence}
              status={item.status}
              color={item.color}
            />
          ))}
        </Box>
      </Box>
      <SimpleGrid columns={benefitFeatures.length} gap={4}>
        {benefitFeatures.map((feature) => (
          <FeatureItem
            feature={feature}
            fontName="xs"
            fontTitle="2xl"
            padding="3"
            colorText="gray.600"
            bg="white"
            shadow="lg"
            rounded="xl"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BenefitInfo;
