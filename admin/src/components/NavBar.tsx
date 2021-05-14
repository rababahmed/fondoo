import { Button } from "@chakra-ui/button";
import { Box, Heading, Stack, VStack } from "@chakra-ui/layout";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaFileInvoiceDollar, FaUserCircle } from "react-icons/fa";
import { BsBookmarkFill, BsGearFill } from "react-icons/bs";
import { MdRestaurantMenu, MdLocalOffer } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import Link from "next/link";
import { Tag, TagLabel } from "@chakra-ui/tag";
import { Avatar } from "@chakra-ui/avatar";
import { useQuery } from "react-query";
import * as Constants from "../modules/Constants";
import request, { gql } from "graphql-request";
import { useUserStore } from "../store/userStore";
import { Skeleton } from "@chakra-ui/skeleton";

const NavBar = () => {
  const userID = useUserStore((state) => state.userID);

  const useGetUsers = () => {
    return useQuery("user", async () => {
      const { user } = await request(
        Constants.GraphQL_API,
        gql`
          query {
            user(where: { id: ${userID} }) {
              firstName
              lastName
              Restaurant {
                name
              }
            }
          }
        `
      );
      return user;
    });
  };

  const { data, error, isLoading, isSuccess } = useGetUsers();

  return (
    <div>
      <Box bgColor="gray.700" w={300} h="100vh">
        <Stack>
          <VStack pt={8} mr={1}>
            <Box mb={4}>
              <Heading color="gray.50">TezzBites</Heading>
            </Box>
            <Box m={8}>
              <Skeleton isLoaded={!isLoading}>
                <Tag size="lg" colorScheme="gray" borderRadius="full">
                  <Avatar
                    size="xs"
                    name={isSuccess && data.Restaurant.name}
                    mr={2}
                  />
                  <TagLabel pb={2} pt={2}>
                    {isSuccess && data.Restaurant.name}
                  </TagLabel>
                </Tag>
              </Skeleton>
            </Box>
          </VStack>
          <VStack p={6} mr={1}>
            <Link href="/dashboard">
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
