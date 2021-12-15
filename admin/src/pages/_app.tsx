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
      900: "#000000",
      800: "#202020",
      700: "#404040",
      600: "#606060",
      500: "#808080",
      400: "#9F9F9F",
      300: "#BFBFBF",
      200: "#DFDFDF",
      100: "#FFFFFF",
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
