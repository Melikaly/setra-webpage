import { Box, Flex, Text } from "@chakra-ui/react";

interface Props{
    color: string;
    textTitle : string;
    textInfo: string;
}

const HeroInfoItem = ({color,textTitle,textInfo}:Props) => {
  return (
    <Box bg="gray.800" padding={3} rounded="sm" mb={3}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        fontSize="sm"
        fontFamily="mono"
        color={color}
      >
        <Text>{textTitle}</Text>
        <Text>{textInfo}</Text>
      </Flex>
    </Box>
  );
};

export default HeroInfoItem;
