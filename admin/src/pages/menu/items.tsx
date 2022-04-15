import { Box, Grid, Heading } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";
import DesktopLayout from "../../layouts/DesktopLayout";
import { AddItem } from "../../modules/Menu/Items/AddItem";
import { ItemsModule } from "../../modules/Menu/Items/ItemsModule";

const MenuPage = () => {
  return (
    <div>
      <Head>
        <title>Fondoo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopLayout>
        <Heading mb={10}>Menu Items</Heading>
        <Grid templateColumns="1fr 1fr">
          <Box />
          <Box mr={8} gridArea="right">
            <AddItem />
          </Box>
        </Grid>
        <ItemsModule />
      </DesktopLayout>
    </div>
  );
};

export default MenuPage;
