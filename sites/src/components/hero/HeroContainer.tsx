import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Img,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Constants } from "../../config";
import OrderButton from "../buttons/OrderButton";
import PrimaryButton from "../buttons/PrimaryButton";

const HeroContainer = ({ rdata, cdata }: any) => {
  return (
    <>
      {/* <Box pos="relative" bg="black">
        <Img
          src={Constants.CDN + rdata.coverImage}
          opacity="70%"
          w="100%"
          h={560}
          objectFit="cover"
        />
        <Box pos="absolute" top="0" left="0" h="100%" w="100%">
          <Center>
            <Stack mt={200} direction="column" spacing={4} align="center">
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
            </Stack>
          </Center>
        </Box>
        <Box pos="absolute" mt={-20} w="100%">
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
      </Box> */}
      <Flex
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
    </>
  );
};

export default HeroContainer;
