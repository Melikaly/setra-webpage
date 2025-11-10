import { Box, Heading, Text } from "@chakra-ui/react";
import BenefitInfoTable from "./BenefitInfoTable";

const BenefitInfo = () => {
  return (
    <Box bgImage="gradientBluePurple_toBr_50" bgGradient="to-br" gradientFrom="blue.subtle" gradientTo="purple.subtle" padding={8} rounded="xl">
      <Heading
        as="h4"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        color="gray.solid"
        mb={3}
        letterSpacing="tight"
      >
        AI Detection Dashboard
      </Heading>
      <Text
        display={{ base: "none", md: "block" }}
        color="fg.muted"
        mb={6}
        fontSize="md"
      >
        Monitor real-time security alerts and detections
      </Text>
      <Box
        bg="bg"
        position="relative"
        mb={6}
        padding={6}
        shadow="xl"
        rounded="xl"
        overflow={{base:"scroll",md:"hidden"}}
        borderColor="gray.subtle"
        transition="all 0.3s ease"
        _hover={{
          shadow: "2xl",
          transform: "translateY(-2px)",
        }}
      >
        <BenefitInfoTable />
      </Box>
    </Box>
  );
};

export default BenefitInfo;
