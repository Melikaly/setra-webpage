import { Card, Flex } from "@chakra-ui/react";
import CheckedItems from "./CheckedItems";
import type { ReactNode } from "react";

export interface AiFeature {
  color: string;
  icon: ReactNode;
  cardTitle: string;
  cardDescription: string;
  checkedTexts: string[];
}

interface Props {
  feature: AiFeature;
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
          {feature.icon}
        </Flex>
      </Card.Header>
      <Card.Body gap={5}>
        <Card.Title as={"h3"} fontSize="xl" fontWeight="extrabold" my="auto">
          {feature.cardTitle}
        </Card.Title>
        <Card.Description fontSize="md" color="gray.600" lineHeight="tall">
          {feature.cardDescription}
        </Card.Description>
        <CheckedItems texts={feature.checkedTexts} direction={"column"} />
      </Card.Body>
    </Card.Root>
  );
};

export default AiFeatureCard;
