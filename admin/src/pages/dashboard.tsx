import React, { useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Grid, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar";
import StatComponent from "../components/Stats/MainStat";
import TableComponent from "../components/Table/Table";
import { useQuery } from "react-query";
import * as Constants from "../modules/Constants";
import { request, gql } from "graphql-request";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGetUser } from "../shared-hooks/useGetUser";
import { useGQLQuery } from "../shared-hooks/useGQLQuery";

const GET_USER = gql`
  query {
    user(where: { id: 1 }) {
      firstName
      lastName
      Restaurant {
        name
        email
      }
    }
  }
`;

const DashboardPage = () => {
  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-unique-user",
    GET_USER
  );
  console.log(data);
  return (
    <div>
      <Head>
        <title>TezzBites</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid templateColumns="1fr 10fr">
        <NavBar />
        <Box bg={useColorModeValue("gray.50", "gray.800")}>
          <Header />
          <Box as="section" bg={useColorModeValue("gray.50", "gray.800")}>
            <Skeleton isLoaded={!isLoading} m={10}>
              <Heading ml={6} mt={8}>
                Hello {isSuccess && data.user.firstName}
              </Heading>
            </Skeleton>
            <Skeleton isLoaded={!isLoading} m={10}>
              <StatComponent />
            </Skeleton>
            <Skeleton isLoaded={!isLoading} m={10}>
              <TableComponent />
            </Skeleton>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default DashboardPage;
