import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Grid } from "@chakra-ui/layout";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar";

const DesktopLayout = (props: any) => {
  return (
    <Grid templateColumns="1fr 10fr">
      <NavBar />
      <Box bg={useColorModeValue("gray.50", "gray.800")} minH="100%" h="100vh">
        <Header />
        <Box m={10} bg={useColorModeValue("gray.50", "gray.800")}>
          {props.children}
        </Box>
      </Box>
    </Grid>
  );
};

export default DesktopLayout;
