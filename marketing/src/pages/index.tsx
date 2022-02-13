import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Features from "../components/blocks/Features";
import Pricing from "../components/blocks/Pricing";
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
        <title>Fondoo - Online Ordering and Reservation Platform</title>
        <meta
          name="description"
          content="Fondoo helps bring your restaurant online, manage orders and reservations - all in one place. Get a beautiful website with an online ordering system."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero data={data} />
      <Customers data={data} />
      <PromoVideo data={data} />
      <Mission data={data} />
      <Features data={data} />
      <Pricing data={data} />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await PrismicClient.getSingle("homepage", {});
  return {
    props: {
      data,
    },
  };
};

export default Home;
