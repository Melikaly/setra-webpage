import { Box,Text } from "@chakra-ui/react";
import MainHeading from "./MainHeading";

interface Props {
  title: string;
  text: string;
  headingColor?: string;
  textColor?: string;
}

const MainHeadingGroup = ({ title, text, textColor="fg.muted", headingColor }: Props) => {
  return (
    <Box textAlign="center">
      <MainHeading title={title} color={headingColor} />
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
