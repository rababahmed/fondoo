import { Box, SimpleGrid, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import data from "./data.json";
import { Stat } from "./Stat";
import { StatLabel } from "./StatLabel";
import { StatNumber } from "./StatNumber";

interface Props {
  data: any;
}

const StatComponent = (props: Props) => {
  return (
    <Box as="section" p="10">
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8" }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {props.data.map(({ label, value }: any) => (
            <Stat key={label}>
              <StatLabel>{label}</StatLabel>
              <StatNumber>{value}</StatNumber>
            </Stat>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default StatComponent;
