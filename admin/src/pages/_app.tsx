import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useUserStore } from "../store/useUserStore";
import Script from "next/script";
import * as snippet from "@segment/snippet";

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

// This write key is associated with https://segment.com/nextjs-example/sources/nextjs.

function renderSnippet() {
  const opts = {
    apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
    // note: the page option only covers SSR tracking.
    // Page.js is used to track other events using `window.analytics.page()`
    page: true,
  };

  if (process.env.NODE_ENV === "development") {
    return snippet.max(opts);
  }

  return snippet.min(opts);
}

declare global {
  interface Window {
    analytics: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} resetCSS={true}>
        <Script
          id="segment-script"
          dangerouslySetInnerHTML={{ __html: renderSnippet() }}
        />
        <Component {...pageProps} />
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
