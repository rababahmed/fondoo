import Head from "next/head";
import React from "react";
import Analytics from "../Analytics";
import Footer from "../Footer";
import NavBar from "../NavBar";

interface Props {
  data: any;
  children: any;
}

const DefaultLayout = ({ data, children }: Props) => {
  return (
    <>
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
        </Head>
        <Analytics />
        <NavBar data={data} />
        {children}
        <Footer data={data} />
      </>
    </>
  );
};

export default DefaultLayout;
