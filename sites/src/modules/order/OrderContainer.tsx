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
import { useDisclosure } from "@chakra-ui/react";
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
import CartCard from "../../components/card/CartCard";
import ClickableText from "../../components/misc/ClickableText";
import MenuNavItem from "../../components/misc/MenuNavItem";
import { Constants } from "../../config";
import { useCheckoutStore } from "../../stores/useCheckoutStore";
import DeliveryModal from "./DeliveryModal";

interface Props {
  rdata: any;
  cdata: any;
}

export const OrderContainer = ({ rdata, cdata }: Props) => {
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
            <DeliveryModal rdata={rdata} cdata={cdata} />
          </Flex>
          <Box zIndex="10" pos="sticky" top="20" px={{ base: 0, md: 40 }}>
            <Stack
              direction="row"
              bg="white"
              borderBottomWidth="1px"
              w="full"
              spacing={6}
              px={6}
              overflowX="scroll"
              className="menuItemNav"
            >
              {rdata.productCategory.map((cat: any) => (
                <MenuNavItem
                  text={cat.name}
                  url={`#${cat.name}`}
                  key={cat.id}
                />
              ))}
            </Stack>
          </Box>
          <Grid
            templateColumns={{ base: "1fr", md: "4fr 2fr" }}
            px={{ base: 0, md: 40 }}
          >
            <Stack spacing={6}>
              {rdata.productCategory.map((cat: any) => (
                <Stack id={cat.name} key={cat.id} px={8} spacing={4}>
                  <Text fontSize={"2xl"} color={"black"} fontWeight={"medium"}>
                    {cat.name}
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {cat.Product.map((p: any) => (
                      <ItemContainer
                        key={p.id}
                        cdata={cdata}
                        image={p.image}
                        rdata={rdata}
                        p={p}
                      />
                    ))}
                  </SimpleGrid>
                </Stack>
              ))}
            </Stack>

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
            <Box>
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
