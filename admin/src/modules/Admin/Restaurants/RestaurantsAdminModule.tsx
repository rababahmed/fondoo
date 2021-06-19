import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGQLQuery } from "../../../shared-hooks/useGQLQuery";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { GET_ALL_RESTAURANTS_INFO } from "../../../graphql/admin/restaurant";
import { FiLogIn } from "react-icons/fi";
import SwitchRestaurant from "./SwitchRestaurant";

export const RestaurantsAdminModule = () => {
  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-all-restaurants-info",
    GET_ALL_RESTAURANTS_INFO
  );

  useEffect(() => {}, [isFetching]);

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
        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Business ID</Th>
                <Th>Plan</Th>
                <Th>Country</Th>
                <Th>Price Range</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              {isSuccess &&
                data.restaurants.map((rs: any) => (
                  <Tr key={rs.id}>
                    <Td>{rs.name}</Td>
                    <Td>{rs.id}</Td>
                    <Td>{rs.plan ? rs.plan.name : ""}</Td>
                    <Td>{rs.country}</Td>
                    <Td>{rs.priceRange}</Td>
                    <Td>
                      <SwitchRestaurant id={rs.id} />
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </Box>
      </Skeleton>
    </Box>
  );
};
