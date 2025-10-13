import { Section, TwoColGrid } from "../ui";
import BenefitContent from "./BenefitContent";
import BenefitInfo from "./BenefitInfo";


const Benefit = () => {
  return (
    <Section bg="white" py={20} id={"benefit"}>
      <TwoColGrid>
        <BenefitContent />
        <BenefitInfo />
      </TwoColGrid>
    </Section>
  );
};

export default Benefit;
