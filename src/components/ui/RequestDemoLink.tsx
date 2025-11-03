import { Icon, Link } from "@chakra-ui/react";
import { Mail } from "lucide-react";

interface Props {
  color: string;
  rounded: "lg" | "md";
  px: number;
  py: number;
  bgImage?: string;
  bgImageHover?: string;
  bg?: string;
  bgHover?: string;
  isIcon?: boolean;
  fontSize?: string;
}

const RequestDemoLink = ({
  color,
  rounded,
  px,
  py,
  bg,
  bgHover,
  fontSize = "md",
  isIcon = false,
}: Props) => {
  return (
    <Link
      href="mailto:info@netixsystem.com"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      fontWeight="medium"
      fontSize={fontSize}
      bg={bg}
      color={color}
      rounded={rounded}
      px={px}
      py={py}
      gap={2}
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.03)",
        bg: `${bgHover}`,

      }}
    >
      {isIcon && <Icon as={Mail} boxSize={5} />}
      Request Demo
    </Link>
  );
};

export default RequestDemoLink;
