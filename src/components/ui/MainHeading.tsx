import { Heading } from "@chakra-ui/react";

interface Props{
    title: string;
    mb?: string | number;
    color?: string;

}

const MainHeading = ({title,mb=4,color="gray.solid"}:Props) => {
  return (
    <Heading
      as={"h2"}
      fontSize={{ base: "3xl", md: "4xl" }}
      fontWeight="bold"
      color={color}
      mb={mb}
      lineHeight="normal"
    >
      {title}
    </Heading>
  );
};

export default MainHeading;
