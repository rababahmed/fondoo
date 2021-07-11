import { Box, Center, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Constants } from "../../config";
import OrderButton from "../buttons/OrderButton";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";

const HeroContainer = ({ rdata, cdata, imageProps }: any) => {
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
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
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
          <Box zIndex="1" pos="absolute" mt={460} w="100%">
            <Center>
              <Center bg="white" rounded="md" w="60%" shadow="sm">
                <Stack py={10}>
                  <Heading size="lg" fontWeight="bold" align="center">
                    {rdata.CMSHome.dealsHeading}
                  </Heading>
                  <Heading size="sm" fontWeight="semibold" align="center">
                    {rdata.CMSHome.dealsDescription
                      ? rdata.CMSHome.dealsDescription
                      : null}
                  </Heading>
                </Stack>
              </Center>
            </Center>
          </Box>
        </Flex>
      </Box>
      {/* <Flex
        w="full"
        h={560}
        backgroundImage={"url(" + Constants.CDN + rdata.coverImage + ")"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"center"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              align="center"
            >
              {rdata.CMSHome.heroHeading}
            </Text>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
              align="center"
            >
              {rdata.CMSHome.heroDescription}
            </Text>
            <Stack direction={"row"}>
              <Center>
                <Text
                  p={3}
                  rounded="md"
                  color={"black"}
                  fontWeight="600"
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: "sm", md: "md" })}
                  align="center"
                  bg={cdata.secondaryColor}
                  _hover={{ cursor: "pointer", opacity: "95%" }}
                  mr={2}
                >
                  Book a Table
                </Text>
                <Text
                  p={3}
                  rounded="md"
                  fontWeight="600"
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: "sm", md: "md" })}
                  align="center"
                  bg={cdata.primaryColor}
                  _hover={{ cursor: "pointer", opacity: "95%" }}
                  color="white"
                  ml={2}
                >
                  See the menu
                </Text>
              </Center>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Box mt={-20} w="100%">
        <Center>
          <Center bg="white" rounded="md" w="60%" shadow="sm">
            <Stack py={10}>
              <Heading size="lg" fontWeight="bold" align="center">
                {rdata.CMSHome.dealsHeading}
              </Heading>
              <Heading size="sm" fontWeight="semibold" align="center">
                {rdata.CMSHome.dealsDescription
                  ? rdata.CMSHome.dealsDescription
                  : null}
              </Heading>
            </Stack>
          </Center>
        </Center>
      </Box>
      <Box mt={40} w="100%">
        <Center>
          <Center bg="white" rounded="md" w="60%" shadow="sm">
            <Stack py={10}>
              <Heading size="lg" fontWeight="bold" align="center">
                {rdata.CMSHome.dealsHeading}
              </Heading>
              <Heading size="sm" fontWeight="semibold" align="center">
                {rdata.CMSHome.dealsDescription
                  ? rdata.CMSHome.dealsDescription
                  : null}
              </Heading>
            </Stack>
          </Center>
        </Center>
      </Box> */}
    </>
  );
};

export default HeroContainer;
