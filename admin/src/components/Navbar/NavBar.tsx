import { Button } from "@chakra-ui/button";
import { Box, Heading, Stack, VStack } from "@chakra-ui/layout";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaFileInvoiceDollar, FaUserCircle, FaUsers } from "react-icons/fa";
import { BsBookmarkFill, BsGearFill } from "react-icons/bs";
import { MdRestaurantMenu, MdLocalOffer } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import Link from "next/link";
import { Tag, TagLabel } from "@chakra-ui/tag";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGetUser } from "../../shared-hooks/useGetUser";
import { useRouter } from "next/router";
import NavButton from "./NavButton";

const NavBar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => setCurrentPath(router.pathname), []);

  return (
    <div>
      <Box pos="fixed" bgColor="gray.800" w={300} h="100%">
        <Stack>
          <VStack pt={8} mr={1}>
            <Box mt={6} mb={6}>
              <Heading color="gray.50">TezzBites</Heading>
            </Box>
          </VStack>
          <VStack align="stretch" p={6} mr={1}>
            <NavButton href="/dashboard" icon={AiFillHome} text="Dashboard" />
            <NavButton href="/settings" icon={BsGearFill} text="Settings" />
            <NavButton href="/menu" icon={MdRestaurantMenu} text="Menu" />
            <NavButton href="/users" icon={FaUsers} text="Users" />
          </VStack>
        </Stack>
      </Box>
    </div>
  );
};

export default NavBar;
