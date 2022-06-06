import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import { createClient } from "../../prismicio";
import Analytics from "../components/Analytics";
import Features from "../components/blocks/Features";
import Pricing from "../components/blocks/Pricing";
import Footer from "../components/Footer";
import DefaultLayout from "../components/layouts/DefaultLayout";
import NavBar from "../components/NavBar";
import Customers from "../components/sections/Customers";
import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import PromoVideo from "../components/sections/PromoVideo";
import Testimonials from "../components/sections/Testimonials";

const Home: NextPage = ({ data, navData }: any) => {
  //empty commit

  console.log(data);
  return (
    <DefaultLayout data={data} navData={navData}>
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
      <Hero data={data} />
      <Customers data={data} />
      <PromoVideo data={data} />
      <Mission data={data} />
      <Features data={data} />
      <Testimonials data={data} />
      <Pricing data={data} />
    </DefaultLayout>
  );
};

export const getStaticProps = async ({ previewData }: any) => {
  const client = createClient({ previewData });
  const data = await client.getSingle("homepage");
  const navData = await client.getSingle("navigation_menu");
  return {
    props: {
      data,
      navData,
    },
    revalidate: 60,
  };
};

export default Home;
