import { Box, Icon } from "@chakra-ui/react";
import type { ElementType } from "react";

const BenefitInfoIcon = ({ as, color }: { as: ElementType; color: string }) => {
  return (
    <Box
      bg={`${color}.subtle`}
      p={3}
      rounded="full"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={as} boxSize={5} color={`${color}.solid`} />
    </Box>
  );
};

export default BenefitInfoIcon;
