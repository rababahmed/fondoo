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
        <Script
          id="btw-widget"
          data-project-code="776a5c10-b3fb-41a8-ae64-d33d8831f954"
          data-iframe-domain="https://app.btw.so"
          data-conversations-domain="https://conversations.btw.so"
          data-events-domain="https://events.btw.so"
          data-events-secret="js.nti5bhj8o8nqaikp1k4fb.kkvwbs6pqqj2jgkksmodvw"
          src="https://conversations.btw.so/widget/dist/btw.js"
          strategy="afterInteractive"
        />
      </div>
    </>
  );
};

export default Analytics;
