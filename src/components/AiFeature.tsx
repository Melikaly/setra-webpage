import { Box } from "@chakra-ui/react";
import { Cpu } from "lucide-react";
import AIFeatureGrid from "./AIFeatureGrid";
import LabelSection from "./LabelSection";
import MainHeadingGroup from "./MainHeadingGroup";
import Section from "./Section";

const AiFeature = () => {
  const heading = "Intelligent Video Analytics Powered by AI";
  const text =
    "Leverage cutting-edge artificial intelligence to transform your surveillance system into a proactive security solution.";
  return (
    <Section variant="white" section={"simple"} id="AiFeature">
      <Box textAlign="center" mb={16}>
        <LabelSection
          icon={<Cpu height={16} width={16} />}
          text={"Advanced AI Capbilities"}
          color="purple"
        />
        <MainHeadingGroup heading={heading} text={text} />
      </Box>
      <AIFeatureGrid />
    </Section>

  );
};

export default AiFeature;
