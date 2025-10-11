import { Heading } from "@chakra-ui/react";

interface Props{
    heading: string;
    mb?: string | number;
    color?: string;

}

const MainHeading = ({heading,mb=4,color="gray.900"}:Props) => {
  return (
    <Heading
      as={"h2"}
      fontSize={{ base: "3xl", md: "4xl" }}
      fontWeight="bold"
      color={color}
      mb={mb}
      lineHeight="normal"
    >
      {heading}
    </Heading>
  );
};

export default MainHeading;
