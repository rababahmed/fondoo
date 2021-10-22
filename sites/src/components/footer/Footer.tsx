import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import ClickableText from "../misc/ClickableText";

const Footer = ({ rdata, cdata }: any) => {
  return (
    <Box bg="#353439" pos="relative" bottom={0} left={0} w="100%" color="white">
      <SimpleGrid
        columns={{ base: 1, sm: 3 }}
        spacing={20}
        py={14}
        px={{ base: 2, sm: 60 }}
      >
        <Stack spacing={4}>
          <Heading size="md">Contact Us</Heading>
          <Stack spacing={2}>
            <Text fontWeight="semibold">Address</Text>
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
            <Text fontWeight="semibold">Call us at</Text>
            <ClickableText
              text={rdata.businessPhone}
              url={"tel:" + rdata.businessPhone}
              fontSize="sm"
            />
          </Stack>
          <Stack spacing={2}>
            <Text fontWeight="semibold">Send an email</Text>
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
            <HStack key={s.id} columns={2} spacing={6}>
              <Text fontWeight="semibold">{s.day}</Text>
              <Text>
                {format(s.openingTime, "p")} to {format(s.closingTime, "p")}
              </Text>
            </HStack>
          ))}
        </Stack>
        <Stack spacing={6}>
          <Stack spacing={3}>
            <Heading size="md">Delivery Areas</Heading>
            <Box>
              {rdata.deliveryZones?.map((d: any) => (
                <HStack key={d.id} columns={2} spacing={3}>
                  <Text fontWeight="semibold">{d.name}</Text>
                  <Text>
                    {d.deliveryCharge === 0
                      ? "Free Delivery"
                      : rdata.currency + d.deliveryCharge}
                  </Text>
                </HStack>
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
          TezzBites Partner Restaurant. ©2021 TezzBites. All Rights Reserved
        </Text>
        <Text textAlign="right" fontWeight="semibold" size="md">
          Become a TezzBites Partner Restaurant.
        </Text>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
