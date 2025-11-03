import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Brain } from "lucide-react";
import { CheckedItems, LabelSection, RequestDemoLink } from "../ui";
import { checkedTexts } from "./heroData";

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
        <RequestDemoLink
          color="white"
          rounded="lg"
          px={6}
          py={4}
          bg="linear-gradient(to right, #2563eb, #9333ea)"
          bgHover="linear-gradient(to right, #173da6, #641ba3)"
          isIcon={true}
        />
      </Flex>
      <Stack direction="row" spaceX={6} fontSize="sm" color="gray.600">
        {checkedTexts.map((item) => (
          <CheckedItems text={item.text} key={item.id} />
        ))}
      </Stack>
    </>
  );
};

export default HeroContent;
