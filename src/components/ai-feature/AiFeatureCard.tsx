import { Card, Flex, Icon } from "@chakra-ui/react";
import { CheckedItems } from "../ui";
import type { AiFeatureProps } from "./AiFeatureProps";



interface Props {
  feature: AiFeatureProps;
}

const AiFeatureCard = ({ feature }: Props) => {
  return (
    <Card.Root
      bgGradient="to-br"
      gradientFrom={feature.color + ".50"}
      gradientTo={"white"}
      borderColor={"blue.100"}
      rounded="xl"
      _hover={{ shadow: "xl" }}
      transition="all"
      className="group"
      role="group"
    >
      <Card.Header>
        <Flex
          color={"white"}
          bg={feature.color + ".600"}
          rounded="sm"
          p={2}
          height={12}
          width={12}
          justifyContent="center"
          alignItems="center"
          _groupHover={{ scale: "1.05" }}
          transition="transform"
        >
          <Icon as={feature.icon} />
        </Flex>
      </Card.Header>
      <Card.Body gap={5}>
        <Card.Title as={"h3"} fontSize="xl" fontWeight="extrabold" my="auto">
          {feature.title}
        </Card.Title>
        <Card.Description fontSize="md" color="gray.600" lineHeight="tall">
          {feature.text}
        </Card.Description>
        <CheckedItems texts={feature.checkedTexts} direction={"column"} />
      </Card.Body>
    </Card.Root>
  );
};

export default AiFeatureCard;
