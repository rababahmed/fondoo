import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PrismicProvider } from "@prismicio/react";
import Link from "next/link";
import { repositoryName } from "../../prismicio";
import { PrismicPreview } from "@prismicio/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <PlausibleProvider
    //   domain="fondoo.io"
    //   trackOutboundLinks={true}
    //   scriptProps={{
    //     src: "https://odd-snowflake-bde9.rabab.workers.dev/odd-snowflake/script.outbound-links.js",
    //     "data-api":
    //       "https://odd-snowflake-bde9.rabab.workers.dev/odd-snowflake/event",
    //   }}
    // >
    <PrismicProvider
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
    // </PlausibleProvider>
  );
}

export default MyApp;
