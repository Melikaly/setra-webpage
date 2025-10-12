import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { CirclePulse, FeatureItem, InfoBadge } from "../ui";
import BenifitInfoItem from "./BenifitInfoItem";
import { benifitFeatures, benifitInfoItems } from "./BenifitData";

const BenifitInfo = () => {
  return (
    <Box
      bgGradient="to-br"
      gradientFrom="blue.50"
      gradientTo="purple.50"
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
          {benifitInfoItems.map((item) => (
            <BenifitInfoItem
              type={item.type}
              confidence={item.confidence}
              status={item.status}
              color={item.color}
            />
          ))}
        </Box>
      </Box>
      <SimpleGrid columns={benifitFeatures.length} gap={4}>
        {benifitFeatures.map((feature) => (
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

export default BenifitInfo;
