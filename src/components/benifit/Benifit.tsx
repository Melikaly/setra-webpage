import { Section, TwoColGrid } from "../ui";
import BenifitContent from "./BenifitContent";

const Benifit = () => {
  return (
    <Section variant={"white"} section={"simple"} id={"benifitSection"}>
      <TwoColGrid>
        <BenifitContent />
      </TwoColGrid>
    </Section>
  );
};

export default Benifit;
