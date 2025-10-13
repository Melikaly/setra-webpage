import { FeatureItem, Section } from "../ui";
import { SimpleGrid } from "@chakra-ui/react";
import { statFeatures } from "./statsData";


const Stats = () => {
  return (
    <Section bg="gray.900" py={16} id={"Stat"}>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} textAlign="center">
        {statFeatures.map((feature) => (
          <FeatureItem
            feature={feature}
            fontTitle="4xl"
            fontName="initial"
            padding={5}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default Stats;
