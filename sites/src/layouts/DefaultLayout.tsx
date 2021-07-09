import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import TopRibbon from "../components/navbar/TopRibbon";

const DefaultLayout = ({ children, rdata, cdata }: any) => {
  return (
    <Box bg="#f3f5f5f3">
      <TopRibbon rdata={rdata} cdata={cdata} />
      <NavBar rdata={rdata} cdata={cdata} />
      <Box>{children}</Box>
    </Box>
  );
};

export default DefaultLayout;
