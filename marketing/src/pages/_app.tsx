import "../styles/globals.css";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      enabled
      domain="fondoo.io"
      trackOutboundLinks={true}
      trackLocalhost={true}
      scriptProps={{
        src: "https://odd-snowflake-bde9.rabab.workers.dev/odd-snowflake/script.outbound-links.js",
        "data-api":
          "https://odd-snowflake-bde9.rabab.workers.dev/odd-snowflake/event",
      }}
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
