import { Box } from "@chakra-ui/react";

interface Props {
  color: string;
}

const CircleDot = ({ color }: Props) => {
  return <Box height={3} width={3} bg={color} rounded="full"></Box>;
};

export default CircleDot;
