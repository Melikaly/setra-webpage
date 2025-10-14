import { SimpleGrid } from "@chakra-ui/react";
import { howItWorksItems } from "./HowitWorksData";
import HowItWorksItem from "./HowItWorksItem";

const HowItWorksGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} mt={16}>
      {howItWorksItems.map((item) => (
        <HowItWorksItem title={item.title} text={item.text} icon={item.icon} />
      ))}
    </SimpleGrid>
  );
};

export default HowItWorksGrid;
