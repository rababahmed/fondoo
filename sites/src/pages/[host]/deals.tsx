import { Box, Center, Stack } from "@chakra-ui/layout";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import TezzBitesGA from "../../components/analytics/TezzBitesGA";
import Header from "../../components/card/Header";
import { Constants } from "../../config";
import { GET_RESTAURANT_INFO } from "../../graphql/restaurant";
import DefaultLayout from "../../layouts/DefaultLayout";
import { AboutPage } from "../../modules/about/AboutPage";
import DealsContainer from "../../modules/home/DealsContainer";

export default function Deals({ host, rdata, cdata, imageProps }: any) {
  return (
    <>
      <Head>
        <title>{rdata ? rdata.name : "TezzBites Partner Website"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TezzBitesGA />
      {rdata && cdata ? (
        <DefaultLayout rdata={rdata} cdata={cdata}>
          <Header
            rdata={rdata}
            cdata={cdata}
            imageProps={imageProps}
            heading="Deals"
          />
          <Center p={10}>
            <Center
              bg="white"
              rounded="md"
              w={{ base: "80%", md: "60%" }}
              shadow="sm"
              px={{ base: 10, md: 0 }}
              py={8}
            >
              <DealsContainer rdata={rdata} cdata={cdata} />
            </Center>
          </Center>
        </DefaultLayout>
      ) : (
        <div>Site data not found</div>
      )}
    </>
  );
}

export async function getStaticProps(context: any) {
  const host = context.params.host;

  const endpoint = Constants.GraphQL_API_CDN;

  const graphQLClient = new GraphQLClient(endpoint);

  const fetchData = await graphQLClient.request(GET_RESTAURANT_INFO, {
    domain: host,
  });

  const rdata = fetchData?.domain?.restaurantConfig?.restaurant;

  const cdata = fetchData?.domain?.restaurantConfig;

  const { base64, img } = await getPlaiceholder(
    rdata.coverImage ? Constants.CDN + rdata.coverImage : ""
  );

  return {
    props: {
      host,
      rdata,
      cdata,
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
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
