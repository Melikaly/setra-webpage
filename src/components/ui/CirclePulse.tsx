import { Box } from "@chakra-ui/react";

interface Props {
  size: number; 
  bg: string;
}

const CirclePulse = ({ size, bg}: Props) => {

  return (
    <Box
      w={size}
      h={size}
      bg={bg}
      rounded="full"
      animation="pulse"
    ></Box>
  );
};

export default CirclePulse;
