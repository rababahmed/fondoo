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
  Flex,
} from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { Constants } from "../../config";
import AccountCard from "./AccountCard";
import AccountDetails from "./AccountDetails";

interface Props {
  rdata: any;
  cdata: any;
}

export const AccountContainer = ({ rdata, cdata }: Props) => {
  const [isDelivery, setIsDelivery] = React.useState(true);

  return (
    <>
      <Box bg={"white"}>
        <Stack
          w="full"
          spacing={6}
          py={{ base: 10, md: 10 }}
          px={{ base: 0, md: 10, lg: 20, xl: 20, "2xl": 60 }}
        >
          <Grid
            templateColumns={{ base: "1fr", md: "2fr 4fr" }}
            px={{ base: 4, md: 40 }}
            gridGap={{ base: 6, md: 0 }}
          >
            <Stack spacing={6}>
              <AccountCard rdata={rdata} cdata={cdata} />
            </Stack>

            <Box>
              <Tabs variant="soft-rounded" colorScheme={"gray"}>
                <TabList>
                  <Tab _focus={{ ringColor: "transparent" }}>Details</Tab>
                  <Tab _focus={{ ringColor: "transparent" }}>Addresses</Tab>
                  <Tab _focus={{ ringColor: "transparent" }}>Order History</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <AccountDetails rdata={rdata} cdata={cdata} />
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
