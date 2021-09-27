import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  Center,
  SimpleGrid,
  Stack,
} from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";
import CardWithoutImage from "../../components/card/CardWithoutImage";

export const ContactContainer = ({ rdata, cdata }: any) => {
  return (
    <>
      <Center p={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 6 }}>
          <Stack spacing={4}>
            <CardWithoutImage
              title="Address"
              description="Soi 71, Level 1 Concord Baksh Tower, 11/A Kemal Ataturk Ave, Dhaka 1213"
            />
            <CardWithoutImage
              title="Contact"
              description={"Phone:" + " " + "01730315706"}
            >
              <Text color={"gray.500"}>Email: nashra@soi71.net</Text>
            </CardWithoutImage>
            <CardWithoutImage title="Social" description="Connect with us" />
          </Stack>
        </SimpleGrid>
      </Center>
    </>
  );
};
