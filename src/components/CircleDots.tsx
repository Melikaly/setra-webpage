import { Box, HStack } from "@chakra-ui/react";

interface Props {
  colors: string[];
}

const CircleDots = ({ colors }: Props) => {
  return (
    <HStack>
      {colors.map((color) => <Box height={3} width={3} bg={color} rounded="full"></Box>)}
    </HStack>
  );
};

export default CircleDots;
