import {
  Box,
  useColorModeValue,
  Center,
  VStack,
  Stack,
  Heading,
  HStack,
  useMediaQuery,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import OrderButton from "../../components/buttons/OrderButton";
import CardWithImage from "../../components/card/CardWithImage";
import { Constants } from "../../config";

const PopularDishesContainer = ({ rdata, cdata, popularDishesData }: any) => {
  const [isDesktop] = useMediaQuery("(min-width: 1280px)");

  return (
    <Box mb={10}>
      <Center>
        <Center rounded="md" w="60%">
          <Stack direction={"column"} py={14} spacing={6}>
            <Heading size="xl" fontWeight="bold" align="center">
              {rdata.CMSHome.popularDishesHeading}
            </Heading>
            <Heading size="md" fontWeight="semibold" align="center">
              {rdata.CMSHome.popularDishesDescription
                ? rdata.CMSHome.popularDishesDescription
                : null}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {popularDishesData.products.map((d: any) => (
                <CardWithImage
                  key={d.id}
                  title={d.name}
                  description={d.description}
                  image={d.image}
                  imgW={"300"}
                  imgH={"200"}
                >
                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 2, md: 5 }}
                    alignItems={"center"}
                    pt={{ base: 0, md: 5 }}
                  >
                    <Box fontSize="md" color={"gray.800"}>
                      <Box as="span" color={"gray.600"} fontSize="sm">
                        {rdata.currency}
                      </Box>
                      {d.price}
                    </Box>
                    <Box>
                      <OrderButton
                        cdata={cdata}
                        text={"Order now"}
                        url="/order"
                        buttonProps={{ fontSize: { md: "sm", lg: "md" } }}
                      />
                    </Box>
                  </SimpleGrid>
                </CardWithImage>
              ))}
            </SimpleGrid>
          </Stack>
        </Center>
      </Center>
    </Box>
  );
};

export default PopularDishesContainer;
