import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Grid } from "@chakra-ui/layout";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navbar/NavBar";

const DesktopLayout = (props: any) => {
  return (
    <>
      <Box
        pos="absolute"
        left="0"
        top="0"
        bg={useColorModeValue("gray.50", "gray.800")}
        w="100%"
        h="100vh"
      >
        <Header />
        <Box
          maxW="100%"
          py={8}
          px={8}
          ml={300}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          {props.children}
        </Box>
      </Box>
      <NavBar />
    </>
  );
};

export default DesktopLayout;
