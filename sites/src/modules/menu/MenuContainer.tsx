import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  Center,
  SimpleGrid,
  Stack,
  Divider,
  Grid,
} from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";
import CardWithoutImage from "../../components/card/CardWithoutImage";
import CardWithIllustration from "../../components/card/CardWithIllustration";

interface Props {
  rdata: any;
  cdata: any;
}

export const MenuContainer = ({ rdata, cdata }: Props) => {
  return (
    <>
      <Center p={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 4 }}>
          {rdata.productCategory.map((cat: any) => (
            <CardWithoutImage
              cardW={600}
              titleBg={cdata.secondaryColor}
              isMenu={true}
              key={cat.id}
              title={cat.name}
              description={cat.description}
            >
              {cat.Product.map((p: any) => (
                <Box key={p.id}>
                  <Grid templateColumns={{ base: "30fr 2fr" }}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight={"semibold"}
                    >
                      {p.name}
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} textAlign="right">
                      {rdata.currency}
                      {p.price}
                    </Text>
                  </Grid>
                  <Divider color={"black"} />
                </Box>
              ))}
            </CardWithoutImage>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};
