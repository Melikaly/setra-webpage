import { MainHeadingGroup, Section } from "../ui";
import { howItWorksHeading, howItWorksText } from "./HowitWorksData";
import HowItWorksGrid from "./HowItWorksGrid";

const HowItWorks = () => {
  return (
    <Section
      bgImage="gradientGray_toBr_White"
      py={20}
      id={"howItWorks"}
    >
      <MainHeadingGroup title={howItWorksHeading} text={howItWorksText} />
      <HowItWorksGrid />
    </Section>
  );
};

export default HowItWorks;
