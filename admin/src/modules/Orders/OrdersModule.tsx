import React from "react";
import {
  Box,
  Grid,
  Skeleton,
  Stack,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl } from "formik-chakra-ui";
import { useUserStore } from "../../store/useUserStore";
import * as Yup from "yup";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import {
  GET_RESTAURANT_DELIVERY_ZONES,
  GET_RESTAURANT_ORDERS,
} from "../../graphql/restaurant";
// import { DeleteDeliveryZone } from "../.DeleteDeliveryZone";

const OrdersModule = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-restaurant-orders",
    GET_RESTAURANT_ORDERS,
    {
      id: restaurantID,
    }
  );

  return (
    <>
      <Box
        as="section"
        rounded="lg"
        shadow="base"
        bgColor="white"
        mr={6}
        ml={6}
        p={8}
        overflowX={"auto"}
      >
        <Skeleton isLoaded={!isLoading}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Order ID</Th>
                <Th>Customer</Th>
                <Th>Date</Th>
                <Th>Pre-Order</Th>
                <Th>Delivery Area</Th>
                <Th>Total</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              {isSuccess &&
                data.restaurant.orders.map((o: any) => (
                  <Tr key={o.id}>
                    <Td>{o.id}</Td>
                    <Td>
                      <Stack>
                        <Text>
                          {o.customer?.firstName + " " + o.customer?.lastName}
                        </Text>
                        <Text>{o.customer?.phone}</Text>
                      </Stack>
                    </Td>
                    <Td>{o.deliveryFeeType}</Td>
                    <Td>{o.isPreOrder ? "Yes" : "No"}</Td>
                    <Td>{o.deliveryZone.name}</Td>
                    <Td>{o.total}</Td>
                    {/* <Td>
                      <Stack direction="row">
                        <EditSchedule
                        id={d.id}
                        day={d.day}
                        openingTime={d.openingTime}
                        closingTime={d.closingTime}
                        deliveryTime={d.deliveryTime}
                        takeawayTime={d.takeawayTime}
                      />
                        <DeleteDeliveryZone id={d.id} />
                      </Stack>
                    </Td> */}
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </Skeleton>
      </Box>
    </>
  );
};

export default OrdersModule;
