import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import { Constants } from "../../config";
import { GET_RESTAURANT_INFO } from "../../graphql/restaurant";
import { Box, Heading, Img } from "@chakra-ui/react";
import TopRibbon from "../../components/navbar/TopRibbon";
import NavBar from "../../components/navbar/NavBar";
import HeroContainer from "../../components/hero/HeroContainer";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Home({ host, rdata, cdata }: any) {
  console.log(rdata);

  return (
    <>
      <Head>
        <title>{rdata ? rdata.name : "TezzBites Partner Website"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout rdata={rdata} cdata={cdata}>
        <HeroContainer rdata={rdata} cdata={cdata} />

        <Heading>HELLO</Heading>
        <Heading>HELLO</Heading>
        <Heading>HELLO</Heading>
        <Heading>HELLO</Heading>
        <Heading>HELLO</Heading>
        <Heading>HELLO</Heading>
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps(context: any) {
  const host = context.params.host;

  const endpoint = Constants.GraphQL_API;

  const graphQLClient = new GraphQLClient(endpoint);

  const fetchData = await graphQLClient.request(GET_RESTAURANT_INFO, {
    domain: host,
  });

  const rdata = fetchData.restaurantConfig
    ? fetchData.restaurantConfig.Restaurant[0]
    : null;

  const cdata = fetchData.restaurantConfig ? fetchData.restaurantConfig : null;

  return {
    props: {
      host,
      rdata,
      cdata,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
