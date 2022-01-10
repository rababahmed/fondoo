import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Hero from "../components/sections/Hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bagel</title>
        <meta
          name="description"
          content="Launch a restaurant business anywhere, anytime."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
