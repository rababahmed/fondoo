import { IconButton } from "@chakra-ui/button";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Grid } from "@chakra-ui/layout";
import { Center, HStack } from "@chakra-ui/react";
import React from "react";
import { usePrefStore } from "../../store/usePrefStore";
import NavDrawer from "../Navbar/NavDrawer";
import RestaurantNav from "../Navbar/RestaurantNav";
import UserModal from "./UserModal";

const Header = () => {
  const toggleHamburger = usePrefStore((state) => state.toggleHamburger);

  const isOpen = usePrefStore((state) => state.hamburger);

  return (
    <Grid
      bgColor="white"
      pos="fixed"
      top="0"
      left="0"
      shadow="sm"
      w="100%"
      p={2}
      templateColumns="1fr 1fr"
      zIndex="1"
    >
      <Box display={{ base: "block", md: "none" }} ml={2}>
        <NavDrawer />
      </Box>
      <Box display={{ base: "none", md: "block" }}></Box>
      <Box justifySelf="end">
        <UserModal />
      </Box>
    </Grid>
  );
};

export default Header;
