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
import CardWithIllustration from "../../components/card/CardWithIllustration";

export const ContactContainer = ({ rdata, cdata }: any) => {
  return (
    <>
      <Center p={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 4 }}>
          <Stack spacing={4}>
            <CardWithoutImage
              title="Address"
              description={
                rdata.address ? rdata.address + " " + rdata.postCode : ""
              }
            />
            <CardWithoutImage
              title="Contact"
              description={
                "Phone:" + " " + rdata.businessPhone ? rdata.businessPhone : ""
              }
            >
              <Text color={"gray.500"}>
                Email: {rdata.email ? rdata.email : ""}
              </Text>
            </CardWithoutImage>
            <CardWithoutImage title="Social" description="Connect with us" />
          </Stack>
          <Stack>
            <CardWithIllustration rdata={rdata} cdata={cdata} />
          </Stack>
        </SimpleGrid>
      </Center>
    </>
  );
};
