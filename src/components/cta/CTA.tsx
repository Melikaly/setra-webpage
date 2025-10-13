import { Button, Stack, Text, VStack } from "@chakra-ui/react";
import { MainHeadingGroup, Section } from "../ui";
import { ctaHeading, ctaText } from "./CtaData";
import { Play } from "lucide-react";

const CTA = () => {
  return (
    <Section
      bgGradient="to-r"
      gradientFrom="blue.600"
      gradientTo="purple.600"
      py={20}
      id={"cta"}
    >
      <MainHeadingGroup
        heading={ctaHeading}
        text={ctaText}
        headingColor="white"
        textColor="whiteAlpha.900"
      />
      <VStack>
        <Stack
          direction={{ base: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          fontWeight="semibold"
          mt={8}
          mb={4}
          gap={4}
        >
          <Button
            bg="white"
            color="blue.600"
            rounded="lg"
            _hover={{ bg: "gray.100" }}
            transition="colors"
            size="xl"
            px={8}
            py={4}
          >
            <Play />
            Watch Live Demo
          </Button>
          <Button
            variant="outline"
            colorScheme="white"
            color="white"
            rounded="lg"
            _hover={{ bg: "whiteAlpha.100" }}
            transition="colors"
            size="xl"
            px={8}
            py={4}
          >
            Start Free Trial
          </Button>
        </Stack>
        <Text color="whiteAlpha.700" fontSize="sm" textAlign="center">
          No credit card required • 30-day free trial • Setup in minutes
        </Text>
      </VStack>
    </Section>
  );
};

export default CTA;
