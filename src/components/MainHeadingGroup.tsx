import { Text } from "@chakra-ui/react";
import MainHeading from "./MainHeading";

interface Props{
    heading: string;
    text: string;
}

const MainHeadingGroup = ({heading,text}: Props) => {
  return (
    <>
      <MainHeading heading={heading} />
      <Text
        fontSize="xl"
        color="gray.700"
        maxWidth="4xl"
        mx="auto"
        textAlign="center"
      >
        {text}
      </Text>
    </>
  );
};

export default MainHeadingGroup;
