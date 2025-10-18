import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Brain, Play } from "lucide-react";
import { CheckedItems, LabelSection } from "../ui";

const HeroContent = () => {
  return (
    <>
      <LabelSection
        icon={Brain}
        title={"AI-Powered Intelligence"}
        color="blue"
      />
      <Heading
        textStyle={{ base: "4xl", md: "6xl" }}
        mb={6}
        fontWeight="bold"
        color="gray.900"
      >
        Next-Gen Video Management with{" "}
        <Text
          as={"span"}
          color="transparent"
          bgImage="gradientBluePurple_toR_600"
          bgClip="text"
        >
          AI Analytics
        </Text>
      </Heading>
      <Text mb={8} textStyle={"xl"} color="gray.700">
        Our AI-powered Video Management System (VMS) leverages advanced
        analytics and detection capabilities to enhance security and operational
        efficiency. Automate real-time monitoring and get actionable insights to
        respond swiftly to potential threats.
      </Text>
      <Flex mb={8} gap={4} flexDirection={{ base: "column", md: "row" }}>
        <Button
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgImg="gradientBluePurple_toR_600"
          color="white"
          rounded="lg"
          border="none"
          px={6}
          py={7}
          size="xl"
          _hover={{
            transform: "scale(1.03)",
            bgImage: "gradientBluePurple_toR_700"
          }}
        >
          <Play />
          Request Demo
        </Button>
        <Button size="lg" variant="outline" px={6} py={7} rounded="lg">
          Get Free Trail
        </Button>
      </Flex>
      <CheckedItems
        texts={[
          "Real-time AI Detection",
          "Cloud & On-premise",
          "24/7 Monitoring",
        ]}
        direction={"row"}
      />
    </>
  );
};

export default HeroContent;
