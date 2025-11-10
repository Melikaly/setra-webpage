import type TitleGroup from "@/entities/TitleGroup";
import { Box, Heading, Icon, Text } from "@chakra-ui/react";

const HowItWorksItem = ({ title, text, icon }: TitleGroup) => {
  return (
    <Box textAlign="center">
      <Box
        display="inline-flex"
        height={20}
        width={20}
        alignItems="center"
        justifyContent="center"
        rounded="full"
        color="white"
        bgImage="gradientBluePurple_toR_600"
        mb={8}
        mx="auto"
      >
        <Icon as={icon} boxSize={8} />
      </Box>

      <Heading as="h3" fontSize="xl" color="gray.solid" fontWeight="bold" mb={4}>
        {title}
      </Heading>
      <Text fontSize="md" color="fg.muted" lineHeight="moderate">
        {text}
      </Text>
    </Box>
  );
};

export default HowItWorksItem;
