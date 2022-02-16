import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Analytics from "../components/Analytics";
import Features from "../components/blocks/Features";
import Pricing from "../components/blocks/Pricing";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Customers from "../components/sections/Customers";
import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import PromoVideo from "../components/sections/PromoVideo";
import styles from "../styles/Home.module.css";
import { PrismicClient } from "../utils/prismicHelpers";
import { fetchHomePage } from "../utils/queries";

const Home: NextPage = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <NextSeo
        title={data.data.body1[0].items[0].title_tag[0].text}
        description={data.data.body1[0].items[0].meta_description[0].text}
        canonical="https://fondoo.io"
        openGraph={{
          title: data.data.body1[0].items[0].title_tag[0].text,
          description: data.data.body1[0].items[0].meta_description[0].text,
          images: [
            {
              url: data.data.body1[0].items[0].open_graph_image.url,
              width:
                data.data.body1[0].items[0].open_graph_image.dimensions.width,
              height:
                data.data.body1[0].items[0].open_graph_image.dimensions.height,
              alt: data.data.body1[0].items[0].open_graph_image.alt,
            },
          ],
          type: "website",
        }}
      />
      <Analytics />
      <NavBar data={data} />
      <Hero data={data} />
      <Customers data={data} />
      <PromoVideo data={data} />
      <Mission data={data} />
      <Features data={data} />
      <Pricing data={data} />
      <Footer data={data} />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await PrismicClient.getSingle("homepage", {});
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

export default Home;
