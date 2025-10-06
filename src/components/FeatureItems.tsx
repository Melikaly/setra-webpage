import { Box, Text } from "@chakra-ui/react";

interface Feature {
  featureTitle: string;
  featureName: string;
}
interface Props {
  features: Feature[];
  fontTitle: string;
  fontName: string;
  padding?: string | number;
  variant?: "hero" | "simple";
}
const FeatureItems = ({
  features,
  fontTitle,
  fontName,
  padding,
  variant = "simple",
}: Props) => {
  return (
    <>
      {features.map((feature, i) => (
        <Box
          textAlign="center"
          p={padding}
          bg={variant === "hero" ? "whiteAlpha.100" : "transparent"}
          rounded={variant === "hero" ? "lg" : undefined}
          key={i}
        >
          <Text fontSize={fontTitle} fontWeight={"bold"} color="white">
            {feature.featureTitle}
          </Text>
          <Text fontSize={fontName} color="gray.300">
            {feature.featureName}
          </Text>
        </Box>
      ))}
    </>
  );
};

export default FeatureItems;
