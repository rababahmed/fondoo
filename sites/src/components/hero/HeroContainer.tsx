import { Box, Center, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Constants } from "../../config";
import OrderButton from "../buttons/OrderButton";
import PrimaryButton from "../buttons/SecondaryButton";
import Image from "next/image";
import DealsModule from "../../modules/home/DealsContainer";

const HeroContainer = ({ rdata, cdata, imageProps, children }: any) => {
  console.log(imageProps);
  return (
    <>
      <Box>
        <Flex>
          <Box pos="relative" w="100%" h={560}>
            <Image
              src={imageProps.src}
              alt="logo"
              layout="fill"
              objectFit="cover"
              priority
              quality="100"
              blurDataURL={imageProps.blurDataURL}
              placeholder="blur"
            />
          </Box>
          <Box
            pos="absolute"
            zIndex="1"
            h={560}
            w="100%"
            bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
          >
            <VStack mt={200} spacing={4} align="center">
              <Heading size="2xl" color="white" align="center">
                {rdata.CMSHome.heroHeading}
              </Heading>
              <Heading color="white" align="center">
                {rdata.CMSHome.heroDescription}
              </Heading>
              <Stack direction="row">
                <PrimaryButton text="Book a Table" cdata={cdata} />
                <OrderButton text="Place an Order" cdata={cdata} />
              </Stack>
            </VStack>
          </Box>
        </Flex>
        <Box zIndex="1" my={10} w="100%">
          <Center>
            <Center
              bg="white"
              rounded="md"
              w={{ base: "80%", md: "60%" }}
              shadow="sm"
            >
              <VStack spacing={8} px={{ base: 10, md: 0 }} py={8}>
                <Stack>
                  <Heading size="xl" fontWeight="bold" align="center">
                    {rdata.CMSHome.dealsHeading}
                  </Heading>
                  <Heading size="md" fontWeight="semibold" align="center">
                    {rdata.CMSHome.dealsDescription
                      ? rdata.CMSHome.dealsDescription
                      : null}
                  </Heading>
                </Stack>
                <DealsModule rdata={rdata} cdata={cdata} />
              </VStack>
            </Center>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default HeroContainer;
