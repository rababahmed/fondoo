import { Button, IconButton } from "@chakra-ui/button";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FiSettings, FiUsers } from "react-icons/fi";
import { ImCreditCard } from "react-icons/im";
import { MdRestaurantMenu, MdSchedule } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { RiParentLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { useRouter } from "next/router";
import NavButton from "./NavButton";
import NavText from "./NavText";
import styles from "./Navbar.module.css";
import { usePrefStore } from "../../store/usePrefStore";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useUserStore } from "../../store/useUserStore";

const NavBar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = React.useState("");
  const [isDesktop] = useMediaQuery("(min-width: 640px)");

  const role = useUserStore((state) => state.role);

  const toggleHamburger = usePrefStore((state) => state.toggleHamburger);
  const isOpen = usePrefStore((state) => state.hamburger);

  React.useEffect(() => setCurrentPath(router.pathname), [router.pathname]);

  return (
    <div>
      <Box
        display={isOpen ? "block" : "none"}
        pos="fixed"
        overflowY="auto"
        bgColor="gray.900"
        h="100%"
        w={260}
        top="0"
        bottom="0"
        className={styles.navbar}
      >
        <Box>
          <IconButton
            onClick={() => {
              toggleHamburger();
            }}
            size="sm"
            display={isDesktop ? "none" : "block"}
            colorScheme="whiteAlpha"
            aria-label="hamburger"
            icon={<CloseIcon />}
            pos="absolute"
            top={0}
            right={0}
            m={4}
            mb={4}
          />
        </Box>
        <Stack>
          <VStack pt={8} mr={1}>
            <Box mt={6} mb={6}>
              <Heading color="gray.50">TezzBites</Heading>
            </Box>
          </VStack>
          <VStack align="stretch" p={6} mr={1}>
            {role === "Owner" ? (
              <VStack py={4} align="stretch">
                <NavText text="ADMIN" />
                <NavButton
                  href="/admin/dashboard"
                  icon={MdRestaurantMenu}
                  text="Dashboard"
                />
                <NavButton
                  href="/admin/Restaurants"
                  icon={BiFoodMenu}
                  text="Restaurants"
                />
                <NavButton href="/admin/users" icon={BiFoodMenu} text="Users" />
                <Divider />
              </VStack>
            ) : (
              <div></div>
            )}
            <NavButton href="/dashboard" icon={AiFillHome} text="Dashboard" />

            <NavButton href="/orders" icon={ImCreditCard} text="Orders" />
            <NavButton
              href="/reservations"
              icon={RiParentLine}
              text="Reservations"
            />
            <VStack py={4} align="stretch">
              <NavText text="MENU SETUP" />
              <NavButton
                href="/menu/items"
                icon={MdRestaurantMenu}
                text="Items"
              />
              <NavButton
                href="/menu/categories"
                icon={BiFoodMenu}
                text="Categories"
              />
            </VStack>
            <VStack py={4} align="stretch">
              <NavText text="MANAGEMENT" />
              <NavButton href="/cms" icon={CgWebsite} text="CMS" />
              <NavButton href="/users" icon={FiUsers} text="Users" />
              <NavButton href="/schedule" icon={MdSchedule} text="Schedule" />
              <NavButton href="/settings" icon={FiSettings} text="Settings" />
            </VStack>
          </VStack>
        </Stack>
      </Box>
    </div>
  );
};

export default NavBar;
