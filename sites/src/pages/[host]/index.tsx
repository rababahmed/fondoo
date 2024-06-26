import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import { Constants } from "../../config";
import {
  GET_POPULAR_DISHES,
  GET_RESTAURANT_INFO,
} from "../../graphql/restaurant";
import HeroContainer from "../../components/hero/HeroContainer";
import DefaultLayout from "../../layouts/DefaultLayout";
import { getPlaiceholder } from "plaiceholder";
import TezzBitesGA from "../../components/analytics/TezzBitesGA";
import PopularDishesContainer from "../../modules/home/PopularDishesContainer";
import { AboutContainer } from "../../modules/home/AboutContainer";
import ReservationContainer from "../../modules/home/ReservationContainer";
import { Stack } from "@chakra-ui/layout";
import NextHead from "../../components/header/NextHeader";

export default function Home({
  host,
  rdata,
  cdata,
  imageProps,
  popularDishesData,
}: any) {
  return (
    <>
      <NextHead rdata={rdata} cdata={cdata} />
      <TezzBitesGA />
      {rdata && cdata ? (
        <DefaultLayout rdata={rdata} cdata={cdata}>
          <Stack>
            <HeroContainer
              imageProps={imageProps}
              rdata={rdata}
              cdata={cdata}
            />
            <AboutContainer rdata={rdata} cdata={cdata} />
            <PopularDishesContainer
              rdata={rdata}
              cdata={cdata}
              popularDishesData={popularDishesData}
            />
            {/* <ReservationContainer rdata={rdata} cdata={cdata} /> */}
          </Stack>
        </DefaultLayout>
      ) : (
        <div>Whoops! Site data not found</div>
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

  const rdata = fetchData?.domain?.restaurant;

  const cdata = fetchData?.domain?.restaurant.config;

  const { base64, img } = await getPlaiceholder(
    rdata.coverImage
      ? Constants.CDN + rdata.coverImage
      : Constants.imgPlaceholder
  );

  const fetchPopularDishesData = await graphQLClient.request(
    GET_POPULAR_DISHES,
    {
      id: rdata.id,
    }
  );

  return {
    props: {
      host,
      rdata,
      cdata,
      popularDishesData: fetchPopularDishesData,
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
