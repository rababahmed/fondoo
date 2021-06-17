import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useUserStore } from "../store/useUserStore";

const queryClient = new QueryClient();

export const theme = extendTheme({
  colors: {
    primary: {
      900: "#FF1F2E",
      800: "#FF4550",
      700: "#FF5E69",
      600: "#FF757E",
      500: "#FF8C94",
      400: "#FFA3A9",
      300: "#FFBABF",
      200: "#FFD1D4",
      100: "#FFE8EA",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} resetCSS={true}>
        <Component {...pageProps} />
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
