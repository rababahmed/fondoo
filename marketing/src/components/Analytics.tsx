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
      </div>
    </>
  );
};

export default Analytics;
