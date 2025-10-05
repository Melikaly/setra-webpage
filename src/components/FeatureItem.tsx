import { Box, Text } from "@chakra-ui/react";

interface Props {
  featureTitle: string;
  featureName: string;
  fontTitle: string;
  fontName: string;
  padding: string;
  itemType : "hero" | "simple";
}
const FeatureItem = ({ featureTitle, featureName, fontTitle,fontName, padding, itemType="simple" }: Props) => {
  const ItemType = itemType === "hero" ? {bg:"white/10" ,rounded:"lg"} : {};
  return (
    <Box textAlign="center" p={padding} {...ItemType}>
      <Text fontSize={fontTitle} fontWeight={"bold"} color="white">
        {featureTitle}
      </Text>
      <Text fontSize={fontName} color="gray.300">
        {featureName}
      </Text>
    </Box>
  );
};

export default FeatureItem;
