import type TitleGroup from "@/entities/TitleGroup";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";



const BenefitItem = ({ title,text}: TitleGroup) => {
  return (
    <Flex alignItems="start" spaceX={4} >
      <Box
        display="flex"
        height={6}
        width={6}
        rounded="full"
        bg="green.subtle"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
      >
        <Icon as={CheckCircle} boxSize={4} color="green.solid" />
      </Box>
      <Box>
        <Heading as="h3" fontWeight="semibold" color="gray.solid" mb={2}>
          {title}
        </Heading>
        <Text color="gray.solid">{text}</Text>
      </Box>
    </Flex>
  );
};

export default BenefitItem;
