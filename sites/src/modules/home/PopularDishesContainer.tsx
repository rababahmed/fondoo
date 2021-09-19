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

const PopularDishesContainer = ({ rdata, cdata }: any) => {
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
              <CardWithImage
                title="Chicken Fry"
                description="So tasty"
                imgW={"300"}
                imgH={"200"}
              >
                <HStack spacing={100}>
                  <Box
                    fontSize="2xl"
                    color={useColorModeValue("gray.800", "white")}
                  >
                    <Box as="span" color={"gray.600"} fontSize="lg">
                      ৳
                    </Box>
                    500
                  </Box>
                  <Box>
                    <OrderButton cdata={cdata} text={"See menu"} />
                  </Box>
                </HStack>
              </CardWithImage>
              <CardWithImage
                title="Chicken Fry"
                description="So tasty"
                imgW={"300"}
                imgH={"200"}
              >
                <HStack spacing={100}>
                  <Box
                    fontSize="2xl"
                    color={useColorModeValue("gray.800", "white")}
                  >
                    <Box as="span" color={"gray.600"} fontSize="lg">
                      ৳
                    </Box>
                    500
                  </Box>
                  <Box>
                    <OrderButton cdata={cdata} text={"See menu"} />
                  </Box>
                </HStack>
              </CardWithImage>
              <CardWithImage
                title="Chicken Fry"
                description="So tasty"
                imgW={"300"}
                imgH={"200"}
              >
                <HStack spacing={100}>
                  <Box
                    fontSize="2xl"
                    color={useColorModeValue("gray.800", "white")}
                  >
                    <Box as="span" color={"gray.600"} fontSize="lg">
                      ৳
                    </Box>
                    500
                  </Box>
                  <Box>
                    <OrderButton cdata={cdata} text={"See menu"} />
                  </Box>
                </HStack>
              </CardWithImage>
            </SimpleGrid>
          </Stack>
        </Center>
      </Center>
    </Box>
  );
};

export default PopularDishesContainer;
