import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Heading, useColorModeValue, Link } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import React from "react";
import ClickableText from "../misc/ClickableText";

const Footer = ({ rdata, cdata }: any) => {
  const fmtTime = (str: any) => {
    let [hh, mm] = str.split(":");
    return `${hh > 12 ? hh % 12 : hh}${`:${mm}`}${hh >= 12 ? "PM" : "AM"}`;
  };
  console.log(fmtTime("00:00"));

  return (
    <Box
      bg={cdata.primaryColor}
      pos="relative"
      bottom={0}
      left={0}
      w="100%"
      color="white"
    >
      <Box
        bgGradient={"linear(to-r, blackAlpha.500, blackAlpha.500)"}
        pos="relative"
        bottom={0}
        left={0}
        w="100%"
        color="white"
      >
        <SimpleGrid
          columns={{ base: 1, sm: 3 }}
          spacing={20}
          py={14}
          px={{ base: 2, sm: 60 }}
        >
          <Stack spacing={4}>
            <Heading size="md">Contact Us</Heading>
            <Stack spacing={2}>
              <Text fontFamily="TT Norms Pro Medium">Address</Text>
              <ClickableText
                text={rdata.address + ", " + rdata.city + " " + rdata.postCode}
                url={
                  "https://www.google.com/maps/search/" +
                  rdata.address +
                  ", " +
                  rdata.city +
                  " " +
                  rdata.postCode
                }
                fontSize="sm"
              />
            </Stack>
            <Stack spacing={2}>
              <Text fontFamily="TT Norms Pro Medium">Call us at</Text>
              <ClickableText
                text={rdata.businessPhone}
                url={"tel:" + rdata.businessPhone}
                fontSize="sm"
              />
            </Stack>
            <Stack spacing={2}>
              <Text fontFamily="TT Norms Pro Medium">Send an email</Text>
              <ClickableText
                text={rdata.email}
                url={"mail:" + rdata.email}
                fontSize="sm"
              />
            </Stack>
            <Stack direction={"column"} spacing={2}></Stack>
          </Stack>
          <Stack spacing={3}>
            <Heading size="md">Opening Hours</Heading>
            {rdata.schedules?.map((s: any) => (
              <SimpleGrid key={s.id} columns={2} spacing={3}>
                <Text fontFamily="TT Norms Pro Medium">{s.day}</Text>
                <Text justifySelf="end" fontFamily="TT Norms Pro Medium">
                  {s.openingTime} to {s.closingTime}
                </Text>
              </SimpleGrid>
            ))}
          </Stack>
          <Stack spacing={6}>
            <Stack spacing={3}>
              <Heading size="md">Delivery Areas</Heading>
              <Box>
                {rdata.deliveryZones?.map((d: any) => (
                  <SimpleGrid key={d.id} columns={2} spacing={3}>
                    <Text fontFamily="TT Norms Pro Medium">{d.name}</Text>
                    <Text justifySelf="end" fontFamily="TT Norms Pro Medium">
                      {d.deliveryCharge === 0
                        ? "Free Delivery"
                        : rdata.currency + d.deliveryCharge}
                    </Text>
                  </SimpleGrid>
                ))}
              </Box>
            </Stack>
            <Heading size="md">Stay in the loop</Heading>
          </Stack>
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1, sm: 2 }}
          spacing={20}
          py={4}
          px={{ base: 2, sm: 60 }}
        >
          <Text fontWeight="semibold" size="md">
            ©2021 {rdata?.name}. All Rights Reserved
          </Text>
          <Link href="https://www.fondoo.io" isExternal>
            <Text
              textAlign={{ base: "left", md: "right" }}
              fontWeight="semibold"
              size="md"
              cursor="pointer"
              onClick={() => "https://www.fondoo.io"}
            >
              Become a Fondoo Partner Restaurant <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Footer;
