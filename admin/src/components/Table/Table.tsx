import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import React from "react";

const TableComponent = () => {
  return (
    <Box
      ml={{ base: 20, sm: 6 }}
      mr={{ base: 20, sm: 6 }}
      px={{ base: 4, sm: 6 }}
      py="5"
      bg={useColorModeValue("white", "gray.700")}
      shadow="base"
      rounded="lg"
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Customer</Th>
            <Th isNumeric>Items</Th>
            <Th isNumeric>Revenue</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>John Doe</Td>
            <Td isNumeric>5</Td>
            <Td isNumeric>৳ 12,000</Td>
          </Tr>
          <Tr>
            <Td>Jane Doe</Td>
            <Td isNumeric>3</Td>
            <Td isNumeric>৳ 8,000</Td>
          </Tr>
          <Tr>
            <Td>Bob Doe</Td>
            <Td isNumeric>8</Td>
            <Td isNumeric>৳ 14,000</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th isNumeric>16</Th>
            <Th isNumeric>৳ 30,000</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
};

export default TableComponent;
