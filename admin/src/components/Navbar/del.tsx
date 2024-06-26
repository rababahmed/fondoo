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
import Image from "next/image";
import * as LogoFull from "../../../public/tezzbites-full.png";
import RestaurantNav from "./RestaurantNav";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Center,
} from "@chakra-ui/react";

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
        bgColor="#F6F6F7"
        zIndex="1"
        h="100%"
        w={240}
        top="0"
        bottom="0"
        border="1px"
        borderColor="gray.200"
        shadow="xs"
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

        <Stack mt={16}>
          <VStack align="stretch" px={4} mr={1}>
            {role === "Admin" ? (
              <VStack py={4} align="stretch">
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
            {/* <NavButton href="/dashboard" icon={AiFillHome} text="Dashboard" />

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
            <VStack py={4} align="stretch">
              <NavText text="MANAGEMENT" />
              <NavButton href="/cms" icon={CgWebsite} text="CMS" />
              <NavButton href="/users" icon={FiUsers} text="Users" />
              <NavButton href="/schedule" icon={MdSchedule} text="Schedule" />
              <NavButton href="/settings" icon={FiSettings} text="Settings" />
            </VStack> */}

            <Box
              fontSize={16}
              fontWeight={"semibold"}
              flex="1"
              textAlign="left"
              px={2}
              py={2}
              borderRadius={2}
              color={currentPath === "/dashboard" ? "primary.800" : "black"}
              _hover={{ cursor: "pointer", bg: "#ECECEC" }}
            >
              <HStack>
                <ImCreditCard />
                <Box>Dashboard</Box>
              </HStack>
            </Box>

            <Accordion allowToggle>
              <AccordionItem border="none">
                <AccordionButton borderRadius={2} px={2}>
                  <Box
                    fontSize={16}
                    fontWeight={"semibold"}
                    flex="1"
                    textAlign="left"
                  >
                    <HStack>
                      <ImCreditCard />
                      <Box>Orders</Box>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <Box flex="1" textAlign="left" _hover={{ cursor: "pointer" }}>
                    Section 1 title
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>
        </Stack>
      </Box>
    </div>
  );
};

export default NavBar;
