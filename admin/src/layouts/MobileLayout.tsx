import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Grid } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navbar/NavBar";
import { usePrefStore } from "../store/usePrefStore";

const MobileLayout = (props: any) => {
  const [isDesktop] = useMediaQuery("(min-width: 640px)");
  const isHamburgerOpen = usePrefStore((state) => state.hamburger);

  return (
    <>
      <Box
        display="flex"
        pos="fixed"
        overflowY="auto"
        overflowX="hidden"
        flexDirection="column"
        left="0"
        top="0"
        bg={useColorModeValue("gray.50", "gray.800")}
        w="100vw"
        h="100vh"
      >
        <Header />
        <Box
          maxW="100%"
          mt={1}
          py={8}
          px={8}
          ml={isDesktop ? 260 : 0}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          {props.children}
        </Box>
        {isDesktop ? <NavBar /> : null}
      </Box>
    </>
  );
};

export default MobileLayout;
