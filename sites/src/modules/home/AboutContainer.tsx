import { Box, Container, Heading, Link, Text } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const AboutContainer = () => {
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
                    "https://i2.wp.com/klfoodie.com/wp-content/uploads/2021/07/17-1.jpeg?resize=708%2C708&ssl=1"
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
