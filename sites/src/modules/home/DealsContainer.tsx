import Icon from "@chakra-ui/icon";
import { Box, Grid, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import CardWithImage from "../../components/card/CardWithImage";
import { BsClock } from "react-icons/bs";
import { formatDistance } from "date-fns";
import OrderButton from "../../components/buttons/OrderButton";
import { Constants } from "../../config";

const DealsContainer = ({ rdata, cdata }: any) => {
  return (
    <>
      <Stack spacing={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {rdata ? (
            rdata.coupons.map((c: any) => (
              <CardWithImage
                key={c.id}
                title={c.code}
                description={c.description}
                image={c.image}
              >
                <Stack direction="row" align="center">
                  <Icon as={BsClock} />
                  <Text color={"gray.500"}>
                    Ends{" "}
                    {formatDistance(new Date(c.endDate), new Date(), {
                      addSuffix: true,
                    })}
                  </Text>
                </Stack>
                <Box alignSelf="center" pt={4}>
                  <OrderButton
                    cdata={cdata}
                    text={"Order now"}
                    url={"/order"}
                  />
                </Box>
              </CardWithImage>
            ))
          ) : (
            <div></div>
          )}
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {rdata ? (
            rdata.offers.map((o: any) => (
              <CardWithImage
                key={o.id}
                title={o.name}
                description={o.description}
                image={o.image}
              >
                <Stack direction="row" align="center">
                  <Icon as={BsClock} />
                  <Text color={"gray.500"}>
                    Ends{" "}
                    {formatDistance(new Date(o.endDate), new Date(), {
                      addSuffix: true,
                    })}
                  </Text>
                </Stack>
                <Box alignSelf="center" pt={4}>
                  <OrderButton
                    cdata={cdata}
                    text={"Order now"}
                    url={"/order"}
                  />
                </Box>
              </CardWithImage>
            ))
          ) : (
            <div></div>
          )}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default DealsContainer;
