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
import { formatISO } from "date-fns/esm";
import { format, parseISO } from "date-fns";
import { RejectOrder } from "./RejectOrder";
import { AcceptOrder } from "./AcceptOrder";
import OrderActions from "./OrderActions";
import ExpandedOrdersModal from "./ExpandedOrdersModal";
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
      >
        <Skeleton isLoaded={!isLoading}>
          <Table variant="simple">
            <Thead>
              <Tr whiteSpace="nowrap">
                <Th>Order ID</Th>
                <Th>Customer</Th>
                <Th>Date and Time</Th>
                <Th>Pre-Order</Th>
                <Th>Delivery Area</Th>
                <Th>Total</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody whiteSpace="nowrap">
              {isSuccess &&
                data.restaurant.orders.map((o: any) => (
                  <Tr key={o.id} whiteSpace="nowrap">
                    <Td>
                      <Stack direction="row" alignItems="center" spacing={3}>
                        <ExpandedOrdersModal orderId={o.id} />{" "}
                        <Text>{o.id}</Text>
                      </Stack>
                    </Td>
                    <Td>
                      <Stack>
                        <Text>
                          {o.customer?.firstName + " " + o.customer?.lastName}
                        </Text>
                        <Text>{o.customer?.phone}</Text>
                      </Stack>
                    </Td>
                    <Td>{format(parseISO(o.createdAt), "PP, p") || ""}</Td>
                    <Td>{o.isPreOrder ? "Yes" : "No"}</Td>
                    <Td>{o.deliveryZone?.name}</Td>
                    <Td>{o.total}</Td>
                    <Td>
                      <OrderActions o={o} />
                    </Td>
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
