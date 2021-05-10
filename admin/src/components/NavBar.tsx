import { Button } from "@chakra-ui/button";
import { EmailIcon } from "@chakra-ui/icons";
import { Box, Heading, Stack, VStack } from "@chakra-ui/layout";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <Box bgColor="gray.700" w={300} h="100%">
        <Stack>
          <VStack p={5}>
            <Box mb={5}>
              <Heading color="gray.50">TezzBites</Heading>
            </Box>
            <Button
              leftIcon={<AiFillHome />}
              isActive={true}
              isFullWidth={true}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Dashboard
            </Button>
            <Button
              leftIcon={<FaFileInvoiceDollar />}
              isActive={false}
              isFullWidth={true}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Orders
            </Button>
            <Button
              isActive={false}
              isFullWidth={true}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Reservations
            </Button>
            <Button
              isActive={false}
              isFullWidth={true}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Dashboard
            </Button>
          </VStack>
        </Stack>
      </Box>
    </div>
  );
};

export default NavBar;
