import { Button } from "@chakra-ui/button";
import { Box, Heading, Stack, VStack } from "@chakra-ui/layout";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaFileInvoiceDollar, FaUserCircle } from "react-icons/fa";
import { BsBookmarkFill, BsGearFill } from "react-icons/bs";
import { MdRestaurantMenu, MdLocalOffer } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <Box bgColor="gray.700" w={300} h="100vh">
        <Stack>
          <VStack p={5} mr={1}>
            <Box mb={5}>
              <Heading color="gray.50">TezzBites</Heading>
            </Box>
            <Link href="/">
              <Button
                leftIcon={<AiFillHome />}
                isActive={true}
                isFullWidth={true}
                colorScheme="blackAlpha"
                variant="solid"
              >
                Dashboard
              </Button>
            </Link>
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
              leftIcon={<BsBookmarkFill />}
              isActive={false}
              isFullWidth={true}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Reservations
            </Button>
            <Link href="/settings/">
              <Button
                leftIcon={<BsGearFill />}
                isActive={false}
                isFullWidth={true}
                colorScheme="blackAlpha"
                variant="solid"
              >
                Settings
              </Button>
            </Link>
            <Button
              leftIcon={<MdRestaurantMenu />}
              isActive={false}
              isFullWidth={true}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Menu
            </Button>
            <Button
              leftIcon={<MdLocalOffer />}
              isActive={false}
              isFullWidth={true}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Offers
            </Button>
            <Button
              leftIcon={<ImUsers />}
              isActive={false}
              isFullWidth={true}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Customers
            </Button>
            <Button
              leftIcon={<FaUserCircle />}
              isActive={false}
              isFullWidth={true}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Users
            </Button>
          </VStack>
        </Stack>
      </Box>
    </div>
  );
};

export default NavBar;
