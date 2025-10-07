import { Heading } from "@chakra-ui/react";

interface Props{
    heading: string;
    mb?: string | number;

}

const MainHeading = ({heading,mb=4}:Props) => {
  return (
    <Heading
      as={"h2"}
      fontSize={{ base: "3xl", md: "4xl" }}
      fontWeight="bold"
      color="gray.900"
      mb={mb}
    >
      {heading}
    </Heading>
  );
};

export default MainHeading;
