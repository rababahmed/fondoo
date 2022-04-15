import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import DesktopLayout from "../layouts/DesktopLayout";
import { SettingsModule } from "../modules/Settings/SettingsModule";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiEBike2Fill, RiSafariFill, RiShareFill } from "react-icons/ri";
import { FaPalette, FaSafari } from "react-icons/fa";
import { AppearanceModule } from "../modules/Settings/AppearanceModule";
import { SiGoogleanalytics } from "react-icons/si";
import { SocialsModule } from "../modules/Settings/SocialsModule";
import { CustomAnalyticsModule } from "../modules/Settings/CustomAnalyticsModule";

const SettingsPage = () => {
  return (
    <div>
      <Head>
        <title>Fondoo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopLayout>
        <Heading mb={10}>Settings</Heading>
        <Tabs variant="soft-rounded" colorScheme={"blackAlpha"}>
          <TabList overflowX={"auto"}>
            <Tab _focus={{ ringColor: "transparent" }}>
              <Stack direction="row" alignItems="center">
                <Text>{<BsFillInfoCircleFill />}</Text> <Text>Information</Text>
              </Stack>
            </Tab>
            <Tab _focus={{ ringColor: "transparent" }}>
              <Stack direction="row" alignItems="center">
                <Text>{<FaPalette />}</Text> <Text>Appearance</Text>
              </Stack>
            </Tab>
            <Tab _focus={{ ringColor: "transparent" }}>
              <Stack direction="row" alignItems="center">
                <Text>{<RiShareFill />}</Text> <Text>Socials</Text>
              </Stack>
            </Tab>
            <Tab _focus={{ ringColor: "transparent" }}>
              <Stack direction="row" alignItems="center">
                <Text>{<SiGoogleanalytics />}</Text>{" "}
                <Text>Custom Analytics</Text>
              </Stack>
            </Tab>
            {/* <Tab _focus={{ ringColor: "transparent" }}>
              <Stack direction="row" alignItems="center">
                <Text>{<FaSafari />}</Text> <Text>Domain</Text>
              </Stack>
            </Tab> */}
          </TabList>
          <TabPanels>
            <TabPanel>
              <SettingsModule />
            </TabPanel>
            <TabPanel>
              <AppearanceModule />
            </TabPanel>
            <TabPanel>
              <SocialsModule />
            </TabPanel>
            <TabPanel>
              <CustomAnalyticsModule />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </DesktopLayout>
    </div>
  );
};

export default SettingsPage;
