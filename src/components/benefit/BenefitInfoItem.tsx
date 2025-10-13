import { Box, Flex, Text } from "@chakra-ui/react";
import { InfoBadge } from "../ui";

interface Props {
  type: string;
  confidence: string;
  status: string;
  color: string;
}

const BenefitInfoItem = ({ type, confidence, status, color }: Props) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      py={2}
      key={type}
    >
      <Box>
        <Text fontWeight="medium" color="gray.900">
          {type}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {confidence}
        </Text>
      </Box>
      <InfoBadge fontSize={"xs"} color={color}>
        {status}
      </InfoBadge>
    </Flex>
  );
};

export default BenefitInfoItem;
