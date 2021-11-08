import { Box, Text, Stack, Flex, Grid, SimpleGrid } from "@chakra-ui/layout";
import { Icon, Skeleton } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";

import { Button } from "@chakra-ui/button";

import CartCard from "../../components/card/CartCard";
import ClickableText from "../../components/misc/ClickableText";
import { Constants } from "../../config";
import FlatCard from "../../components/card/FlatCard";
import { GiMoneyStack } from "react-icons/gi";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import DeliveryModal from "../order/DeliveryModal";
import { add, format } from "date-fns";
import { useCheckoutStore } from "../../stores/useCheckoutStore";
import { useGQLQuery } from "../../hooks/useGQLQuery";
import { GET_USER_DETAILS, PLACE_ORDER } from "../../graphql/user";
import { useUserStore } from "../../stores/useUserStore";
import { useGQLMutation } from "../../hooks/useGQLMutation";
import PlaceOrderButton from "../../components/buttons/PlaceOrderButton";
import AddressDetails from "../account/AddressDetails";
import CheckoutAddressDetails from "./CheckoutAddressDetails";

interface Props {
  rdata: any;
  cdata: any;
}

export const CheckoutContainer = ({ rdata, cdata }: Props) => {
  const deliveryZoneId = useCheckoutStore((state) => state.deliveryZoneId);
  const fulfilmentType = useCheckoutStore((state) => state.fulfilmentType);
  const userId = useUserStore((state) => state.userID);
  const setAddress = useUserStore((state) => state.setAddress);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-user-details",
    GET_USER_DETAILS,
    {
      id: userId,
    }
  );

  React.useEffect(() => {
    setAddress(data?.customer?.addresses[0]?.id);
  }, [data, setAddress]);

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
          py={{ base: 0, md: 10 }}
          px={{ base: 0, md: 0, lg: 0, xl: 0, "2xl": 60 }}
        >
          <Flex
            w="full"
            justifyContent="space-between"
            alignItems="center"
            px={{ base: 10, md: 40 }}
            direction="row"
            mt={{ base: 6, md: 0 }}
          >
            <Box></Box>
            <DeliveryModal rdata={rdata} cdata={cdata} />
          </Flex>

          <Grid
            templateColumns={{ base: "1fr", md: "4fr 2fr" }}
            px={{ base: 0, md: 40 }}
            gridGap={6}
          >
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
                  <CheckoutAddressDetails cdata={cdata} rdata={rdata} />
                  {/* <Text fontWeight={"semibold"}>Address:</Text>
                    <Text>
                      {(isSuccess &&
                        data.customer?.addresses[0]?.streetAddress) ||
                        ""}
                      , {(isSuccess && data.customer?.addresses[0]?.city) || ""}{" "}
                      {(isSuccess && data.customer?.addresses[0]?.postCode) ||
                        ""}
                    </Text> */}
                </FlatCard>
              </Stack>
              <Stack px={8} spacing={4}>
                <Text fontSize={"2xl"} color={"black"} fontWeight={"medium"}>
                  Payment
                </Text>
                <FlatCard
                  boxProps={{ bg: "#52BE80", maxW: 200, cursor: "pointer" }}
                  isPayment={true}
                >
                  <SimpleGrid columns={2} alignItems={"center"}>
                    <Text fontWeight={"bold"} fontSize={"xl"} color="white">
                      CASH
                    </Text>
                    <Icon
                      color="white"
                      fontSize={"4xl"}
                      as={GiMoneyStack}
                      justifySelf={"right"}
                    />
                  </SimpleGrid>
                </FlatCard>

                <Stack py={4} px={{ base: 4, md: 20 }}>
                  <PlaceOrderButton rdata={rdata} cdata={cdata} />
                </Stack>
              </Stack>
            </Stack>

            <Box px={{ base: 4, md: 0 }}>
              <CartCard
                title={"My Order"}
                titleBg={cdata.primaryColor}
                cdata={cdata}
                rdata={rdata}
              />
            </Box>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
