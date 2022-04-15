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
          src="https://odd-snowflake-bde9.rabab.workers.dev/odd-snowflake/script.outbound-links.js"
          data-api="https://odd-snowflake-bde9.rabab.workers.dev/odd-snowflake/event"
          strategy="afterInteractive"
        />
        <Script id="crisp-chat" strategy="afterInteractive">
          {`window.$crisp=[];window.CRISP_WEBSITE_ID="ba038a57-65e6-40e3-9485-f3192e03ae9b";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
        </Script>
      </div>
    </>
  );
};

export default Analytics;
