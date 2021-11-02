import { Box, Heading, Text, Stack } from "@chakra-ui/layout";
import { Skeleton, useDisclosure } from "@chakra-ui/react";
import React from "react";

import { useColorModeValue } from "@chakra-ui/color-mode";

import { useCheckoutStore } from "../../stores/useCheckoutStore";

import FlatCard from "../../components/card/FlatCard";
import { useUserStore } from "../../stores/useUserStore";
import { useGQLQuery } from "../../hooks/useGQLQuery";
import { GET_USER_DETAILS } from "../../graphql/user";
import { add, format } from "date-fns";

interface Props {
  rdata: any;
  cdata: any;
}

export const OrderConfirmedContainer = ({ rdata, cdata }: Props) => {
  const deliveryZoneId = useCheckoutStore((state) => state.deliveryZoneId);
  const fulfilmentType = useCheckoutStore((state) => state.fulfilmentType);
  const userId = useUserStore((state) => state.userID);
  const recentOrderId = useUserStore((state) => state.recentOrderId);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-user-details",
    GET_USER_DETAILS,
    {
      id: userId,
    }
  );

  const deliverySchedule = rdata.deliveryZones.find(
    (d: any) => d.id === deliveryZoneId
  );
  const deliveryTime = deliverySchedule?.deliveryTime;
  const deliveryETA = format(
    add(new Date(), {
      minutes: deliveryTime,
    }),
    "p"
  );

  return (
    <>
      <Box bg={"white"}>
        <Stack
          w="full"
          spacing={6}
          py={{ base: 4, md: 10 }}
          px={{ base: 4, md: 80, lg: 80, xl: 80, "2xl": 400 }}
        >
          <Skeleton isLoaded={recentOrderId ? true : false}>
            <Heading size={"xl"}>Order #{recentOrderId}</Heading>
            <Heading size={"md"}>Your order is being processed.</Heading>
          </Skeleton>
          <Stack
            spacing={6}
            py={6}
            bg={useColorModeValue("white", "gray.900")}
            rounded={"md"}
            border={"1px"}
            borderColor={"gray.200"}
            overflow={"hidden"}
            gridRowStart={{ base: 2, md: 1 }}
          >
            <Stack px={8} spacing={4}>
              <Text fontSize={"2xl"} color={"black"} fontWeight={"medium"}>
                Time
              </Text>
              <FlatCard
                title={deliveryETA || ""}
                description={fulfilmentType || ""}
              />
            </Stack>
            <Stack px={8} spacing={4}>
              <Text fontSize={"2xl"} color={"black"} fontWeight={"medium"}>
                Address
              </Text>
              <FlatCard>
                <Skeleton isLoaded={!isLoading}>
                  <Stack direction={"row"}>
                    <Text fontWeight={"semibold"}>Name:</Text>
                    <Text>
                      {(isSuccess && data.customer.firstName) || ""}{" "}
                      {(isSuccess && data.customer.lastName) || ""}
                    </Text>
                  </Stack>
                </Skeleton>
                <Stack direction={"row"}>
                  <Text fontWeight={"semibold"}>Address:</Text>
                  <Text>
                    {(isSuccess && data.customer.addresses[0].streetAddress) ||
                      ""}
                    , {(isSuccess && data.customer.addresses[0].city) || ""}{" "}
                    {(isSuccess && data.customer.addresses[0].postCode) || ""}
                  </Text>
                </Stack>
                <Stack direction={"row"}>
                  <Text fontWeight={"semibold"}>Contact:</Text>
                  <Text>{(isSuccess && data.customer.phone) || ""}</Text>
                </Stack>
              </FlatCard>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
