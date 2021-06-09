import { Box, HStack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";
import { GET_RESTAURANT_SCHEDULES } from "../../graphql/restaurant";
import { useUserStore } from "../../store/useUserStore";

export const CMSAbout = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-restaurant-schedules",
    GET_RESTAURANT_SCHEDULES,
    {
      id: restaurantID,
    }
  );

  return (
    <Box
      as="section"
      rounded="lg"
      shadow="base"
      bgColor="white"
      mr={6}
      ml={6}
      p={8}
    >
      <Skeleton isLoaded={!isLoading}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Day</Th>
              <Th>Opening Time</Th>
              <Th>Closing Time</Th>
              <Th>Delivery Time</Th>
              <Th>Takeaway Time</Th>
              <Th></Th>
            </Tr>
          </Thead>
        </Table>
      </Skeleton>
    </Box>
  );
};
