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
import { Skeleton } from "@chakra-ui/skeleton";
import { useGetUser } from "../shared-hooks/useGetUser";
import { useRouter } from "next/router";

const NavBar = () => {
  const { data, error, isLoading, isSuccess } = useGetUser();

  const router = useRouter();
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => setCurrentPath(router.pathname), []);

  return (
    <div>
      <Box pos="fixed" bgColor="gray.700" w={300} h="100%">
        <Stack>
          <VStack pt={8} mr={1}>
            <Box mb={4}>
              <Heading color="gray.50">TezzBites</Heading>
            </Box>
            <Box m={8}>
              <Skeleton isLoaded={!isLoading}>
                <Tag size="lg" colorScheme="gray" borderRadius="full">
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
                isActive={currentPath === "/dashboard" ? true : false}
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
                isActive={currentPath === "/settings" ? true : false}
                isFullWidth={true}
                colorScheme="blackAlpha"
                variant="solid"
              >
                Settings
              </Button>
            </Link>
            <Link href="/menu/">
              <Button
                leftIcon={<MdRestaurantMenu />}
                isActive={currentPath === "/menu" ? true : false}
                isFullWidth={true}
                colorScheme="blackAlpha"
                variant="solid"
              >
                Menu Categories
              </Button>
            </Link>
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
            <Link href="/users">
              <Button
                leftIcon={<FaUserCircle />}
                isActive={currentPath === "/users" ? true : false}
                isFullWidth={true}
                colorScheme="blackAlpha"
                variant="solid"
              >
                Users
              </Button>
            </Link>
          </VStack>
        </Stack>
      </Box>
    </div>
  );
};

export default NavBar;
