import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { Eye } from "lucide-react";
import { CircleDot, CirclePulse } from "../ui";

interface Prop {
  fontSize: string;
  variant: "nav" | "footer";
  colorFrom: string;
  colorTo: string;
}

const TextLogo = ({ fontSize, variant, colorTo, colorFrom }: Prop) => {
  return (
    <HStack
      alignItems="center"
      justifyContent={{ base: "center", md: "start" }}
      gap={3}
    >
      <Box position="relative">
        <Icon as={Eye} color="#2563eb" boxSize={8} />
        <Box position="absolute" top={-1} right={-2}>
          {variant === "nav" ? (
            <CirclePulse size={3} bg={"purple.500"} />
          ) : (
            <CircleDot color={"purple.500"} />
          )}
        </Box>
      </Box>
      <Text
        fontWeight={"bold"}
        fontSize={fontSize}
        bgGradient="to-r"
        gradientFrom={colorFrom}
        gradientTo={colorTo}
        bgClip="text"
      >
        Setra
      </Text>
    </HStack>
  );
};

export default TextLogo;
