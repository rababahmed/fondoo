import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "120em",
});

export const extendedTheme = extendTheme({
  breakpoints,
  fonts: {
    heading: "TT Norms Pro",
    body: "TT Norms Pro",
  },
});
