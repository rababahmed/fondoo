import { Box, Container, Heading, Link, Text } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Constants } from "../../config";

export const AboutContainer = ({ rdata, cdata }: any) => {
  return (
    <Box bg={"white"}>
      <Container maxW={"7xl"} p="12">
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "15%" }}
              marginTop="0"
            >
              <Box maxW={"400px"} w={"full"}>
                <Image
                  src={
                    rdata.CMSAbout.storyImage
                      ? Constants.CDN + rdata.CMSAbout.storyImage
                      : Constants.imgPlaceholder
                  }
                  alt="some good alt text"
                  width={"400px"}
                  height={"400px"}
                  objectFit="cover"
                />
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
            marginRight={{ base: "0", sm: "8%" }}
          >
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                {rdata.CMSAbout.storyHeading || ""}
              </Link>
            </Heading>
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
