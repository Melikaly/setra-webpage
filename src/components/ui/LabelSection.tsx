import type TitleGroup from "@/entities/TitleGroup";
import { Badge, Icon, Text } from "@chakra-ui/react";

const LabelSection = ({ title, icon, color }: TitleGroup) => {
  return (
    <>
      <Badge
        colorPalette={color}
        size="lg"
        variant="surface"
        rounded="full"
        px={4}
        py={2}
        mb={6}
      >
        <Icon as={icon} boxSize={6} />
        <Text textStyle="sm" fontWeight="medium">{title}</Text>
      </Badge>
    </>
  );
};

export default LabelSection;
