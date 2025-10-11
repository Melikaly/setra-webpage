import { Box,Text } from "@chakra-ui/react";
import MainHeading from "./MainHeading";

interface Props {
  heading: string;
  text: string;
  headingColor?: string;
  textColor?: string;
}

const MainHeadingGroup = ({ heading, text, textColor="gray.600", headingColor }: Props) => {
  return (
    <Box textAlign="center">
      <MainHeading heading={heading} color={headingColor} />
      <Text
        fontSize="xl"
        maxWidth="4xl"
        mx="auto"
        color={textColor}
      >
        {text}
      </Text>
    </Box>
  );
};

export default MainHeadingGroup;
