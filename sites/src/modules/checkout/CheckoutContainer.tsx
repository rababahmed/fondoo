import { Box, Text, Stack, Flex, Grid, SimpleGrid } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
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

interface Props {
  rdata: any;
  cdata: any;
}

export const CheckoutContainer = ({ rdata, cdata }: Props) => {
  const [isDelivery, setIsDelivery] = React.useState(true);

  return (
    <>
      <Box bg={"white"}>
        <Stack
          w="full"
          spacing={6}
          py={{ base: 0, md: 10 }}
          px={{ base: 0, md: 10, lg: 20, xl: 20, "2xl": 60 }}
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
            <Box bg="#dddddd" rounded="full">
              <Button
                bg={isDelivery ? "transparent" : "black"}
                color={isDelivery ? "black" : "white"}
                _hover={isDelivery ? { bg: "#cacaca" } : { bg: "gray.900" }}
                rounded="full"
                size={"sm"}
                onClick={() => {
                  setIsDelivery(false);
                }}
              >
                Pickup
              </Button>
              <Button
                bg={isDelivery ? "black" : "transparent"}
                color={isDelivery ? "white" : "black"}
                _hover={isDelivery ? { bg: "gray.900" } : { bg: "#cacaca" }}
                rounded="full"
                size={"sm"}
                onClick={() => {
                  setIsDelivery(true);
                }}
              >
                Delivery
              </Button>
            </Box>
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
                <FlatCard title="5:45PM" description="DELIVERY" />
              </Stack>
              <Stack px={8} spacing={4}>
                <Text fontSize={"2xl"} color={"black"} fontWeight={"medium"}>
                  Address
                </Text>
                <FlatCard>
                  <Stack direction={"row"}>
                    <Text fontWeight={"semibold"}>Name:</Text>
                    <Text>Rabab Ahmed</Text>
                  </Stack>
                  <Stack direction={"row"}>
                    <Text fontWeight={"semibold"}>Address:</Text>
                    <Text>House XX, Road XX, Block XX, Gulshan</Text>
                  </Stack>
                  <Stack direction={"row"}>
                    <Text fontWeight={"semibold"}>Contact:</Text>
                    <Text>+88016XXXXXXX</Text>
                  </Stack>
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
                  <PrimaryButton cdata={cdata} text="PLACE ORDER" />
                </Stack>
              </Stack>
            </Stack>

            <Box px={{ base: 4, md: 0 }}>
              <CartCard
                title={"My Order"}
                titleBg={cdata.primaryColor}
                cdata={cdata}
              />
            </Box>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
