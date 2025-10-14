import type TitleGroup from "@/entities/TitleGroup";
import { Box, Text } from "@chakra-ui/react";


interface Props {
  feature: TitleGroup;
  fontTitle: string;
  fontName: string;
  padding: string | number;
  bg?: string;
  rounded?: string;
  colorText?: string;
  shadow?: string;
}

const FeatureItem = ({
  feature,
  fontTitle,
  fontName,
  padding,
  bg="transparent",
  rounded= undefined,
  colorText="gray.300",
  shadow=undefined
  
}: Props) => {
  return (
    <Box
      textAlign="center"
      p={padding}
      bg={bg}
      rounded={rounded}
      shadow={shadow}
      key={feature.title}
    >
      <Text fontSize={fontTitle} fontWeight={"bold"} color={feature.color || "white"}>
        {feature.title}
      </Text>
      <Text fontSize={fontName} color={colorText}>
        {feature.text}
      </Text>
    </Box>
  );
};

export default FeatureItem;
