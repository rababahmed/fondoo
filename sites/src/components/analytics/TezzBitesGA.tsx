import React from "react";
import Head from "next/head";

const TezzBitesGA = () => {
  return (
    <Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EVH4DGTZJ4"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EVH4DGTZJ4');
        `,
        }}
      />
      <script
        defer
        data-domain="tezzbites.com"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </Head>
  );
};

export default TezzBitesGA;
