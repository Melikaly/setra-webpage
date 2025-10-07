import { HStack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text: string;
  color: string;
}

const LabelSection = ({ icon, text, color }: Props) => {
  return (
    <HStack
      display="inline-flex"
      alignItems="center"
      bg={color +".100"}
      color={ color +".700"}
      rounded="full"
      textStyle="sm"
      fontWeight="medium"
      px={4}
      py={2}
      mb={6}
    >
      {icon}
      <Text>{text}</Text>
    </HStack>
  );
};

export default LabelSection;
