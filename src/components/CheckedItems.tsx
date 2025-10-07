import { Box, Stack, Text } from "@chakra-ui/react";
import { CircleCheckBig } from "lucide-react";

interface Props {
  texts: string[];
  direction: "column" | "row";
}

const CheckedItems = ({ texts, direction }: Props) => {
  const space = direction === "column" ? { spaceY: 0 } : { spaceX: 6 };
  return (
    <Stack direction={direction} fontSize={"sm"} color={"gray.600"} {...space}>
      {texts.map((text) => (
        <Box display="flex" alignItems="center" spaceX={2} key={text}>
          <CircleCheckBig height={16} width={16} color="#16a34a" />
          <Text>{text}</Text>
        </Box>
      ))}
    </Stack>
  );
};

export default CheckedItems;
