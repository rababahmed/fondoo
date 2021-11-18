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
import { Button } from "@chakra-ui/button";
import ItemContainer from "../../components/misc/ItemContainer";
import CartCard from "../../components/card/CartCard";
import MenuNavItem from "../../components/misc/MenuNavItem";
import DeliveryModal from "./DeliveryModal";
import MobileCartCard from "../../components/modal/MobileCartCard";

interface Props {
  rdata: any;
  cdata: any;
}

export const OrderContainer = ({ rdata, cdata }: Props) => {
  const refs = rdata.productCategory.reduce((acc: any, value: any) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const scrollToRef = (id: any) => {
    refs[id].current.scrollIntoView({ behavior: "smooth" });
  };

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
          <Box zIndex="9" pos="sticky" top="20" px={{ base: 5, md: 40 }}>
            <Stack
              direction="row"
              bg="white"
              borderBottomWidth="1px"
              w="full"
              spacing={6}
              px={6}
              overflowX="auto"
              className="menuItemNav"
            >
              {rdata.productCategory.map((cat: any) => (
                <MenuNavItem
                  text={cat.name}
                  onClick={() => scrollToRef(cat.id)}
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
                <Stack
                  id={cat.name}
                  key={cat.id}
                  px={8}
                  spacing={4}
                  ref={refs[cat.id]}
                >
                  <Text fontSize={"2xl"} color={"black"} fontWeight={"medium"}>
                    {cat.name}
                  </Text>
                  <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={4}>
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

            <CartCard
              title={"My Order"}
              titleBg={cdata.primaryColor}
              cdata={cdata}
              rdata={rdata}
              cartProps={{
                zIndex: "9",
                position: "sticky",
                top: "32",
                bottom: "0",
              }}
            />
          </Grid>
        </Stack>
      </Box>
      <MobileCartCard rdata={rdata} cdata={cdata} title="Cart" />
    </>
  );
};
