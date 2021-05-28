import { Box, Grid, Heading } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";
import DesktopLayout from "../../layouts/DesktopLayout";
import { AddCategory } from "../../modules/Menu/AddCategory";
import { CategoriesModule } from "../../modules/Menu/CategoriesModule";

const MenuPage = () => {
  return (
    <div>
      <Head>
        <title>TezzBites</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopLayout>
        <Heading mb={10}>Menu</Heading>
        <Grid templateColumns="1fr 1fr">
          <Box />
          <Box mr={8} gridArea="right">
            <AddCategory />
          </Box>
        </Grid>
        <CategoriesModule />
      </DesktopLayout>
    </div>
  );
};

export default MenuPage;
