import { Stack, Text, VStack } from "@chakra-ui/react";
import { MainHeadingGroup, RequestDemoLink, Section } from "../ui";
import { ctaHeading, ctaText } from "./CtaData";

const CTA = () => {
  return (
    <Section bgImage="gradientBluePurple_toR_600" py={20} id={"cta"}>
      <MainHeadingGroup
        title={ctaHeading}
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
          {/* <Link
            bg="white"
            color="blue.600"
            rounded="lg"
            _hover={{ bg: "gray.100" }}
            transition="colors"
            px={8}
            py={4}
            gap={2}
            href=""
          >
            <Mail />
            Request Demo
          </Link> */}
          <RequestDemoLink
            color="blue.600"
            rounded="lg"
            px={10}
            py={3}
            bg="white"
            bgHover="gray.200"
            isIcon={true}
          />
        </Stack>
        <Text color="whiteAlpha.700" fontSize="sm" textAlign="center">
          No credit card required • 30-day free trial • Setup in minutes
        </Text>
      </VStack>
    </Section>
  );
};

export default CTA;
