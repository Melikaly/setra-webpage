import { defineSlotRecipe } from "@chakra-ui/react";

export const tableSlotRecipe = defineSlotRecipe({
  className: "chakra-table",
  slots: [
    "root",
    "header",
    "body",
    "row",
    "columnHeader",
    "cell",
    "footer",
    "caption",
  ],
  base: {
    root: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
      textAlign: "start",
      verticalAlign: "top",
    },
    row: {
      _selected: {
        bg: "colorPalette.subtle",
      },
    },
    cell: {
      textAlign: "start",
      alignItems: "center",
    },
    columnHeader: {
      fontWeight: "medium",
      textAlign: "start",
    },
    caption: {
      fontWeight: "medium",
      textStyle: "xs",
    },
    footer: {
      fontWeight: "medium",
    },
  },
  variants: {
    interactive: {
      true: {
        body: {
          "& tr": {
            _hover: {
              bg: "colorPalette.subtle",
            },
          },
        },
      },
    },
    variant: {
      custom: {
        root: {
          boxShadow: "0 0 0 1px {colors.border}",
          fontFamily: "sans-serif",
          borderRadius: "lg",
          overflow: "hidden"
        },
        columnHeader: {
          borderBottomWidth: "1px",
          fontSize: "sm",
          fontWeight: "bold",
        },
        cell: {
          fontSize: "sm",
          fontWeight: "medium",
        },
        header: {
          bg: "bg.muted",
        },
        row: {
          "&:not(:last-of-type)": {
            borderBottomWidth: "1px",
          },
        },
        footer: {
          borderTopWidth: "1px",
        },
      },
    },
    size: {
      sm: {
        root: {
          textStyle: "sm",
        },
        columnHeader: {
          px: "2",
          py: "2",
        },
        cell: {
          px: "2",
          py: "2",
        },
      },
      md: {
        root: {
          textStyle: "sm",
        },
        columnHeader: {
          px: "3",
          py: "3",
        },
        cell: {
          px: "3",
          py: "3",
        },
      },
      lg: {
        root: {
          textStyle: "md",
        },
        columnHeader: {
          px: "4",
          py: "3",
        },
        cell: {
          px: "4",
          py: "3",
        },
      },
    },
  },
  defaultVariants: {
    variant: "custom",
    size: "sm",
  },
});
