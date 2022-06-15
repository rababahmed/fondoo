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
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1433093913802321');
          fbq('track', 'PageView');`}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=1433093913802321&ev=PageView&noscript=1"
          />`,
          }}
        />
      </div>
    </>
  );
};

export default Analytics;
