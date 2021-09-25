import { Stack } from "@chakra-ui/layout";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import TezzBitesGA from "../../components/analytics/TezzBitesGA";
import { Constants } from "../../config";
import { GET_RESTAURANT_INFO } from "../../graphql/restaurant";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Home({ host, rdata, cdata, imageProps }: any) {
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
          <Stack></Stack>
        </DefaultLayout>
      ) : (
        <div>Site data not found</div>
      )}
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

  const rdata = fetchData.restaurantConfig.restaurant
    ? fetchData.restaurantConfig.restaurant
    : null;

  const cdata = fetchData.restaurantConfig ? fetchData.restaurantConfig : null;

  const { base64, img } = await getPlaiceholder(
    rdata.coverImage ? Constants.CDN + rdata.coverImage : ""
  );
  console.log(img);

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
