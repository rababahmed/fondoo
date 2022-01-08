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
        {cdata.customHeaderTags}
        <head
          dangerouslySetInnerHTML={{
            __html: `${cdata.customHeaderTags}`,
          }}
        />
      </Head>
    </>
  );
};

export default NextHead;
