import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { gql } from "graphql-request";
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
import { DELETE_USER, GET_RESTAURANT_USER } from "../../graphql/user";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { useQueryClient } from "react-query";
import { GET_RESTAURANT_SCHEDULES } from "../../graphql/restaurant";

export const SchedulesModule = () => {
  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-restaurant-schedules",
    GET_RESTAURANT_SCHEDULES
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

          <Tbody>
            {isSuccess &&
              data.schedules.map((sc: any) => (
                <Tr key={sc.id}>
                  <Td>{sc.day}</Td>
                  <Td>{sc.openingTime}</Td>
                  <Td>{sc.closingTime}</Td>
                  <Td>{sc.deliveryTime}</Td>
                  <Td>{sc.takeawayTime}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Skeleton>
    </Box>
  );
};
