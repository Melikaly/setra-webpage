
import type TitleGroup from "@/entities/TitleGroup";
import { Box, Flex, Text } from "@chakra-ui/react";



const HeroInfoItem = ({ title, text,color }: TitleGroup) => {
  return (
    <Box bg="gray.800" padding={3} rounded="sm" mb={3}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        fontSize="sm"
        fontFamily="mono"
        color={`${color}.400`}
      >
        <Text>{title}</Text>
        <Text>{text}</Text>
      </Flex>
    </Box>
  );
};

export default HeroInfoItem;
