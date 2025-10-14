import type TitleGroup from "@/entities/TitleGroup";
import { Box, Icon, Text } from "@chakra-ui/react";

const LabelSection = ({ title, icon, color }: TitleGroup) => {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      bg={`${color}.100`}
      color={`${color}.700`}
      rounded="full"
      textStyle="sm"
      fontWeight="medium"
      px={4}
      py={2}
      mb={6}
    >
      <Icon as={icon} boxSize={6} />
      <Text>{title}</Text>
    </Box>
  );
};

export default LabelSection;
