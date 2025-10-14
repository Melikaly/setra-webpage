import { Box } from "@chakra-ui/react";
import { Cpu } from "lucide-react";
import AIFeatureGrid from "./AIFeatureGrid";
import { Section, LabelSection, MainHeadingGroup, } from "../ui";
import { aiFeatureHeading, aiFeatureText } from "./aiFeatureData";

const AiFeature = () => {
  
  return (
    <Section bg="white" py={20} id="AiFeature">
      <Box textAlign="center" mb={16}>
        <LabelSection
          icon={Cpu}
          title={"Advanced AI Capbilities"}
          color="purple"
        />
        <MainHeadingGroup title={aiFeatureHeading} text={aiFeatureText} />
      </Box>
      <AIFeatureGrid />
    </Section>
  );
};

export default AiFeature;
