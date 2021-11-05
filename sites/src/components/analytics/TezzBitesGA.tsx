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
      <script
        async
        defer
        data-website-id="f6c8adb0-065d-4511-8eaf-f77ced31d8f4"
        src="http://localhost:3000/umami.js"
      ></script>
    </Head>
  );
};

export default TezzBitesGA;
