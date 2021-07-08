import { Box } from "@chakra-ui/react";
import React from "react";

const TopRibbon = ({ rdata, cdata }: any) => {
  return (
    <div>
      <Box bg={cdata.secondaryColor} textColor="white">
        {rdata.businessPhone}
      </Box>
    </div>
  );
};

export default TopRibbon;
