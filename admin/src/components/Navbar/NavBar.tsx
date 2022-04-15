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
import { AiFillHome, AiOutlinePercentage, AiOutlineTag } from "react-icons/ai";
import { FiSettings, FiUsers } from "react-icons/fi";
import { ImCreditCard } from "react-icons/im";
import { MdRestaurantMenu, MdSchedule } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { VscTag } from "react-icons/vsc";
import { RiEBike2Fill, RiEBike2Line, RiParentLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { useRouter } from "next/router";
import NavButton from "./NavButton";
import NavText from "./NavText";
import styles from "./Navbar.module.css";
import { usePrefStore } from "../../store/usePrefStore";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useUserStore } from "../../store/useUserStore";
import Image from "next/image";
import * as LogoFull from "../../../public/fondoo-icon.png";
import RestaurantNav from "./RestaurantNav";
import { Center } from "@chakra-ui/react";
import OrderButton from "./OrderButton";

const NavBar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = React.useState("");
  const [isDesktop] = useMediaQuery("(min-width: 640px)");

  const role = useUserStore((state) => state.role);

  const toggleHamburger = usePrefStore((state) => state.toggleHamburger);
  const isOpen = usePrefStore((state) => state.hamburger);

  React.useEffect(() => setCurrentPath(router.pathname), [router.pathname]);

  return (
    <>
      <Box
        as="nav"
        display={{ base: "none", md: "block" }}
        pos="fixed"
        overflowY="auto"
        overflowX="hidden"
        bgColor="white"
        zIndex="2"
        h="100%"
        w={240}
        top="0"
        borderWidth="1px"
        bottom="0"
        className={styles.navbar}
      >
        <Stack>
          <VStack align="stretch" px={2} mr={1}>
            <Center mt={8} mb={4}>
              <RestaurantNav />
            </Center>
            {role === "Admin" ? (
              <VStack py={2} align="stretch">
                <NavText text="ADMIN" />
                <NavButton
                  href="/admin/dashboard"
                  icon={MdRestaurantMenu}
                  text="Dashboard"
                />
                <NavButton
                  href="/admin/restaurants"
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

            <OrderButton href="/orders" icon={ImCreditCard} text="Orders" />
            <NavButton
              href="/reservations"
              icon={RiParentLine}
              text="Reservations"
            />
            <VStack py={2} align="stretch">
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
            <VStack py={2} align="stretch">
              <NavText text="PROMOTIONS" />
              <NavButton
                href="/promotions/offers"
                icon={VscTag}
                text="Offers"
              />
              <NavButton
                href="/promotions/coupons"
                icon={AiOutlinePercentage}
                text="Coupons"
              />
            </VStack>
            <VStack py={2} align="stretch">
              <NavText text="MANAGEMENT" />
              <NavButton href="/cms" icon={CgWebsite} text="CMS" />
              <NavButton href="/users" icon={FiUsers} text="Users" />
              <NavButton href="/schedule" icon={MdSchedule} text="Schedule" />
              <NavButton
                href="/fulfilment"
                icon={RiEBike2Line}
                text="Fulfilment"
              />
              <NavButton href="/settings" icon={FiSettings} text="Settings" />
            </VStack>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default NavBar;
