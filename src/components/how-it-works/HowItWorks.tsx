import { MainHeadingGroup, Section } from "../ui";
import { howItWorksHeading, howItWorksText } from "./HowitWorksData";
import HowItWorksGrid from "./HowItWorksGrid";

const HowItWorks = () => {
  return (
    <Section
      bgGradient="to-br"
      gradientFrom="gray.50"
      gradientTo="white"
      py={20}
      id={"howItWorks"}
    >
      <MainHeadingGroup heading={howItWorksHeading} text={howItWorksText} />
      <HowItWorksGrid />
    </Section>
  );
};

export default HowItWorks;
