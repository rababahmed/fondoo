import { Box, Container, Heading, Link, Text } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const AboutPage = ({ rdata, cdata }: any) => {
  return (
    <Box bg={"white"}>
      <Container maxW={"7xl"} px={32} py={20}>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
            marginRight={{ base: "0", sm: "8%" }}
          >
            <Heading marginTop="1">{rdata.CMSAbout.storyHeading || ""}</Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              {rdata.CMSAbout.storyDescription || ""}
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
