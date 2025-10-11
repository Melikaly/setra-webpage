import { Box, VStack } from "@chakra-ui/react";
import { MainHeading } from "../ui";
import { benifitHeading, benifitItems } from "./BenifitData";
import BenifitItem from "./BenifitItem";

const BenifitContent = () => {
  return (
    <Box>
      <MainHeading heading={benifitHeading} mb={8} />
      <VStack gap={6}>
        {benifitItems.map((item) => (
          <BenifitItem item={item} />
        ))}
      </VStack>
    </Box>
  );
};

export default BenifitContent;
