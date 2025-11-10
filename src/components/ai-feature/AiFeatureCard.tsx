import { Card, Flex, Icon, Stack } from "@chakra-ui/react";
import { CheckedItems } from "../ui";
import type { AiFeatureProps } from "./AiFeatureProps";



const AiFeatureCard = ({ color,icon,title,text,checkedTexts}: AiFeatureProps) => {
  return (
    <Card.Root
      bgGradient="to-br"
      gradientFrom={`${color}.subtle`}
      gradientTo="bg"
      borderColor={`${color}.muted`}
      rounded="xl"
      _hover={{ shadow: "xl" }}
      transition="all"
      className="group"
      role="group"
    >
      <Card.Header>
        <Flex
          color="bg"
          bg={`${color}.solid`}
          rounded="sm"
          p={2}
          height={12}
          width={12}
          justifyContent="center"
          alignItems="center"
          _groupHover={{ scale: "1.05" }}
          transition="transform"
        >
          <Icon as={icon} />
        </Flex>
      </Card.Header>
      <Card.Body gap={5}>
        <Card.Title as={"h3"} fontSize="xl" fontWeight="extrabold" my="auto">
          {title}
        </Card.Title>
        <Card.Description fontSize="md" color="gray.solid" lineHeight="tall">
          {text}
        </Card.Description>
        
        <Stack direction="column" spaceY={0} fontSize={"sm"} color="gray.solid">
          {checkedTexts.map((item)=> <CheckedItems text={item.text} key={item.id} />)}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default AiFeatureCard;
