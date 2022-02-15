import Script from "next/script";
import React from "react";

const Analytics = () => {
  return (
    <>
      <div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HFXCP6DBKZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HFXCP6DBKZ');
        `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "d20e701b72da40878ff16c4a1f0f7575"}'
        />
        <Script
          data-domain="fondoo.io"
          src="https://plausible.io/js/plausible.js"
          strategy="afterInteractive"
        />
      </div>
    </>
  );
};

export default Analytics;
