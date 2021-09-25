import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
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
              text={rdata.address}
              url={"https://www.google.com/maps/search/" + rdata.address}
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
          <HStack columns={2} spacing={6}>
            <Text fontWeight="semibold">Sunday</Text>
            <Text>12:00 pm to 10:00 pm</Text>
          </HStack>
          <HStack columns={2} spacing={6}>
            <Text fontWeight="semibold">Sunday</Text>
            <Text>12:00 pm to 10:00 pm</Text>
          </HStack>
          <HStack columns={2} spacing={6}>
            <Text fontWeight="semibold">Sunday</Text>
            <Text>12:00 pm to 10:00 pm</Text>
          </HStack>
          <HStack columns={2} spacing={6}>
            <Text fontWeight="semibold">Sunday</Text>
            <Text>12:00 pm to 10:00 pm</Text>
          </HStack>
          <HStack columns={2} spacing={6}>
            <Text fontWeight="semibold">Sunday</Text>
            <Text>12:00 pm to 10:00 pm</Text>
          </HStack>
          <HStack columns={2} spacing={6}>
            <Text fontWeight="semibold">Sunday</Text>
            <Text>12:00 pm to 10:00 pm</Text>
          </HStack>
          <HStack columns={2} spacing={6}>
            <Text fontWeight="semibold">Sunday</Text>
            <Text>12:00 pm to 10:00 pm</Text>
          </HStack>
        </Stack>
        <Stack spacing={6}>
          <Stack spacing={3}>
            <Heading size="md">Delivery Areas</Heading>
            <Box>
              <HStack columns={2} spacing={3}>
                <Text fontWeight="semibold">Gulshan 1</Text>
                <Text>Free Delivery</Text>
              </HStack>
              <HStack columns={2} spacing={3}>
                <Text fontWeight="semibold">Gulshan 2</Text>
                <Text>Free Delivery</Text>
              </HStack>
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
