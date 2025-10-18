import { createSystem, defaultConfig, defineTokens } from "@chakra-ui/react";


const tokens = defineTokens({
  gradients: {
    gradientBluePurple_toR_600: {
      value: "linear-gradient(to right, #2563eb, #9333ea)",
    },
    gradientBluePurple_toR_700: {
      value: "linear-gradient(to right, #173da6, #641ba3)",
    },
    gradientBluePurple_toBr_50: {
      value: "linear-gradient(to bottom right, #eff6ff, #faf5ff)",
    },
    gradientGray_toBr_blue: {
      value: "linear-gradient(to bottom right, #27272a, #1a3478)",
    },
    gradientGray_toBr_White: {
      value: "linear-gradient(to bottom right, #fafafa, white)",
    },
  },
});

const theme = createSystem(defaultConfig, {
  theme: { tokens },
});

export default theme;