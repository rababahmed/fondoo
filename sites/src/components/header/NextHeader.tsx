/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { Constants } from "../../config";
import Script from "next/script";

interface Props {
  rdata: any;
  cdata: any;
}

const NextHead = ({ rdata, cdata }: Props) => {
  return (
    <>
      <Head>
        <title>{rdata.name ? rdata.name : "TezzBites Partner Website"}</title>
        <meta
          name="description"
          content={
            rdata.CMSAbout.storyDescription
              ? rdata.CMSAbout.storyDescription
              : "A TezzBites partner restaurant."
          }
        />
        <link
          rel="icon"
          href={rdata.logo ? Constants.CDN + rdata.logo : "/favicon.ico"}
        />
      </Head>
      {cdata.googleAnalyticsCode ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${cdata?.googleAnalyticsCode}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${cdata?.googleAnalyticsCode}');
            `}
          </Script>
        </>
      ) : null}
      {cdata.facebookPixelCode ? (
        <>
          <Script id="facebook-pixel" strategy="afterInteractive">
            {` 
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${cdata?.facebookPixelCode});
                fbq('track', 'PageView');               
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${cdata?.facebookPixelCode}&ev=PageView&noscript=1`}
              alt="fbq"
            />
          </noscript>
        </>
      ) : null}
    </>
  );
};

export default NextHead;
