import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
  className: "chakra-link",
  base: {
    display: "inline-flex",
    alignItems: "center",
    outline: "none",
    gap: "1.5",
    cursor: "pointer",
    borderRadius: "l1",
  },
  variants: {
    variant: {
      underline: {
        color: "colorPalette.fg",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        textDecorationColor: "currentColor/20",
      },
      plain: {
        color: "colorPalette.fg",
      },
    },
  },
  defaultVariants: {
    variant: "plain",
  },
});
