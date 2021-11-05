import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import TopRibbon from "../components/navbar/TopRibbon";
import Sticky from "react-stickynode";
import Footer from "../components/footer/Footer";
import NextNprogress from "nextjs-progressbar";
import { useCheckoutStore } from "../stores/useCheckoutStore";
import WaitForAuthentication from "../components/auth/WaitForAuthentication";

const DefaultLayout = ({ children, rdata, cdata }: any) => {
  return (
    <>
      <Box bg="#F3F5F5" w="100%" h="100%">
        <TopRibbon rdata={rdata} cdata={cdata} />
        <NavBar rdata={rdata} cdata={cdata} />
        {children}
        <Footer rdata={rdata} cdata={cdata} />
        <NextNprogress
          color={cdata.primaryColor}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
      </Box>
    </>
  );
};

export default DefaultLayout;
