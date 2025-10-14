import { Box, VStack } from "@chakra-ui/react";
import { MainHeading } from "../ui";
import { benefitHeading, benefitItems } from "./BenefitData";
import BenefitItem from "./BenefitItem";

const BenefitContent = () => {
  return (
    <Box>
      <MainHeading title={benefitHeading} mb={8} />
      <VStack gap={6}>
        {benefitItems.map((item) => (
          <BenefitItem title={item.title} text={item.text}  />
        ))}
      </VStack>
    </Box>
  );
};

export default BenefitContent;
