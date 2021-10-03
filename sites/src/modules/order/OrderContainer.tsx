import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  Center,
  SimpleGrid,
  Stack,
  Divider,
  Grid,
  Flex,
} from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";
import CardWithoutImage from "../../components/card/CardWithoutImage";
import CardWithIllustration from "../../components/card/CardWithIllustration";
import { Button } from "@chakra-ui/button";
import OrderButton from "../../components/buttons/OrderButton";
import ItemCard from "../../components/card/ItemCard";
import ReservationCard from "../../components/card/ReservationCard";
import ItemContainer from "../../components/misc/ItemContainer";

interface Props {
  rdata: any;
  cdata: any;
}

export const OrderContainer = ({ rdata, cdata }: Props) => {
  const [isDelivery, setIsDelivery] = React.useState(false);

  return (
    <>
      <Box p={{ base: 0, md: 10 }}>
        <Stack w="full" spacing={6}>
          <Flex
            w="full"
            justifyContent="space-between"
            alignItems="center"
            px={{ base: 10, md: 40 }}
            direction="row"
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
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} px={8}>
              {rdata.productCategory.map((cat: any) => (
                <Stack key={cat.id} spacing={4}>
                  {cat.Product.map((p: any) => (
                    <ItemContainer
                      key={p.id}
                      cdata={cdata}
                      rdata={rdata}
                      p={p}
                    />
                  ))}
                </Stack>
              ))}
            </SimpleGrid>

            {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} px={8}>
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
              <ItemContainer cdata={cdata} rdata={rdata} />
            </SimpleGrid> */}
            <Box pos={"sticky"}>
              <ReservationCard rdata={rdata} cdata={cdata} />
            </Box>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
