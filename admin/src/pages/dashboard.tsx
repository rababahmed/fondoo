import React from "react";
import { Heading } from "@chakra-ui/layout";
import Head from "next/head";
import StatComponent from "../components/Stats/MainStat";
import TableComponent from "../components/Table/Table";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGQLQuery } from "../shared-hooks/useGQLQuery";
import DesktopLayout from "../layouts/DesktopLayout";
import { useUserStore } from "../store/useUserStore";
import { GET_USER } from "../graphql/user";
import { Spinner } from "@chakra-ui/spinner";

const DashboardPage = () => {
  const userID = useUserStore((state) => state.userID);
  const setRestaurant = useUserStore((state) => state.setRestaurant);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-unique-user",
    GET_USER,
    {
      id: userID,
    }
  );

  React.useEffect(() => {
    data ? setRestaurant(data.user.restaurants[0].id) : null;
  }, [data, setRestaurant]);

  return (
    <div>
      <Head>
        <title>TezzBites</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!data ? (
        <Spinner
          position="fixed"
          left="50%"
          top="50%"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="gray.800"
          size="xl"
        />
      ) : (
        <DesktopLayout>
          <Skeleton isLoaded={!isLoading}>
            <Heading mb={6}>Hi {isSuccess && data.user.firstName}</Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <StatComponent />
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <TableComponent />
          </Skeleton>
        </DesktopLayout>
      )}
    </div>
  );
};

export default DashboardPage;
