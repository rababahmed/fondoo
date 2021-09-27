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
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Great Food Comes First
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Every day, more than 11 million guests visit Burger King
              restaurants around the world. And they do so because our
              restaurants are known for serving high-quality, great-tasting, and
              affordable food. Founded in 1954, Burger King is the second
              largest fast food hamburger chain in the world. The original Home
              of the Whopper, our commitment to premium ingredients, signature
              recipes, and family-friendly dining experiences is what has
              defined our brand for more than 50 successful years.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
